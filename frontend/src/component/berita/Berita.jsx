import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Navbar from '../komponen_umum/Navbar';
import Footer from '../komponen_umum/Footer';
import Paper from '@mui/material/Paper';
import { BrowserRouter, Routes, Route,useParams, Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function ContentNews() {
    const { id } = useParams();
    const berita = data.find(({id}) => id === id);
    console.log(berita);
    return (
        <Paper
        >
        <img src={berita.gambar}/>
        <Box
            sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
            }}
        />
        <Grid container>
            <Grid item md={6}>
            <Box
                sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
                }}
            >
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {berita.judul}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                {berita.ringkasan}
                </Typography>
            </Box>
            </Grid>
        </Grid>
        </Paper>
    );
  }


const createData = (id, gambar, judul, ringkasan, slug) => ({
    id, gambar, judul, ringkasan, slug,
    isEditMode: false
  });

const data = ([
    createData(1, "https://cf.shopee.co.id/file/1740a66d75c848b38c85ade20a2505e2", "judul1","lorem", "contohslug1"),
    createData(2, "https://saintif.com/wp-content/uploads/2020/07/kartun2.jpg", "judul2","ipsun", "contohslug2"),
])

const theme = createTheme();

/* function List() {
    const alur = useLocation();
    console.log(alur);
    return(
        <div>
            <Routes>
                <Route path="" element={<ListBerita/>} />
                <Route path="/1" element={<ContentNews/>} />
            </Routes>
        </div>
    )
} */

export default function Berita() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar></Navbar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 4,
            pb: 1,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Berita KPGTS
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {data.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={card.gambar}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.judul}
                    </Typography>
                    <Typography>
                      {card.ringkasan}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"><Link href={`/berita/${card.id}`}>Baca lebih lanjut</Link></Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Routes>
            <Route path={`:id`} element={<ContentNews />} />
        </Routes>
      </main>
      {/* Footer */}
      <Footer></Footer>
      {/* End footer */}
    </ThemeProvider>
  );
}
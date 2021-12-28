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
import Navbar from '../komponen_umum/Navbar';
import Footer from '../komponen_umum/Footer';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';

// Tambahin data disini dims
const createData = (id, gambar, judul, ringkasan, penulis, slug) => ({
    id, gambar, judul, ringkasan, penulis, slug,
    isEditMode: false
  });

// Ini untuk contoh datanya
const data = ([
    createData(1, "https://cf.shopee.co.id/file/1740a66d75c848b38c85ade20a2505e2", "judul1","lorem",  "michael", "contohslug1"),
    createData(2, "https://saintif.com/wp-content/uploads/2020/07/kartun2.jpg", "judul2","Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?", "michael1", "contohslug2"),
])

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const theme = createTheme({
    typography: {
        fontFamily: 'Ramaraja',
        fontSize: 16
    },
    palette: {
        background: {
            default: "#F2EBCE"
        },
        primary: {
            main: "#A7B560"
        }
    },
});

export default function Berita() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar></Navbar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
          }}
        >
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {data.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#A7B560' }}
                >
                  <CardMedia
                    component="img"
                    image={card.gambar}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.judul}
                    </Typography>
                  </CardContent>
                  <ShowContent card={card}></ShowContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Footer></Footer>
      {/* End footer */}
    </ThemeProvider>
  );
}

function ShowContent (card) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const test = (e) => {
        console.log(e);
    }

    return(
        <ThemeProvider theme={theme}>
            <CardActions>
                <Button style={{color: "black"}}size="small" onClick={handleClickOpen}>Baca lebih lanjut {card.id}</Button>
            </CardActions>
                    <Dialog
                        fullScreen
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Transition}
                    >
                        <Toolbar style={{backgroundColor:"#94D3DA"}}>
                            <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                            >
                            <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Kembali
                            </Typography>
                        </Toolbar>
                        {/* Isi kontek berita */}
                        <Grid container spacing={2} style={{backgroundColor:"#F2EBCE"}}>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={6} md={4} style={{textAlign:'left'}}>
                            <Paper elevation={0} style={{textAlign:'center', backgroundColor:"#F2EBCE", marginTop:"3vw"}}>
                                <Typography variant="h6" gutterBottom>
                                {card.card.judul}
                                </Typography>
                                <Typography style={{marginBottom:"1vw"}}>Penulis: {card.card.penulis}</Typography>
                            </Paper>
                            <CardMedia
                                component="img"
                                image={card.card.gambar}
                                alt="random"
                            />
                            <Typography style={{marginTop:"3vw"}}>
                                {card.card.ringkasan}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}></Grid>
                        </Grid>
                    </Dialog>
                </ThemeProvider>
    )
}
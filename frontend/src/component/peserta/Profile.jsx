import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import {useEffect, useContext, useState} from "react";
import { AuthContext } from "../komponen_umum/AuthContext";
import Button from '@mui/material/Button';
import {Link, useNavigate} from 'react-router-dom';
import NavbarLoggedIn from '../komponen_umum/NavbarLoggedIn';

// Buat tema
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

// Buat gambar
const ImgDesk = styled('img')({
  margin: 'auto',
  display: 'block',
  width: "20vw",
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius: "20px",
});
const ImgMob = styled('img')({
  margin: 'auto',
  marginTop: '10px',
  display: 'block',
  width: "60vw",
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius: "20px",
});

// Buat button
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#554B3F'),
  fontFamily: 'Ramaraja',
  fontSize: "1.5vw",
  padding: "auto",
  backgroundColor: '#554B3F',
  margin: "auto",
  borderRadius: "15px",
  justifyContent: "center",
  textAlign: "center",
  padding: "auto",
  '&:hover': {
    backgroundColor: '#726454',
  },
}));
const ColorButtonMobile = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#554B3F'),
  fontFamily: 'Ramaraja',
  fontSize: "4vw",
  padding: "auto",
  backgroundColor: '#554B3F',
  margin: "auto",
  borderRadius: "15px",
  justifyContent: "center",
  textAlign: "center",
  padding: "auto",
  '&:hover': {
    backgroundColor: '#726454',
  },
}));
const ColorButton2 = styled(Button)(({ theme }) => ({
  color: "white",
  fontFamily: 'Ramaraja',
  fontSize: "1.5vw",
  padding: "auto",
  backgroundColor: 'green',
  margin: "auto",
  borderRadius: "15px",
  justifyContent: "center",
  textAlign: "center",
  padding: "auto",
  '&:hover': {
    backgroundColor: 'green',
  },
}));
const ColorButton3 = styled(Button)(({ theme }) => ({
  color: 'white',
  fontFamily: 'Ramaraja',
  fontSize: "1.5vw",
  padding: "auto",
  backgroundColor: 'red',
  margin: "auto",
  borderRadius: "15px",
  justifyContent: "center",
  textAlign: "center",
  padding: "auto",
  '&:hover': {
    backgroundColor: 'red',
  },
}));
const ColorButton2Mobile = styled(Button)(({ theme }) => ({
  color: "white",
  fontFamily: 'Ramaraja',
  fontSize: "4vw",
  padding: "auto",
  backgroundColor: 'green',
  margin: "auto",
  borderRadius: "15px",
  justifyContent: "center",
  textAlign: "center",
  padding: "auto",
  '&:hover': {
    backgroundColor: 'green',
  },
}));
const ColorButton3Mobile = styled(Button)(({ theme }) => ({
  color: 'white',
  fontFamily: 'Ramaraja',
  fontSize: "4vw",
  padding: "auto",
  backgroundColor: 'red',
  margin: "auto",
  borderRadius: "15px",
  justifyContent: "center",
  textAlign: "center",
  padding: "auto",
  '&:hover': {
    backgroundColor: 'red',
  },
}));

// Profile buat pc
const ProfileDesktop = () => {
  const Auth = useContext(AuthContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  useEffect(async () => {
      if (Auth.role!=="user"){
        navigate('/', {replace: true})
      }
  }, []);

  // Nanti buat api status verif disini ya dim
  const statusVerif = true

  const nama=Auth.name

  const renderStatus = () => {
    if (statusVerif == false) {
      return (
        <Grid container>
          <Grid item xs={3}>
            <Typography fontSize="2vw" >
              Status Registrasi
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography fontSize="2vw">
              : <ColorButton3 >Belum Terverifikasi</ColorButton3>
            </Typography>
          </Grid>
        </Grid>
      )
    } else if (statusVerif == true) {
      return(
        <Grid container>
          <Grid item xs={3}>
            <Typography fontSize="2vw" >
              Status Registrasi
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography fontSize="2vw">
              : <ColorButton2 >Berhasil Terverifikasi</ColorButton2>
            </Typography>
          </Grid>
        </Grid>
      )
    }
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavbarLoggedIn></NavbarLoggedIn>
        <CssBaseline />
        <Box
          sx={{
            width: "90vw",
            height: "35vw",
            backgroundColor: "#EBA871",
            margin: "auto",
            marginTop:"3vw",
            borderRadius: "20px",
            flexGrow: "1",
            padding: "1vw"
          }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant='h3' component="div" fontSize="3.5vw">
                    Profile
                  </Typography>
                  <Divider sx={{ borderBottomWidth: 1, background: 'black', mb: "15px"}} ></Divider>
                  <Grid container>
                    <Grid item xs={3}>
                      <Typography fontSize="2vw" >
                        Nama
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <Typography fontSize="2vw" >
                        : {nama}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    {/*<Grid item xs={3}>*/}
                    {/*  <Typography fontSize="2vw" >*/}
                    {/*    Email*/}
                    {/*  </Typography>*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={5}>*/}
                    {/*  <Typography fontSize="2vw" >*/}
                    {/*    : {email}*/}
                    {/*  </Typography>*/}
                    {/*</Grid>*/}
                  </Grid>
                  {renderStatus()}
                  <Link to="/lupa_password" style={{textDecoration: "none",}}>
                    <ColorButton size="medium" variant="contained" style={{ width:"15vw", marginTop:"10px" }}>Ganti Password</ColorButton>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  )
}

// *************************************
// ********** BUAT MOBILEE *************
// *************************************
const ProfileMobile = () => {
  const Auth = useContext(AuthContext)
  const navigate = useNavigate()
  // if (Auth.role!=="user"){
  //   navigate('/', {replace: true})
  // }
  const [email, setEmail] = useState("");
  useEffect(async () => {
      // Update the document title using the browser API
      let response = await fetch('/api/user/login',{
          method: 'GET',
          mode: 'same-origin',
          credentials: "same-origin",
          headers: {
              'Content-Type': 'application/json'
          }
      })
      response = await response.json()
      if(response.loggedIn===true) {
          Auth.addItem(response.name, response.role)
          setEmail(response.email)
      }
  }, []);

  // Nanti buat api status verif disini ya dim
  const statusVerif = true

  const renderStatus = () => {
    if (statusVerif == false) {
      return (
        <Grid container>
          <Grid item xs={4}>
            <Typography fontSize="6vw" >
              Status Registrasi
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography fontSize="6vw">
              : <ColorButton3Mobile>Belum Terverifikasi</ColorButton3Mobile>
            </Typography>
          </Grid>
        </Grid>
      )
    } else if (statusVerif == true) {
      return(
        <Grid container>
          <Grid item xs={4}>
            <Typography fontSize="6vw" >
              Status Registrasi
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography fontSize="6vw">
              : <ColorButton2Mobile >Berhasil Terverifikasi</ColorButton2Mobile>
            </Typography>
          </Grid>
        </Grid>
      )
    }
  }

  const nama=Auth.name

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavbarLoggedIn></NavbarLoggedIn>
        <CssBaseline />
        <Box
          sx={{
            width: "80vw",
            backgroundColor: "#EBA871",
            margin: "auto",
            marginTop:"4vw",
            borderRadius: "20px",
            flexGrow: "1",
            padding: "1vw"
          }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm container>
                  <Grid item xs>
                    <Grid container>
                      <Grid item xs={4}>
                        <Typography fontSize="6vw" >
                          Nama
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography fontSize="6vw" >
                          : {nama}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={4}>
                        <Typography fontSize="6vw" >
                          Email
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography fontSize="6vw" >
                          : {email}
                        </Typography>
                      </Grid>
                    </Grid>
                    {renderStatus()}
                    <Link to="/lupa_password" style={{textDecoration: "none",}}>
                      <ColorButtonMobile size="medium" variant="contained" style={{ width:"50vw", marginTop:"10px" }}>Ganti Password</ColorButtonMobile>
                    </Link>
                  </Grid>
              </Grid>
            </Grid>
        </Box>
      </ThemeProvider>
    </>
  )
}

const Profile = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isMobile ? (<ProfileMobile/>) : (<ProfileDesktop/>)}
    </>
  )
}

export default Profile
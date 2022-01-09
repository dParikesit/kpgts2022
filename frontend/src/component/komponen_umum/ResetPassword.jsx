import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useContext} from "react";
import {AuthContext} from "./AuthContext";
import {useNavigate, useParams} from 'react-router-dom'

// Cek data di line 48

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        KPGTS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

export default function ResetPassword() {
  const navigate = useNavigate()
  const Auth = useContext(AuthContext)
  let {token} = useParams()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let response = await fetch('/api/user/resetpassword/'+token, {
      method: 'PUT',
      mode: 'same-origin',
      credentials: "same-origin",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        newPass: data.get('newpassword'),
        confirmPass: data.get('conpassword')
      })
    });
    console.log(response.status);
    if(response.status===200){
      navigate('/')
    } else{
      alert("Error")
    }
  };

  return (
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="newpassword"
              label="New Password"
              type="password"
              id="newpassword"
              autoComplete="current-password"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="conpassword"
              label=" Confirm Password"
              type="password"
              id="conpassword"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset Password
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
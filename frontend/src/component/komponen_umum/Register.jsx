import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
  
/* export default function Form() {
  
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nomor, setNomor] = useState('');
  const [sekolah, setSekolah] = useState('');
  const [jurusan, setJurusan] = useState('');
  const [alamat, setAlamat] = useState('');
  const [password, setPassword] = useState('');
  
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handleNomor = (e) => {
    setNomor(e.target.value);
    setSubmitted(false);
  };

  const handleSekolah = (e) => {
    setSekolah(e.target.value);
    setSubmitted(false);
  };

  const handleJurusan = (e) => {
    setJurusan(e.target.value);
    setSubmitted(false);
  };

  const handleAlamat = (e) => {
    setAlamat(e.target.value);
    setSubmitted(false);
  };
  
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
  
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || alamat === '' || nomor === '' || sekolah == '' || jurusan == '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
  
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };
  
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Harap isi semua kolom registrasi</h1>
      </div>
    );
  };
  
  return (
    <div className="formulir">
      <div>
        <h1>Registrasi Akun</h1>
      </div>
  
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
  
      <form>
        <label className="label">Nama</label>
        <input onChange={handleName} className="input" 
          value={name} type="text" />
        <br></br>
        <br></br>
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input" 
          value={email} type="email" />
        <br></br>
        <label className="label">Nomor HP</label>
        <input onChange={handleNomor} className="input" 
          value={nomor} type="text" />
        <br></br>
        <label className="label">Alamat</label>
        <input onChange={handleAlamat} className="input" 
          value={alamat} type="text" />
        <br></br>
        <label className="label">Sekolah</label>
        <input onChange={handleSekolah} className="input" 
          value={sekolah} type="text" />
        <br></br>
        <label className="label">Jurusan</label>
        <input onChange={handleJurusan} className="input" 
          value={jurusan} type="jurusan" />
          <br></br>
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input" 
          value={password} type="password" />
          <br></br>
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
} */

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        KPGTS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      nama: data.get('nama'),
      jurusan: data.get('jurusan')
    });
  };

  return (
    <ThemeProvider theme={theme}>
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
            Form Pendaftaran
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="nama"
                  label="Nama Lengkap"
                  name="nama"
                  autoComplete="nama"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="nomor"
                  label="Nomor HP"
                  name="nomor"
                  autoComplete="nomor"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="alamat"
                  label="Alamat"
                  name="alamat"
                  autoComplete="alamat"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="sekolah"
                  label="Asal Sekolah"
                  name="sekolah"
                  autoComplete="sekolah"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Jurusan (ini untuk Try Out)</FormLabel>
                    <RadioGroup
                        aria-label="jurusan"
                        defaultValue="IPA"
                        name="jurusan"
                    >
                        <FormControlLabel value="ipa" control={<Radio />} label="IPA" />
                        <FormControlLabel value="ips" control={<Radio />} label="IPS" />
                    </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Daftar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Sudah punya akun? Yuk login sekarang
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
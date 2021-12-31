import Navbar from "../komponen_umum/Navbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import * as React from 'react';

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

// Tombol
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#554B3F'),
    fontFamily: 'Ramaraja',
    fontSize: "18px",
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

// Buat date picker
function Tanggal(){
    const [value, setValue] = React.useState(new Date());
    const [startDate, setStartDate] = useState(new Date("2022/01/22"));
    const [endDate, setEndDate] = useState(new Date("2022/01/25"));
    return(
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
            label="Pilih Tanggal Try Out"
            openTo="day"
            views={['year', 'month', 'day']}
            value={value}
            minDate={startDate}
            maxDate={endDate}
            onChange={(newValue) => {
                setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    )
}

// Buat pilihan berapa orang regist
const jumlah = [
    {
      value: '1',
      label: '1'
    },
    {
      value: '2',
      label: '2',
    },
    {
      value: '3',
      label: '3',
    },
    {
      value: '4',
      label: '4',
    },
    {
      value: '5',
      label: '5',
    },
  ];

  const jurusans = [
    {
      value: 'IPA',
      label: 'IPA'
    },
    {
      value: 'IPS',
      label: 'IPS',
    },
  ];

  const pembayarans = [
    {
      value: 'BCA',
      label: 'BCA'
    },
    {
      value: 'GOPAY',
      label: 'GOPAY',
    },
  ];

// Buat form data diri
const FormData = () => {
    const [jurusan, setJurusan] = useState('');
    const handleChange = (event) => {
        setJurusan(event.target.value);
    };
    return(
        <>
            <Typography component="h1" variant="h6" marginTop={5}>
                Data Diri Peserta
            </Typography>
            {/* Isi data diri */}
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
                id="asalSMA"
                label="Asal SMA"
                name="asalSMA"
                autoComplete="SMA N 0 Semarang"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                required
                fullWidth
                id="kontak"
                label="Nomor HP"
                name="kontak"
                type="number"
                autoComplete="08123456789"
                helperText="Masukkan angka"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                select
                required
                fullWidth
                id="jurusan"
                label="Jurusan Try Out"
                name="jurusan"
                value={jurusan}
                onChange={handleChange}
                >
                    {jurusans.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <Tanggal/>
            </Grid>
        </>
    )
}

// Fungsi render form
function RenderForm(numrows) {
    var rows = [];
    for (var i = 0; i < numrows; i++) {
        rows.push(<FormData key={i} />);
    }
    return <>{rows}</>;
}

//   Buat rendering peserta
const Peserta = () => {
    const [jumlahVal, setJumlahVal] = useState('1');
    const [pembayaran, setPembayaran] = useState('1');
    const handleChange = (event) => {
        setJumlahVal(event.target.value);
    };
    const handlePembayaran = (event) => {
        setPembayaran(event.target.value);
    };

    return(
        <ThemeProvider theme={theme}>
            <Navbar></Navbar>
            <CssBaseline />
            <Container component="main" maxWidth="xl" >
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: "column",
                }}>
                    <Typography component="h1" variant="h4">
                        Registrasi Tryout
                    </Typography>
                    {/* Pilih jumlah orang */}
                    <Box component="form" sx={{ mt: 3, width: "70vw" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} marginBottom={2}>
                                <TextField
                                    fullWidth
                                    id="outlined-select-jumlah"
                                    select
                                    label="Jumlah Peserta"
                                    value={jumlahVal}
                                    onChange={handleChange}
                                    helperText="Pilih jumlah peserta yang akan registrasi Try Out"                        
                                >
                                    {jumlah.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            {RenderForm(jumlahVal)}
                            <Typography component="h1" variant="h5" marginTop={5}>
                                Pembayaran
                            </Typography>
                            <Grid item xs={12}>
                                <TextField
                                select
                                required
                                fullWidth
                                id="pembayaran"
                                label="Cara Pembayaran"
                                name="pembayaran"
                                value={pembayaran}
                                onChange={handlePembayaran}
                                >
                                    {pembayarans.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <ColorButton size="medium" variant="contained" style={{ width:"8vw" }}>
                                    Submit
                                </ColorButton>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Peserta;
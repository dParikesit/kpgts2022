import NavbarLoggedIn from "../komponen_umum/NavbarLoggedIn";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import {useState, useCallback, useContext, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import * as React from 'react';
import NativeSelect from '@mui/material/NativeSelect';
import { FormControl } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import useMediaQuery from '@mui/material/useMediaQuery';
import {AuthContext} from "../komponen_umum/AuthContext";
import {useNavigate} from "react-router-dom";

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
    marginTop: "10px",
    marginBottom: "20px",
    borderRadius: "15px",
    justifyContent: "center",
    textAlign: "center",
    padding: "auto",
    '&:hover': {
      backgroundColor: '#726454',
    },
  }));

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

//   Buat data pembayaran
  const noRek = 
      {
          "BCA": "BCA: Aditya Prawira Nugroho, 0095499321",
          "GOPAY": "GOPAY: NAMA, NOMOR"
      }

//   Buat rendering peserta
const PesertaDisabled = () => {
    const Auth = useContext(AuthContext)
    const navigate = useNavigate()
    // useEffect(()=>{
    //   if (Auth.role!=="user"){
    //     navigate('/', {replace: true})
    //   }
    // })

    // variabel variabel
    const harga = 50000;
    // state form
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [jumlahVal, setJumlahVal] = useState('1');
    // buat loop state jurusan
    var stateJurusan = [];
    for (var i=0; i<jumlahVal; i++) {
        stateJurusan.push('Saintek')
    };
    // buat loop state sesi
    var stateSesi = [];
    for (var i=0; i<jumlahVal; i++) {
        stateJurusan.push('A')
    };
    // Buat foto
    const [fileLink, setFileLink] = useState('')
    const [pembayaran, setPembayaran] = useState('');
    const [valueDate, setValueDate] = React.useState([]);
    const [startDate, setStartDate] = useState(new Date("2022/01/22"));
    const [endDate, setEndDate] = useState(new Date("2022/01/25"));
    const [jurusan, setJurusan] = useState(stateJurusan);
    const [sesi, setSesi] = useState(stateSesi);
    const [fakjur, setFakjur] = useState([]);
    const [univ, setUniv] = useState([]);
    const [nama, setNama] = useState([]);
    const [namaPaguyuban, setNamaPaguyuban] = useState([]);
    const [asalSMA, setAsalSMA] = useState([]);
    const [asalKota, setAsalKota] = useState([]);
    const [asalProv, setAsalProv] = useState([]);
    const [kelas, setKelas] = useState([]);
    const [kontak, setKontak] = useState([]);
    const [surel, setSurel] = useState([]);
    const [jenisBank, setJenisBank] = useState('');
    const [namaDiRek, setNamaDiRek] = useState('');    
    
    const handleUploadFoto = async(event) => {
        setFileLink(event.target.value)
    };
    
    const handleJurusan = (event) => {
        const idx = event.target.getAttribute('name');
        let temp = jurusan;
        temp[idx] = event.target.value;
        setJurusan(temp);
    };
    const handleSesi = (event) => {
        const idx = event.target.getAttribute('name');
        let temp = sesi;
        temp[idx] = event.target.value;
        setSesi(temp);
    };
    const handleChange = (event) => {
        setJumlahVal(event.target.value);
    };
    const handlePembayaran = (event) => {
        setPembayaran(event.target.value);
    };
    const handleJenisBank = (event) => {
        setJenisBank(event.target.value);
    };
    const handleNamaDiRek = (event) => {
        setNamaDiRek(event.target.value);
    };
    const handleFakjur = (event) => {
        const idx = event.target.getAttribute('name')
        let temp = fakjur
        temp[idx] = event.target.value
        setFakjur(temp)
    };
    const handleUniv = (event) => {
        const idx = event.target.getAttribute('name')
        let temp = univ
        temp[idx] = event.target.value
        setUniv(temp)
    };
    const handleNama = (event) => {
        const idx = event.target.getAttribute('name')
        let temp = nama
        temp[idx] = event.target.value
        setNama(temp)
    };
    const handleNamaPaguyuban = (event) => {
        const idx = event.target.getAttribute('name')
        let temp = namaPaguyuban
        temp[idx] = event.target.value
        setNamaPaguyuban(temp)
    };
    const handleAsal = (event) => {
        const idx = event.target.getAttribute('name')
        let temp = asalSMA
        temp[idx] = event.target.value
        setAsalSMA(temp)
    };
    const handleAsalKota = (event) => {
        const idx = event.target.getAttribute('name')
        let temp = asalKota
        temp[idx] = event.target.value
        setAsalKota(temp)
    };
    const handleAsalProv = (event) => {
        const idx = event.target.getAttribute('name')
        let temp = asalProv
        temp[idx] = event.target.value
        setAsalProv(temp)
    };
    const handleKelas = (event) => {
        const idx = event.target.getAttribute('name')
        let temp = kelas
        temp[idx] = event.target.value
        setKelas(temp)
    };
    const handleKontak = (event) => {
        const idx = event.target.getAttribute('name')
        let temp = kontak
        temp[idx] = event.target.value
        setKontak(temp)
    };
    const handleSurel = (event) => {
        const idx = event.target.getAttribute('name')
        let temp = surel
        temp[idx] = event.target.value
        setSurel(temp)
    };

    //handler submit
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(nama, asalSMA, kontak, jurusan, valueDate, sesi, surel, kelas, fakjur, univ, pembayaran, jenisBank, namaDiRek);
    }

    // BUAT RENDER FORM
    const renderForm = () => {
        var rows = [];
        for (var i = 0; i < jumlahVal; i++) {
            rows.push(
                <>
                    <Typography component="h1" variant="h6" marginTop={5}>
                        Data Peserta {i+1}
                    </Typography>
                    {/* Isi data diri */}
                    <Grid item xs={12}>
                        <TextField
                        disabled
                        required
                        fullWidth
                        id={nama}
                        label="Nama Lengkap"
                        name={i}
                        autoComplete="nama"
                        value={nama[i]}
                        defaultValue={""}
                        onChange={handleNama}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        disabled
                        required
                        fullWidth
                        id="namaPaguyuban"
                        label="Nama Paguyuban"
                        name={i}
                        autoComplete="KPGTS"
                        helperText="Contoh: Karang Praga"
                        value={namaPaguyuban[i]}
                        defaultValue={""}
                        onChange={handleNamaPaguyuban}
                        />
                    </Grid>
                    <Grid item xs={12}>
                       <TextField
                        disabled
                        required
                        fullWidth
                        id="asalSMA"
                        label="Asal SMA"
                        name={i}
                        autoComplete="SMA N 0 Semarang"
                        value={asalSMA[i]}
                        onChange={handleAsal}
                        />
                    </Grid> 
                    <Grid item xs={12}>
                       <TextField
                        disabled
                        required
                        fullWidth
                        id="asalKota"
                        label="Asal Kota/Kab"
                        name={i}
                        autoComplete="Semarang"
                        value={asalKota[i]}
                        onChange={handleAsalKota}
                        />
                    </Grid> 
                    <Grid item xs={12}>
                       <TextField
                        disabled
                        required
                        fullWidth
                        id="asalProv"
                        label="Asal Provinsi"
                        name={i}
                        autoComplete="Jawa Tengah"
                        value={asalProv[i]}
                        onChange={handleAsalProv}
                        />
                    </Grid> 
                    <Grid item xs={12}>
                       <TextField
                        disabled
                        required
                        fullWidth
                        id="kelas"
                        label="Kelas"
                        name={i}
                        autoComplete="10"
                        helperText="Contoh: 10, 11, 12, alumni"
                        value={kelas[i]}
                        onChange={handleKelas}
                        />
                    </Grid> 
                    <Grid item xs={12}>
                        <TextField
                        disabled
                        required
                        fullWidth
                        id="surel"
                        label="Email"
                        name={i}
                        autoComplete="example@domain.com"
                        value={surel[i]}
                        onChange={handleSurel}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        disabled
                        required
                        fullWidth
                        id="kontak"
                        label="Nomor HP"
                        name={i}
                        type="number"
                        autoComplete="08123456789"
                        helperText="Masukkan angka"
                        value={kontak[i]}
                        onChange={handleKontak}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{marginTop:'10px'}}>
                        <FormControl
                        fullWidth
                        >
                            <InputLabel id="demo-simple-select-label">Rumpun TO</InputLabel>
                            <NativeSelect
                            disabled
                            onChange={handleJurusan}
                            name={i}
                            inputProps={{
                                id:"jurusan",
                                label:"Saintek/Soshum",
                            }}
                            >
                                <option value={'Saintek'}>Saintek</option>
                                <option value={'Soshum'}>Soshum</option>
                            </NativeSelect>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                            disabled
                            label="Pilih Tanggal Try Out"
                            openTo="day"
                            views={['year', 'month', 'day']}
                            value={new Date(valueDate[i])}
                            minDate={startDate}
                            maxDate={endDate}
                            onChange={(newValue) => {
                                setValueDate([...valueDate, newValue]);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sx={{marginTop:'10px'}}>
                        <FormControl
                        fullWidth
                        >
                            <InputLabel id="demo-simple-select-label">Sesi TO</InputLabel>
                            <NativeSelect
                            disabled
                            onChange={handleSesi}
                            name={i}
                            inputProps={{
                                id:"sesi",
                                label:"Sesi",
                            }}
                            >
                                <option value={'A'}>A</option>
                                <option value={'B'}>B</option>
                                <option value={'C'}>C</option>
                            </NativeSelect>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                       <TextField
                        disabled
                        required
                        fullWidth
                        id="FakJur"
                        label="Fakultas/Jurusan pilihan"
                        name={i}
                        autoComplete="STEI"
                        value={fakjur[i]}
                        onChange={handleFakjur}
                        />
                    </Grid> 
                    <Grid item xs={12}>
                       <TextField
                        disabled
                        required
                        fullWidth
                        id="univ"
                        label="Universitas pilihan"
                        name={i}
                        autoComplete="ITB"
                        value={univ[i]}
                        onChange={handleUniv}
                        />
                    </Grid> 
                </>);
                        }
        return rows.map((row) => row);
    }

    // Buat render detail pembayaran
    const renderDetail = () => {
        return (
            <>
                {isMobile ? (
                    <Grid item xs={12} marginTop={0} >
                        <Box sx={{ color:"black", fontSize: "6vw" }} >
                            {noRek[pembayaran]}
                        </Box>
                    </Grid>
                ) : (
                    <Grid item xs={12} >
                        <Box sx={{ color:"black", fontSize: "1.6vw" }} >
                            {noRek[pembayaran]}
                        </Box>
                    </Grid>
                )}
            </>
        );
    }

    return(
        <ThemeProvider theme={theme}>
            <NavbarLoggedIn></NavbarLoggedIn>
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
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: "70vw" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} marginBottom={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h6" marginBottom={3} color={'red'}>
                                        Hubungi admin apabila ada masalah.
                                    </Typography>
                                </Grid>
                                <TextField
                                    disabled
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
                            {/* Bagian form */}
                            {renderForm()}
                            {/* BAGIAN PEMBAYARAN */}
                            <Typography component="h1" variant="h5" marginTop={5}>
                                Pembayaran
                            </Typography>
                            <Grid item xs={12}>
                                <TextField
                                disabled
                                required
                                fullWidth
                                id="namaPemilikBank"
                                label="Nama di Rekening"
                                name="namaPemilikBankank"
                                autoComplete="Nama"
                                value={namaDiRek}
                                onChange={handleNamaDiRek}
                                />
                            </Grid> 
                            <Grid item xs={12}>
                                <TextField
                                disabled
                                required
                                fullWidth
                                id="jenisBank"
                                label="Jenis Bank"
                                name="jenisBank"
                                autoComplete="BCA"
                                value={jenisBank}
                                onChange={handleJenisBank}
                                />
                            </Grid> 
                           <Grid item xs={12}>
                                <TextField
                                disabled
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
                            {isMobile ? (
                                <Grid item xs={12} >
                                    <Box sx={{ color:"black", fontSize: "6vw" }} >
                                        Total: {harga*jumlahVal}
                                    </Box>
                                </Grid>
                            ) : (
                                <Grid item xs={12} >
                                    <Box sx={{ color:"black", fontSize: "1.6vw" }} >
                                        Total: {harga*jumlahVal}
                                    </Box>
                                </Grid>
                            )}
                            
                            {renderDetail()}
                            
                            <Typography component="h1" variant="h5" marginTop={2}>
                                Upload Bukti Pembayaran
                            </Typography>
                            {/* upload foto */}
                            <Grid item xs={12} marginBottom={'30px'}>
                                <TextField
                                disabled
                                required
                                fullWidth
                                id="linkBukti"
                                label="Link Foto Bukti Pembayaran"
                                name="linkBukti"
                                autoComplete="BCA"
                                helperText="Upload bukti ke drive atau yang lain, pastikan link dapat diakses"
                                value={fileLink}
                                onChange={handleUploadFoto}
                                />
                            </Grid> 
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default PesertaDisabled;
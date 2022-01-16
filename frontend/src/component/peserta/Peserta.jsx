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
    {
      value: 'BNI',
      label: 'BNI   ',
    },
    {
      value: 'OVO',
      label: 'OVO   ',
    },
    {
      value: 'DANA',
      label: 'DANA   ',
    },
  ];

//   Buat data pembayaran
  const noRek = 
      {
          "BCA": "BCA: Aditya Prawira Nugroho, 0095499321",
          "GOPAY": "GOPAY: Rofi Nuruddin atau Muhammad Zaki Bariqwan, 082136790980",
          "BNI": "BNI: Putri Ervina Puspa Azalia, 2808062002",
          "OVO": "OVO: Isna Nur Firdausi, 081330193560",
          "DANA": "DANA: Pramukti Probojati Yoga, 085540457643",
      }

//   Buat rendering peserta
const Peserta = () => {
    const Auth = useContext(AuthContext)
    const navigate = useNavigate()

    const [status, setStatus] = useState('open')
    useEffect(async()=>{
      // if (Auth.role!=="user"){
      //   navigate('/', {replace: true})
      // }
        let data = await fetch('/api/registration/registeredCheck', {
          method: 'GET',
          mode: 'same-origin',
          credentials: "same-origin",
          headers: {
              'Content-Type': 'application/json'
          },
        })
        if(data.status === 200){
          await navigate('/cekdata', {replace: true})
        }

        await console.log(data.status)
        data = await fetch('/api/registration/cekopen', {
            method: 'GET',
            mode: 'same-origin',
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json'
            },
        })

        if(data.status===403){
            await setStatus('close')
        }


    }, [])

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
        setValueDate([])
        setFakjur([])
        setUniv([])
        setNama([])
        setAsalSMA([])
        setAsalKota([])
        setAsalProv([])
        setKelas([])
        setKontak([])
        setSurel([])
        stateJurusan = []
        stateSesi = []
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
    const handleSubmit = async(event) => {
        event.preventDefault();
        let arr = []
        for(let i=0; i<jumlahVal; i++){
            arr.push({
                nama: nama[i],
                paguyuban: "Karang Praga",
                sekolah: asalSMA[i],
                kota: asalKota[i],
                provinsi: asalProv[i],
                kelas: kelas[i],
                email: surel[i],
                nohp: kontak[i],
                rumpun: stateJurusan[i] ? stateJurusan[i] : "Saintek",
                tanggal: String(valueDate[i].getDate()).padStart(2, '0') + "/" + String((valueDate[i].getMonth()+1)).padStart(2, '0') + "/" + valueDate[i].getFullYear(),
                sesi: stateSesi[i] ? stateSesi[i] : "A",
                fakultas: fakjur[i],
                univ: univ[i],
                namarek: namaDiRek,
                jenisrek: jenisBank,
                tujuanrek: pembayaran,
                fileURL: fileLink
            })
        }
        let response = await fetch('/api/registration/', {
            method: 'POST',
            mode: 'same-origin',
            credentials: "same-origin",
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(arr)
        })
        if(response.status===200){
            window.location.reload()
        } else{
            alert(response.json())
        }
    }

    if(status==='close'){
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
                            Maaf, registrasi sudah ditutup
                        </Typography>
                    </Box>
                </Container>
            </ThemeProvider>
        )
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
                                        Perhatian! Form ini hanya bisa diisi satu kali, pastikan data yang diisi sudah benar. Hubungi admin apabila ada masalah.
                                    </Typography>
                                </Grid>
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
                            {/* Bagian form */}
                            {renderForm()}
                            {/* BAGIAN PEMBAYARAN */}
                            <Typography component="h1" variant="h5" marginTop={5}>
                                Pembayaran
                            </Typography>
                            <Grid item xs={12}>
                                <TextField
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
                            <Grid item xs={12}>
                                <TextField
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
                           {/* SUBMIT BUTTON */}
                            <Grid item xs={12}>
                                <ColorButton type="submit" size="medium" variant="contained" style={{ width:"8vw" }}>
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
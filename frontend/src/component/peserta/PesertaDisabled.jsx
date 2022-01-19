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
import Chip from '@mui/material/Chip';

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

//   Buat rendering peserta
const PesertaDisabled = () => {
    const Auth = useContext(AuthContext)
    const navigate = useNavigate()

    const [tempData, setTempData] = useState([])
    const [jumlahVal, setJumlahVal] = useState('1');
    const [fileLink, setFileLink] = useState('')
    const [followLink, setFollowLink] = useState('');
    const [valueDate, setValueDate] = React.useState([]);
    const [startDate, setStartDate] = useState(new Date("2022/01/22"));
    const [endDate, setEndDate] = useState(new Date("2022/01/25"));
    const [jurusan, setJurusan] = useState([]);
    const [sesi, setSesi] = useState([]);
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
    const [pembayaran, setPembayaran] = useState('')

    useEffect(async()=>{
      // if (Auth.role!=="user"){
      //   navigate('/', {replace: true})
      // }

      let data = await fetch('/api/registration/registered', {
        method: 'GET',
        mode: 'same-origin',
        credentials: "same-origin",
        headers: {
          'Content-Type': 'application/json'
        },
      })
      if(data.status === 200){
        data = await data.json()
        await console.log(data)
        await setJumlahVal(data.length)
        // await setTempData(data)
        await data.forEach(item =>{
          setNama(added => [...added, item.nama])
          setAsalSMA(added => [...added, item.sekolah])
          setAsalKota(added => [...added, item.kota])
          setAsalProv(added => [...added, item.provinsi])
          setKelas(added => [...added, item.kelas])
          setSurel(added => [...added, item.email])
          setKontak(added => [...added, item.nohp])
          setJurusan(added => [...added, item.rumpun])
          setFakjur(added => [...added, item.fakultas])
          setUniv(added => [...added, item.univ])
          setSesi(added => [...added, item.sesi])
          let dateParts = item.tanggal.split("/")
          setValueDate(added => [...added, new Date(dateParts[2], dateParts[1], dateParts[0])])
        })
        await setNamaDiRek(data[0].namarek)
        await setJenisBank(data[0].jenisrek)
        await setPembayaran(data[0].tujuanrek)
        await setFileLink(data[0].fileURL)
        await setFollowLink(data[0].follow)
      }
    }, [])

    // tempData.forEach(item =>{
    //   setNama(nama.concat(item.nama))
    //   setAsalSMA([...asalSMA, item.sekolah])
    //   setAsalKota([...asalKota, item.kota])
    //   setAsalProv([...asalProv, item.provinsi])
    //   setKelas([...kelas, item.kelas])
    //   setSurel([...surel, item.email])
    //   setKontak([...kontak, item.nohp])
    //   setJurusan([...jurusan, item.rumpun])
    //   setFakjur([...fakjur, item.fakultas])
    //   setUniv([...univ, item.univ])
    //   setSesi([...sesi, item.sesi])
    //   setValueDate([...valueDate, new Date(item.tanggal)])
    //
    //
    // })
    // setNamaDiRek(tempData[0].namarek)
    // setJenisBank(tempData[0].jenisrek)
    // setPembayaran(tempData[0].tujuanrek)
    // setFileLink(tempData[0].fileURL)

    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
                        fullWidth
                        id={nama}
                        label="Nama Lengkap"
                        name={i}
                        autoComplete="nama"
                        value={nama[i] || ""}
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
                        value={asalSMA[i] || ""}
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
                        value={asalKota[i] || ""}
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
                        value={asalProv[i] || ""}
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
                        value={kelas[i] || ""}
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
                        value={surel[i] || ""}
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
                        value={kontak[i] || ""}
                        />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        disabled
                        required
                        fullWidth
                        id="jurusan"
                        label="Rumpun TO"
                        name={i}
                        value={jurusan[i] || ""}
                      />
                    </Grid>
                    <Grid item xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                            disabled
                            label="Pilih Tanggal Try Out"
                            openTo="day"
                            views={['day', 'month', 'year']}
                            value={valueDate[i] || new Date()}
                            minDate={startDate}
                            maxDate={endDate}
                            onChange={(newValue) => {
                                setValueDate([...valueDate, newValue]);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                          disabled
                          fullWidth
                          id="sesi"
                          label="Sesi TO"
                          name={i}
                          value={sesi[i] || ""}
                        />
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
                        value={fakjur[i] || ""}
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
                        value={univ[i] || ""}
                        />
                    </Grid> 
                </>);
                        }
        return rows.map((row) => row);
    }

    return (
      <ThemeProvider theme={theme}>
        <NavbarLoggedIn></NavbarLoggedIn>
        <CssBaseline />
        <Container component="main" maxWidth="xl">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography component="h1" variant="h4">
              Registrasi Tryout
            </Typography>
            {/* Pilih jumlah orang */}
            <Box component="form" sx={{ mt: 3, width: "70vw" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} marginBottom={2}>
                  <Grid item xs={12}>
                    <Typography variant="h6" marginBottom={3} color={"red"}>
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
                    value={namaDiRek || ""}
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
                    value={jenisBank || ""}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    disabled
                    fullWidth
                    id="pembayaran"
                    label="Cara Pembayaran"
                    name="pembayaran"
                    value={pembayaran || ""}
                  ></TextField>
                </Grid>

                <Typography component="h1" variant="h5" marginTop={2}>
                  Bukti Follow
                </Typography>
                {/* upload foto */}
                <Grid item xs={12} marginBottom={"30px"}>
                  <Chip
                    label="Bukti Follow"
                    component="a"
                    href={followLink || ""}
                    clickable
                  />
                </Grid>
                <Typography component="h1" variant="h5" marginTop={2}>
                  Bukti Pembayaran
                </Typography>
                {/* upload foto */}
                <Grid item xs={12} marginBottom={"30px"}>
                  <Chip
                    label="Bukti Pembayaran"
                    component="a"
                    href={fileLink || ""}
                    clickable
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
}

export default PesertaDisabled;
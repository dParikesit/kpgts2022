import NavbarAuth from "../komponen_umum/NavbarAuth";
import {useEffect, useContext} from "react";
import { AuthContext } from "../komponen_umum/AuthContext";
import Grid from '@mui/material/Grid';
import TimelineKegiatan from "./Timeline";
import Footer from '../komponen_umum/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Homepage.css';

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

const Homepage = () => {
    return(
        <ThemeProvider theme={theme}>
            <NavbarAuth></NavbarAuth>
            <div className="jumbotron">
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <img className="gambarutama" src="/assets/tuguyoung.png" height="500rem" style={{marginTop:'6.5vw', marginLeft:'2vw', marginBottom:'5vw'}} ></img>
                </Grid>
                <Grid item xs={9}>
            <div className="test" style={{marginTop: '10vw', marginRight:'10vw'}}>
                <div className="judul">
                    <h1>KPGTS 2022</h1>
                </div>
                <div className="content">
                    Selamat datang di KPGTS 2022. KPGTS adalah Acara tahunan yang diselenggarakan oleh mahasiswa ITB berdomisili Semarang untuk menyebarkan informasi mengenai perguruan tinggi dan ITB. Dimulai dari rangkaian acara roadshow ke SMA yang ada di wilayah Semarang , dan puncak acaranya berupa try out akbar bernama TONAMPTN 2022
                </div>
            </div>
{/*             <div class="button">
                <button>Register</button>
                <button>Timeline</button>
            </div> */}
                </Grid>
            </Grid>
            </div>
            <TimelineKegiatan></TimelineKegiatan>
            <Footer></Footer>
        </ThemeProvider>
    )
}

export default Homepage;
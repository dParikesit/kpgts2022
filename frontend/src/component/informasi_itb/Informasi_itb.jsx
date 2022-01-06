import Footer from "../komponen_umum/Footer";
import NavbarAuth from "../komponen_umum/NavbarAuth";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import Slider from "react-slick";
import Image from 'mui-image';

const theme1 = createTheme({
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

const theme2 = createTheme({
  typography: {
      fontFamily: 'Quicksand',
      fontSize: 16
  },
});

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Item = styled(Paper)(({ theme1 }) => ({
  ...theme1.typography.body2,
  padding: theme1.spacing(1),
  textAlign: 'center',
  color: theme1.palette.text.secondary,
}));

const commonStyles1 = {
  bgcolor: '#EBA871',
  borderColor: 'text.primary',
  m: 1,
  border: 0,
  width: '0.9',
  height: '1',
};
 
const commonStyles2 = {
    bgcolor: '#FFFFFF',
    borderColor: 'text.primary',
    m: 1,
    border: 0,
    width: '0.4',
    height: '0.4',
  };

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "black" }}
      onClick={onClick}
    />
  );
}
  
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "black" }}
      onClick={onClick}
    />
  );
}
  

const InformasiItb = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const settings = {
      dots: true,    
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      size: 'large',
      nextArrow: <NextArrow/>,
      prevArrow: <PrevArrow/>
    };

        return(
            <div>
                <ThemeProvider theme={theme1}>
                    <NavbarAuth></NavbarAuth>
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} style={{textTransform:'none'}} onChange={handleChange} centered>
                                        <Tab label="Informasi ITB" {...a11yProps(0)} />
                                        <Tab label="Info KP" {...a11yProps(1)} />
                                        <Tab label="Info KPGTS" {...a11yProps(2)} />
                                    </Tabs>
                                </Box>
                                <TabPanel value={value} index={0}>
                                    <Typography align="center" color="#554B3F">Informasi ITB</Typography>
                                      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Box sx={{ ...commonStyles1, borderRadius: '16px' }}>                                                                                                                                                 
                                          <div>                                        
                                            <Slider {...settings}>
                                              <div>
                                                <Typography align="center" color="#554B3F">FITB</Typography>
                                                <ThemeProvider theme={theme2}>
                                                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                      <Box sx={{ ...commonStyles2, borderRadius: 0 }}>
                                                          <Image src="https://saintif.com/wp-content/uploads/2020/07/kartun2.jpg"/>
                                                      </Box>
                                                  </Box>
                                                  <Box m={2} px={3}>
                                                    <Typography align="justify" color="#554B3F">Buat kamu yang suka berpetualang, fakultas ini cocok banget buat kamu! Di sini kamu bakal meneliti permukaan bumi bahkan sampai pergi ke tengah laut buat meneliti gelombang dan arus laut. Jadi buat yang mau kuliah di sini, gak cuma harus pinter doang, tapi fisik juga musti kuat karena dituntut buat sering ke lapangan.</Typography>
                                                    <Typography my={2} align="justify" color="#554B3F">Terus, jurusan yang ada di fakultas ini apa aja sih?</Typography>
                                                    <Typography my={2} align="justify" color="#554B3F">Pertama ada Jurusan Meteorologi yang mempelajari tentang bumi dan gejala-gejalanya seperti puting beliung, angin topan, dan sebagainya.  Tidak hanya itu, mereka juga mempelajari tentang cara yang dapat dilakukan oleh manusia untuk menanggulangi dan meminimalisir dampak dari bencana alam tersebut.</Typography>
                                                    <Typography my={2} align="justify" color="#554B3F">Jurusan kedua atau Jurusan Oseanografi, akan membekali kalian dengan konsep-konsep dasar ilmu kelautan yang meliputi aspek fisika, kimia, biologi dan geologi serta dilengkapi dengan dasar-dasar dinamika laut serta survei dan pemetaan laut.</Typography>
                                                    <Typography my={2} align="justify" color="#554B3F">Selanjutnya, di jurusan Teknik  Geodesi dan Geomatika akan mempelajari tentang  ilmu bumi yang terkait dengan lingkungan fisik bumi, pengukuran, analisis, pengelolaan, penyimpanan, serta penyajian deskriptif data berbasis muka bumi.</Typography>
                                                    <Typography my={2} align="justify" color="#554B3F">Yang terakhir, ada program studi Teknik Geologi yang akan menjadi tempat teman-teman mempelajari segala sesuatu yang berhubungan dengan bumi sebagai objek,  dengan ruang lingkup yang luas, misalnya batuan dan mineral, minyak dan gas bumi, gunung api dan panas bumi, atau struktur bumi dan gempa bumi.</Typography>
                                                    <Typography my={2} align="justify" color="#554B3F">Lulusan dari fakultas ini nantinya punya peluang yang besar untuk bekerja di industri pertambangan, peneliti di LIPI dan RISTEK, bahkan instansi pemerintahan seperti BMKG lho! Keren banget gak sih??</Typography>
                                                  </Box>
                                                </ThemeProvider>
                                              </div>
                                              <div>
                                                <Typography align="center" color="#554B3F">FMIPA</Typography>
                                                <ThemeProvider theme={theme2}>
                                                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                      <Box sx={{ ...commonStyles2, borderRadius: 0 }}>
                                                          <Image src="https://saintif.com/wp-content/uploads/2020/07/kartun2.jpg"/>
                                                      </Box>
                                                  </Box>
                                                  <Box m={2} px={3}>
                                                    <Typography align="justify" color="#554B3F">Buat kamu yang tertarik untuk mendalami matematika dan ilmu alam lainnya, fakultas ini bakal jadi tempat yang cocok buat kamu! Soalnya, di fakultas ini kamu bakal mengupas ilmu Matematika, Fisika, Kimia, Aktuaria, dan Astronomi sampai tuntas.</Typography>
                                                    <Typography my={2} align="justify" color="#554B3F">Tapi, sebelum kamu berkutat dengan rumus dan teori kamu harus tahu jurusan apa saja yang dinaungi oleh fakultas ini. Yuk simak lebih lanjut!</Typography>
                                                    <Typography my={2} align="justify" color="#554B3F">Jurusan yang pertama adalah Jurusan Astronomi. Jurusan ini mempelajari ilmu yang berhubungan dengan benda-benda langit. Jurusan ini nantinya akan menerapkan ilmu matematika dan fisika untuk membuat model peristiwa yang ada di luar angkasa. Hal yang paling menarik dari jurusan ini adalah keseruan proses perkuliahan yang akan menggunakan Observatorium Bosscha sebagai laboratorium jurusannya.</Typography>
                                                    <Typography my={2} align="justify" color="#554B3F">Kedua adalah Jurusan Fisika. Di sini kalian akan mempelajari berbagai hal ditinjau dari aspek fisisnya. Sebagai contoh, ketika kita mempelajari tentang gelombang, kita juga akan mempelajari sifat gelombang, perilaku gelombang, dan contoh dalam peristiwa sehari-hari. Fisika gak melulu tentang rumus yang susah dipahami papan tulis dan coretan-coretan dalam buku catatan karena di jurusan ini juga ada kerja lapangan.</Typography>
                                                    <Typography my={2} align="justify" color="#554B3F">Ketiga ada Jurusan Kimia, yaitu tempat di mana teman-teman akan belajar tentang molekul mulai dari komposisi, struktur dan susunannya yang memberikan sifat tertentu yang nantinya berguna untuk manusia. Jadi, singkatnya ilmu kimia mengkaji perilaku dan interaksi materi pada tingkat molekul.</Typography>
                                                    <Typography my={2} align="justify" color="#554B3F">Jurusan keempat adalah Jurusan Matematika yang akan menitikberatkan pada pemahaman tentang bagaimana caranya seseorang dapat menyederhanakan permasalahan yang ada di alam sekitarnya menjadi sebuah model matematika sehingga mempermudah untuk menemukan solusi dari permasalahan tersebut.</Typography>
                                                    <Typography my={2} align="justify" color="#554B3F">Jurusan yang terakhir adalah Aktuaria. Jurusan ini baru didirikan pada tahun 2019 untuk memenuhi kebutuhan nasional dan regional. Di Aktuaria kamu akan belajar mata kuliah seperti komputasi matematika, makroekonomi, akuntansi, peluang, statistika, matematika asuransi jiwa, dan masih banyak lagi.</Typography>
                                                    <Typography my={2} align="justify" color="#554B3F">Lulusan dari fakultas ini bisa bekerja sebagai tenaga ahli analisis data statistik, ahli dalam bidang produksi software atau jaringan komputer, field engineer, peneliti, dosen, ahli astronomi, ahli racik kosmetik, dan sebagainya.</Typography>
                                                  </Box>
                                                </ThemeProvider>
                                              </div>
                                              <div>
                                                <Typography align="center" color="#554B3F">FTI</Typography>
                                                <ThemeProvider theme={theme2}>
                                                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                      <Box sx={{ ...commonStyles2, borderRadius: 0 }}>
                                                          <Image src="https://saintif.com/wp-content/uploads/2020/07/kartun2.jpg"/>
                                                      </Box>
                                                  </Box>
                                                  <Box m={2} px={3}>
                                                    <Typography align="center" color="#554B3F">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nemo ipsam corporis molestiae, repellat optio aliquam ea non alias esse cumque adipisci eveniet. Excepturi, quos vero quaerat voluptates ipsa magnam.</Typography>
                                                  </Box>
                                                </ThemeProvider>
                                              </div>
                                              <div>
                                                <Typography align="center" color="#554B3F">FTMD</Typography>
                                                <ThemeProvider theme={theme2}>
                                                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                      <Box sx={{ ...commonStyles2, borderRadius: 0 }}>
                                                          <Image src="https://saintif.com/wp-content/uploads/2020/07/kartun2.jpg"/>
                                                      </Box>
                                                  </Box>
                                                  <Box m={2} px={3}>
                                                    <Typography align="center" color="#554B3F">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nemo ipsam corporis molestiae, repellat optio aliquam ea non alias esse cumque adipisci eveniet. Excepturi, quos vero quaerat voluptates ipsa magnam.</Typography>
                                                  </Box>
                                                </ThemeProvider>
                                              </div>
                                              <div>
                                                <Typography align="center" color="#554B3F">FTTM</Typography>
                                                <ThemeProvider theme={theme2}>
                                                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                      <Box sx={{ ...commonStyles2, borderRadius: 0 }}>
                                                          <Image src="https://saintif.com/wp-content/uploads/2020/07/kartun2.jpg"/>
                                                      </Box>
                                                  </Box>
                                                  <Box m={2} px={3}>
                                                    <Typography align="center" color="#554B3F">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nemo ipsam corporis molestiae, repellat optio aliquam ea non alias esse cumque adipisci eveniet. Excepturi, quos vero quaerat voluptates ipsa magnam.</Typography>
                                                  </Box>
                                                </ThemeProvider>
                                              </div>
                                              <div>
                                                <Typography align="center" color="#554B3F">FTSL</Typography>
                                                <ThemeProvider theme={theme2}>
                                                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                      <Box sx={{ ...commonStyles2, borderRadius: 0 }}>
                                                          <Image src="https://saintif.com/wp-content/uploads/2020/07/kartun2.jpg"/>
                                                      </Box>
                                                  </Box>
                                                  <Box m={2} px={3}>
                                                    <Typography align="center" color="#554B3F">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nemo ipsam corporis molestiae, repellat optio aliquam ea non alias esse cumque adipisci eveniet. Excepturi, quos vero quaerat voluptates ipsa magnam.</Typography>
                                                  </Box>
                                                </ThemeProvider>
                                              </div>
                                              <div>
                                                <Typography align="center" color="#554B3F">SAPPK</Typography>
                                                <ThemeProvider theme={theme2}>
                                                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                      <Box sx={{ ...commonStyles2, borderRadius: 0 }}>
                                                          <Image src="https://saintif.com/wp-content/uploads/2020/07/kartun2.jpg"/>
                                                      </Box>
                                                  </Box>
                                                  <Box m={2} px={3}>
                                                    <Typography align="center" color="#554B3F">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nemo ipsam corporis molestiae, repellat optio aliquam ea non alias esse cumque adipisci eveniet. Excepturi, quos vero quaerat voluptates ipsa magnam.</Typography>
                                                  </Box>
                                                </ThemeProvider>
                                              </div>
                                              <div>
                                                <Typography align="center" color="#554B3F">SF</Typography>
                                                <ThemeProvider theme={theme2}>
                                                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                      <Box sx={{ ...commonStyles2, borderRadius: 0 }}>
                                                          <Image src="https://saintif.com/wp-content/uploads/2020/07/kartun2.jpg"/>
                                                      </Box>
                                                  </Box>
                                                  <Box m={2} px={3}>
                                                    <Typography align="center" color="#554B3F">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nemo ipsam corporis molestiae, repellat optio aliquam ea non alias esse cumque adipisci eveniet. Excepturi, quos vero quaerat voluptates ipsa magnam.</Typography>
                                                  </Box>
                                                </ThemeProvider>
                                              </div>
                                              <div>
                                                <Typography align="center" color="#554B3F">SITH</Typography>
                                                <ThemeProvider theme={theme2}>
                                                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                      <Box sx={{ ...commonStyles2, borderRadius: 0 }}>
                                                          <Image src="https://saintif.com/wp-content/uploads/2020/07/kartun2.jpg"/>
                                                      </Box>
                                                  </Box>
                                                  <Box m={2} px={3}>
                                                    <Typography align="center" color="#554B3F">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nemo ipsam corporis molestiae, repellat optio aliquam ea non alias esse cumque adipisci eveniet. Excepturi, quos vero quaerat voluptates ipsa magnam.</Typography>
                                                  </Box>
                                                </ThemeProvider>
                                              </div>
                                              <div>
                                                <Typography align="center" color="#554B3F">STEI</Typography>
                                                <ThemeProvider theme={theme2}>
                                                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                      <Box sx={{ ...commonStyles2, borderRadius: 0 }}>
                                                          <Image src="https://saintif.com/wp-content/uploads/2020/07/kartun2.jpg"/>
                                                      </Box>
                                                  </Box>
                                                  <Box m={2} px={3}>
                                                    <Typography align="center" color="#554B3F">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nemo ipsam corporis molestiae, repellat optio aliquam ea non alias esse cumque adipisci eveniet. Excepturi, quos vero quaerat voluptates ipsa magnam.</Typography>
                                                  </Box>
                                                </ThemeProvider>
                                              </div>
                                              <div>
                                                <Typography align="center" color="#554B3F">FSRD</Typography>
                                                <ThemeProvider theme={theme2}>
                                                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                      <Box sx={{ ...commonStyles2, borderRadius: 0 }}>
                                                          <Image src="https://saintif.com/wp-content/uploads/2020/07/kartun2.jpg"/>
                                                      </Box>
                                                  </Box>
                                                  <Box m={2} px={3}>
                                                    <Typography align="center" color="#554B3F">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nemo ipsam corporis molestiae, repellat optio aliquam ea non alias esse cumque adipisci eveniet. Excepturi, quos vero quaerat voluptates ipsa magnam.</Typography>
                                                  </Box>
                                                </ThemeProvider>
                                              </div>
                                              <div>
                                                <Typography align="center" color="#554B3F">SBM</Typography>
                                                <ThemeProvider theme={theme2}>
                                                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                      <Box sx={{ ...commonStyles2, borderRadius: 0 }}>
                                                          <Image src="https://saintif.com/wp-content/uploads/2020/07/kartun2.jpg"/>
                                                      </Box>
                                                  </Box>
                                                  <Box m={2} px={3}>
                                                    <Typography align="center" color="#554B3F">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nemo ipsam corporis molestiae, repellat optio aliquam ea non alias esse cumque adipisci eveniet. Excepturi, quos vero quaerat voluptates ipsa magnam.</Typography>
                                                  </Box>
                                                </ThemeProvider>
                                              </div>
                                            </Slider>
                                          </div>  
                                        </Box> 
                                      </Box>                                
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <Typography align="center" color="#554B3F">Info KP</Typography>
                                      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Box sx={{ ...commonStyles1, borderRadius: '16px' }}>
                                          <div>
                                            <ThemeProvider theme={theme2}>                                        
                                            <Box m={2} px={3}>
                                              <Typography align="center" color="#554B3F">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nemo ipsam corporis molestiae, repellat optio aliquam ea non alias esse cumque adipisci eveniet. Excepturi, quos vero quaerat voluptates ipsa magnam.</Typography>
                                            </Box>
                                            </ThemeProvider>
                                          </div>
                                        </Box>
                                      </Box>
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                  <Typography align="center" color="#554B3F">Info KPGTS</Typography>  
                                      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                          <Box sx={{ ...commonStyles1, borderRadius: '16px' }}>
                                            <div>
                                              <ThemeProvider theme={theme2}>                                        
                                              <Box m={2} px={3}>
                                                <Typography align="center" color="#554B3F">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nemo ipsam corporis molestiae, repellat optio aliquam ea non alias esse cumque adipisci eveniet. Excepturi, quos vero quaerat voluptates ipsa magnam.</Typography>
                                              </Box>
                                              </ThemeProvider>
                                            </div>
                                          </Box>
                                      </Box>                                 
                                </TabPanel>
                            </Box>
                    <Footer></Footer>
                </ThemeProvider>
            </div>
        )
}

export default InformasiItb;
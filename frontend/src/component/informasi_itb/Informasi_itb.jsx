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
                                                    <Typography my="2vh" align="justify" color="#554B3F">Terus, jurusan yang ada di fakultas ini apa aja sih?</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Pertama ada Jurusan Meteorologi yang mempelajari tentang bumi dan gejala-gejalanya seperti puting beliung, angin topan, dan sebagainya.  Tidak hanya itu, mereka juga mempelajari tentang cara yang dapat dilakukan oleh manusia untuk menanggulangi dan meminimalisir dampak dari bencana alam tersebut.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Jurusan kedua atau Jurusan Oseanografi, akan membekali kalian dengan konsep-konsep dasar ilmu kelautan yang meliputi aspek fisika, kimia, biologi dan geologi serta dilengkapi dengan dasar-dasar dinamika laut serta survei dan pemetaan laut.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Selanjutnya, di jurusan Teknik  Geodesi dan Geomatika akan mempelajari tentang  ilmu bumi yang terkait dengan lingkungan fisik bumi, pengukuran, analisis, pengelolaan, penyimpanan, serta penyajian deskriptif data berbasis muka bumi.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Yang terakhir, ada program studi Teknik Geologi yang akan menjadi tempat teman-teman mempelajari segala sesuatu yang berhubungan dengan bumi sebagai objek,  dengan ruang lingkup yang luas, misalnya batuan dan mineral, minyak dan gas bumi, gunung api dan panas bumi, atau struktur bumi dan gempa bumi.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Lulusan dari fakultas ini nantinya punya peluang yang besar untuk bekerja di industri pertambangan, peneliti di LIPI dan RISTEK, bahkan instansi pemerintahan seperti BMKG lho! Keren banget gak sih??</Typography>
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
                                                    <Typography my="2vh" align="justify" color="#554B3F">Tapi, sebelum kamu berkutat dengan rumus dan teori kamu harus tahu jurusan apa saja yang dinaungi oleh fakultas ini. Yuk simak lebih lanjut!</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Jurusan yang pertama adalah Jurusan Astronomi. Jurusan ini mempelajari ilmu yang berhubungan dengan benda-benda langit. Jurusan ini nantinya akan menerapkan ilmu matematika dan fisika untuk membuat model peristiwa yang ada di luar angkasa. Hal yang paling menarik dari jurusan ini adalah keseruan proses perkuliahan yang akan menggunakan Observatorium Bosscha sebagai laboratorium jurusannya.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Kedua adalah Jurusan Fisika. Di sini kalian akan mempelajari berbagai hal ditinjau dari aspek fisisnya. Sebagai contoh, ketika kita mempelajari tentang gelombang, kita juga akan mempelajari sifat gelombang, perilaku gelombang, dan contoh dalam peristiwa sehari-hari. Fisika gak melulu tentang rumus yang susah dipahami papan tulis dan coretan-coretan dalam buku catatan karena di jurusan ini juga ada kerja lapangan.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Ketiga ada Jurusan Kimia, yaitu tempat di mana teman-teman akan belajar tentang molekul mulai dari komposisi, struktur dan susunannya yang memberikan sifat tertentu yang nantinya berguna untuk manusia. Jadi, singkatnya ilmu kimia mengkaji perilaku dan interaksi materi pada tingkat molekul.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Jurusan keempat adalah Jurusan Matematika yang akan menitikberatkan pada pemahaman tentang bagaimana caranya seseorang dapat menyederhanakan permasalahan yang ada di alam sekitarnya menjadi sebuah model matematika sehingga mempermudah untuk menemukan solusi dari permasalahan tersebut.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Jurusan yang terakhir adalah Aktuaria. Jurusan ini baru didirikan pada tahun 2019 untuk memenuhi kebutuhan nasional dan regional. Di Aktuaria kamu akan belajar mata kuliah seperti komputasi matematika, makroekonomi, akuntansi, peluang, statistika, matematika asuransi jiwa, dan masih banyak lagi.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Lulusan dari fakultas ini bisa bekerja sebagai tenaga ahli analisis data statistik, ahli dalam bidang produksi 
                                                      <Typography mx="1vw" align="justify" color="#554B3F" style={{ fontStyle:'italic', display:'inline-block' }}>software</Typography>
                                                      atau jaringan komputer, 
                                                      <Typography ml="1vw" align="justify" color="#554B3F" style={{ fontStyle:'italic', display:'inline-block' }}>field engineer</Typography>
                                                      , peneliti, dosen, ahli astronomi, ahli racik kosmetik, dan sebagainya.
                                                    </Typography>
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
                                                    <Typography align="justify" color="#554B3F">FTI? Fakultas Tempat Imba? Atau Fakultas Tempat IPK 4? Bukan!! FTI merupakan singkatan dari Fakultas Teknologi Industri. Fakultas ini sudah berdiri sejak tahun 1973 dan sekarang telah menaungi enam jurusan yang ada di ITB. Wah, banyak banget ya? Kira-kira jurusan apa aja sih itu?</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Jurusan yang pertama adalah Teknik Kimia. Jurusan ini bakal bicara soal teknologi perancangan pabrik dan seputar rekayasa zat-zat kimia. Penerapan dari ilmu ini tuh luas banget mulai dari dunia pangan, alat rumah tangga (sabun, shampo) sampai dunia migas juga. Apalagi dengan perkembangan industri, cakupan bidang jurusan ini tentu jadi makin luas! Oh iya, jurusan ini termasuk salah satu jurusan favorit dan bergengsi di FTI dan di ITB lho!!</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Kedua, di FTI ada yang namanya jurusan Teknik Fisika. Di jurusan ini, kamu bakal banyak mempelajari hal-hal yang berkaitan dengan aspek fisika dan teknologi. Hal ini tentu membuat cakupan pelajaran di Teknik Fisika jadi semakin luas, bahkan hampir mirip sama Teknik Elektro, Teknik Sipil, Teknik Mesin, Teknik Material. Keunikan dari lulusan Teknik Fisika adalah kemampuan mereka untuk menganalisis instrumentasi dan kontrol. Funfact dari jurusan ini adalah lambangnya! Mahasiswa jurusan ini menggunakan lambang tengkorak bajak laut sebagai lambang himpunannya!!</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Yang ketiga ada Teknik Industri yang banyak membahas soal optimasi proses dan sistem. Di jurusan ini kamu juga akan mendalami ilmu ekonomi, kelistrikan, teknologi manufaktur, sampai manajemen. Intinya sih gimana caranya bikin sistem yang membuat sebuah proses jadi seefisien mungkin, baik dari segi waktu, biaya, bahan baku, dan lain-lain. Cakupan lapangan pekerjaan Teknik Industri juga gak kalah lho dari jurusan lainnya! Mereka bisa jadi konsultan manajemen dan juga bisa masuk ke bidang produksi, sistem informasi, pemasaran, bahkan bidang keuangan seperti bank dan asuransi.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Jurusan yang keempat adalah Manajemen Rekayasa Industri (MRI). Jurusan ini masih terhitung baru dan merupakan  “pecahan” dari teknik industri. Yang dipelajari di jurusan MRI ini mirip-mirip sama TI, cuman lebih ditekankan ke aspek manajemennya, seperti gimana cara nentuin proses mana yang harus diprioritaskan duluan, penentuan bahan baku supaya efisien secara finansial, membuat perencanaan proses, monitoring, sampai ke proses evaluasinya.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Jurusan kelima yang dinaungi oleh fakultas ini adalah Teknik Pangan. Jurusan ini merupakan pecahan dari Teknik Kimia dan ada di Kampus Jatinangor. Di jurusan ini, kamu akan mendalami ilmu seputar teknologi pengolahan pangan. Prospek kerja jurusan ini juga gak kalah menarik temen-temen, mulai dari pengembangan produk makanan, sampai pengawasan terhadap keamanan pangan. Menarik banget kan pasti!</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Sama seperti Teknik Pangan, jurusan terakhir di fakultas ini atau jurusan Teknik Bioenergi dan Kemurgi merupakan cabang dari Teknik Kimia dan terletak di Kampus Jatinangor. Jurusan ini nantinya akan mengolah hasil budidaya alam untuk keperluan non pangan. Kalau kamu masuk ke jurusan ini, kamu bakal ketemu sama beberapa mata kuliah, seperti Mikrobiologi dasar, Kimia Organik, Kimia Bahan Nabati, Perancangan Pabrik Bioenergi dan Kemurgi, dan masih banyak lagi! Lulusan jurusan ini nantinya bisa bekerja di bidang industri energi dan peneliti yang mengembangkan produk nabati menjadi energi. Kurang keren apalagi coba??</Typography>
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
                                                    <Typography align="justify" color="#554B3F">FTMD merupakan kepanjangan dari Fakultas Teknik Mesin dan Dirgantara, tapi ada juga yang 
                                                      <Typography mx="1vw" align="justify" color="#554B3F" style={{ fontStyle:'italic', display:'inline-block' }}>ngeplesetin</Typography> 
                                                      namanya jadi Fakultas Tempat Mantu Dambaan! Funfact aja nih, Pak BJ Habibie, Presiden Indonesia yang ketiga sempat menuntut ilmunya di sini lho! Fakultas ini punya tiga jurusan. Nah apa aja sih jurusannya? Yuk simak lebih lanjut!
                                                    </Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Jurusan yang pertama adalah jurusan Teknik Mesin. Jurusan ini merupakan salah satu cabang teknik yang paling tua. Bidang ini mempelajari tentang objek dan sistem yang bergerak. Oleh karena itu, bidang ini menyentuh sebagian besar aspek kehidupan di zaman modern, seperti transportasi, energi, hingga permasalahan mengenai tubuh manusia yang merupakan sebuah “mesin” yang kompleks. Berkat adanya teknik mesin, kita dapat menikmati berbagai kemudahan seperti adanya kendaraan yang kita gunakan sehari-hari.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Jurusan yang kedua atau jurusan Teknik Dirgantara adalah cabang teknik yang berurusan dengan desain, konstruksi, serta perawatan dari pesawat, pesawat ruang angkasa, misil, dan lain sebagainya. Fokus utama di jurusan ini adalah seputar keselamatan terbang, efisiensi bahan bakar, biaya pengoperasian, dan prestasi terbang. Tanpa ada bidang teknik dirgantara, kita tidak dapat menikmati bepergian dari Semarang ke Jakarta dalam 1 jam!</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Nah, jurusan yang ketiga adalah jurusan Teknik Material. Jurusan ini merupakan salah satu cabang teknik yang mengkombinasikan ilmu fisika, kimia, serta ilmu rekayasa untuk mendesain dan menemukan material-material baru yang dapat diaplikasikan di berbagai bidang. Salah satu topik yang dipelajari dalam jurusan ini adalah nanomaterial. Nanomaterial adalah material yang berukuran sangat kecil yang ukurannya dalam rentang 1 hingga 100 nanometer. Material ini digunakan dalam berbagai produk, salah satu contohnya adalah cat yang tahan panas (hingga 750 derajat Celcius!).</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Terus, lulusan FTMD ini cocok di bidang apa aja sih? Nah, ada banyak bidang profesi yang cocok untuk lulusan FTMD beberapa contohnya seperti bidang pengoperasian dan perawatan, pembangkitan energi, manufaktur, minyak dan gas, otomotif, jasa konstruksi, konsultan, jasa desain, penelitian, serta pendidikan. Jadi, kamu bisa banget nih masukin FTMD ke 
                                                      <Typography mx="1vw" align="justify" color="#554B3F" style={{ fontStyle:'italic', display:'inline-block' }}>list</Typography> 
                                                      pilihan fakultas kamu!
                                                    </Typography>
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
                                                    <Typography align="justify" color="#554B3F">FTTM? Fakultas Tanpa Teman Mesra? Eits, bukan itu! FTTM merupakan singkatan dari Fakultas Teknik Pertambangan dan Perminyakan. Di fakultas ini ada empat jurusan yang gak kalah menarik dari jurusan yang ada di fakultas lainnya. Apa aja sih empat jurusan itu??</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Yang pertama ada jurusan Teknik Geofisika. Prodi ini nantinya akan mempelajari bumi dan properti-properti fisisnya seperti gravitasi, gempa, dan lain-lain. Nah, anak-anak jurusan ini juga lumayan banyak yang kerja di bidang eksplorasi migas karena berhubungan dengan surveyor, nentuin deposit minyak, ngecek kandungan kemurnian minyak bumi, dll dalam suatu area tertentu.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Yang kedua ada jurusan Teknik Pertambangan. Jurusan ini tentu mempelajari semua tentang dunia tambang. Intinya sih kamu akan belajar gimana teknik dan metode yang paling tepat dan efisien untuk angkat barang tambang dan gimana cara mengelolanya. Menariknya, di jurusan ini ada mata kuliah “Bahan Peledak dan Teknik Peledakan” 
                                                      <Typography ml="1vw" align="justify" color="#554B3F" style={{ fontStyle:'italic', display:'inline-block' }}>loh</Typography> 
                                                      !
                                                    </Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Jurusan ketiga yang ada di fakultas ini adalah jurusan Teknik Perminyakan. Jurusan ini nantinya akan  belajar tentang segala hal yang berkaitan dengan minyak dan gas bumi. Intinya sih mirip sama seperti tambang cuma jurusan ini lebih fokus untuk kandungan yang bersifat 
                                                      <Typography ml="1vw" align="justify" color="#554B3F" style={{ fontStyle:'italic', display:'inline-block' }}>liquid</Typography> 
                                                      . Eh, tapi ini bukan berarti kamu cuma belajar tentang minyak doang! Di sini kamu juga akan belajar mengenai gas bumi, dan panas bumi.
                                                    </Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Nah, yang terakhir ada jurusan Teknik Metalurgi. Jurusan ini akan belajar segala sesuatu soal pengolahan logam dan mineral, atau lebih tepatnya mengolah mineral mentah jadi bahan “setengah jadi”, misalnya seperti plat besi, ingot, bloom, dan lain-lain.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Terus, lulusan fakultas ini punya peluang apa aja sih??</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Para alumni lulusan FTTM tentu punya peluang besar untuk bekerja di perusahaan minyak nasional maupun asing. Selain itu, kamu juga bisa bekerja di bidang pemerintahan seperti di BP Migas dan departemen energi sumber daya mineral. Bahkan, kamu juga bisa lho bekerja di bidang perbankan atau perusahaan asuransi sebagai tenaga analisis risiko kredit/klaim dari kegiatan eksploitasi migas. Nah, menarik banget kan!</Typography>
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
                                                    <Typography align="justify" color="#554B3F">Kalau kata mahasiswa FTSL, kepanjangan nama fakultas mereka bukan Fakultas Teknik Sipil dan Lingkungan, melainkan Fakultas Tempat Santuy dan Leha-leha! Fakultas ini termasuk salah satu fakultas tertua di ITB dan ada di kampus ganesha serta kampus jatinangor.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Jurusan pertama yang dinaungi oleh fakultas ini adalah jurusan Teknik Sipil (bukan teknik spill!). Jurusan ini ada di kampus ganesha dan akan mempelajari semua hal yang berkaitan dengan bangunan, seperti rumah sederhana, jembatan, dan gedung tinggi mulai dari menentukan apakah tanahnya kuat atau tidak sampai ke tahap pembangunan dan pemeliharaannya.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Jurusan yang kedua adalah Teknik kelautan. Mirip seperti teknik sipil, teknik kelautan juga akan membahas soal pengembangan infrastruktur, tapi bedanya mereka akan banyak membahas soal infrastruktur yang ada di batas pantai sampai ke laut lepas, seperti pelabuhan, breakwater, bangunan pengeboran minyak, dan lain-lain. Di sini juga ada kuliah lapangan yang bikin masa perkuliahan kamu makin asyik lho!</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Jurusan ketiga yang ada di kampus ganesha adalah Teknik lingkungan. Di jurusan ini kamu akan mempelajari beberapa tindakan penyembuhan atau pencegahan yang bisa dilakukan untuk menyelamatkan lingkungan melalui pendekatan rekayasa. Nah, buat kalian yang cinta lingkungan dan memiliki ketertarikan dengan masalah lingkungan, jurusan ini cocok banget buat kamu!</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Jurusan keempat adalah Rekayasa Infrastruktur Lingkungan. Jurusan ini nantinya akan  dilaksanakan di kampus jatinangor. Jurusan ini juga akan mempelajari soal air minum, air limbah, drainase, dan masih banyak lagi lho!</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Jurusan kelima adalah jurusan Teknik dan Pengelolaan Sumber Daya Air. Sama seperti jurusan Rekayasa Infrastruktur Lingkungan, jurusan ini juga akan belajar di kampus jatinangor dan akan mendalami seputar bidang sumber daya air, apalagi di bidang perancangan sarana dan prasarananya. Menarik banget kan!</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Alumni FTSL memiliki prospek kerja yang sangat luas di dalam maupun luar negeri. Kamu dapat bekerja di bidang pembangunan infrastruktur, industri energi, pertambangan, dan LSM atau NGO Lingkungan hidup sebagai seorang konsultan dan pengusaha. Di bidang akademik kamu juga bisa menjadi seorang peneliti maupun pengajar.</Typography>
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
                                                    <Typography align="justify" color="#554B3F">SAPPK atau Sekolah Arsitektur, Perencanaan dan Pengembangan Kebijakan merupakan sekolah yang menaungi dua jurusan di ITB, yaitu Pengembangan Wilayah & Kota (dulu Teknik Planologi) dan Teknik Arsitektur.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Nah, jurusan yang akan kita bahas pertama adalah jurusan PWK atau Perencanaan Wilayah Kota. Jurusan ini sudah berdiri sejak tahun 1959 dan berfokus pada  perencanaan tata kota yang ideal, sistem transportasi yang oke supaya gak bikin macet, gorong-gorong saluran air, distribusi daya listrik, area penyerapan resapan air supaya bisa menanggulangi risiko banjir, dan lain sebagainya. Jurusan ini juga menggabungkan ilmu keteknikan, ilmu politik, ilmu sosial, dan ilmu ekonomi lho!</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Walaupun masih berkaitan erat dengan jurusan PWK, jurusan kedua yang dinaungi sekolah ini atau Teknik Arsitektur akan lebih berfokus pada penciptaan suatu desain bangunan yang kokoh dan fungsional tanpa menghilangkan aspek keindahan. Kalau kamu masuk ke jurusan ini, kamu akan cenderung menghabiskan waktumu di studio sambil mikirin desain, style, komposisi warna, tata letak ruang, sampai bikin 
                                                      <Typography mx="1vw" align="justify" color="#554B3F" style={{ fontStyle:'italic', display:'inline-block' }}>blueprint</Typography>  
                                                      di AutoCAD trus bikin maket buat model bentuk bangunannya.
                                                    </Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Setelah lulus dari sekolah ini kamu bisa bekerja di banyak bidang seperti Instansi Pemerintahan ataupun Manajemen Proyek, menjadi seorang konsultan, kontraktor bahkan tenaga pendidik! Oh iya, kamu tahu gak kalau Bapak Ridwan Kamil merupakan salah satu alumni dari sekolah ini juga lho!</Typography>
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
                                                    <Typography align="justify" color="#554B3F">Jangan kaget kalau ada kenalan kamu yang ngomong “School of Female” di ITB karena itu merupakan plesetan dari kepanjangan Sekolah Farmasi yang disebabkan oleh jumlah mahasiswinya. Di sini kamu bisa mendalami ilmu tentang bagaimana cara membuat obat-obatan dengan komposisi yang pas dan tepat. Ada dua jurusan yang dinaungi oleh sekolah yang satu ini. Apa aja ya??</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Yang pertama ada jurusan Farmasi Klinik dan Komunitas, di sini selain bertemu dengan mata kuliah Kimia Analisis, Mikrobiologi, Bioteknologi, Botani Farmasi, Farmakologi, Biofarmasi, dan Farmasi Klinik; kalian juga akan mempelajari mata kuliah yang menunjang sisi pelayanannya seperti: Farmakokinetik Klinik, Farmakoekonomi, Sosial Farmasi, Ilmu Komunikasi, Farmasi Rumah Sakit, Manajemen Kewirausahaan, dan lain-lain.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Jurusan kedua adalah Sains dan Teknologi Farmasi. Jurusan ini lebih berorientasi pada pengembangan produk kefarmasian. Prodi ini mengkaji berbagai aspek yang berhubungan dengan ”sediaan farmasi” mulai dari pencarian atau penciptaan, pengembangan bahan baku sampai menjadi sediaan farmasi yang siap digunakan, seperti obat-obatan, jamu atau produk kosmetika.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Prospek kerja buat lulusan fakultas ini bisa di bidang industri obat-obatan dan produk biologi, industri makanan, industri kosmetik, bidang farmasi komunitas seperti rumah sakit dan apotek, dll.</Typography>
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
                                                    <Typography align="justify" color="#554B3F" style={{ fontWeight:'bold '}}>1. SITH S</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Sekolah Ilmu dan Teknologi Hayati (bukan Sekolah Ilmu Teknologi Humor!!) memiliki dua program, yaitu program sains dan rekayasa. Pada program sains, kamu akan berfokus pada ilmu hayati baik yang berskala mikro ataupun makro. Dua jurusan yang ada di SITH-S lebih banyak nge-laboratorium dan ada  juga kuliah lapangan yang gak kalah seru.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Di Jurusan Biologi, teman-teman akan mengenal rekayasa gen, kultur jaringan, pengendalian hama, konservasi hutan, 
                                                      <Typography mx="1vw" align="justify" color="#554B3F" style={{ fontStyle:'italic', display:'inline-block' }}>stem cell</Typography>   
                                                      (kultur sel hewan), dll. Proses belajarnya pun gak  kalah menarik, karena pada program studi Biologi teman-teman akan merasakan apa yang dinamakan kuliah lapangan di taman nasional.
                                                    </Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Sedangkan di Jurusan Mikrobiologi akan mempelajari segala sesuatu yang berhubungan dengan mikroba dan akan belajar teknik rekayasa genetika, kultur sel, teknologi fermentasi, pembuatan makanan yang prosesnya melibatkan mikroba.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Lulusan dari Sekolah Ilmu dan Teknologi Hayati program sains ini dapat bekerja di instansi pemerintahan seperti Departemen Pertanian, Departemen Kesehatan, dan Kementerian Lingkungan Hidup. Atau bisa juga bekerja di instansi yang berkaitan dengan pangan dan obat! Nah, jadi gak usah pikir panjang lagi buat kamu yang mau masuk ke sini ya!</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F" style={{ fontWeight:'bold '}}>2. SITH R</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Masih membahas Sekolah Ilmu dan Teknologi Hayati, tapi kali ini kita akan membahas program kedua mereka, yaitu program rekayasa! Berbeda dengan program sains, program rekayasa akan menggabungkan sains dan teknik.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Semua jurusan yang ada di program rekayasa ini nantinya akan berkuliah di ITB Jatinangor setelah masa TPB karena terdapat lab terbuka yang memfasilitasi kegiatan kuliah mereka. Nah, ada 4 jurusan yang dinaungi oleh program rekayasa, apa aja ya kira-kira??</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Jurusan yang pertama adalah jurusan Rekayasa Hayati yang dapat menjembatani bidang ilmu Teknik dan Kehayatan sekaligus menjawab kebutuhan masyarakat akan Sarjana Rekayasa Hayati (Bio-engineers) yang mampu mengaplikasikan dasar-dasar llmu Teknik dalam pengembangan industri bioproduk dengan penekanan pada produk nabati.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Kedua, ada jurusan Rekayasa Pertanian mengkombinasikan ilmu-ilmu pertanian konvensional dengan; prinsip-prinsip rekayasa biosistem. Prinsip-prinsip rekayasa biosistem diaplikasikan untuk membangun dan mengelola sistem pertanian untuk mencapai efisiensi energi, materi dan ekonomi yang optimal.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Selanjutnya, ada jurusan Rekayasa Kehutanan diarahkan untuk menjaga, memanipulasi dan membangun hutan menggunakan prinsip-prinsip rekayasa untuk mencapai efisiensi energi dan materi yang optimal serta mengaplikasikan berbagai teknologi yang tersedia untuk membangun dan mengelola hutan.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Yang terakhir adalah jurusan Teknologi Pasca Panen yang diarahkan untuk memproses, menjaga, memanipulasi dan memaksimalkan hasil panen dengan menggunakan prinsip-prinsip rekayasa untuk mencapai efisiensi energi dan materi yang optimal serta mengaplikasikan berbagai teknologi yang tersedia.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Peluang kerja bagi jebolan SITH diantaranya mereka dapat bekerja di instansi pemerintahan seperti departemen pertanian, departemen kehutanan, departemen kesehatan, departemen kelautan dan perikanan, atau kementerian lingkungan hidup. Bisa juga di dunia industri makanan, obat-obatan, pertambangan, LSM, pengusaha, peneliti, dan pengajar.</Typography>
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
                                                    <Typography align="justify" color="#554B3F">Kalau kamu tanya singkatan STEI ke mahasiswa ITB, mungkin mereka bakal jawab “Sekolah Tidur Empat IPnya” karena mahasiswa STEI ini terkenal jenius! Tapi, kepanjangan STEI sebenarnya adalah Sekolah Teknik Elektro dan Informatika. STEI menaungi 6 jurusan, kira-kira apa aja ya??</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Jurusan pertama yang akan kita bahas adalah Teknik Elektro. Jurusan ini nantinya akan  mempelajari listrik dan aplikasinya dalam kehidupan sehari-hari. di jurusan ini kamu akan belajar konsep, perancangan, pengembangan, serta produksi perangkat listrik dan elektronik. Jurusan ini merupakan salah satu jurusan yang banyak diincar di ITB mengingat maraknya perkembangan teknologi saat ini.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Jurusan kedua yang ada di sekolah ini adalah Teknik Tenaga Listrik (
                                                      <Typography align="justify" color="#554B3F" style={{ fontStyle:'italic', display:'inline-block' }}>power engineering</Typography>  
                                                      ). Jurusan ini berkaitan erat dengan listrik sebagai penghantar energi. Yang dibahas cukup beragam lho! Mulai dari mesin dan material pembangkit listrik, distribusi listrik, dan proteksinya. Jurusan ini terkenal dengan praktiknya yang melibatkan beragam alat kelistrikan. Nah, kalau kamu masuk ke jurusan nanti tentu kamu bisa bekerja di industri yang padat dengan tenaga listrik, perusahaan pembangkit listrik, dan sebagainya!
                                                    </Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Nah, jurusan yang ketiga ada jurusan Teknik Biomedik. Jurusan ini termasuk salah satu jurusan baru di ITB yang. Buat kamu yang berminat menciptakan terobosan di bidang kesehatan dan teknologi, maka jurusan ini adalah pilihan yang tepat buat kamu karena jurusan ini menerapkan gabungan dari ilmu teknik dengan ilmu medis/kedokteran. Tujuan dari bidang ilmu ini adalah bagaimana mengembangkan teknologi yang bisa bermanfaat untuk mempermudah proses diagnosis, pengobatan, rehabilitasi, serta penyembuhan pasien. Keren banget kann!!</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Siapa yang ngefans sama DoSan dan pengen ngikutin jejaknya?? Wah, kalau gitu kamu harus banget nih masuk ke jurusan Teknik Informatika! Jurusan ini akan mempelajari berbagai topik ilmu komputer seperti algoritma, teori komputasi, bahasa pemrograman, dan sebagainya. Oh iya, kalian tahu Achmad Dzaky si pendiri Bukalapak? Nah, beliau ini salah satu lulusan Teknik Informatika lho!!</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Jurusan yang akan kita bahas selanjutnya adalah Sistem dan Teknologi Informasi atau bisa disingkat STI. Jurusan ini nantinya juga akan membahas tentang algoritma walau gak se-spesifik mahasiswa informatika. Kalau gitu, bedanya sama Informatika apa dong kak? Nah, STI itu lebih mendalami sistem informasi secara keseluruhan dalam sebuah perusahaan, dari mulai 
                                                      <Typography mx="1vw" align="justify" color="#554B3F" style={{ fontStyle:'italic', display:'inline-block' }}>enterprise business planning</Typography>  
                                                      (ERP), 
                                                      <Typography mx="1vw" align="justify" color="#554B3F" style={{ fontStyle:'italic', display:'inline-block' }}>business intelligence</Typography>   
                                                      (BI), dan sejenisnya. Gimana? Keren kan!
                                                    </Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Jurusan terakhir yang ada di sekolah ini adalah Teknik Telekomunikasi! Jurusan ini berkaitan erat dengan ilmu dasar sains beserta ilmu matematika sebagai dasar dari ilmu rekayasa. Selain itu, jurusan ini juga akan mendalami pengetahuan yang mencakup bidang Teknik Elektro, seperti ilmu komputer, manajemen, ekonomi, dan sebagainya. Nah, mahasiswa Teknik Telekomunikasi ini bisa banget  merancang implementasi teknologi baru agar dapat memenuhi kebutuhan masyarakat saat ini.</Typography>
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
                                                    <Typography align="justify" color="#554B3F">FSRD merupakan singkatan dari Fakultas Seni Rupa dan Desain. Di fakultas ini, selain belajar gambar, desain, lukis, kalian  juga bakal belajar tentang humaniora lho!. Jadi jangan harap anak FSRD cuma jago dalam ranah estetika aja, tapi mereka juga jago banget dalam pemahaman akan budaya, sejarah, sastra, dan filsafat.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Salah satu keunikan mahasiswa FSRD adalah mereka suka kompakan pakai dresscode waktu kuliah! Dresscodenya juga kreatif-kreatif banget mulai dari seragam SMA sampai baju bertema Harry Potter!</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Di fakultas ini ada 5 prodi: Desain Komunikasi Visual (DKV), Seni Rupa, Desain Produk, Kriya, dan Desain Interior yang pastinya menarik banget!</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Di prodi DKV, mereka belajar tentang cara mengungkapkan pesan secara visual, dan fokusnya biasanya lebih ke arah seni terapan. Kalo di desain produk akan mempelajari perancangan bentuk produk yang fungsional secara fisik, tapi juga mempertimbangkan aspek estetikanya. Nah, kalo di seni rupa, kamu akan membuat karya seni sebagai bentuk ekspresi dari emosi dan pemikiran seorang seniman, dan pastinya karya seni itu harus dibuat dengan mempertimbangkan aspek filosofis dan maknanya.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Kalo desain interior itu mirip dengan arsitektur, tapi di jurusan ini kamu akan lebih fokus pada bagian estetika dari sebuah tatanan ruang, dari mulai menentukan 
                                                      <Typography ml="1vw" align="justify" color="#554B3F" style={{ fontStyle:'italic', display:'inline-block' }}>themes</Typography>  
                                                      , nuansa dan kesan yang ingin dibangun dalam sebuah ruangan, dan sebagainya. Yang terakhir, adalah jurusan seni kriya yang posisinya terletak di antara seni dan desain. Yang jadi objek studi di kriya (craft) itu bisa seperti batik, keris, keramik, dan lain-lain.</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Kalau kamu sangat berminat buat jadi 
                                                      <Typography ml="1vw" align="justify" color="#554B3F" style={{ fontStyle:'italic', display:'inline-block' }}>fashion designer</Typography> 
                                                      , 
                                                      <Typography ml="1vw" align="justify" color="#554B3F" style={{ fontStyle:'italic', display:'inline-block' }}>interior designer</Typography> 
                                                      , 
                                                      <Typography ml="1vw" align="justify" color="#554B3F" style={{ fontStyle:'italic', display:'inline-block' }}>fabric designer</Typography> 
                                                      , seniman kriya, pengusaha di bidang seni, dan konsultan di bidang seni, fakultas ini merupakan fakultas yang tepat buat kamu! Apalagi fakultas ini punya segudang alumni terkenal mulai dari Aming, Pandji Pragiwaksono, Pidi Baiq, dan masih banyak lagi. Jadi, jangan ragu buat mendaftar ke sini ya!!
                                                    </Typography>
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
                                                    <Typography align="justify" color="#554B3F">SBM merupakan singkatan dari Sekolah Bisnis dan Manajemen. Sekolah ini punya gedung yang paling keliatan modern di ITB. Rata-rata yang kuliah di SBM lulusnya paling cepat, kurang lebih 3-4 tahun apalagi mereka juga ada semester pendek. Di sekolah ini kamu akan belajar mengenai sistem pengelolaan bisnis dan manajemen resource, dari mulai perencanaan, organizing, implementasi, sampai ke tahap evaluasi. Yang bikin sekolah ini makin unik adalah salah satu mata kuliah yang ada di TPBnya yaitu seni pentas dan penampilan. Menarik banget ya!</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Nah, sekolah ini hanya menaungi dua jurusan, yaitu Kewirausahaan dan Manajemen. Kedua jurusan ini 11:12 alias bahan yang dipelajari hampir mirip antara satu sama lain hanya saja di jurusan Kewirausahaan kamu akan diwajibkan untuk memulai bisnis dengan teman kamu dari semester awal hingga lulus dan tentunya menjadi penilaian mata kuliah yang ada di sana. Wah, bisa banget nih bangun usaha start up, siapa tahu bisa sukses kaya Seo Dalmi nih!</Typography>
                                                    <Typography my="2vh" align="justify" color="#554B3F">Berbeda dengan jurusan kewirausahaan, di jurusan Manajemen kamu akan mendalami hal seperti manajemen operasional, hukum bisnis, kode etik perusahaan, manajemen sumber daya manusia, informasi teknologi, pemasaran, dan keuangan. Yang menarik dari jurusan ini adalah ada field trip! Yup, kamu gak salah baca. Jurusan ini nantinya bakal ngajak kamu untuk jalan-jalan di suatu daerah selama tiga hari untuk memperhatikan kehidupan di lingkungan mereka dan menciptakan inovasi untuk memberi solusi terhadap masalah yang ada di sekitar kalian.</Typography>
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
                                              <Typography align="center" color="#554B3F">loreng</Typography>
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
                                                <Typography align="center" color="#554B3F">loreng</Typography>
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
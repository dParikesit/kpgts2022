import Upload_Berita from "./Upload_berita";
import Tabel from "./Tabel";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';


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

const Admin = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
      return (
        <ThemeProvider theme={theme} >
        <div className="latar">
            <div style={{marginTop: '5vw'}}>
                <Box
                sx={{bgcolor: 'background.paper', display: 'flex', height: '100%' }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                value={value}
                                onChange={handleChange}
                                aria-label="Vertical tabs example"
                                sx={{ flexGrow:1, borderRight: 1, borderColor: 'divider' }}
                            >
                                <Tab style={{fontSize:'1vw'}} label="Daftar Peserta" {...a11yProps(0)} />
                                <Tab style={{fontSize:'1vw'}} label="Tambah Berita" {...a11yProps(1)} />
                            </Tabs>
                        </Grid>
                        <Grid item xs={10}>
                            <TabPanel value={value} index={0}>
                                <Tabel></Tabel>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Upload_Berita />
                            </TabPanel>
                        </Grid>
                    </Grid>
                </Box>
            </div>       
        </div>
        </ThemeProvider>
      );
}

export default Admin;
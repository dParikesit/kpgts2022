import Footer from "../komponen_umum/Footer";
import Navbar from "../komponen_umum/Navbar";
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
                    <Navbar></Navbar>
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
                                                    <Typography align="center" color="#554B3F">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nemo ipsam corporis molestiae, repellat optio aliquam ea non alias esse cumque adipisci eveniet. Excepturi, quos vero quaerat voluptates ipsa magnam.</Typography>
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
                                                    <Typography align="center" color="#554B3F">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nemo ipsam corporis molestiae, repellat optio aliquam ea non alias esse cumque adipisci eveniet. Excepturi, quos vero quaerat voluptates ipsa magnam.</Typography>
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
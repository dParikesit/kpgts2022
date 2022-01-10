import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles' 
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Avatar, Divider} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useEffect, useContext} from "react";
import { AuthContext } from "../komponen_umum/AuthContext";
import Image from "mui-image";


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

const useStyles = makeStyles(theme => ({
  navlinks: {
    marginRight: theme.spacing(2),
    display: "flex",
    flexGrow: "1",
  },
  logo: {
    cursor: "pointer",
  },
  logoMobile: {
    cursor: "pointer",
    flexGrow: '1'
  },
  link: {
    margin: "auto",
    textDecoration: "none",
    color: "#554B3F",
    fontFamily: "Ramaraja",
    fontSize: "24px",
    marginLeft: theme.spacing(8),
    "&:hover": {
      color: "black",
      borderBottom: "0.2px solid black"
    },
  },
  linkDrawer: {
    margin: "auto",
    textDecoration: "none",
    color: "#554B3F",
    fontFamily: "Ramaraja",
    fontSize: "20px",
    "&:active": {
      color: 'black'
    },
  },
  button: {
    color: "#554B3F",
    marginLeft: theme.spacing(4),
    textDecoration: "none",
  },
  buttonArea: {
    marginLeft: "auto",
    padding: 'auto',
    justifyContent: 'flex-end'
  },
  linkArea: {
    display: "flex",
  },
  icon:{
    color: "#554B3F"
  },
  marginRight: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    display: "none"
  },
  menuButton: {
      marginLeft: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
  },
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#554B3F'),
  fontFamily: 'Ramaraja',
  fontSize: "18px",
  padding: "auto",
  backgroundColor: 'red',
  margin: "auto",
  borderRadius: "15px",
  justifyContent: "center",
  textAlign: "center",
  padding: "auto",
  '&:hover': {
    backgroundColor: '#726454',
  },
}));

const StyledDiv = styled('div')(() => ({
  display: 'flex',
  flex: '1',
  background: '#94D3DA'
}))

const NavbarLoggedIn = () => {
    const [auth, setAuth] = React.useState(true);
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [open, setOpen] = useState(false);
    const toggleDrawer = event => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
  
      setOpen(!open);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
      setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const Auth = useContext(AuthContext)
    useEffect(async () => {
        // Update the document title using the browser API
        let response = await fetch('/api/user/login',{
            method: 'GET',
            mode: 'same-origin',
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        response = await response.json()
        if(response.loggedIn===true) {
            Auth.addItem(response.name, response.role)
        }
    }, []);
    const nama=Auth.name
  const navigate = useNavigate()
  const logoutHandler = async(e)=>{
    e.preventDefault()
    const response = await fetch('api/user/logout', {
      method: 'POST',
      mode: 'same-origin',
      credentials: "same-origin",
    })
    if(response.status===200){
      await Auth.removeItem()
      await navigate("/", {replace: true})
      await window.location.reload()
    }
  }

    return (
      <>
        {isMobile ? (
          <>
            <CssBaseline />
            <AppBar position="sticky" style={{ background:"#94D3DA", fontFamily: "Ramaraja", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
              <Toolbar>
                <Avatar src={process.env.PUBLIC_URL + '/assets/gajah-logo-trans.png'} variant={"square"} sx={{ width: 56, height: 56, bgcolor: "#95d3db"}}/>
                <IconButton 
                    onClick={toggleDrawer}
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    className={classes.menuButton} 
                >
                    <MenuIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Drawer 
              anchor="right"
              open={open}  
              onClose={toggleDrawer}
            >
              <StyledDiv>
                <List>
                <ListItem onClick={toggleDrawer}>
                    <ListItemText>
                        <Link to="/" className={classes.linkDrawer}>Home</Link>
                    </ListItemText>
                </ListItem>
                <ListItem onClick={toggleDrawer}>
                    <ListItemText>
                        <Link to="/berita" className={classes.linkDrawer}>Berita</Link>
                    </ListItemText>
                </ListItem >
                <ListItem onClick={toggleDrawer}>
                    <ListItemText>
                        <Link to="/informasi" className={classes.linkDrawer}>Informasi ITB dan KPGTS</Link>
                    </ListItemText>
                </ListItem>
                <Divider sx={{ borderBottomWidth: 1, background: 'black', marginBottom: '10px', marginTop:'10px' }} ></Divider>
                <ListItem onClick={toggleDrawer}>
                    <ListItemText>
                      <Link to="/profile" className={classes.linkDrawer}>
                        Profile
                      </Link>
                    </ListItemText>
                </ListItem>
                <ListItem onClick={toggleDrawer}>
                    <ListItemText>
                      <Link to="/registerTO"  className={classes.linkDrawer}>
                        Register TO
                      </Link>
                    </ListItemText>
                </ListItem>
                <ListItem onClick={toggleDrawer}>
                    <ListItemText>
                      <Link to="/" className={classes.linkDrawer}> {/*onClick do logout*/}
                        <ColorButton size="medium" variant="contained" style={{ width:"30vw" }} onClick={logoutHandler}>Log Out</ColorButton>
                      </Link>
                    </ListItemText>
                </ListItem>
                </List>
                </StyledDiv>
            </Drawer>
          </>
          // Kalo bukan mobile
        ) : (
          <ThemeProvider theme={theme}>
            <AppBar position="sticky" style={{ background:"#94D3DA", fontFamily: "Ramaraja", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
              <CssBaseline />
              <Toolbar>
                <Avatar src={process.env.PUBLIC_URL + '/assets/gajah-logo-trans.png'} variant={"square"} sx={{ width: 56, height: 56, bgcolor: "#95d3db"}}/>
                <div className={classes.navlinks}>
                    <div className={classes.linkArea}>
                      <Link to="/" className={classes.link}>
                        Home
                      </Link>
                      <Link to="/berita" className={classes.link}>
                        Berita
                      </Link>
                      <Link to="/informasi" className={classes.link}>
                        Informasi ITB dan KPGTS
                      </Link>
                    </div >
                      {auth && (
                        <div className={classes.buttonArea}>
                          
                          <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                          >
                            <Typography variant="h6" style={{ fontFamily: "Ramaraja", marginRight: "10px" }}>
                              {nama}
                            </Typography>
                            <AccountCircle />
                          </IconButton>
                          <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                          >
                            <Link to="/profile" className={classes.linkDrawer}>
                              <MenuItem onClick={handleClose}>Profile</MenuItem>
                            </Link>
                            <Link to="/registerTO" className={classes.linkDrawer}>
                              <MenuItem onClick={handleClose}>Register TO</MenuItem>
                            </Link>
                            <Link to="/" className={classes.linkDrawer}>
                              <MenuItem onClick={logoutHandler}>Log Out</MenuItem>
                            </Link>
                          </Menu>
                        </div>
                      )}
                  </div> 
              </Toolbar>
            </AppBar>
          </ThemeProvider>
        )}
      </>
      );
}

export default NavbarLoggedIn;
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles' 
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import DrawerComponent from "./Drawer";
import { styled } from '@mui/material/styles';

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
    flexGrow: "1",
  },
  link: {
    margin: "auto",
    textDecoration: "none",
    color: "white",
    fontSize: "24px",
    marginLeft: theme.spacing(8),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid black"
    },
  },
  button: {
    color: "white",
    marginLeft: theme.spacing(3),
  },
  buttonArea: {
    marginLeft: "auto",
    padding: 'auto',
    justifyContent: 'flex-end'
  },
  linkArea: {
    display: "flex",
  }
}));

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#CB7B40'),
  fontFamily: 'Ramaraja',
  fontSize: "18px",
  padding: "auto",
  backgroundColor: '#CB7B40',
  '&:hover': {
    backgroundColor: '#d59566',
  },
}));

const Navbar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
      <>
        {isMobile ? (
          <>
            <AppBar position="static" style={{ background:"#927759", fontFamily: "Ramaraja" }}>
              <CssBaseline />
              <Toolbar>
                <Typography variant="h4" className={classes.logoMobile} noWrap>
                  Logo
                </Typography>
                <DrawerComponent />
              </Toolbar>
              
            </AppBar>
          </>
        ) : (
          <AppBar position="static" style={{ background:"#927759", fontFamily: "Ramaraja" }}>
            <CssBaseline />
            <Toolbar>
              <Typography variant="h4" className={classes.logo} noWrap>
                Logo
              </Typography>
              <div className={classes.navlinks}>
                  <div className={classes.linkArea}>
                    <Link to="/" className={classes.link}>
                      Home
                    </Link>
                    <Link to="/berita" className={classes.link}>
                      Berita
                    </Link>
                    <Link to="/informasi" className={classes.link}>
                      Tentang KPGTS
                    </Link>
                  </div>
                  <div className={classes.buttonArea}>
                    <Link to="/login" className={classes.button}>
                      <ColorButton size="medium" variant="contained">Login</ColorButton>
                    </Link>
                    <Link to="/register"  className={classes.button}>
                      <ColorButton size="medium" variant="contained">Register</ColorButton>
                    </Link>
                  </div>
                </div> 

                <DrawerComponent />
            </Toolbar>
          </AppBar>
        )}
        
      </>
      );
}

export default Navbar;
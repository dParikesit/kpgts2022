import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
    marginLeft: theme.spacing("4"),
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
  backgroundColor: '#554B3F',
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

const Navbar = () => {
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
                      <Link to="/login" className={classes.button}>
                        <ColorButton size="medium" variant="contained" style={{ width:"30vw" }}>Login</ColorButton>
                      </Link>
                    </ListItemText>
                </ListItem>
                <ListItem onClick={toggleDrawer}>
                    <ListItemText>
                      <Link to="/register"  className={classes.button}>
                        <ColorButton size="medium" variant="contained" style={{ width:"30vw" }}>Register</ColorButton>
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
              </Toolbar>
            </AppBar>
            </ThemeProvider>
          )}
      </>
      );
}

export default Navbar;
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
import { Divider } from '@mui/material';

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
    color: "white",
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
    color: "inherit",
    fontFamily: "Ramaraja",
    fontSize: "20px",
    marginLeft: theme.spacing(3),
    "&:active": {
      color: 'white'
    },
  },
  button: {
    color: "white",
    marginLeft: theme.spacing(7),
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
    color: "white"
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
  color: theme.palette.getContrastText('#CB7B40'),
  fontFamily: 'Ramaraja',
  fontSize: "18px",
  padding: "auto",
  backgroundColor: '#CB7B40',
  '&:hover': {
    backgroundColor: '#d59566',
  },
}));

const StyledDiv = styled('div')(() => ({
  display: 'flex',
  flex: '1',
  background: '#927759'
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
            <AppBar position="static" style={{ background:"#927759", fontFamily: "Ramaraja", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px" }}>
              <Toolbar>
                <Typography variant="h4" className={classes.logoMobile} noWrap>
                  Logo
                </Typography>
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
                        <ColorButton size="medium" variant="contained" style={{ width:"25vw" }}>Login</ColorButton>
                      </Link>
                    </ListItemText>
                </ListItem>
                <ListItem onClick={toggleDrawer}>
                    <ListItemText>
                      <Link to="/register"  className={classes.button}>
                        <ColorButton size="medium" variant="contained" style={{ width:"25vw" }}>Register</ColorButton>
                      </Link>
                    </ListItemText>
                </ListItem>
                </List>
                </StyledDiv>
            </Drawer>
          </>
          // Kalo bukan mobile
        ) : (
          <AppBar position="static" style={{ background:"#927759", fontFamily: "Ramaraja", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px" }}>
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
        )}
        
      </>
      );
}

export default Navbar;
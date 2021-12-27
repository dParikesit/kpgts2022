import React, { useState } from "react";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@material-ui/core/styles' 
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles((theme)=>({
    link:{
        color: "black",
        fontFamily: 'Ramaraja',
        fontSize: "20px",
        "&:hover": {
            color: "blue",
        },
    },
    icon:{
        color: "white"
    },
    drawer: {
        flexShrink: 0,
        width: 400
    },
    drawerPaper: {
        background: "blue",
        color: 'white',
    },
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
}));

function DrawerComponent() {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

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
    <div>
        <IconButton 
            onClick={toggleDrawer}
            color="inherit"
            aria-label="open drawer"
            edge="end"
            className={classes.menuButton} 
        >
            <MenuIcon />
        </IconButton>
        <Drawer 
            className={classes.drawer} 
            classes={{
                paper: classes.drawerPaper
            }} 
            anchor="left"
            open={open}  
            onClose={toggleDrawer}
        >
            <List>
            <ListItem onClick={toggleDrawer}>
                <ListItemText>
                    <Link to="/" className={classes.link}>Home</Link>
                </ListItemText>
            </ListItem>
            <ListItem onClick={toggleDrawer}>
                <ListItemText>
                    <Link to="/berita" className={classes.link}>Berita</Link>
                </ListItemText>
            </ListItem >
            <ListItem onClick={toggleDrawer}>
                <ListItemText>
                    <Link to="/informasi" className={classes.link}>Tentang Kita</Link>
                </ListItemText>
            </ListItem>
            <ListItem onClick={toggleDrawer}>
                <ListItemText>
                    <Link to="/login/peserta" className={classes.link}>Login</Link>
                </ListItemText>
            </ListItem>
            <ListItem onClick={toggleDrawer}>
                <ListItemText>
                    <Link to="/register" className={classes.link}>Register</Link>
                </ListItemText>
            </ListItem>
            </List>
        </Drawer>
    </div>
  );
}
export default DrawerComponent;

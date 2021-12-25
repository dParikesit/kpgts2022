import React, { useState } from "react";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@material-ui/core/styles' 
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "black",
        fontFamily: 'Ramaraja',
        fontSize: "20px",
        "&:hover": {
            color: "blue",
            borderBottom: "1px solid black"
          },
    },
    icon:{
        color: "white"
    },
    drawer: {
        flexShrink: 0,
        width: 400
    },
    paper: {
        background: '#927759',
        color: 'white',
    }
}));

function DrawerComponent() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const classes = useStyles();

    return (
    <>
        <Drawer className={classes.drawer} classes={{paper: classes.paper}} open={openDrawer}  onClose={() => setOpenDrawer(false)} >
            <List>
            <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                <Link to="/" className={classes.link}>Home</Link>
                </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                <Link to="/berita" className={classes.link}>Berita</Link>
                </ListItemText>
            </ListItem >
            <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                <Link to="/informasi" className={classes.link}>Tentang Kita</Link>
                </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                <Link to="/login/peserta" className={classes.link}>Login</Link>
                </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                <Link to="/register" className={classes.link}>Register</Link>
                </ListItemText>
            </ListItem>
            </List>
        </Drawer>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon />
        </IconButton>
    </>
  );
}
export default DrawerComponent;

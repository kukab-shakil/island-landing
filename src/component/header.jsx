import React, { useEffect, useState } from 'react';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme)=>({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        
      },
    appbar: {
        background: 'none',
      },
      icon: {
        color: '#fff',
        fontSize: '2rem',
      },
      appbarTitle: {
        flexGrow: '1',
      },
      appbarWrapper: {
        width: '80%',
        margin: '0 auto',
      },
      colorText: {
        color: '#5AFF3D',
      },
      container: {
        textAlign: 'center',
      },
      title: {
        color: '#fff',
        fontSize: '4.5rem',
      },
      goDown: {
        color: '#5AFF3D',
        fontSize: '4rem',
      },
}));
function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(()=>{
        setChecked(true);
    },[])
    return (
        <div  className={classes.root} id="header">
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}>
            My<span className={classes.colorText}>Island.</span>
            </h1>
            <IconButton>
                <SortIcon className={classes.icon}/>
            </IconButton>
            </Toolbar>
            

        </AppBar>
        <Collapse in={checked} {...(checked ? {timeout:5000}:{})} collapsedHeight={50} >
        <div className={classes.container}>
        <h1 className={classes.title}>
        Welcome to <br />
        My<span className={classes.colorText}>Island.</span>
        </h1>
        <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
        </IconButton>
        </div>
        </Collapse>
        
        
      </div>
      );
  }
  
  export default Header;
  
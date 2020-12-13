import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme)=>({
    root:{
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL+' /bg.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
}));
function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <CssBaseline />
         
        </div>
      );
  }
  
  export default Header;
  
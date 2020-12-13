import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
const useStyles = makeStyles((theme)=>({
    root:{
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL+' /bg.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
}));
function Landing() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <CssBaseline />
         
        </div>
      );
  }
  
  export default Landing;
  
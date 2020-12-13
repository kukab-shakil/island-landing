import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './header';
import PlaceToVisit from './placeToVisit';
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
          <Header/>
          <PlaceToVisit/>
         
        </div>
      );
  }
  
  export default Landing;
  
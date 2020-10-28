import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';
import img1 from '../images/img-a.jpg';
import img2 from '../images/img-b.jpg';
import img3 from '../images/img-c.jpg';
import img4 from '../images/img-d.jpg';

import '../css/style.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    marginTop:'4vh',
  },
  div: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "white",
    height: "1000%"
  
  },




}));

export default function Ad() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <Grid container spacing={0} style={{ height: '20vh', width: '100%' }} >

              <Grid item xs={5} style={{ backgroundImage: "url(" + img3 + ")" }}> </Grid>
              <Grid item xs={2} > </Grid>
              <Grid item xs={5} style={{ backgroundImage: "url(" + img1 + ")" }}> </Grid>
      </Grid>
    </div>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';

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

export default function VideoPlayer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <Grid container spacing={0} >

              <Grid item xs={12}> <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width ='100%' height='100vh' loop='false' playing='false' muted='false'  /></Grid>

      </Grid>
    </div>
  );
}

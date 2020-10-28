import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import img1 from '../images/img-1.jpg';
import img2 from '../images/img-b.jpg';
import img3 from '../images/img-c.jpg';
import img4 from '../images/img-d.jpg';
import img5 from '../images/women.jpg';
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

export default function CentGRIDeredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <h1 style={{ color: 'white' , marginTop:'10vh',marginBottom:'4vh', marginLeft:'4vw' }}>Featured</h1>
          <Grid container spacing={0} >
         
              <Grid item xs={3}>
                
                  <div  className='imgContainer' style={{ backgroundImage: "url(" + img5 + ")" , backgroundSize:'contain' }}>
                  
            <Grid container spacing={0} direction='column' style={{ height: '100%', width: '100%' }} >
              <Grid item xs={9}></Grid>
              <Grid item xs={3} style={{ minWidth: '100%'}} >
                <Grid container direction='row' style={{marginTop:"5vh", marginLeft: '10px',paddingLeft:"0px",paddingRight:"20px" }}>
                  <Grid item xs={1} style={{ marginLeft: '5%' }}>  $200</Grid>
                  <Grid item xs={2}>  </Grid>
                  <Grid item xs={7}>  </Grid>
                  <Grid item xs={1} style={{ marginLeft: '3%' }}> 2$ </Grid>


                </Grid>

                <Grid item xs={2} style={{ marginTop: '2.5vh',minWidth: '100%',textAlign:"left", marginLeft: '25px' }}>  John Doe </Grid>
                <Grid item xs={2} style={{ marginTop: '1%',minWidth: '100%',textAlign:"left", marginLeft: '25px',fontSize:"12px" }}>  Comedian </Grid>


              </Grid>
                      </Grid>
                  </div>
        </Grid>
        <Grid item xs={3}>
          <div className='imgContainer' style={{ backgroundImage: "url(" + img1 + ")" , backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
            <Grid container spacing={0} direction='column' style={{ height: '100%', width: '100%' }} >
              <Grid item xs={9}></Grid>
              <Grid item xs={3} style={{ minWidth: '100%'}} >
                <Grid container direction='row' style={{marginTop:"5vh", marginLeft: '10px',paddingLeft:"0px",paddingRight:"20px" }}>
                  <Grid item xs={1} style={{ marginLeft: '5%' }}>  $200</Grid>
                  <Grid item xs={2}>  </Grid>
                  <Grid item xs={7}>  </Grid>
                  <Grid item xs={1} style={{ marginLeft: '3%' }}> 2$ </Grid>


                </Grid>

                <Grid item xs={2} style={{ marginTop: '2.5vh',minWidth: '100%',textAlign:"left", marginLeft: '25px' }}>  John Doe </Grid>
                <Grid item xs={2} style={{ marginTop: '1%',minWidth: '100%',textAlign:"left", marginLeft: '25px',fontSize:"12px" }}>  Comedian </Grid>


              </Grid>
                      </Grid>
                  </div></Grid>
        <Grid item xs={3}>
         <div className='imgContainer' style={{ backgroundImage: "url(" + img2 + ")", backgroundSize:'contain', backgroundRepeat:'no-repeat' }}>
            <Grid container spacing={0} direction='column' style={{ height: '100%', width: '100%' }} >
              <Grid item xs={9}></Grid>
              <Grid item xs={3} style={{ minWidth: '100%'}} >
                <Grid container direction='row' style={{marginTop:"5vh", marginLeft: '10px',paddingLeft:"0px",paddingRight:"20px" }}>
                  <Grid item xs={1} style={{ marginLeft: '5%' }}>  $200</Grid>
                  <Grid item xs={2}>  </Grid>
                  <Grid item xs={7}>  </Grid>
                  <Grid item xs={1} style={{ marginLeft: '3%' }}> 2$ </Grid>


                </Grid>

                <Grid item xs={2} style={{ marginTop: '2.5vh',minWidth: '100%',textAlign:"left", marginLeft: '25px' }}>  John Doe </Grid>
                <Grid item xs={2} style={{ marginTop: '1%',minWidth: '100%',textAlign:"left", marginLeft: '25px',fontSize:"12px" }}>  Comedian </Grid>


              </Grid>
                      </Grid>
                  </div> </Grid>
        <Grid item xs={3}>
         <div className='imgContainer' style={{ backgroundImage: "url(" + img3 + ")" , backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
            <Grid container spacing={0} direction='column' style={{ height: '100%', width: '100%' }} >
              <Grid item xs={9}></Grid>
              <Grid item xs={3} style={{ minWidth: '100%'}} >
                <Grid container direction='row' style={{marginTop:"5vh", marginLeft: '10px',paddingLeft:"0px",paddingRight:"20px" }}>
                  <Grid item xs={1} style={{ marginLeft: '5%' }}>  $200</Grid>
                  <Grid item xs={2}>  </Grid>
                  <Grid item xs={7}>  </Grid>
                  <Grid item xs={1} style={{ marginLeft: '3%' }}> 2$ </Grid>


                </Grid>

                <Grid item xs={2} style={{ marginTop: '2.5vh',minWidth: '100%',textAlign:"left", marginLeft: '25px' }}>  John Doe </Grid>
                <Grid item xs={2} style={{ marginTop: '1%',minWidth: '100%',textAlign:"left", marginLeft: '25px',fontSize:"12px" }}>  Comedian </Grid>


              </Grid>
                      </Grid>
                  </div> </Grid>
      </Grid>
    </div>
  );
}

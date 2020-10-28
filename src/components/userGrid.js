import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import img1 from '../images/img-a.jpg';
import img2 from '../images/img-b.jpg';
import img3 from '../images/img-c.jpg';
import img4 from '../images/img-d.jpg';
import '../css/userGrid.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    marginTop:'4vh',
  },
  div: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "white",
    height: "60%"
  
  },




}));






export default function UserGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 style={{ color: 'white' , marginTop:'10vh',marginBottom:'4vh', marginLeft:'4vw' }}>{props.title}  </h1>
          <Grid container spacing={0} >

        <Grid item xs={2}>
        <div className='imgContainer2' style={{ backgroundImage: "url(" + img2 + ")", backgroundSize:'contain', backgroundRepeat:'no-repeat' }}>
            <Grid container spacing={0} direction='column' style={{ height: '100%', minWidth: '100%' }} >
              <Grid item xs={9}></Grid>
              <Grid item xs={3} style={{ minWidth: '100%' }} >

                <div style={{}}>
                  <Grid container direction='row' style={{minWidth:"100%",}}>
                    <Grid item xs={1} style={{marginLeft:'5%'}}>  $200</Grid>
                    <Grid item xs={2}>  </Grid>
                    <Grid item xs={7}>  </Grid>
                    <Grid item xs={1}> 2$</Grid>



                  </Grid>
                  <div style={{ background: 'black',minWidth:"100%", marginTop:'7.45%' }}>
                    <Grid item xs={2} style={{ marginTop: '1%', marginLeft: '2%', paddingBottom:'1%' }}> John  </Grid>
                    <Grid item xs={2} style={{ marginTop: '1%', marginLeft: '5%' , paddingBottom:'1%',fontSize:"12px"}}> Comedian </Grid>
                  </div>
                </div>
                          </Grid>

                         
                      </Grid>
                  </div>
        </Grid>
        <Grid item xs={2}>
        <div className='imgContainer2' style={{ backgroundImage: "url(" + img2 + ")" , backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
            <Grid container spacing={0} direction='column' style={{ height: '100%', minWidth: '100%' }} >
              <Grid item xs={9}></Grid>
              <Grid item xs={3} style={{ minWidth: '100%' }} >

                <div style={{}}>
                  <Grid container direction='row' style={{minWidth:"100%",}}>
                    <Grid item xs={1} style={{marginLeft:'5%'}}>  $200</Grid>
                    <Grid item xs={2}>  </Grid>
                    <Grid item xs={7}>  </Grid>
                    <Grid item xs={1}> 2$</Grid>



                  </Grid>
                  <div style={{ background: 'black',minWidth:"100%", marginTop:'7.45%' }}>
                    <Grid item xs={2} style={{ marginTop: '1%', marginLeft: '2%', paddingBottom:'1%' }}> John  </Grid>
                    <Grid item xs={2} style={{ marginTop: '1%', marginLeft: '2%' , paddingBottom:'1%',fontSize:"12px"}}> Comedian </Grid>
                  </div>
                </div>
                          </Grid>

                         
                      </Grid>
                  </div>
        </Grid>
        <Grid item xs={2}>
        <div className='imgContainer2' style={{ backgroundImage: "url(" + img2 + ")" , backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
            <Grid container spacing={0} direction='column' style={{ height: '100%', minWidth: '100%' }} >
              <Grid item xs={9}></Grid>
              <Grid item xs={3} style={{ minWidth: '100%' }} >

                <div style={{}}>
                  <Grid container direction='row' style={{minWidth:"100%",}}>
                    <Grid item xs={1} style={{marginLeft:'5%'}}>  $200</Grid>
                    <Grid item xs={2}>  </Grid>
                    <Grid item xs={7}>  </Grid>
                    <Grid item xs={1}> 2$</Grid>



                  </Grid>
                  <div style={{ background: 'black',minWidth:"100%", marginTop:'7.45%' }}>
                    <Grid item xs={2} style={{ marginTop: '1%', marginLeft: '2%', paddingBottom:'1%' }}> John  </Grid>
                    <Grid item xs={2} style={{ marginTop: '1%', marginLeft: '2%' , paddingBottom:'1%',fontSize:"12px"}}> Comedian </Grid>
                  </div>
                </div>
                          </Grid>

                         
                      </Grid>
                  </div>
        </Grid>
        <Grid item xs={2}>
        <div className='imgContainer2' style={{ backgroundImage: "url(" + img2 + ")" , backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
            <Grid container spacing={0} direction='column' style={{ height: '100%', minWidth: '100%' }} >
              <Grid item xs={9}></Grid>
              <Grid item xs={3} style={{ minWidth: '100%' }} >

                <div style={{}}>
                  <Grid container direction='row' style={{minWidth:"100%",}}>
                    <Grid item xs={1} style={{marginLeft:'5%'}}>  $200</Grid>
                    <Grid item xs={2}>  </Grid>
                    <Grid item xs={7}>  </Grid>
                    <Grid item xs={1}> 2$</Grid>



                  </Grid>
                  <div style={{ background: 'black',minWidth:"100%", marginTop:'7.45%' }}>
                    <Grid item xs={2} style={{ marginTop: '1%', marginLeft: '2%', paddingBottom:'1%' }}> John  </Grid>
                    <Grid item xs={2} style={{ marginTop: '1%', marginLeft: '2%' , paddingBottom:'1%',fontSize:"12px"}}> Comedian </Grid>
                  </div>
                </div>
                          </Grid>

                         
                      </Grid>
                  </div>
        </Grid>
        <Grid item xs={2}>
        <div className='imgContainer2' style={{ backgroundImage: "url(" + img2 + ")" , backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
            <Grid container spacing={0} direction='column' style={{ height: '100%', minWidth: '100%' }} >
              <Grid item xs={9}></Grid>
              <Grid item xs={3} style={{ minWidth: '100%' }} >

                <div style={{}}>
                  <Grid container direction='row' style={{minWidth:"100%",}}>
                    <Grid item xs={1} style={{marginLeft:'5%'}}>  $200</Grid>
                    <Grid item xs={2}>  </Grid>
                    <Grid item xs={7}>  </Grid>
                    <Grid item xs={1}> 2$</Grid>



                  </Grid>
                  <div style={{ background: 'black',minWidth:"100%", marginTop:'7.45%' }}>
                    <Grid item xs={2} style={{ marginTop: '1%', marginLeft: '2%', paddingBottom:'1%' }}> John  </Grid>
                    <Grid item xs={2} style={{ marginTop: '1%', marginLeft: '2%' , paddingBottom:'1%',fontSize:"12px"}}> Comedian </Grid>
                  </div>
                </div>
                          </Grid>

                         
                      </Grid>
                  </div>
        </Grid>
        <Grid item xs={2}>
        <div className='imgContainer2' style={{ backgroundImage: "url(" + img2 + ")", backgroundSize:'contain', backgroundRepeat:'no-repeat' }}>
            <Grid container spacing={0} direction='column' style={{ height: '100%', minWidth: '100%' }} >
              <Grid item xs={9}></Grid>
              <Grid item xs={3} style={{ minWidth: '100%' }} >

                <div style={{}}>
                  <Grid container direction='row' style={{minWidth:"100%",}}>
                    <Grid item xs={1} style={{marginLeft:'5%'}}>  $200</Grid>
                    <Grid item xs={2}>  </Grid>
                    <Grid item xs={7}>  </Grid>
                    <Grid item xs={1}> 2$</Grid>



                  </Grid>
                  <div style={{ background: 'black',minWidth:"100%", marginTop:'7.45%' }}>
                    <Grid item xs={2} style={{ marginTop: '1%', marginLeft: '2%', paddingBottom:'1%' }}> John  </Grid>
                    <Grid item xs={2} style={{ marginTop: '1%', marginLeft: '2%' , paddingBottom:'1%',fontSize:"12px"}}> Comedian </Grid>
                  </div>
                </div>
                          </Grid>

                         
                      </Grid>
                  </div>
        </Grid>
      </Grid>
    </div>
  );
}

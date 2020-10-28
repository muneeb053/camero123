import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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



export default function MediumAdSpace() {
  const classes = useStyles();

    return (
        <div className={classes.root} style={{color:'white'}}>

            <Grid container>
                <Grid item md={12} >
                    <Grid container>
                        <Grid item md={1}></Grid>
                        <Grid item md={10}>

                            <Grid container style={{textAlign:'Center'}}>

<Grid item md={4}><div className='MediumAdd'> <p style={{paddingTop:'25%'}}> 320 x 250</p> <p>AD SPACE </p></div></Grid>

<Grid item md={4}><div className='MediumAdd'> <p style={{paddingTop:'25%'}}> 320 x 250</p> <p>AD SPACE </p></div></Grid>
<Grid item md={4}><div className='MediumAdd'> <p style={{paddingTop:'25%'}}> 320 x 250</p> <p>AD SPACE </p></div></Grid>




                            </Grid>



                        </Grid>
                        <Grid item md={1}></Grid>
                    </Grid>

                </Grid>



            </Grid>

    </div>
  );
}

import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../css/style.css'



const useStyles = makeStyles((theme) => ({

}));



export default function Header() {
  const classes = useStyles();

  return (
    <div style={{position:"sticky"}} >  
       <Grid container style={{position:"sticky"}}>

<Grid md={12} style={{position:"sticky"}}>
<div className='CustomHeader'>

<Grid container>
  <Grid item md={12}>
    <Grid container>
      <Grid item md={4}>
        <Grid container>
          <Grid item md={12}>
    <Grid container>
      <Grid item md={3} className='tabs' style={{textAlign:"center",marginTop:"5vh",fontSize:"22px",color:'#ff5c33'}}><a href="#" style={{color:'#ff5c33'}}>Explore</a></Grid>
      <Grid item md={3} className='tabs' style={{textAlign:"center",marginTop:"5vh",fontSize:"22px",color:'#ffcc00'}}><a href="#" style={{color:'#ffcc00'}}>Category</a></Grid>
      <Grid item md={3} className='tabs' style={{textAlign:"center",marginTop:"5vh",fontSize:"22px",color:'#0080ff'}}><a href="#" style={{color:'#0080ff'}}>Inbox</a> </Grid>
      <Grid item md={3} className='tabs' style={{textAlign:"center",marginTop:"5vh",fontSize:"22px",color:'#ff33cc'}}><a href="#" style={{color:'#ff33cc'}}>Shop</a></Grid>
    </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4}style={{textAlign:"center",marginTop:"4vh",fontSize:"32px",color:'#ff0066'}}>Camero</Grid>
      <Grid item md={4}>
        <Grid container>
          <Grid item md={12}>
            <Grid container>
              <Grid item md={1}></Grid>
  <Grid item md={9}style={{textAlign:"center",marginTop:"5vh",fontSize:"22px",color:'#ff5c33',fontFamily: "adobe-clean"}}><input type="text" name="search" placeholder="Search here"></input></Grid>
              <Grid item md={2}style={{marginTop:"4vh",color:'#ff5c33',fontFamily: "adobe-clean"}}><a href="#" style={{color:'#ff33cc' , borderRadius:'50%'}}><img src="https://www.w3schools.com/howto/img_avatar.png" width="50" height="50"  ></img></a></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</Grid>

</div>

</Grid>



       </Grid>
    </div>
  );
}

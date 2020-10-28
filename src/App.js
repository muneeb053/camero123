import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import CentGRIDeredGrid from './components/grid';
import VideoPlayer from './components/videoplayer';
import UserGrid from './components/userGrid';
import Ad from './components/Ad';
import SmallAdSpace from './components/SmallAdSpace';
import LargeAdSpace from './components/LargeAdSpace';
import MediumAdSpace from './components/MediumAdSpace'

function App() {
  return (
    <div className="App" style={{ background:'black'}}>
       <Header></Header> 
      <VideoPlayer style={{marginTop:"5vh"}}></VideoPlayer>
    
      <CentGRIDeredGrid></CentGRIDeredGrid>
     <SmallAdSpace></SmallAdSpace>
<UserGrid title='Popular'> </UserGrid>
<LargeAdSpace></LargeAdSpace>
<UserGrid title='Top Rated'> </UserGrid>
<LargeAdSpace></LargeAdSpace>
<UserGrid title='OTHER MODULES'> </UserGrid>
<LargeAdSpace></LargeAdSpace>
<UserGrid title='OTHER MODULES'> </UserGrid>
<LargeAdSpace></LargeAdSpace>
<UserGrid title='OTHER MODULES'> </UserGrid>
<MediumAdSpace></MediumAdSpace>

      
    </div>
  );
}

export default App;


// import { add, sub, mul, div } from "./App";
// import  Card from "./Cards";
// import Sdata from "./Sdata";



// const t= new Date().toLocaleTimeString();
// const d=new Date().toLocaleDateString();
// let time =new Date();
// time=time.getHours();
// const img1="https://picsum.photos/200/300";
// const img2="https://picsum.photos/400/300";
// const img3="https://picsum.photos/500/300";
// const links="https://www.google.com";
// const heading ={
//     color:'black',
//   textAlign: 'center',
//  textShadow: 'yellow',
//   fontWeight: 'bold',
//   margin: '20px',
//   fontFamily: "'Bona Nova', serif"

// }
// let greeting ='';
// const styles={
// }
// if(time>0 && time<12){
//     greeting=' Good Morning';
//     styles.color="green";
// }
// else if(time>12 && time <19){
//     greeting='good afternoon';
//     styles.color="orange";

// }
// else{
//     greeting='good night ';
//     styles.color="brown";
// }

/* <>
   <h1 style = {heading}> Random Photo Gallery </h1>

<p > CURRENT DATE:{d}</p>
<p > CURRENT Time:{t}</p>

<div className='unique'>
<h1>Hello sir, <span style={styles} >{greeting}</span> </h1>
</div>
<div className='img_woek'>
<img src={img1} alt="randomImage "/>
<img src={img2} alt="randomImage "/>
<a href={links} target="_sattvik" >
<img src={img3} alt="randomImage "/>
</a> 
</div>
   */ 
import React from "react";
import ReactDOM from "react-dom";
 import "./index.css";
import App from "./App";
import {BrowserRouter} from  'react-router-dom'
ReactDOM.render( <>
<BrowserRouter>
<App/>
</BrowserRouter>
    </>,
  document.getElementById("root")
);

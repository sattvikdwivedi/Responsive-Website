import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
 import Navbar from "./components/Navbar";


import {Route, Routes,Redirect} from "react-router-dom";
 const App =()=>{

    return (
        <>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route  exact path="/contact" element={<Contact/>}/>
            <Route   exact path="/about" element={<About/>}/>
            <Route exact path="/service" element={<Service/>}/>
            {/* <Redirect   to ="/"/> */}
        </Routes>
        
        </>
    );
 }
 export default App;
 
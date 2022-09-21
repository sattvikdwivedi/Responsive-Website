import React from "react";
import { Link } from "react-router-dom";
// import web from "../src/images/img2.svg";
 const Common =(props)=>{

    return (
        <>
        
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto"> 
            <div className="row">

            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h2>{props.name} <strong className="brand-name">Nothing Us</strong></h2>
                <h3 className="my-3">
                    We are the team of talented developers for you
                </h3>
                <div className="mt-3">
                    <Link to={props.visit} className="btn-get-started">
                    {props.btname}
                    </Link>
                </div>
            </div>
            { <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={props.imagesrc} className="img-fluid animated " alt="home img "/>
            </div> }
    

            </div>
            </div>
            </div>
            </div>
        </section>
        </>
    );
 }
 export default Common;
 
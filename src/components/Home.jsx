import React from "react";
import { Link } from "react-router-dom";
import Common from "./Common";
import Footer from "./Footer";
// import web from "../src/images/img2.svg";
const Home = () => {
  return (
    <>
      <Common
        name="Grow your Buisness with developers "
        visit="/service"
        btname="Get Started "
        imagesrc="https://img.freepik.com/free-vector/big-data-science-analysis-isometric-composition_1284-54449.jpg?w=900&t=st=1663537700~exp=1663538300~hmac=daa792d69a8af2765132a5a2f348bd8c32fedcb0fd86771782431cccc62e2830"
      />
      <Footer/>
    </>
  );
};
export default Home;

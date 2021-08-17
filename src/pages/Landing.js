import React, { useState, useEffect, useRef } from "react";

import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Button from "../components/Button";

import "../styles/pages/Landing.scss";
import partnerb from "../assets/neab.jpg";



const Landing = () => {

  return (
    <div className="Landing">
      {/* <Navigation /> */}

      <Hero />


   

      {/* <Footer /> */}
    </div>
  );
};

export default Landing;


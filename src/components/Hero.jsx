import React from "react";
import "../styles/Hero.css";
import nino from '../assets/niño.png'
import carretera from '../assets/carretera.png'
import Espacio from '../assets/Espacio.png'
import Logo from '../assets/logo.png'

const Hero = () => {
    return (
       <div className="hero">
        <img  className="Nino" src={nino} alt="nino en bicicleta"/>
            <img className="carretera" src={carretera} alt="carretera "/>
            <img className="avion" src={Espacio} alt="aviones de papel"/>
            <img className="logo" src={Logo} alt="Logo"/>
        <div className="hero-content">
            <h1 className="hero-title">Bike Connect</h1>
            <button className="hero-button">Reviews</button>
        </div>
       </div>
    );
};

export default Hero
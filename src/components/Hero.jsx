import React from "react";
import { useTheme } from "../context/ThemeContext";
import "../styles/Hero.css";
import "../index.css"
import nino from '../assets/niño.png'
import carretera from '../assets/carretera.png'
import Espacio from '../assets/Espacio.png'
import Logo from '../assets/logo.png'

const Hero = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    const handdler = () => {
        toggleTheme()
    }

    return (
        <div className={`hero ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <img  className="Nino" src={nino} alt="nino en bicicleta"/>
            <img className="carretera" src={carretera} alt="carretera "/>
            <img className="avion" src={Espacio} alt="aviones de papel"/>
            <img className="logo" src={Logo} alt="Logo"/>
        <div className="hero-content">
            <h1 className="hero-title">Bike Connect</h1>
            <button className="hero-button">Reviews</button>
            <button className="button-theme" onClick={handdler}>
                    {isDarkMode ? "☀️" : "🌙"}
                </button>
        </div>
       </div>
    );
};

export default Hero;
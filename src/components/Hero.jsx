import React from "react";
import { useTheme } from "../context/ThemeContext";
import "../styles/hero.css";
import "../index.css"

const Hero = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    const handdler = () => {
        toggleTheme()
    }

    return (
        <div className={`hero ${isDarkMode ? "dark-mode" : "light-mode"}`}>
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
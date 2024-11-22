import React from "react";
import Hero from "./components/Hero"
import Select from "./components/Select"
import Footer from "./components/Footer"
import Info from "./components/Info"
import "../src/App.css"


const App = () => {
  return (
    <div className="App">
      <Hero/>
      <Select/>
      
      <Info/>
      <Footer/> 
    </div> 
  );
};

export default App
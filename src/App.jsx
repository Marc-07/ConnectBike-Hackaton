import React from "react";
import Hero from "./components/Hero"
import Select from "./components/Select"
import "../src/App.css"
import ProductList from "./components/ProductList";


const App = () => {
  return (
    <div className="App">
      <Hero/>
      <ProductList/>
      <Select/>

    </div> 
  );
};

export default App
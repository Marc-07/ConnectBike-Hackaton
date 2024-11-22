import React from "react";
import Hero from "./components/Hero"
import "../src/App.css"
import ProductList from "./components/ProductList";


const App = () => {
  return (
    <div className="App">
      <Hero/>
      <ProductList/>
    </div> 
  );
};

export default App
import React from "react";
import Home from "./Comps/Home/Home";
import { BrowserRouter } from "react-router-dom";
import Weather from './Comps/Weather/Weather'
import './App.css';



function App() {
  return (
    <BrowserRouter>
        <Home />
        <Weather />
    </BrowserRouter>
  );
}

export default App;

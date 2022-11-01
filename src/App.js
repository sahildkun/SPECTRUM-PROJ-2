
import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import {BrowserRouter , Routes,Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';


function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar/>

      <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/about" element={<About/>}/>
      
      <Route  path="/contact" element={<Contact/>}/>
      <Route  path="/gallery" element={<Gallery/>}/>

      </Routes>
      
      
      
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;

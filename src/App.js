import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Destination from './component/Destination';
import Search from './component/Search';
import Selects from './component/Selects';
import Crousal from './component/Crousal';
import Footer from './component/Footer';

function App() {
  return (
   <>
    <Navbar/>
    <Hero/>
    <Destination/>
    <Search/>
    <Selects/>
    <Crousal/>
    <Footer/>
   </>
  );
}

export default App;

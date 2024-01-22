import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import { useEffect, useState } from 'react';
import AboutUs from './components/AboutUs';


function App() {


  return (
    <>
    <HashRouter>
      <Navbar  />
      <div id="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="*" element={<NoPage />} />
          </Routes>  
      </div>
      <Footer />
    </HashRouter>
    </>
  );
}

export default App;

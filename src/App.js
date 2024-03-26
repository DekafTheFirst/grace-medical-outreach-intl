import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import { useEffect, useState } from 'react';
import AboutUs from './components/AboutUs';
import Missions from './components/Missions';
import JoinUs from './components/JoinUs';
import ScrollToTop from './components/ScrollToTop';
import Give from './components/Give';


function App() {


  return (
    <div className='app'>
    <HashRouter>
      <Navbar  />
      <ScrollToTop />
      <div id="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="/missions" element={<Missions/>}/>     
            <Route path="/join-us" element={<JoinUs />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/give" element={<Give />}/>

            <Route path="*" element={<NoPage />} />
          </Routes>  
      </div>
      <Footer />
    </HashRouter>
    </div>
  );
}

export default App;

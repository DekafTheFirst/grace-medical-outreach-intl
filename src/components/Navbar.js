import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import Home from './Home';

const routes = [
  { name: "home", path: "/", component: <Home /> }
]


const Navbar = () => {
  const [dropdownClicked, setDropDownClicked] = useState(false);
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false)


  useEffect(() => {
    // Listen for scroll events
    const handleScroll = () => {
      // Check the scroll position
      if (window.scrollY > 70) { // Change 100 to the desired scroll position
        // Update the state to indicate that the user has scrolled
        setScrolled(true);
      } else {
        // Update the state to indicate that the user hasn't scrolled
        setScrolled(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleShow = () => {
    setShow(!show)
  }

  return (
    <nav className={`navbar navbar-expand-md fixed-top ${scrolled ? 'scrolled bg-dark navbar-dark': 'navbar-dark'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/" onClick={() => setShow(false)}><img src={require("../imgs/grace-medical/g-icon.png")} alt="" /></Link>
        <button className="navbar-toggler" type="button" onClick={toggleShow}>
          <span className="navbar-toggler-icon my-navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${show ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={() => { setShow(false) }}>Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about-us" className="nav-link" onClick={() => { setShow(false) }}>About Us</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/missions" className="nav-link" onClick={() => { setShow(false) }}>Missions</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/join-us" onClick={() => { setShow(false) }}>Join Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={() => { setShow(false) }}>Contact</NavLink>
            </li>

          </ul>
          <li className="nav-item give-btn">
            <NavLink className="nav-link" to="/give" onClick={() => { setShow(false) }}>Give</NavLink>
          </li>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
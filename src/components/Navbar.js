import React, { useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import Home from './Home';

const routes = [
  {name: "home", path: "/", component: <Home />}
]


const Navbar = () => {
  const [dropdownClicked, setDropDownClicked] =  useState(false);
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(!show)
  }

  return (
    <nav className="navbar navbar-expand-md navbar-light ">
        <div className="container-fluid">
          <Link className="navbar-brand logo" to="/" onClick={toggleShow}><img src={require("../imgs/grace-medical/g-icon.png")} alt="" /></Link>
          <button className="navbar-toggler" type="button"  onClick={toggleShow}>
            <span className="navbar-toggler-icon my-navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? 'show': ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" onClick={()=>{setShow(false)}}>Home</NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink to="/about-us" className="nav-link" onClick={()=>{setShow(false)}}>About Us</NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink to="/missions" className="nav-link" onClick={()=>{setShow(false)}}>Missions</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/join-us" onClick={()=>{setShow(false)}}>Join Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" onClick={()=>{setShow(false)}}>Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/donate" onClick={()=>{setShow(false)}}>Donate</NavLink>
              </li>
            </ul>
          </div>
          
        </div>
    </nav>
  )
}

export default Navbar
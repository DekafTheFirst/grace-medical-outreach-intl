import React from 'react'

import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer>
        <div className="container-fluid">
            <div className="row">
                <div className="footer-details col-md-6">
                    <Link to="#" className="logo" ><img src={require("../icons/letter-m.png")} alt="logo" className="logo-img" /></Link>
                    <div className="detail">
                        <h5>Address: </h5>
                        <p>7869, Lugbe, Abuja, Nigeria</p>
                    </div>
                    <div className="detail">
                        <h5>Phone: </h5>
                        <Link to="tel:+2348036778249">+2348036778249</Link>
                    </div>
                    <div className="detail">
                        <h5>Email: </h5>
                        <Link to="mailto:contact@michgidglobal@gmail.com">contact@michgidglobal@gmail.com</Link>
                    </div>
            
                
                </div>
                <div className="footer-content col-md-6">                    
                    <div className="media-links mb-5">
                        <h5>Socials: </h5>
                        <div className="links">
                            <Link to="#">
                                <img className="media-icon" src={require("../icons/facebook.png")} alt=""/>
                            </Link>
                            <Link to="#">
                                <img className="media-icon" src={require("../icons/twitter.png")} alt=""/>
                            </Link>
                            <Link to="#">
                                <img className="media-icon" src={require("../icons/instagram.png")} alt=""/>
                            </Link>
                            <Link to="#">
                                <img className="media-icon" src={require("../icons/linkedin.png")} alt=""/>
                            </Link>
                        </div>
                    </div>
                    <form action="">
                        <h5>Newsletter: </h5>
                        <input type="email" name="" id="" placeholder="Your email here"/>
                        <button type="submit" className="page-btn-2">Subscribe</button>
                    </form>
                </div>
            
                <div className="copy-right mt-3">
                    <p>Michgid Global Resources Ltd. &copy; 2023, All RIghts Reserved.</p>
                    <Link to="" className="">Contact Us</Link>
                </div>
                
        </div>
        
        </div>
    </footer>
  )
}

export default Footer
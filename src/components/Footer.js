import React from 'react'

import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer>
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-7">
                    <div className="row links">
                        <div className="link-category col-6 col-lg-4">
                            <h5>Organization</h5>
                            <Link href="./about-us">About Us</Link>
                            <Link href="./about-us">Faith Statement</Link>
                            <Link href="./about-us">Contact Us</Link>
                        </div>
                        <div className="link-category col-6 col-lg-4">
                            <h5>Services</h5>
                            <Link href="./about-us">Medical Outreach</Link>
                            <Link href="./about-us">Medical Care</Link>
                            <Link href="./about-us">Spiritual Counseling</Link>
                        </div>
                        <div className="link-category col-6 col-lg-4">
                            <h5>Contact</h5>
                            <Link href="./about-us">Home</Link>
                            <Link href="./about-us">Join Us</Link>
                            <Link href="./about-us">Contact</Link>
                        </div>
                    </div>
                </div>
                <div className="footer-content col-md-6 col-lg-5">                    
                    
                    <form action="">
                        <h5>Newsletter: </h5>
                        <div className="form-container">
                            <input type="email" name="" id="" placeholder="Your email here" />
                            <button type="submit" className="page-btn">Subscribe</button>
                        </div>
                        
                    </form>

                    <div className="media-links">
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


                    <div className="company-info">
                        <p>Mobile: <Link to="tel:+2348033976703">+2348033976703</Link></p>
                        <p>Email: <Link to="mailto:gracemedicaloutreachintl@gmail.com">gracemedicaloutreachintl@gmail.com</Link></p>
                        <p>Address: PLOT 132, INDEPENDENCE AVENUE, CENTRAL BUSINESS DISTRICT, GARKI, ABUJA.</p>

                    </div>
                </div>
            
                <div className="copy-right mt-3">
                    <Link to="#" className="logo" ><img src={require("../imgs/grace-medical/g-icon.png")} alt="logo" className="logo-img" /></Link>

                    <p>Grace Medical Outreach Intl. &copy; 2023, All RIghts Reserved.</p>
                </div>
                
        </div>
        
        </div>
    </footer>
  )
}

export default Footer
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
                                <input type="email" style={{ fontSize: 13 }} name="" id="" placeholder="Your email here" />
                                <button type="submit" className="page-btn">Subscribe</button>
                            </div>

                        </form>

                        <div className="media-links">
                            <div className="links">
                                <Link to="#">
                                    <img className="media-icon" src={require("../icons/facebook.png")} alt="" />
                                </Link>
                               
                                <a
                                    href="https://www.instagram.com/gracemedicaloutreachintl/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="media-icon"
                                        src={require("../icons/instagram.png")}
                                        alt="Instagram"
                                    />
                                </a>
                                <a
                                    href="https://www.youtube.com/@GraceMedicalOutreachIntl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="media-icon"
                                        src={require("../icons/youtube.png")}
                                        alt="Instagram"
                                    />
                                </a>
                            </div>

                        </div>


                        <div className="company-info">
                            <p style={{ fontSize: 14 }}>Mobile: <Link to="tel:+2348033976703">+2348033976703</Link></p>
                            <p style={{ fontSize: 14 }}>Email: <Link to="mailto:gracemedicaloutreachintl@gmail.com">gracemedicaloutreachintl@gmail.com</Link></p>
                            <p style={{ fontSize: 14 }}>Address: Plot 132, Independence Avenue, Central Business District, Garki, Abuja.</p>

                        </div>
                    </div>

                    <div className="copy-right mt-3">
                        <Link to="#" className="logo" ><img src={require("../imgs/grace-medical/g-icon.png")} alt="logo" className="logo-img" /></Link>

                        <p>Grace Medical Outreach Intl. &copy; {new Date().getFullYear()}, All RIghts Reserved.</p>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer
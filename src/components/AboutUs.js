import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div className='page about-us'>
        <div className='banner'>
            <div className="banner-heading">
                <h1>About Us</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </nav>
            </div>
        </div>


        <section className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h2 className='heading'>Our Story</h2>
                    <p className='body-text'>
                        Established in 2018, Grace Medical
                        Outreach Intl was born from a shared
                        belief in the healing power of grace and
                        the transformative love of Jesus Christ.
                        What started as a collective vision has
                        grown into a steadfast commitment to
                        combining medical care with God's grace,
                        reaching far and wide to uplift lives.
                    </p>
                </div>

                <div className="col-12 col-md-6">
                    <img src={require('../imgs/grace-medical/45.JPG')}/>
                </div>
            </div>
            <div className="row align-items-start">
                <div className="col-12 col-md-6">
                    <h2 className='heading'>Our Mission</h2>
                    <p className='body-text'>
                        At the core of Grace Medical Outreach Intl is a dedication to providing holistic and compassionate healthcare. Our mission extends beyond treating physical ailments, embracing the emotional and spiritual dimensions of health. Compassion, excellence, faith, and integrity are the pillars that guide our every endeavor.
                    </p>
                </div>
                <div className="col-12 col-md-6 justify-content-start">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                OUR VALUES
                            </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Showing compassion to the less previledged through medical care and sharing the love of Christ.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                OUR VISION
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>Reaching the less priviledged with the love of God through Medical and other social amenities.</p>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                OUR OBJECTIVES
                            </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li>To provide free comprehensive health care to citizens in our communities, especially the less priviledged.</li>
                                        <li>To initiate and support free community development projects such as, water, electricity, health centeres schools, etc.</li>
                                        <li>To engage in rural evangelism and other spiritual support programmes based on the bible.</li>
                                        <li>To promote advocacy against communicable and non-communicable diseases such as HIV-AIDS, Cholera, Measles, Meningitis, Lassa Fever, Ebola, Tuberculosis, Hepatitis, Malaria, Drug Abuse, Hypertension, Diabetes, Sickle Cell Disease, in line with sustainable development goals.</li>

                                    </ul>
                                </div>
                            </div>
                        </div>                   
                    </div>
                </div>                
            </div>

            <div className="row">
                <div className="col-12 col-md-6">
                    <h2 className='heading'>Holistic Approach to Healthcare</h2>
                    <p className='body-text'>
                        What makes us unique is our holistic approach to healthcare. Recognizing the inherent worth of each individual, our team of medical professionals, chaplains, and support staff collaborates to offer comprehensive medical services, spiritual support, and emotional healing.                    
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <img src={require('../imgs/grace-medical/20.JPG')}/>
                </div>                
            </div>

            <div className="row">
                <div className="col-12 col-md-6">
                    <h2 className='heading'>Serving Beyond Boundaries</h2>
                    <p className='body-text'>
                        From local communities to international outreach programs, Grace Medical Outreach Intl extends its healing touch to diverse corners of the world. Through medical clinics, health education initiatives, and responses to global health crises, we strive to be the hands and feet of Jesus, reaching those who need it most.
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <img src={require('../imgs/grace-medical/32.JPG')}/>
                </div>                
            </div>

            <div className="row">
                <div className="col-12 col-md-6">
                    <h2 className='heading'>Christian Values in Action</h2>
                    <p className='body-text'>
                        Grace Medical Outreach Intl is more than an organization; it's a living embodiment of Christian values. Our chaplains play an integral role, providing spiritual support, counseling, and prayer to those seeking solace and understanding amidst their healthcare journey.
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <img src={require('../imgs/grace-medical/25.JPG')}/>
                </div>                
            </div>

            <div className="row">
                <div className="col-12 col-md-6">
                    <h2 className='heading'>Join Us in the Journey</h2>
                    <p className='body-text'>
                        As Grace Medical Outreach Intl continues to grow, we invite you to be a part of this meaningful journey. Whether you are a healthcare professional eager to make a difference, a supporter looking to contribute, or an individual in need of care, our organization is a welcoming community where everyone is valued.
                    </p>
                    <p className='body-text'>
                        Thank you for considering Grace Medical Outreach Intl as a partner in health, healing, and faith. Together, let's extend God's grace through our hands, hearts, and the transformative power of compassionate healthcare.
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <img src={require('../imgs/grace-medical/27.JPG')}/>
                </div>                
            </div>

            
            {/* <div className="row our-team">
                <h6 className='section-heading'>Our Team</h6>
                <h2>Meet the EXCOS</h2>
                <div className="wrapper">
                    <div className="cards">
                        <div className="card">
                            <div className="img-wrapper">
                                <img className="card-img" src={require('../imgs/people/kefas-jibir.png')} alt="board of directors image"/>
                            </div>
                            <div className="card-body">
                                <div className="logo"><img src={require("../imgs/grace-medical/chairman.png")} alt="" /></div>
                                <div className="content">
                                    <span className='name'>Dr Kefas Jibir, MBBS, FWACP</span>
                                    <h5>Chairman</h5>
                                </div>
                                <div className="media-links">
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
                                <p></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img-wrapper">
                                <img className="card-img" src={require('../imgs/grace-medical/person.png')} alt="board of directors image"/>
                            </div>
                            <div className="card-body">
                                <div className="logo"><img src={require("../imgs/grace-medical/secretary.png")} alt="" /></div>
                                <div className="content">
                                    <span className='name'>Pharm Emmanuel Adaji</span>
                                    <h5>General Secretary</h5>
                                </div>
                                <div className="media-links">
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
                                <p></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img-wrapper">
                                <img className="card-img" src={require('../imgs/grace-medical/person.png')} alt="board of directors image"/>
                            </div>
                            <div className="card-body">
                                <div className="logo"><img src={require("../imgs/grace-medical/drugs.png")} alt="" /></div>
                                <div className="content">
                                    <span className='name'>Pharm Toyin Bada</span>
                                    <h5>HOD Pharmacy/Treasurer</h5>
                                </div>
                                <div className="media-links">
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
                                <p></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img-wrapper">
                                <img className="card-img" src={require('../imgs/grace-medical/person.png')} alt="board of directors image"/>
                            </div>
                            <div className="card-body">
                                <div className="logo"><img src={require("../imgs/grace-medical/counseling.png")} alt="" /></div>
                                <div className="content">
                                    <span className='name'>Pst Davidson Iheanyichukwu</span>
                                    <h5>HOD Counselling</h5>
                                </div>
                                <div className="media-links">
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
                                <p></p>
                            </div>
                        </div>


                        <div className="card">
                            <div className="img-wrapper">
                                <img className="card-img" src={require('../imgs/grace-medical/person.png')} alt="board of directors image"/>
                            </div>
                            <div className="card-body">
                                <div className="logo"><img src={require("../imgs/grace-medical/prayer.png")} alt="" /></div>
                                <div className="content">
                                    <span className='name'>Pst Tukura James</span>
                                    <h5>HOD Prayers</h5>
                                </div>
                                <div className="media-links">
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
                                <p></p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="img-wrapper">
                                <img className="card-img" src={require('../imgs/grace-medical/person.png')} alt="board of directors image"/>
                            </div>
                            <div className="card-body">
                                <div className="logo"><img src={require("../imgs/grace-medical/it-department.png")} alt="" /></div>
                                <div className="content">
                                    <span className='name'>Engr Peter Echiye(MCPN)</span>
                                    <h5>HOD Media/IT/Public Relation</h5>
                                </div>
                                <div className="media-links">
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
                                <p></p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="img-wrapper">
                                <img className="card-img" src={require('../imgs/grace-medical/person.png')} alt="board of directors image"/>
                            </div>
                            <div className="card-body">
                                <div className="logo"><img src={require("../imgs/grace-medical/planning.png")} alt="" /></div>
                                <div className="content">
                                    <span className='name'>Moses Ogebe</span>
                                    <h5>HOD Planning/Mobilization</h5>
                                </div>
                                <div className="media-links">
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
                                <p></p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="img-wrapper">
                                <img className="card-img" src={require('../imgs/grace-medical/person.png')} alt="board of directors image"/>
                            </div>
                            <div className="card-body">
                                <div className="logo"><img src={require("../imgs/grace-medical/legal.png")} alt="" /></div>
                                <div className="content">
                                    <span className='name'>Bar Emeka Alioha</span>
                                    <h5>Legal Adviser</h5>
                                </div>
                                <div className="media-links">
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
                                <p></p>
                            </div>
                        </div>


                        
                    </div>
                </div>

                                
            </div> */}
            <h2 className='text-center'>Meet The Team</h2>
            <div className="row justify-content-center g-5">
                <img src={require('../imgs/grace-medical/45.JPG')} alt="" />

                <img src={require('../imgs/grace-medical/19.jpg')} alt="" />

                <img src={require('../imgs/grace-medical/48.jpg')} alt="" />


            </div>

        </section>
    </div>
  )
}

export default AboutUs
import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <section className='about-us-page page'>
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

        <div className="article container-fluid">
            <div className="row">
                    <h2 className='title'>OUR HISTORY</h2>
                    <p className='body-text'>Welcome to Michgid Global Resources Ltd., where innovation and dedication have been at the heart of our journey. Founded in 20**, our story is one of passion, commitment, and a relentless pursuit of excellence in construction and water solutions.</p>
                    <img src={require('../imgs/residential/4.jpg')}/>

                    <h3 className='subheading'>Inception and Vision</h3>
                    <p className='body-text'>
                        Michgid Global Resources Ltd. began with a vision to redefine the standards of construction and borehole drilling services. From the outset, we aimed to be more than just a company; we aspired to be a trusted partner for individuals, businesses, and communities seeking top-tier infrastructure solutions.
                    </p>

                    <h3 className='subheading'>Early Achievements</h3>
                    <p className='body-text'>
                        In our early years, we focused on building a foundation of expertise and reliability. Successfully completing a range of residential, commercial, and industrial construction projects, we quickly earned a reputation for precision, quality, and timely delivery. Our commitment to client satisfaction became the cornerstone of our identity.
                    </p>

                    <h3 className='subheading'>Diversification into Water Solutions</h3>
                    <p className='body-text'>
                        Recognizing the critical importance of water access, we expanded our services to include borehole drilling. This marked a significant milestone as we embraced the challenge of providing sustainable water solutions to diverse sectors, from households to agricultural enterprises.
                    </p>

                    <h3 className='subheading'>Sustainable Practices and Innovation</h3>
                    <p className='body-text'>
                        As we grew, so did our commitment to sustainability. Michgid Global Resources Ltd. embraced eco-friendly construction practices and incorporated innovative technologies to enhance the efficiency of our projects. From energy-efficient buildings to responsible borehole drilling, we have strived to minimize our environmental footprint.                
                    </p>
                    
                    <h3 className='subheading'>Community Engagement</h3>
                    <p className='body-text'>
                        Beyond our projects, we believe in giving back to the communities we serve. Michgid Global Resources Ltd. has actively participated in community development initiatives, supporting local causes, and fostering positive change. Our engagement goes beyond construction; it's about building lasting relationships with the people we impact.
                    </p>

                    <h3 className='subheading'>Looking Ahead</h3>
                    <p className='body-text'>
                        As we look toward the future, Michgid Global Resources Ltd. remains dedicated to pushing boundaries, embracing emerging technologies, and continually improving our services. We are excited about the opportunities ahead, as we work together with our clients to shape a better, more sustainable future.                
                    </p>

                    <p className='body-text'>
                        Thank you for being a part of our journey. We invite you to explore <Link to='/services/residential-construction' className='contact-us-link'>our services</Link>, discover the innovation woven into every project, and join us in building a legacy of excellence.
                    </p>
            </div>

            <h2 className='title text-center mt-4'>BOARD OF DIRECTORS</h2>
            <div className="cards row">
                <div className="card">
                    <div className="img-wrapper">
                        <img src={require('../imgs/people/1.jpg')} alt="board of directors image"/>
                    </div>
                    <div className="content">
                        <p>Bar Mbagwu</p>
                        <span className='text-muted'>Founder, CEO</span>
                    </div>
                </div>
                <div className="card">
                    <div className="img-wrapper">
                        <img src={require('../imgs/people/2.jpg')} alt="board of directors image"/>
                    </div>
                    <div className="content">
                        <p>Bar Mbagwu</p>
                        <span className='text-muted'>Founder, CEO</span>
                    </div>
                </div>
                <div className="card">
                    <div className="img-wrapper">
                        <img src={require('../imgs/people/3.jpg')} alt="board of directors image"/>
                    </div>
                    <div className="content">
                        <p>Bar Mbagwu</p>
                        <span className='text-muted'>Founder, CEO</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs
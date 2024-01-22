import React from 'react'
import Contact from './Contact'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="container-fluid">
          <div className="hero-content">
            <h1>
              We provide high-quality
              medical care with a
              compassionate touch.
            </h1>
            <p>
              Extending healing hands to those in
              need, providing not just medical care
              but also the love and hope that come
              from our faith.
            </p>
            <Link to="/about-us" className='page-btn'>Learn More</Link>
          </div>
        </div>
        
      </section>
    </>
  )
}

export default Home
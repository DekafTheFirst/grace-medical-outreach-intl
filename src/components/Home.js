import React from 'react'
import Contact from './Contact'
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide,  } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const Home = () => {
  return (
    <div className='home'>
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
      
      <section className="welcome">
        <div className="container-fluid">
          <h1><span>Welcome To</span>Grace Medical Outreach International</h1>
          <p>
            we believe in the transformative
            power of compassionate healthcare
            rooted in Christian values. Our mission
            is to extend healing hands to those in
            need, providing not just medical care
            but also the love and hope that come
            from our faith.
          </p>
        </div>
      </section>


      <section className='reputation bg-green'>
        <div className="container-fluid">
          <div className="row cards">
              <div className="card reputation-card">
                <img src={require("../imgs/grace-medical/helping-hand.png")} alt="" />
                <h5>Helping Hand</h5>
                <p>
                  In the spirit of Christian
                  service, we see ourselves as
                  a compassionate extension
                  of God's love, reaching out
                  to those who require both
                  physical and spiritual
                  healing.
                </p>
                
                <Link to="/join-us"> join us &#8594;</Link>
              </div>
              <div className="card reputation-card">
                <img src={require("../imgs/grace-medical/healing-touch.png")} alt="" />
                <h5>Helping Hand</h5>
                <p>
                  With a focus on both
                  physical and spiritual
                  well-being, we strive to
                  provide comfort, warmth,
                  and a sense of renewal,
                  fostering hope and
                  wholeness in the lives we
                  touch.
                </p>
                
                <Link to="/join-us"> join us &#8594;</Link>
              </div>
              <div className="card reputation-card">
                <img src={require("../imgs/grace-medical/share-christ.png")} alt="" />
                <h5>Helping Hand</h5>
                <p>
                  we are more than healers;
                  we are messengers of hope.
                  Through our work, we share
                  the transformative love of
                  Jesus Christ, bringing
                  comfort, compassion, and
                  the message of faith to all
                  we serve.
                </p>
                <Link to="/join-us"> join us &#8594;</Link>
              </div>
          </div>
        </div>
      </section>


      <section className="home-about-us">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-xl-6 d-flex justify-content-center">
              <div className="header-image">
                <div className="img-wrapper">
                  <img src={require('../imgs/grace-medical/9.jpg')} alt="" />

                </div>
                
                <div className="img-wrapper">
                  <img src={require('../imgs/grace-medical/1.JPG')} alt="" />

                </div>
              </div>
              
            </div>
            <div className="col-xl-6">
              <div className="row mt-4">
                <div className="col-lg-6 col-xl-12 content">
                  <h6>About Us</h6>
                  <h2 className='section-heading'>Our Story Is One Faith</h2>
                  <p>
                    With compassion, and a commitment
                    to serving others. Founded on
                    Christian principles, we strive to be a
                    beacon of hope in the field of
                    healthcare.
                  </p>
                  <div className="row align-items-center">
                    <div className="col-6 col-sm-4">
                      <img src={require("../imgs/grace-medical/1.JPG")} alt="" />
                    </div>
                    <div className="col-6 col-sm-7">
                      <p className="ps-3">We recognize the
                          profound impact
                          that a gentle touch
                          can have on the
                          healing journey.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-12 content">
                  <div className="accordion accordion-flush mt-4" id="accordionFlushExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          OUR VALUES
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          OUR MISSION
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          OUR OBJECTIVES
                        </button>
                      </h2>
                      <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                      </div>
                    </div>
                  </div>
        
        
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </section>

      <section className="services bg-green">
        <div className="container-fluid">

          <h6>What we do</h6>
          <h2 className='section-heading'>The details of our good cause</h2>
          <div className="cards">
            <div className="card">
              <img className="card-img-top" src={require("../imgs/grace-medical/3.jpg")} alt="" />
              <div className="card-body">
                <h3 className='card-title'>Holistic Medical Care</h3>
                <p className='card-text'>Our medical services go beyond treating physical ailments. We approach healthcare holistically, recognizing the interconnectedness of body, mind, and spirit.</p>
                <Link className="page-btn-2 card-btn"  to="/join-us">Join us</Link>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={require("../imgs/grace-medical/4.JPG")} alt="" />
              <div className="card-body">
                <h3 className='card-title'>Community Outreach Programs</h3>
                <p className='card-text'>Our medical services go beyond treating physical ailments. We approach healthcare holistically, recognizing the interconnectedness of body, mind, and spirit.</p>
                <Link className="page-btn-2 card-btn"  to="/join-us">Join us</Link>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={require("../imgs/grace-medical/8.jpg")} alt="" />
              <div className="card-body">
                <h3 className='card-title'>Holistic Medical Care</h3>
                <p className='card-text'>Our medical services go beyond treating physical ailments. We approach healthcare holistically, recognizing the interconnectedness of body, mind, and spirit.</p>
                <Link className="page-btn-2 card-btn"  to="/join-us">Join us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='image-slider'>
        <div className="container-fluid">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination ={{el: ".swiper-custom-pagination"}}
          mousewheel={true}
          keyboard={true}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: true,
          // }}

          modules={[Navigation, Pagination, Mousewheel, Keyboard, ]}
          className="mySwiper"
        >
          <SwiperSlide><img src={require('../imgs/grace-medical/25.JPG')} /></SwiperSlide>
          <SwiperSlide><img src={require('../imgs/grace-medical/6.jpg')} /></SwiperSlide>
          <SwiperSlide><img src={require('../imgs/grace-medical/3.jpg')} /></SwiperSlide>
          <SwiperSlide><img src={require('../imgs/grace-medical/4.JPG')} /></SwiperSlide>
          <SwiperSlide><img src={require('../imgs/grace-medical/5.jpg')} /></SwiperSlide>
          <SwiperSlide><img src={require('../imgs/grace-medical/6.jpg')} /></SwiperSlide>
        </Swiper>
        <div className="swiper-custom-pagination"></div>
        </div>

      </section>
    </div>
  )
}

export default Home
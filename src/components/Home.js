import React, { useRef } from 'react'
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
  const swiperRef = useRef(null);

  return (
    <div className='home'>
      <section className="hero">
        <div className="container-fluid">
          <div className="hero-content">
            <h1>
              High-quality
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
      
      <section className="welcome mx-auto">
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
                <h5>Healing Touch</h5>
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
                <h5>Sharing Christ</h5>
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
                  <img src={require('../imgs/grace-medical/21.JPG')} alt="" />

                </div>
                
                <div className="img-wrapper">
                  <img src={require('../imgs/grace-medical/1.JPG')} alt="" />
                </div>
              </div>
              
            </div>
            <div className="col-xl-6">
              <div className="row mt-4">
                <div className="col-lg-12  content">
                  <h6 className='section-heading' >About Us</h6>
                  <h2 >Our Story Is One Faith</h2>
                  <p>
                    With compassion, and a commitment
                    to serving others. Founded on
                    Christian principles, we strive to be a
                    beacon of hope in the field of
                    healthcare.
                  </p>
                  <div className="row align-items-center mt-3 mb-4">
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
                  <Link to="/about-us" className='page-btn-2'>Learn More</Link>
                </div>
              
              </div>
            </div>
          </div>
          
          
        </div>
      </section>

      <section className="services bg-green">
        <div className="container-fluid">
          <div className="row">
            <h6 className='section-heading'>What we do</h6>
            <h2 >The details of our good cause</h2>
            <div className="cards">
              <div className="card">
                <img className="card-img-top" src={require("../imgs/grace-medical/10.jpg")} alt="" />
                <div className="card-body">
                  <h3 className='card-title'>Holistic Medical Care</h3>
                  <p className='card-text'>Our medical services go beyond treating physical ailments. We approach healthcare holistically, recognizing the interconnectedness of body, mind, and spirit.</p>
                  <Link className="page-btn-2 card-btn"  to="/join-us">Join us</Link>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={require("../imgs/grace-medical/41.JPG")} alt="" />
                <div className="card-body">
                  <h3 className='card-title'>Community Outreach Programs</h3>
                  <p className='card-text'>Through various outreach programs, we aim to improve the overall health of our communities, addressing both medical and social determinants of well-being.</p>
                  <Link className="page-btn-2 card-btn"  to="/join-us">Join us</Link>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={require("../imgs/grace-medical/2.JPG")} alt="" />
                <div className="card-body">
                  <h3 className='card-title'>Spiritual Support and Counseling</h3>
                  <p className='card-text'>We understand the importance of the spiritual aspects of health. Our compassionate chaplains and counselors are ready to provide spiritual support to those in need.</p>
                  <Link className="page-btn-2 card-btn"  to="/join-us">Join us</Link>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>


      <section className='image-slider'>
        <div className="container-fluid">
          <div className="" onMouseEnter={()=>swiperRef.current.swiper.autoplay.stop()} onMouseLeave={()=>swiperRef.current.swiper.autoplay.start()}>
            <Swiper
              ref={swiperRef}
              cssMode={true}
              navigation={true}
              pagination ={{el: ".swiper-custom-pagination", clickable: true}}
              mousewheel={true}
              keyboard={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                
              }}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
              }}

              modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide><img src={require('../imgs/grace-medical/slider/1.JPG')} /></SwiperSlide>
              {/* <SwiperSlide><img src={require('../imgs/grace-medical/slider/2.jpg')} /></SwiperSlide> */}
              <SwiperSlide><img src={require('../imgs/grace-medical/slider/3.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/grace-medical/slider/4.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/grace-medical/slider/5.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/grace-medical/slider/6.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/grace-medical/slider/7.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/grace-medical/slider/8.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/grace-medical/slider/9.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/grace-medical/slider/10.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/grace-medical/slider/11.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/grace-medical/slider/12.JPG')} /></SwiperSlide>

            </Swiper>
            <div className="swiper-custom-pagination"></div>
            </div>
        </div>
        

      </section>
    </div>
  )
}

export default Home
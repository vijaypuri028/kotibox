import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


import Android from '../Kotibox img/icon/icons8-android-os-48.png'
import Java from '../Kotibox img/icon/icons8-java-48.png'
import AngularJS from '../Kotibox img/icon/icons8-angularjs-144.png'
import Wordpress from '../Kotibox img/icon/icons8-apple-48.png'
import Blockchain from '../Kotibox img/icon/icons8-android-os-48.png'
import DotNet from '../Kotibox img/icon/dote net.webp'
import Fullstack from '../Kotibox img/icon/icons8-stack-48.png'
import IOS from '../Kotibox img/icon/icons8-apple-48.png'
import Laravel from '../Kotibox img/icon/icons8-laravel-64.png'
import Magento from '../Kotibox img/icon/icons8-magento-100.png'
import NodeJs from '../Kotibox img/icon/icons8-node-js-48.png'
import react from '../Kotibox img/icon/react netive.png'
import reactNative from '../Kotibox img/icon/react netive.png'
import php from '../Kotibox img/icon/icons8-php-24.png'
import python from '../Kotibox img/icon/icons8-python-48.png'

import Website from '../Kotibox img/service/Website.png'
import Mobile  from '../Kotibox img/service/Mobile1.png'
import Digital from '../Kotibox img/service/DM.png'
import Artificial from '../Kotibox img/service/AI5.png'
import CRM from '../Kotibox img/service/CRM.png'
import ERP from '../Kotibox img/service/CRM 1.png'
import Game from '../Kotibox img/service/game3.png'
import Custom from '../Kotibox img/service/software-.png'
import Support from '../Kotibox img/service/icons8-design-94.png'
import Ecommerce from '../Kotibox img/service/icons8-crm-64 (1).png'
import Videography from '../Kotibox img/service/Video.png'
import UI from '../Kotibox img/service/icons8-design-94.png'




export default function Navbar() {
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the CAPTCHA
    if (captchaAnswer !== '8') {
      setErrorMessage('CAPTCHA is invalid.');
      return;
    }
    setErrorMessage('');
    // Proceed with form submission
    console.log('Form submitted successfully!');
    // You can add your form submission logic here
  };
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-tranprent fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1" to="/">KOTIBOX</Link>
          <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li style={{ fontSize: "20px" }} className="nav-item">
                <Link className="nav-link active  " aria-current="page" to="#"> About Us</Link>
              </li>
              
              <li style={{ fontSize: "20px" }} className="nav-item dropdown ms-4">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button">
                  Services
                </Link>
                <div className="dropdown-menu large-dropdown1 bg-dark" aria-labelledby="navbarDropdown">
                <h2 className='text-danger m-5'>OUR  SERVICES </h2>
                  <div className="dropdown-container">
                    

                    <div className="dropdown-row ">
                      <Link className="dropdown-item2  " to="#"> <img className='icon-img' src={Website} alt='' />Website Development</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"> <img className='icon-img' src={Mobile} alt='' />Mobile App Development </Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={Digital} alt='' /> Digital Marketing </Link> <hr className='text-light' />

                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={Artificial} alt='' /> Artificial Intelligence </Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={CRM} alt='' /> CRM Development</Link> <hr className='text-light' />

                    </div>
                    <div className="dropdown-row ">
                      <Link className="dropdown-item2" to="#"><img className='icon-img' src={ERP} alt='' /> ERP Software Development</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={Game} alt='' /> Game Development</Link> <hr className='text-light' />
                      <Link className="dropdown-item2" to="#"><img className='icon-img' src={Custom} alt='' /> Custom Software Development</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={Support} alt='' /> Support & Solutions </Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"> <img className='icon-img' src={Ecommerce} alt='' /> Ecommerce Solutions</Link> <hr className='text-light' />

                    </div>
                    <div className="dropdown-row ">
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={Blockchain} alt='' /> Blockchain</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={Videography} alt='' /> Videography </Link> <hr className='text-light' />
                      <Link className="dropdown-item2   " to="#"><img className='icon-img' src={UI} alt='' /> UI & UX Design</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={Website} alt='' /> Web Design</Link> <hr className='text-light' />

                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={Fullstack} alt='' /> Full stack </Link> <hr className='text-light' />

                    </div>


                    <div className="dropdown-row">
                      <img style={{height:"500px"}} className='dropdown-img-hire' src='https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />



                    </div>

                  </div>

                </div>
              </li>

            


              <li style={{ fontSize: "20px" }} className="nav-item dropdown ms-4">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button">
                  Industries
                </Link>
                <div className="dropdown-menu large-dropdown3 bg-dark" aria-labelledby="navbarDropdown">
                  <div className="dropdown-container">
                    <div className="dropdown-row">
                      <div className='dropdown-item-icon '>
                        <i style={{ fontSize: "40px" }} class="bi bi-book text-light "></i>
                        <Link className="dropdown-item1 text-light" to="#"> Education & E-learning</Link>
                      </div>
                      <div className='dropdown-item-icon '>
                        <i style={{ fontSize: "40px" }} class="bi bi-amazon text-light "></i>
                        <Link className="dropdown-item1 text-light" to="#"> Food & Restaurants</Link>
                      </div>
                      <div className='dropdown-item-icon '>
                        <i style={{ fontSize: "40px" }} class="bi bi-controller text-light"></i>

                        <Link className="dropdown-item1 text-light" to="#"> Sports & Gaming</Link>
                      </div>


                    </div>
                    <div className="dropdown-row">
                      <div className='dropdown-item-icon '>
                        <i style={{ fontSize: "40px" }} class="bi bi-airplane-engines text-light "></i>
                        <Link className="dropdown-item1 text-light" to="#"> Tour & Travels</Link>
                      </div>
                      <div className='dropdown-item-icon '>
                        <i style={{ fontSize: "40px" }} class="bi bi-bank text-light"></i>
                        <Link className="dropdown-item1 text-light" to="#"> Banking & Finance</Link>
                      </div>

                      <div className='dropdown-item-icon '>
                        <i style={{ fontSize: "40px" }} class="bi bi-collection-play-fill text-light "></i>
                        <Link className="dropdown-item1 text-light" to="#"> Media & Publication</Link>
                      </div>

                    </div>
                    <div className="dropdown-row">

                      <div className='dropdown-item-icon '>
                        <i style={{ fontSize: "40px" }} class="bi bi-hospital text-light "></i>
                        <Link className="dropdown-item1 text-light" to="#"> Healthcare</Link>
                      </div>

                      <div className='dropdown-item-icon '>
                        <i style={{ fontSize: "40px" }} class="bi bi-house-door text-light"></i>
                        <Link className="dropdown-item1 text-light" to="#"> Real Estate</Link>
                      </div>
                      <div className='dropdown-item-icon '>
                        <i style={{ fontSize: "40px" }} class="bi bi-briefcase text-light"></i>
                        <Link className="dropdown-item1 text-light" to="#"> E-Commerce</Link>
                      </div>

                    </div>
                    <div className="dropdown-row">
                      <img className='dropdown-img-1 mt-4' src='https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                      <li style={{ position: "absolute", top: "80%", left: "80%" }} className='btn btn-danger w-15'>Get A Free Consultation</li>
                      <div style={{ position: "absolute", top: "20%", left: "60%" }} className='text-light w-25 '>
                        <h1>OUR SERVICES</h1>
                        <p>KOTIBOX provides an exceptional experience to businesses across industry verticals. Doesn't matter which industry you belong to, our 100+ tech experts with vast experience and knowledge of the latest technologies, and trends deliver world-class mobility solutions concerning your project requirements. </p>
                      </div>
                    </div>

                  </div>
                </div>
              </li>

              <li style={{ fontSize: "20px" }} className="nav-item dropdown ms-4">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button">
                  Hire Developer
                </Link>
                <div className="dropdown-menu large-dropdown4 bg-dark" aria-labelledby="navbarDropdown">

                  <div className="dropdown-container">

                    <div className="dropdown-row ">
                      <Link className="dropdown-item2  " to="#"> <img className='icon-img' src={Android} alt='' /> HIRE <br /> Android Developer</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={Java} alt='' /> HIRE <br /> JAVA Developer </Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={AngularJS} alt='' /> HIRE <br /> AngularJS Developer </Link> <hr className='text-light' />

                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={Blockchain} alt='' /> HIRE <br />  Blockchain Developer</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={DotNet} alt='' />HIRE <br /> Dot Net Developer</Link> <hr className='text-light' />

                    </div>
                    <div className="dropdown-row ">
                      <Link className="dropdown-item2" to="#"><img className='icon-img' src={Fullstack} alt='' /> HIRE <br /> Full Stack Developer</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={IOS} alt='' /> HIRE <br /> IOS Developer</Link> <hr className='text-light' />
                      <Link className="dropdown-item2" to="#"><img className='icon-img' src={Laravel} alt='' /> HIRE <br /> Laravel Developer</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={Magento} alt='' /> HIRE <br /> Magento Developer </Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={NodeJs} alt='' /> HIRE <br /> NodeJs Developer</Link> <hr className='text-light' />

                    </div>
                    <div className="dropdown-row ">
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={Wordpress} alt='' /> HIRE <br /> Wordpress Developer</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={react} alt='' /> HIRE <br /> ReactJS Developer</Link> <hr className='text-light' />
                      <Link className="dropdown-item2   " to="#"><img className='icon-img' src={reactNative} alt='' /> HIRE <br /> React Native Developer</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={php} alt='' /> HIRE <br /> PHP Developer</Link> <hr className='text-light' />

                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={python} alt='' /> HIRE <br />  Python Developer </Link> <hr className='text-light' />

                    </div>


                    <div className="dropdown-row">
                      <img className='dropdown-img-hire' src='https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />



                    </div>

                  </div>

                </div>
              </li>



              <li style={{ fontSize: "20px" }} className="nav-item">
                <Link className="nav-link   " aria-current="page" to="/contact"> Contact Us </Link>
              </li>

              <li style={{ fontSize: "20px" }} className="nav-item me-2 ">
                <Link className="nav-link " aria-current="page" to="#"> Portfolio</Link>
              </li>

              <li className="nav-item dropdown btn btn-danger ms-4">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button">
                  Get A Free Quote
                </Link>
                <div className="dropdown-menu large-dropdown6 bg-dark" aria-labelledby="navbarDropdown">
                  <div className="dropdown-container">
                    <div className="dropdown-row">
                      <div className="form-container">
                        <h4>We respond promptly, typically within 30 minutes</h4>
                        <form onSubmit={handleSubmit}>
                          <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required placeholder='Enter Full Name' />
                          </div>
                          <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required placeholder='Enter Email Address' />
                          </div>
                          <div className="form-group">
                            <label htmlFor="number">Phone Number</label>
                            <input type="number" id="number" name="number" required placeholder='Enter Contact Number' />
                          </div>
                          <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" required placeholder='Enter Message'></textarea>
                          </div>
                          <div className="form-group">
                            <input type="file" id="file" name="file" required />
                          </div>
                          <div className="form-group">
                            <label htmlFor="captcha"> Are you human?* What is 5 + 3?</label>
                            <input
                              type="text"
                              id="captcha"
                              name="captcha"
                              required
                              value={captchaAnswer}
                              onChange={(e) => setCaptchaAnswer(e.target.value)}
                            />
                            {errorMessage && <span className="text-danger">{errorMessage}</span>}
                          </div>
                          <button className='btn-danger' type="submit">Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import './footer.css';
import logo from '../Kotibox img/Main img/png img/Logo.png'
import Company1 from '../Kotibox img/Main img/png img/Company1.jpg'
import Company2 from '../Kotibox img/Main img/png img/Comapny2.jpg'
import Company3 from '../Kotibox img/Main img/png img/Comapny3.jpg'
import backgroundImage from '../Kotibox img/Main img/Footer1.jpg';



const MarqueeImages = () => {
  return (
    <Marquee speed={50} gradient={false}>
      <img src={Company1} alt="India" style={{ width: '60px', height: "60px", marginRight: '20px' }} />
      <img src={Company2} alt="USA" style={{ width: '60px', height: "60px", marginRight: '20px' }} />
      <img src={Company3} alt="India" style={{ width: '60px', height: "60px", marginRight: '20px' }} />
    </Marquee>
  );
};

export default function Footer() {
  const [scrolled, setScrolled] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [result, setResult] = useState('');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>







      <footer class="footer-section" style={{ backgroundImage: `url(${backgroundImage})` }} >
        <div class="container">
          <div class="footer-cta pt-5 pb-5">
            <div class="row">
              <div class="col-lg-4 col-md-4 mb-3">
                <div class="single-cta">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>Find us</h4> 
                    
                    <span className='text-light'>214,Giriraj Nagar ,Iskcon Road ,Mansarovar</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 mb-3">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <h4>Call us</h4>
                    <span className='text-light'>+91 7852017051</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 mb-3">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Mail us</h4>
                    <span> <Link to="mailto:business@kotiboxglobaltech.com">business@kotiboxglobaltech.com</Link>
                    </span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="footer-widget">
                  <div className="logo-details">
                    <i className="fab fa-slack" />
                    <span className="logo_name"><img style={{ height: "90px" }} src={logo} alt='' /></span>
                  </div>
                  <div class="footer-text">
                    <p className='text-light'>Kotibox is the ultimate solution for companies seeking efficient
                      and effective management of their workforce. With its extensive
                      features and user-friendly interface. Kotibox revolutionizes
                      company operations, enhances communication, and drives
                      productivity. Experience the power of Kotibox today and elevate
                      your company to new heights.</p>
                  </div>
                  <div class="footer-social-icon">
                    <span>Follow us</span>
                    <div className="media-icons">
                  <Link to="#"><i className="bi bi-facebook"></i></Link>
                  <Link to="#"><i className="bi bi-twitter"></i></Link>
                  <Link to="#"><i className="bi bi-instagram"></i></Link>
                  <Link to="#"><i className="bi bi-linkedin"></i></Link>
                  <Link to="#"><i className="bi bi-youtube"></i></Link>
                </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Services</h3>
                  </div>
                  <ul >
                    <li ><Link className='text-light' href="#">Home</Link></li>
                    <li ><Link className='text-light' href="#">About</Link></li>
                    <li ><Link className='text-light' href="#">Services</Link></li>
                    <li ><Link className='text-light' href="#">Portfolio</Link></li>
                    <li ><Link className='text-light' href="#">Contact</Link></li>
                    <li ><Link className='text-light' href="#">About us</Link></li>
                    <li ><Link className='text-light' href="#">Our Services</Link></li>
                    <li ><Link className='text-light' href="#">Expert Team</Link></li>
                    <li ><Link className='text-light' href="#">Contact us</Link></li>
                    <li ><Link className='text-light' href="#">Latest News</Link></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div class="footer-text mb-3">
                    <p className='text-light'>Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
                  </div>
                  <div class="subscribe-form">
                    <form action="#">
                      <input className='border' type="text" placeholder="Email Address" />
                      <button className='btn btn-danger'>Submit </button>
                    </form>

                    <div style={{ width: "100%" }} className="marquee-section mt-5">
                      <MarqueeImages />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bottom-details">
          <div className="bottom_text">
            <span>Copyright © 2024 <Link to="#">KOTIBOX</Link> All rights reserved</span>
            <span className="policy_terms">
              <Link to="#">Privacy policy</Link>
              <Link to="#">Terms &amp; conditions</Link>
            </span>
          </div>
        </div>
      </footer>

    </>
  );
}

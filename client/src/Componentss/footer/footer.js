import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import './footer.css';
import logo from '../Kotibox img/png img/Kotologo.png'
import Company1 from '../Kotibox img/png img/Comapny2.jpg'
import Company2 from '../Kotibox img/png img/Comapny3.jpg'
import Company3 from '../Kotibox img/png img/Company1.jpg'
import backgroundImage from '../Kotibox img/Main img/Footer1.jpg';


const MarqueeImages = () => {
  return (
    <Marquee speed={50} gradient={false}>
      <img src={Company1} alt="India" style={{  width: '100px',height:"100px", marginRight: '20px' }} />
      <img src={Company2} alt="USA" style={{ width: '100px',height:"100px", marginRight: '20px' }} />
      <img src={Company3} alt="India" style={{ width: '100px',height:"100px", marginRight: '20px' }} />
    </Marquee>
  );
};

export default function Footer() {
  const [scrolled, setScrolled] = useState(false);

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
    <div className='kotibox' style={{ marginTop:"30px", backgroundImage: `url(${backgroundImage})` }}>

      <footer className={scrolled ? 'scrolled' : ''}>
        <div className=" container content  ">
          <div className="top">
            <div className="logo-details">
              <i className="fab fa-slack" />
              <span className="logo_name"><img style={{height:"150px"}} src={logo} alt=''/></span>
            </div>
            <div className="media-icons">
              <Link to="#"><i className="bi bi-facebook"></i></Link>
              <Link to="#"><i className="bi bi-twitter"></i></Link>
              <Link to="#"><i className="bi bi-instagram"></i></Link>
              <Link to="#"><i className="bi bi-linkedin"></i></Link>
              <Link to="#"><i className="bi bi-youtube"></i></Link>
            </div>
          </div>
          <div className="footer-main-section">
            <div className="footer-main">
              <h1>Connect with Sales</h1>
              <h2>Write us at <span style={{ marginLeft: "150px" }}>Chat with Us</span></h2>
              <h3>
                <Link to="mailto:business@kotiboxglobaltech.com">business@kotiboxglobaltech.com</Link>
               
              </h3>
              <h4>Call us at</h4>
              <h6>+91 7851876946</h6>
              <hr />
              <h1>Connect with HR</h1>
              <h2>Write us at</h2>
              <h3><Link to="mailto:hr@kotiboxglobaltech.com">hr@kotiboxglobaltech.com</Link></h3>
              <h4>Call us at</h4>
              <h6>+91 7852017051</h6>
              <div className="icon">
                <span><i className="bi bi-pc-display-horizontal"></i></span>
                <span>KOTIBOX Global Technologies</span>
              </div>
            </div>
            <div  className='ms-5 mx-auto '>
              <div className="footer-logo">
                <div className='w-20 mx-auto'>
                  <img   className='mx-auto' src="https://th.bing.com/th/id/R.607b9f69862d76af04b474113c0c7ff5?rik=lfnOsbv7mhDNbQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fb%2fbc%2fFlag_of_India.png&ehk=Pk5lH0C%2fhstFahWfb15vLjtrJb3DslIU4%2fAQneo9IIM%3d&risl=&pid=ImgRaw&r=0" alt="India" />
                  <span>India</span>
                  <p>214,Giriraj Nagar ,Iskcon Road ,Mansarovar  </p>
                </div>
               
              </div>
              <div style={{ width: "100%" }} className="marquee-section mt-5">
                <MarqueeImages />
              </div>

            </div>
          </div>
          <hr />
          <div>


          </div>
          <hr className='text-light fs-1' />
          <div className='fotter-list d-flex justify-content-between  text-center flex-wrap mx-5'>
          <ul>
              <h4>ABOUT</h4>
            </ul>
            <ul>
              <h4>SERVICE</h4>

            </ul>
            <ul>
              <h4> TECHNOLOGIES </h4>

            </ul>
            <ul>
              <h4> INDUSTRIES </h4>

            </ul>
         
            <ul>
              <h4>PROTFOLIO </h4>

            </ul>
            <ul>
              <h4>CONTACT</h4>

            </ul>
            <ul>
              <h4>BLOG</h4>

            </ul>
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
    </div>
  );
}

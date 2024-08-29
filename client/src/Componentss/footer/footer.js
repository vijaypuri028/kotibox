import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import './footer.css';

const MarqueeImages = () => {
  return (
    <Marquee speed={50} gradient={false}>
      <img src="https://inkbotdesign.com/wp-content/uploads/2023/01/amazon-logo-design.png" alt="India" style={{ width: '100px', marginRight: '20px' }} />
      <img src="https://inkbotdesign.com/wp-content/uploads/2018/04/new-google-logo-design.png" alt="USA" style={{ width: '100px', marginRight: '20px' }} />
      <img src="https://inkbotdesign.com/wp-content/uploads/2018/03/facebook-logos-of-the-world.png" alt="India" style={{ width: '100px', marginRight: '20px' }} />
      <img src="https://inkbotdesign.com/wp-content/uploads/2012/09/Dell-Logo-Design.png" alt="USA" style={{ width: '100px', marginRight: '20px' }} />

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
    <div className='kotibox' style={{ marginTop: "100px" ,backgroundImage:"url('https://getwallpapers.com/wallpaper/full/c/1/6/6346.jpg')"}}  >
      <footer className={scrolled ? 'scrolled' : ''}>
        <div className=" container content  ">
          <div className="top">
            <div className="logo-details">
              <i className="fab fa-slack" />
              <span className="logo_name">KOTIBOX</span>
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
                <Link to="mailto:sales@example.com">sales@example.com</Link>
                <Link style={{ marginLeft: "20px" }}>sales@example.com</Link>
              </h3>
              <h4>Call us at</h4>
              <h6>+91 8426809853</h6>
              <hr />
              <h1>Connect with HR</h1>
              <h2>Write us at</h2>
              <h3><Link to="mailto:hr@example.com">hr@example.com</Link></h3>
              <h4>Call us at</h4>
              <h6>+91 8426809853</h6>
              <div className="icon">
                <span><i className="bi bi-pc-display-horizontal"></i></span>
                <span>KOTIBOX Global Technologies</span>
              </div>
            </div>
            <div  className='ms-5 mx-auto '>
              <div className="footer-logo">
                <div className='w-40'>
                  <img  className='mx-auto' src="https://th.bing.com/th/id/R.607b9f69862d76af04b474113c0c7ff5?rik=lfnOsbv7mhDNbQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fb%2fbc%2fFlag_of_India.png&ehk=Pk5lH0C%2fhstFahWfb15vLjtrJb3DslIU4%2fAQneo9IIM%3d&risl=&pid=ImgRaw&r=0" alt="India" />
                  <span>India</span>
                  <p>2nd Floor, B.L.Tower – 4th, Plot No.- 45-46, Gayatri Nagar, Maharani Farm, Durgapura, Jaipur - India</p>
                </div>
                <div className=' mx-5 w-40'>
                  <img  className='mx-auto' src="https://th.bing.com/th/id/OIP.bNM6BI7X9AotYV74-pufdgAAAA?w=279&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="USA" />
                  <span>United States</span>
                  <p>17330 Preston Road #200 D Dallas, Texas 75252, USA +1 214 272 0316</p>
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

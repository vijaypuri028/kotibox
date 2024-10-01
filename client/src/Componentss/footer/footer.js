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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the CAPTCHA
    if (captchaAnswer !== '8') {
      setErrorMessage('CAPTCHA is invalid.');
      return;
    }
    setErrorMessage('');

    // Create form data
    const formData = new FormData(e.target);
    formData.append("access_key", "f9250c61-8870-405b-9aa2-db2e9a38a6d5");

    // Submit the form
    setResult("Sending....");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        e.target.reset();
        setTimeout(() => {
          setResult('');
        }, 5000);
      } else {
        setResult(data.message || "An error occurred.");
      }
    } catch (error) {
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <>



      <div className="contact-container container mx-auto pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-8 col-sm-10">
            <div className="footer-form-container text-light bg-dark p-5 mt-5 rounded">
              <h1 className="text-center">Let's build something great together!</h1>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label className='text-light' htmlFor="name">Name</label>
                  <input
                    className="form-control bg-light"
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group mb-3">
                  <label className='text-light' htmlFor="number">Number</label>
                  <input
                    className="form-control bg-light"
                    type="tel"
                    id="number"
                    name="number"
                    required
                    placeholder="Enter your number"
                  />
                </div>
                <div className="form-group mb-3">
                  <label className='text-light' htmlFor="email">Email</label>
                  <input
                    className="form-control bg-light"
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group mb-3">
                  <label className='text-light' htmlFor="message">Project Outline</label>
                  <textarea
                    className="form-control bg-light"
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Describe your project"
                  ></textarea>
                </div>
                <div className="form-group mb-3">
                  <label className='text-light' htmlFor="captcha">CAPTCHA: What is 3 + 5?</label>
                  <input
                    className="form-control bg-light"
                    type="text"
                    id="captcha"
                    name="captcha"
                    value={captchaAnswer}
                    onChange={(e) => setCaptchaAnswer(e.target.value)}
                    required
                    placeholder="Enter your answer"
                  />
                  {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}
                </div>
                <button type="submit" className="btn  btn-danger w-100 ">Submit</button>
                {result && <p className="text-success mt-3">{result}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>



      <div className="kotibox " style={{ backgroundImage: `url(${backgroundImage})` }}>
        <footer className={scrolled ? 'scrolled' : ''}>
          <footer className={scrolled ? 'scrolled' : ''}>
            <div className=" container content  ">
              <div className="top">
                <div className="logo-details">
                  <i className="fab fa-slack" />
                  <span className="logo_name"><img style={{ height: "150px" }} src={logo} alt='' /></span>
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
                  <h2>Write us at </h2>
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
                <div className='ms-5 mx-auto '>
                  <div className="footer-logo">
                    <div className='w-20 mx-auto'>
                      <img className='mx-auto' src="https://th.bing.com/th/id/R.607b9f69862d76af04b474113c0c7ff5?rik=lfnOsbv7mhDNbQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fb%2fbc%2fFlag_of_India.png&ehk=Pk5lH0C%2fhstFahWfb15vLjtrJb3DslIU4%2fAQneo9IIM%3d&risl=&pid=ImgRaw&r=0" alt="India" />
                      <span>India</span>
                      <p>214,Giriraj Nagar ,Iskcon Road ,Mansarovar  </p>
                    </div>

                  </div>

                  <div style={{ width: "100%" }} className="marquee-section mt-5">
                    <MarqueeImages />
                  </div>
                  <div className='text-light footer-text   mt-5'>

                    <h3>About :-</h3>
                    <p>Unlock the potential of next-generation iOS apps with our cutting-edge iOS development services. Our team of experienced professionals ensures that every app undergoes rigorous quality testing to achieve perfection. Partner with us for future-forward iOS application development services.
                    </p>
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
        </footer>
      </div>
    </>
  );
}

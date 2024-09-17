import React, { useState, useEffect } from 'react';
import './Careerabout.css';
import Navbar from '../../Navbars/Navbar';
import Footer from '../../footer/footer';
import Button from '../../button/Button';
import imgSrc from "../../Kotibox img/Main img/Game development.jpg";
import Webservicemain from '../../Webservicemain.js/Webservicemain';
import { Link } from 'react-router-dom';
import pngimg from '../../Kotibox img/Main img/png img/AIpng.jpg';

function Career() {
  const mainText = { Text: "Jobs & Career" }
  const Secondtext = { Text: "Be a part of a place that believes in ideas, innovation, and integrity. We are constantly in the search of potential members for our teams who have ideas and skills to achieve the impossible - together!" }
  const textArray = ["laravel", "CodeIgniter", "WordPress", "WooCommerce", "Magento"];

  const [textIndex, setTextIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [textArray.length]);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (captchaAnswer !== '8') {
      setErrorMessage('CAPTCHA is invalid.');
      return;
    }
    setErrorMessage('');
    const formData = new FormData(e.target);
    formData.append("access_key", "f9250c61-8870-405b-9aa2-db2e9a38a6d5");
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

 
  const cardData1 = [
    {
      title: "Hire Android  Developers",
      link: "#",
      imageSrc: "https://images.pexels.com/photos/26692092/pexels-photo-26692092/free-photo-of-woman-sitting-with-laptop-in-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }, {
      title: "Hire Java Developers",
      link: "#",
      imageSrc: "https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Hire Angular Developers",
      link: "#",
      imageSrc: "https://images.pexels.com/photos/5325104/pexels-photo-5325104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Hire Block Chain Developers",
      link: "#",
      imageSrc: "https://images.pexels.com/photos/7433825/pexels-photo-7433825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Hire Dot net Developers",
      link: "#",
      imageSrc: "https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Hire Full stack Developers",
      link: "#",
      imageSrc: "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Hire IOS App Developers",
      link: "#",
      imageSrc: "https://images.pexels.com/photos/246658/pexels-photo-246658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Hire Laravel Developers",
      link: "#",
      imageSrc: "https://images.pexels.com/photos/5467588/pexels-photo-5467588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Hire magento Developers",
      link: "#",
      imageSrc: "https://images.pexels.com/photos/13620267/pexels-photo-13620267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Hire Node js Developers",
      link: "#",
      imageSrc: "https://images.pexels.com/photos/90333/pexels-photo-90333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },


  ];

  return (
    <>
      <Navbar />
      <Webservicemain imgSrc={imgSrc} mainText={mainText.Text} Secondtext={Secondtext.Text} textArray={textArray[textIndex]} />

      <div className='intro-section'>
        <div className='container intro-content'>
          <img src={pngimg} alt='Tech Solutions' className='intro-image' />
          <div className='intro-text'>
            <h2>Be a Part of our Team</h2>
            <p>
              At Kotibox, we strongly believe in individual growth that eventually leads to collective growth. Keeping our philosophy in mind, we cultivate an atmosphere that encourages freedom of speech, cooperation, collaboration, opportunities, and respect for opinions. If you have ideas and skills, then you are welcome on-board. We will offer you the platform to turn those ideas into reality.
            </p>
            <Link style={{ textDecoration: "none" }} to='/contact'>
              <button className='btn btn-danger'>Learn More</button>
            </Link>
          </div>
        </div>
      </div>

      <section className="why-join-us">
        <h1 className='text-center text-light title'>Why Should You Join Us</h1>

        <div className="career-section card-career-section mx-auto mt-5">
          {cardData1.map((card, index) => (
            <div key={index} className="company-card">
              <div className="card-image" style={{ backgroundImage: `url(${card.imageSrc})` }}></div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <button className='btn btn-danger' onClick={handleModalToggle}>Hire Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {showModal && (
        <div className="custom-modal-backdrop">
          <div className="custom-modal">
            <div className="modal-header">
              <h5 className="modal-title">Consultation Form</h5>
              <button type="button" className="btn-close" onClick={handleModalToggle} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="contact-form-modal" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input className='text-light' type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="number">Number</label>
                  <input className='text-light' type="number" id="number" name="number" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input className='text-light' type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Project Outline</label>
                  <textarea className='text-light' id="message" name="message" rows="4" required></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="captcha">CAPTCHA: What is 3 + 5?</label>
                  <input
                    type="text"
                    id="captcha"
                    name="captcha"
                    value={captchaAnswer}
                    onChange={(e) => setCaptchaAnswer(e.target.value)}
                    required
                    className='text-light'
                  />
                  {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
                <button type="submit" className="contact-button btn btn-danger">Submit</button>
                {result && <p className="result-message">{result}</p>}
              </form>
            </div>
          
          </div>
        </div>
      )}

      <Button />
      <Footer />
    </>
  );
}

export default Career;

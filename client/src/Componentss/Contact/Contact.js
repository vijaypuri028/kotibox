import React, { useState } from 'react';
import Navbar from '../Navbars/Navbar';
import Footer from '../footer/footer'; // Ensure correct case
import './Contact.css';
import imgSrc from '../Kotibox img/Main img/pexels-goumbik-590037.jpg'
import Button from '../button/Button';
import Webservicemain from '../Webservicemain.js/Webservicemain';

function Contact() {
  const mainText = { Text: "Together, let's create something " }
  const Secondtext = { Text: "fantastic!" }
  const textArray = ["Custom AI Software Development", "AI Consulting Services", "Generative AI", "AI-as-a-Service (AIaaS)" ];

  
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
    // Add form submission logic here
  };

  return (
    <>
      <Navbar />
      <Webservicemain imgSrc={imgSrc} mainText={mainText.Text}  Secondtext={Secondtext.Text}  textArray={textArray}  />

      <section className="contact-section" aria-labelledby="contact-label">
        <div className="container">
          <div className="feature-content">
            <p className="section-subtitle">GET IN TOUCH</p>
            <h2 className="section-title text-light">
            Question? assistance? Getting together? Tea? Get in touch with us right now!
            </h2>
          
          </div>
          <div className='d-flex justify-content-between flex-wrap'>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.972855293378!2d75.75927077451787!3d26.840815663178322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db59288ffa799%3A0x17c8a49856eb7797!2z4KSV4KWL4KSf4KWA4KSs4KWJ4KSV4KWN4KS4IOCkl-CljeCksuCli-CkrOCksiDgpJ_gpYfgpJXgpY3gpKjgpYvgpLLgpYngpJzgpL_gpLg!5e0!3m2!1shi!2sin!4v1723539187494!5m2!1shi!2sin" 
              
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="contact-container">
              <div className="contact-form-container">
                <h2 className="contact-title">CONTACT US</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="number">Number</label>
                    <input type="tel" id="number" name="number" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Project Out Line</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
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
                    />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                  </div>
                  <button type="submit" className="contact-button">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Button />
      <Footer />
    </>
  );
}

export default Contact;

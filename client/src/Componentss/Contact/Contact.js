import React, { useState } from 'react';
import Navbar from '../Navbars/Navbar';
import Footer from '../footer/footer';
import './Contact.css';
import Main from '../Main section/Main';
import Button from '../button/Button';

function Contact() {
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
      <Main />

      <section className="contact-section" aria-labelledby="contact-label">
        <div className="container">
          <div className="feature-content">
            <p className="section-subtitle">GET IN TOUCH</p>
            <h2 className="h2 section-title text-light">
              We make your spending stress-free for you to have the perfect control.
            </h2>
            <p className="section-text">
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus.
            </p>
          </div>
          <div className='d-flex justify-content-between flex-wrap'>
          <div className="map-container">
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.972855293378!2d75.75927077451787!3d26.840815663178322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db59288ffa799%3A0x17c8a49856eb7797!2z4KSV4KWL4KSf4KWA4KSs4KWJ4KSV4KWN4KS4IOCkl-CljeCksuCli-CkrOCksiDgpJ_gpYfgpJXgpY3gpKjgpYvgpLLgpYngpJzgpL_gpLg!5e0!3m2!1shi!2sin!4v1723539187494!5m2!1shi!2sin" 
              width="600" 
              height="650" 
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
                  <label htmlFor="message">Message</label>
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

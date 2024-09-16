import React, { useState } from 'react';
import './Webservice.css';
import { Link } from 'react-router-dom';

export default function Webservicemain({ imgSrc, mainText, Secondtext, textArray }) {
  const [showModal, setShowModal] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [result, setResult] = useState('');

  // Toggles the modal open/close
  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaAnswer === '8') {
      setResult('Form submitted successfully!');
      setErrorMessage('');
      // Here you can handle actual form submission
    } else {
      setErrorMessage('Incorrect CAPTCHA answer.');
    }
  };

  return (
    <div className="main-container">
      <div className="image-container">
        <img style={{ objectFit: 'cover' }} className="background-image" src={imgSrc} alt="Background" />
        <div className="image-overlay">
          <div>
            <h1 className="main-text-1">
              {mainText}
            </h1>
            <p className='main-service-p'>{Secondtext}</p>

            <Link style={{ textDecoration: 'none' }}>
              <div className="consult-btn" onClick={handleModalToggle}>CONSULT With Expert</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Modal Component */}
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
            <div className="modal-footer mt-2">
              <button type="button" className="btn btn-secondary" onClick={handleModalToggle}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

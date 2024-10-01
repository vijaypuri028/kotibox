import React, { useState, useEffect } from 'react';
import './main.css';
import video from '../Kotibox img/Main img/Koti box video.mp4';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Main() {
  const [textIndex, setTextIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const textArray = [
    "Website Development", 
    "App Development", 
    "Software Development", 
    "Digital Marketing", 
    "Blockchain", 
    "SaaS Application", 
    "Ecommerce Solutions", 
    "Full Stack", 
    "CRM Development", 
    "Artificial Intelligence"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [textArray.length]);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [result, setResult] = useState('');

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

  return (
    <div className="main-container">
      <div className="video-container">
        <video className="background-video" autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h1 className="text-main-h1">
            YOUR TRUSTED <br /> COLLABORATOR FOR
          </h1>
          <div className="text-main-div mt-2">
            {textArray[textIndex]}
          </div>
          <button type="button" className="btn btn-danger " onClick={handleModalToggle}>
            CONSULT OUR EXPERT
          </button>
        </div>
      </div>

      {/* Modal Component */}
      {showModal && (
        <div className="custom-modal-backdrop">
          <div className="custom-modal">
            <div className="modal-header">
              <h5  className="modal-title">Consultation Form</h5>
              <button type="button" className="btn-close" onClick={handleModalToggle} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="contact-form-modal" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label  htmlFor="name">Name</label>
                  <input className='bg-light' type="text" id="name" name="name " required />
                </div>
                <div className="form-group">
                  <label htmlFor="number">Number</label>
                  <input className=' bg-light' type="number" id="number" name="number" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input className=' bg-light' type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Project Out Line</label>
                  <textarea className=' bg-light' id="message" name="message" rows="4" required></textarea>
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
                    className=' bg-light'
                  />
                  {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
                <button type="submit" className="contact-button btn btn-danger ">Submit</button>
                {result && <p className="result-message">{result}</p>}
              </form>
            </div>
          
          </div>
        </div>
      )}
    </div>
  );
}

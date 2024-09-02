import React, { useEffect, useState } from 'react';
import './Webservice.css'

export default function Webservicemain({ imgSrc, mainText, Secondtext, textArray,serviceButton }) {
  const [scrolled, setScrolled] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [result, setResult] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [textArray.length]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7dab4af5-b3ff-424f-bc0a-26fd9cea0c70");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => {
        setResult("");
      }, 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="main-container">
      <div className="image-container">
        <img className="background-image" src={imgSrc} alt="Background" />
        <div className="image-overlay">
          <div>
            <h1 className="main-text-1 ">
              {mainText} 
            </h1>
            <p className='main-service-p '> {Secondtext}</p>
             {/* <div className="animated-text-1">{textArray[textIndex]}</div> */}
            <div className="consult-btn ">CONSULT With Expert</div>
          </div>
        </div>
      </div>
      <div className="form-container mt-5">
        <h2 >Request a Callback</h2>
        <p className="response-time">We respond promptly, typically within 30 minutes</p>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="number">Number</label>
            <input type="number" id="number" name="number" required />
          </div>
          <div className="form-group">
            <label htmlFor="budget">Budget</label> 
            
            <select  style={{width:"100%",height:"40px"}}  className='bg-dark text-light ' id="budget" name="budget" required>
              <option value="" disabled selected>Select your budget</option>
              <option value="500-1000">$500 - $1,000</option>
              <option value="1000-5000">$1,000 - $5,000</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="10000+">$10,000+</option>
            </select>
            
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button className='btn btn-danger' type="submit">Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

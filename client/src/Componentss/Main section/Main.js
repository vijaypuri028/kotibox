import React, { useState, useEffect } from 'react';
import './main.css';
import video from '../Kotibox img/Koti box video.mp4';

export default function Main() {
  const [textIndex, setTextIndex] = useState(0);
  const [result, setResult] = useState('');
  const textArray = ["Website Development", "App Development", "Software Development", "Digital Marketing"];

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
      <div className="video-container">
        <video className="background-video" autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <div>
            <h1 className='text-main-h1'>
              YOUR TRUSTED  <br />  COLLABORATOR FOR
            </h1>
            <div  className="animated-text text-main-div mt-2">
              {textArray[textIndex]}
            </div>
            <div style={{ marginTop: "100px", fontSize: "20px" }} className='btn btn-danger animated-text'>
              CONSULT OUR EXPERT
            </div>
          </div>
        </div>
      </div>
      <div className="form-container">
        <h2>Let’s build something</h2>
        <h2 style={{ color: "#FFA500" }}>great together!</h2>
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

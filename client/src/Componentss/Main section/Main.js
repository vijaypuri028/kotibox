import React, { useState, useEffect } from 'react';
import './main.css';

export default function Main() {
  const [scrolled, setScrolled] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const textArray = ["Website Development", "App Development", "Software Development", "Digital Marketing"];

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

  return (
    <div className="main-container">
      <div className="video-container">
        <video className="background-video" autoPlay loop muted>
          <source src="https://videos.pexels.com/video-files/5725960/5725960-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <div >
            <h1 style={{ position: "absolute", top: "30%", left: "10%", color: "white", fontSize: "2.5rem" }}>
              YOUR TRUSTED <br /> PARTNER FOR
            </h1>
            
            <div style={{fontSize:"3.5rem",color:"#e69500",fontFamily:"700"}} className="animated-text mt-2">{textArray[textIndex]}</div>
            <div style={{marginTop:"100px", fontSize:"20px" }} className='btn btn-danger animated-text '>CONSULT OUR EXPERT</div>
          </div>
          
        </div>
      </div>
      <div className="form-container">
        <h2>Let’s build something</h2>
        <h2 style={{ color: "#FFA500" }}>great together!</h2>
        <form>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

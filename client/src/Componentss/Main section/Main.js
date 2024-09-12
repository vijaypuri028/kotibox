import React, { useState, useEffect } from 'react';
import './main.css';
import video from '../Kotibox img/Main img/Koti box video.mp4';
import { Link } from 'react-router-dom';

export default function Main() {
  const [textIndex, setTextIndex] = useState(0);
  const textArray = ["Website Development", "App Development", "Software Development", "Digital Marketing","Blockchain","Saas Applinction","Ecommerce Solutions","Full stack","CRM Development","Artificial Intelligence"];

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
          <Link to="/contact">
            <div className="btn btn-danger animated-text">CONSULT OUR EXPERT</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

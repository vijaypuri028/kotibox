import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-section">
      <div className="video-container">
        <iframe
         style={{position:"absolute",top:"15%",left:"20%" }}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-container">
        <h1>About Us</h1>
        <h2>Our Journey</h2>
        <p>
          Welcome to our website! We are passionate about providing you with the
          best experience possible. Our journey began several years ago with the
          mission to deliver high-quality content and services to our users.
        </p>
        <p>
          Our team is dedicated to continuous improvement and innovation, ensuring
          that we stay at the forefront of our industry. We believe in the power of
          community and are committed to fostering a supportive and engaging
          environment for all our users.
        </p>
      </div>
    </div>
  );
}

import React, { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
  const aboutMeImgRef = useRef(null);
  const authorWindowWrapperRef = useRef(null);

  // Counter Animation
  useEffect(() => {
    const animateCounter = (id, end, duration) => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / end));
      const element = document.getElementById(id);
      const counter = setInterval(() => {
        start += 1;
        element.textContent = start;
        if (start === end) {
          clearInterval(counter);
        }
      }, stepTime);
    };

    animateCounter('number1', 918, 10000);
    animateCounter('number2', 55, 10000);
    animateCounter('number3', 359, 10000);
    animateCounter('number4', 246, 10000);
  }, []);

  // Hover Effect
  useEffect(() => {
    const handleMouseEnter = () => {
      if (authorWindowWrapperRef.current) {
        authorWindowWrapperRef.current.style.display = 'block';
      }
    };

    const handleMouseLeave = () => {
      if (authorWindowWrapperRef.current) {
        authorWindowWrapperRef.current.style.display = 'none';
      }
    };

    const aboutMeImg = aboutMeImgRef.current;

    if (aboutMeImg) {
      aboutMeImg.addEventListener('mouseenter', handleMouseEnter);
      aboutMeImg.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (aboutMeImg) {
        aboutMeImg.removeEventListener('mouseenter', handleMouseEnter);
        aboutMeImg.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
    <div className="about-section mt-5 pt-5">
      <div className="video-container">
        <div className='upper-text ms-5 '>
          <h1 className='text-light' style={{fontSize:"50px"}} >We are</h1>
          <h1 style={{fontSize:"55px"}} >KOTIBOX</h1>
        </div>
        <iframe
          className="video mx-auto ms-5 "
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="text-container py-5 pt-5 ">
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
          <div className="sectiontitle mt-5 ">
            <h2 className='text-light'>Projects Statistics</h2>
            <span className="headerLine "></span>
          </div>
  
          <div id="projectFacts" className="sectionClass">
            <div  className="projectFactsWrap mx-auto ">
              <div className="item">
              <i class="bi bi-pc-display-horizontal text-danger"></i>
                <p id="number1" className="number">0</p>
                <span></span>
                <p>Projects done</p>
              </div>
              <div className="item">
              <i class="bi bi-emoji-smile text-danger"></i>
                <p id="number2" className="number">0</p>
                <span></span>
                <p>Happy clients</p>
              </div>
              <div className="item">
              <i class="bi bi-cup-hot text-danger "></i>
                <p id="number3" className="number">0</p>
                <span></span>
                <p>Cups of coffee</p>
              </div>
              <div className="item">
                
              <i class="bi bi-trophy text-danger"></i>
                <p id="number4" className="number">0</p>
                <span></span>
                <p>Award</p>
              </div>
            </div>
          </div>

          </>
  );
}

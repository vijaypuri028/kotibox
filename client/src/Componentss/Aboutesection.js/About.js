import React, { useEffect, useRef } from 'react';
import './About.css';
import Aboutvideo from '../Kotibox img/About section.mp4'

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
    animateCounter('number4', 10, 10000);
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
      <div className="about-section pt-5  ">
        <div className="video-container1">
          <div className='upper-text ms-5 '>
            {/* <h1 className='text-light' style={{ fontSize: "40px" }} >We are</h1> */}
            {/* <h1 style={{ fontSize: "45px" }} >KOTIBOX</h1> */}
          </div>
          <video className="video" autoPlay loop muted>
          <source src={Aboutvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>

        <div className="text-container py-5 pt-5 ">
          <h1>Kotibox Global Technologies</h1>
          <h2> A Leading IT Firm Providing Unique Development Solutions</h2>
          <p>
            We provide a self-optimizing system and solution that gives your brand a dynamic vision since we believe in the rising demands of our customers. With no signs of slowing down, the market is currently developing into a broad array of technologies that include blockchain development, artificial intelligence, cryptocurrency development, and many more terms. Owebest Technologies assists our clients in converting their demand for quick company expansion into larger revenue and increased visibility.
          </p>
          <p>
          We are a company that does more than just development. With the help of the technological revolution, Kotibox Global Technologies comprehends your vision and builds a bride to fulfill the digital ends of your goal.
          </p>



        </div>




      </div>
      <div className=''>
        <div className="sectiontitle   ">
          <h2 className='text-light'>Projects Statistics</h2>
          <span className="headerLine "></span>
        </div>

        <div id="projectFacts" className="sectionClass">
          <div className="projectFactsWrap mx-auto ">
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
      </div>

    </>
  );
}

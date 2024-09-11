import React, { useEffect } from 'react';
import './Company.css';
import Navbar from '../../Navbars/Navbar';
import Footer from '../../footer/footer';
import Button from '../../button/Button';
import Blog from '../../blog/blog';
import Webservicemain from '../../Webservicemain.js/Webservicemain';
import imgSrc from "../../Kotibox img/Main img/Game development.jpg";
import pngimg from '../../Kotibox img/png img/AIpng.jpg';
import Client from '../../Clientsection/Client'
import { Link } from 'react-router-dom';


function CompanyAbout() {
  const mainText = { Text: "Join the Digital Business Team by enrolling" };
  const Secondtext = { Text: "Enroll with Digital Business Team. With over 300+ projects executed, we have a big pool of happy clientele." };
  const textArray = ["Laravel", "CodeIgniter", "WordPress", "WooCommerce", "Magento"];

  // Counter Animation
  useEffect(() => {
    const animateCounter = (id, end, duration) => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / end));
      const element = document.getElementById(id);
      if (!element) return; // Add safety check for missing elements

      const counter = setInterval(() => {
        start += 1;
        element.textContent = start;
        if (start === end) {
          clearInterval(counter);
        }
      }, stepTime);
    };

    animateCounter('number1', 918, 3000);
    animateCounter('number2', 55, 3000);
    animateCounter('number3', 359, 3000);
    animateCounter('number4', 10, 3000);
  }, []);

  return (
    <>
      <Navbar/>
      <Webservicemain imgSrc={imgSrc} mainText={mainText.Text} Secondtext={Secondtext.Text} textArray={textArray} />

      <div className='intro-section'>
        <div className='container intro-content'>
          <img src={pngimg} alt='Tech Solutions' className='intro-image' />
          <div className='intro-text'>
            <h2>Using Tech to Build a Better World!</h2>
            <p>
              Since the inception of Kotibox in 2013, we are known as a pioneer Outsourced Software Development Company, serving clients globally with development centers in India and sales offices in the USA, Canada, and Dubai.
              Our expert team uses proven methodologies and business knowledge to deliver high-quality solutions to our renowned clients.
              We drive real innovation and help transform and grow organizations using trending technologies.
            </p>
            <Link  style={{textDecoration:"none"}} to='/contact'> <button className='btn btn-danger'>Learn More</button> </Link>
          </div>
        </div>
      </div>

      <div className='projects-section'>
        <div className="sectiontitle">
          <h2 className='text-light'>Projects Statistics</h2>
          <span className="headerLine"></span>
        </div>

        <div id="projectFacts" className="sectionClass">
          <div className="projectFactsWrap mx-auto">
            <div className="item">
              <i className="bi bi-pc-display-horizontal text-danger"></i>
              <p id="number1" className="number">0</p>
              <p>Projects Done</p>
            </div>
            <div className="item">
              <i className="bi bi-emoji-smile text-danger"></i>
              <p id="number2" className="number">0</p>
              <p>Happy Clients</p>
            </div>
            <div className="item">
              <i className="bi bi-cup-hot text-danger"></i>
              <p id="number3" className="number">0</p>
              <p>Cups of Coffee</p>
            </div>
            <div className="item">
              <i className="bi bi-trophy text-danger"></i>
              <p id="number4" className="number">0</p>
              <p>Awards</p>
            </div>
          </div>
        </div>
      </div>

      <Client />
      <Button />
      <Blog />
      <Footer />
    </>
  );
}

export default CompanyAbout;

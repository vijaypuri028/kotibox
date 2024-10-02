import React, { useState } from 'react'
import './HRMS.css'

import background from '../../Kotibox img/A Img/background.jpg';
import firstimg from '../../Kotibox img/A Img/firstimg.png';
import product from '../../Kotibox img/A Img/product.png';
import featureIcon from '../../Kotibox img/A Img/featureIcon.png'; // Example small feature image
import arrow from '../../Kotibox img/A Img/arrow.png';
import arrow2 from '../../Kotibox img/A Img/arrow2.png';
import hadderimg from '../../Kotibox img/A Img/hadderimg.png';
import Navbar from '../../Navbars/Navbar';
import Footer from '../../footer/footer';

function HRMS() {

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully');
  };
  return (
    <>

      <Navbar />

      <div className="App text-light">
        {/* Header Section */}
        <div className="header" style={{ backgroundImage: `url(${background})` }}>
          <div className="header-content">
            <div className="left-side mt-5">
              <h1>HRMS</h1>
              <p className="home-button">
                <a href="/" className="home-link">Home</a>/<span className="page-name">PageName</span>
              </p>
            </div>

            <div className="right-side">
              <img src={hadderimg} className="engineer-image" alt="Engineer" />
            </div>
          </div>
        </div>

        {/* Product Section */}
        <div className="product-section">
          <div className="product-content">
            <div className="product-left">
              <div className="product-image-container">
                <img src={product} alt="Product" className="product-image" />
                <img src={arrow} alt="Arrow" className="arrow-image" />
              </div>
            </div>
            <div className="product-right ">
              <h2>Our Amazing Product</h2>
              <p className='text-center '>This product will change your life. It’s designed to help you achieve more with less effort.</p>
              <button className="red-button">Learn More</button>
            </div>
          </div>
        </div>


        {/* Social Media Section */}
        <div>
          <ul className="example-2">
            <li className="icon-content">
              <a
                data-social="spotify"
                aria-label="Spotify"
                href="https://www.spotify.com/"
              >
                <div className="filled" />
                <svg viewBox="0 0 100 100" version="1.1">
                  <path
                    fill="currentColor"
                    d="M50,4C24.7,4,4,24.7,4,50s20.6,46,46,46s46-20.6,46-46S75.4,4,50,4z M71.6,71.5c0,0,0,0.1-0.1,0.1c-0.8,1.2-2,1.8-3.2,1.8  c-0.7,0-1.4-0.2-2-0.6c-10.2-6.3-23.3-7.7-38.8-4.1c-2.1,0.6-4-0.9-4.5-2.7c-0.6-2.3,0.9-4.1,2.7-4.6c17.7-4,32.6-2.3,44.4,5  c0.9,0.4,1.5,1,1.8,1.9C72.2,69.3,72.1,70.5,71.6,71.5z M76.9,59.3L76.9,59.3c-0.8,1.1-1.9,1.9-3.2,2.1c-0.2,0-0.5,0.1-0.7,0.1  c-0.8,0-1.6-0.3-2.3-0.7c-12-7.3-30.1-9.4-43.9-5c-2.5,0.6-5-0.7-5.6-3c-0.6-2.5,0.7-4.9,3-5.5c16.5-5,37.2-2.5,51.4,6.2  c0.8,0.4,1.5,1.3,1.8,2.5C77.9,57,77.6,58.3,76.9,59.3z M83.2,45.6c-1,1.4-2.7,2.1-4.4,2.1c-0.9,0-1.9-0.2-2.7-0.7c0,0,0,0,0,0  c-13.9-8.3-37.8-9.3-51.4-5.1c-2.7,0.8-5.5-0.7-6.4-3.3c-0.8-2.7,0.7-5.6,3.3-6.4c16.2-4.8,43-3.8,59.8,6.2  C83.8,39.6,84.7,42.9,83.2,45.6C83.3,45.5,83.3,45.5,83.2,45.6z"
                  />
                </svg>
              </a>
              <div className="tooltip">Spotify</div>
            </li>
            <li className="icon-content">
              <a
                data-social="Instagram"
                aria-label="Instagram"
                href="https://www.instagram.com/"
              >
                <div className="filled" />
                <svg className="socialSvg instagramSvg" viewBox="0 0 16 16">
                  {" "}
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />{" "}
                </svg>
              </a>
              <div className="tooltip">Instagram</div>
            </li>
            <li className="icon-content">
              <a
                data-social="dribbble"
                aria-label="Dribbble"
                href="https://dribbble.com/"
              >
                <div className="filled" />
                <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
              <div className="tooltip">Linkedin</div>
            </li>
            <li className="icon-content">
              <a
                data-social="telegram"
                aria-label="Telegram"
                href="https://telegram.org/"
              >
                <div className="filled" />
                <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16">
                  {" "}
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />{" "}
                </svg>
              </a>
              <div className="tooltip">whatsapp</div>
            </li>
          </ul>
        </div>



        <div className="features-section">
          <div className="features-content">
            {/* Button with dynamic label */}
            <button type='button' className="Btn">Key Features</button>

            <p id='feature' className='container text-center'>
              Any Company, small or big has been largely created with a core purpose of growth and progression towards self-sufficiency.
              However, the fact is that most of them struggle in facing day-to-day challenges as well as managing their tasks smoothly.
            </p>

            <div className="features-list">
              <div className="feature-item">
                <img src={featureIcon} alt="Feature Icon" className="feature-icon" /> Smart Company Management
              </div>
              <div className="feature-item">
                <img src={featureIcon} alt="Feature Icon" className="feature-icon" /> Learning & Productivity Management
              </div>
              <div className="feature-item">
                <img src={featureIcon} alt="Feature Icon" className="feature-icon" /> Employee Tools & Performance Management
              </div>
              <div className="feature-item">
                <img src={featureIcon} alt="Feature Icon" className="feature-icon" /> Employee Tracking & Travel Summary
              </div>
            </div>
          </div>
        </div>

        {/* Software Slide Section */}
        <div className="software-slide mt-5 flex-warp ">
          <div className="software-content">
            <h2 className='text-center'>Our Software</h2>
            <p className='text-center'>Here are the amazing features of our software that you should check out:</p>
            <div className="features-container mt-5 ">
              <ul className="features-left ms-2">
                <li><img src={featureIcon} alt="Feature Icon" className="feature-icon" /> Employee Management</li>
                <li><img src={featureIcon} alt="Feature Icon" className="feature-icon" /> Lead Management</li>
                <li><img src={featureIcon} alt="Feature Icon" className="feature-icon" /> Project Management</li>
                <li><img src={featureIcon} alt="Feature Icon" className="feature-icon" /> Task Management</li>
                <li><img src={featureIcon} alt="Feature Icon" className="feature-icon" /> System</li>
                <li><img src={featureIcon} alt="Feature Icon" className="feature-icon" /> Sales</li>
                <li><img src={featureIcon} alt="Feature Icon" className="feature-icon" /> Accounting</li>
                <li><img src={featureIcon} alt="Feature Icon" className="feature-icon" /> Payroll Management</li>
              </ul>
              <ul className="features-right">
                <div className="image-container">
                  <img src={firstimg} alt="Software Image" className="software-image mt-5" />
                  <img src={arrow2} alt="Second Image" className="second-image" /> 
                </div>
              </ul>
            </div>
          </div>
        </div>


        {/* Demo Button */}
        <div className="demo-section">
          <button className="demo-button" onClick={() => setShowPopup(true)}>Watch now!</button>
        </div>

   



      </div>


      <Footer />


    </>
  )
}

export default HRMS

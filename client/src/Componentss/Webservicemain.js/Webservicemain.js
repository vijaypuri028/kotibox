import React from 'react';
import './Webservice.css'
import { Link } from 'react-router-dom';

export default function Webservicemain({ imgSrc, mainText, Secondtext, textArray }) {





  return (
    <div className="main-container">
      <div className="image-container">
        <img style={{objectFit:"cover"}} className="background-image" src={imgSrc} alt="Background" />
        <div className="image-overlay">
          <div>
            <h1 className="main-text-1 ">
              {mainText} 
            </h1>
            <p className='main-service-p '> {Secondtext}</p>

             <Link style={{textDecoration:"none"}} to='/contact'> <div className="consult-btn ">CONSULT With Expert</div> </Link>
          </div>
        </div>
      </div>
  
    </div>
  );
}

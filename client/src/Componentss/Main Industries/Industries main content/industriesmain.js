import React from 'react';
import './Industrismain.css';


import Button from '../../button/Button';

function Industriesmain({ mainHeading, subHeading1, subHeading2, introText1, introText2,introText, buttonText, imgSrc1, imgAlt1, imgText1, Text1, imgSrc2, imgAlt2, imgText2, Text2, imgSrc3, imgAlt3, imgText3, Text3, imgSrc4, imgAlt4, imgText4, Text4,imgSrc5, imgAlt5, imgText5, Text5, imgSrc6, imgAlt6, imgText6, Text6, imgSrc7, imgAlt7, imgText7, Text7, imgSrc8, imgAlt8, imgText8, Text8, imgSrc9 , imgSrc10 }) {
  const cardsData = [
    {
   
      title: imgText1,
      text: Text1,
      link: '/services/custom-app-development',
    },
    {
    
      title: imgText2,
      text: Text2,
      link: '/services/custom-app-development',
    },
    {

      title: imgText3,
      text: Text3,
  
    },
    {
    
      title: imgText4,
      text: Text4,
      link: '/services/custom-app-development',
    },
    
 
    
    
  ];

  const Card = ({ image, title, text, link }) => (
    <div className="card-item" style={{height:"450px",width:"300px"}}>
      <div className="card-content">
        <h5 className="card-title text-dark mb-2">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="intro-section">
        <div className="container intro-content">
          <img src={imgSrc9} alt={imgAlt1} className="intro-image" />
          <div className="intro-text">
            <h2>{subHeading1}</h2>
            <p>{introText1}</p>
            {/* <button className="action-button">{buttonText}</button> */}
          </div>
        </div>
      </div>

      <div className="services-section  ">
        <h1 className="section-title">{mainHeading}</h1>
        <p className="section-description mx-auto w-50">
          {introText}
        </p>
        <div className="card-container mt-5">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              text={card.text}
            
            />
          ))}
        </div>
      </div>

      <div className="intro-section alt">
        <div className="container intro-content">
          <div className="intro-text">
            <h2>{subHeading2}</h2>
            <p>{introText2}</p>
            <button className="action-button">{buttonText}</button>
          </div>
          <img src={imgSrc10} alt={imgAlt2} className="intro-image" />
        </div>
      </div>
   
      <Button />
    </>
  );
}

export default Industriesmain;

import React from 'react';
import './Industries.css';
import { Link } from 'react-router-dom';

function Industriesmain() {
  const cardsData = [
    // ... card data as before ...
  ];

  const Card = ({ image, title, text, link }) => {
    return (
      <div className="card-item">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <Link to={link} className="card-link">Learn More</Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="intro-section">
        <div className="container intro-content">
          <img
            src="https://static.vecteezy.com/system/resources/previews/014/440/781/original/effective-communication-for-business-leader-illustration-png.png"
            alt="Placeholder"
            className="intro-image"
          />
          <div className="intro-text">
            <h2>Redefine Dining Experience for Customers with Digital Restaurant Solutions</h2>
            <p>
              This is some placeholder text. You can replace it with your content.
              It will be displayed next to the image on the left.
            </p>
            <button className="action-button">Click Me</button>
          </div>
        </div>
      </div>

      <div className="services-section">
        <h1 className="section-title">Restaurant Software Development Services we Offer</h1>
        <p className="section-description">
          At JPLoft, we are experts in developing customized restaurant apps tailored to your business's requirements. 
          Our team of developers has vast experience developing mobile applications for restaurants. We can assist you 
          in designing and implementing an application that will improve your customer experience.
        </p>
        <div className="card-container">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              text={card.text}
              link={card.link}
            />
          ))}
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h2 className="features-title">Why Choose Kotibox for Restaurant Software Development Services?</h2>
          <h6 className="features-subtitle">We provide reliable restaurant software development services keeping your requirements in mind.</h6>
          <div className="features-container">
            {/* Repeat feature items as needed */}
            <div className="feature-item">
              <img
                src="https://dl.dropboxusercontent.com/s/kg9n24330z562ll/f1.jpg"
                alt="Feature"
                className="feature-image"
              />
              <div className="feature-content">
                <h3 className="feature-title">Custom Development</h3>
                <p className="feature-text">
                  Brunch food truck quinoaew nesciunt laborum eiusmod brunch 3 wolf moon tempor.
                </p>
                <Link to="#" className="feature-link">Learn More<i className="fa fa-angle-double-right"></i></Link>
              </div>
            </div>
            <div className="feature-item">
              <img
                src="https://dl.dropboxusercontent.com/s/kg9n24330z562ll/f1.jpg"
                alt="Feature"
                className="feature-image"
              />
              <div className="feature-content">
                <h3 className="feature-title">Custom Development</h3>
                <p className="feature-text">
                  Brunch food truck quinoaew nesciunt laborum eiusmod brunch 3 wolf moon tempor.
                </p>
                <Link to="#" className="feature-link">Learn More<i className="fa fa-angle-double-right"></i></Link>
              </div>
            </div>
            <div className="feature-item">
              <img
                src="https://dl.dropboxusercontent.com/s/kg9n24330z562ll/f1.jpg"
                alt="Feature"
                className="feature-image"
              />
              <div className="feature-content">
                <h3 className="feature-title">Custom Development</h3>
                <p className="feature-text">
                  Brunch food truck quinoaew nesciunt laborum eiusmod brunch 3 wolf moon tempor.
                </p>
                <Link to="#" className="feature-link">Learn More<i className="fa fa-angle-double-right"></i></Link>
              </div>
            </div>
            <div className="feature-item">
              <img
                src="https://dl.dropboxusercontent.com/s/kg9n24330z562ll/f1.jpg"
                alt="Feature"
                className="feature-image"
              />
              <div className="feature-content">
                <h3 className="feature-title">Custom Development</h3>
                <p className="feature-text">
                  Brunch food truck quinoaew nesciunt laborum eiusmod brunch 3 wolf moon tempor.
                </p>
                <Link to="#" className="feature-link">Learn More<i className="fa fa-angle-double-right"></i></Link>
              </div>
            </div>
            <div className="feature-item">
              <img
                src="https://dl.dropboxusercontent.com/s/kg9n24330z562ll/f1.jpg"
                alt="Feature"
                className="feature-image"
              />
              <div className="feature-content">
                <h3 className="feature-title">Custom Development</h3>
                <p className="feature-text">
                  Brunch food truck quinoaew nesciunt laborum eiusmod brunch 3 wolf moon tempor.
                </p>
                <Link to="#" className="feature-link">Learn More<i className="fa fa-angle-double-right"></i></Link>
              </div>
            </div>
            <div className="feature-item">
              <img
                src="https://dl.dropboxusercontent.com/s/kg9n24330z562ll/f1.jpg"
                alt="Feature"
                className="feature-image"
              />
              <div className="feature-content">
                <h3 className="feature-title">Custom Development</h3>
                <p className="feature-text">
                  Brunch food truck quinoaew nesciunt laborum eiusmod brunch 3 wolf moon tempor.
                </p>
                <Link to="#" className="feature-link">Learn More<i className="fa fa-angle-double-right"></i></Link>
              </div>
            </div>
            {/* Repeat for other features */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Industriesmain;

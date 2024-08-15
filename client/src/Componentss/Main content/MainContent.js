import React from 'react';
import './Maincontent.css';
import { Link } from 'react-router-dom';

function MainContent({ 
  heading1,
  heading2, 
  clients, 
  benefitTitle, 
  benefitDescription, 
  services, 
  whyChooseTitle, 
  whyChooseDescription, 
  headingSize, 
  subheading, 
  subheadingSize, 
  additionalText, 
  additionalTextSize,
  shapeBoxes 
}) {
  return (
    <>
      <div className="container heading text" style={{ backgroundColor: "white" }}>
        <h1 className='text-center'>{benefitTitle}</h1>
        <div className='row mt-5'>
          <div className='col-md-12 mt-4 d-flex align-items-center text-center mx-auto'>
            <h2 className='benefit-title'>{benefitTitle}</h2>
            <div className="separator"></div>
            <p className='benefit-description'>{benefitDescription}</p>
          </div>
        </div>
      </div>

      <div className='text' style={{ backgroundColor: "white" }}>
        <h3 className='text-center'>{heading1}</h3>
        <div className="loop mt-3">
          <marquee behavior="scroll" direction="left">
            {clients.map((client, index) => (
              <img key={index} src={client.src} alt={client.alt} className="marquee-img" />
            ))}
          </marquee>
        </div>
      </div>

      <section className="services section-bg" id="services">
        <div className="container">
          <header className="section-header">
            <h3>Services</h3>
            <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
          </header>

          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="box">
                  <div className="icon" style={{ background: '#fff' }}>
                    <i className={`fa ${service.icon} service-icon`} style={{ color: '#c59c35' }}></i>
                  </div>
                  <h3 className="title">{service.title}</h3>
                  <p style={{fontSize:"18px"}} className="description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circle Section */}
      
      <section className="main-container">
        
        <div className="main">
          <div className="big-circle">
            <div className="icon-block">
              <img
                src="https://www.yudiz.com/codepen/animated-portfolio/web-dev-icon.png"
                alt="web design icon"
              />
            </div>
            <div className="icon-block">
              <img
                src="https://www.yudiz.com/codepen/animated-portfolio/game-design-icon.png"
                alt="game design icon"
              />
            </div>
            <div className="icon-block">
              <img
                src="https://www.yudiz.com/codepen/animated-portfolio/game-dev-icon.png"
                alt="game dev icon"
              />
            </div>
            <div className="icon-block">
              <img
                src="https://www.yudiz.com/codepen/animated-portfolio/ui-ux-icon.png"
                alt="ui-ux icon"
              />
            </div>
          </div>
          <div className="circle">
            <div className="icon-block">
              <img
                src="https://www.yudiz.com/codepen/animated-portfolio/app-icon.png"
                alt="app icon"
              />
            </div>
            <div className="icon-block">
              <img
                src="https://www.yudiz.com/codepen/animated-portfolio/blockchain-icon.png"
                alt="blockchain icon"
              />
            </div>
            <div className="icon-block">
              <img
                src="https://www.yudiz.com/codepen/animated-portfolio/arvr-icon.png"
                alt="ar-vr icon"
              />
            </div>
            <div className="icon-block">
              <img
                src="https://www.yudiz.com/codepen/animated-portfolio/artificial-intelligence-icon.png"
                alt="artificial intelligence icon"
              />
            </div>
          </div>
          <div className="center-logo text-center ">
            <h1 style={{ fontSize: headingSize }} className='text-light'>
              {heading2}
            </h1>
            <h2 style={{ fontSize: subheadingSize }} className='text-light'>
              {subheading}
            </h2>
            <p style={{ fontSize: additionalTextSize }} className='text-light'>
              {additionalText}
            </p>
          </div>
        </div>
      </section>

      <div className="container box-wrapper">
        <div className='container'>
          <h2 style={{fontSize:"35px"}} className='text-light mt-5 text-center'>{whyChooseTitle}</h2>
          <p style={{fontSize:"18px"}} className='text-light text-center '>{whyChooseDescription}</p>
        </div>

        {shapeBoxes.map((box, index) => (
          <figure key={index} className="shape-box shape-box_half">
            <img src={box.imgSrc} alt={box.alt} />
            <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
            <figcaption>
              <div className="show-cont">
                <h3 className="card-no">{box.cardNo}</h3>
                <h4 className="card-main-title  ">{box.title}</h4>
              </div>
              <p className="card-content">{box.description}</p>
              <Link to={box.link} className="read-more-btn">Read More</Link>
            </figcaption>
            <span className="after"></span>
          </figure>
        ))}
      </div>
    </>
  );
}

export default MainContent;

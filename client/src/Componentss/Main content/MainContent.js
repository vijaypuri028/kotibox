import React from 'react';
import './Maincontent.css';
import { Link } from 'react-router-dom';
import png from '../Kotibox img/png img/good-advice-from-beautiful-woman.png';

import Education from '../Kotibox img/Idusteries/book.png';
import ECommerce from '../Kotibox img/Idusteries/Eccomerce.png';
import Food from '../Kotibox img/Idusteries/food.png';
import Gaming from '../Kotibox img/Idusteries/game.png';
import Tour from '../Kotibox img/Idusteries/tour.png';
import Banking from '../Kotibox img/Idusteries/Banking.png';
import RealEstate from '../Kotibox img/Idusteries/realstetate.png';
import Media from '../Kotibox img/Idusteries/icons8-media-64.png';
import Healthcare from '../Kotibox img/Idusteries/Heathcare.png';

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
  shapeBoxes,
  circelsub,
  circelhead,
  circeltext,
}) {
  return (
    <>
      <div className='Circel-section text-light text-center'>
        <div>
          <h1 className='pt-5'>{circelhead}</h1>
          <h5 className='mt-4'>{circelsub}</h5>

          <div style={{ width: '80%', margin: '0 auto' }} className='d-flex justify-content-between mt-5'>
           
            <h5 className='w-50 mx-auto '>{circeltext}</h5>
          </div>
        </div>
        <section className='main-container'>
          <div className='v-shape'>
            <div className='box1 size-small'>
              <h6 className='h6'>Web Development</h6>
            </div>
            <div className='box1 size-small'>
              <h6 className='h6'>Web Development</h6>
            </div>
            <div className='box1 size-small'>
              <h6 className='h6'>Web Development</h6>
            </div>
          </div>

          <div className='main'>
            <div className='big-circle'>
              <div className='icon-block'>
                <img src='https://www.yudiz.com/codepen/animated-portfolio/web-dev-icon.png' alt='web design icon' />
              </div>
              <div className='icon-block'>
                <img src='https://www.yudiz.com/codepen/animated-portfolio/game-design-icon.png' alt='game design icon' />
              </div>
              <div className='icon-block'>
                <img src='https://www.yudiz.com/codepen/animated-portfolio/game-dev-icon.png' alt='game dev icon' />
              </div>
              <div className='icon-block'>
                <img src='https://www.yudiz.com/codepen/animated-portfolio/ui-ux-icon.png' alt='ui-ux icon' />
              </div>
            </div>
            <div className='circle'>
              <div className='icon-block'>
                <img src='https://www.yudiz.com/codepen/animated-portfolio/app-icon.png' alt='app icon' />
              </div>
              <div className='icon-block'>
                <img src='https://www.yudiz.com/codepen/animated-portfolio/blockchain-icon.png' alt='blockchain icon' />
              </div>
              <div className='icon-block'>
                <img src='https://www.yudiz.com/codepen/animated-portfolio/arvr-icon.png' alt='ar-vr icon' />
              </div>
              <div className='icon-block'>
                <img src='https://www.yudiz.com/codepen/animated-portfolio/artificial-intelligence-icon.png' alt='artificial intelligence icon' />
              </div>
            </div>
            <div className='center-logo text-center'>
              <h1 style={{ fontSize: headingSize }} className='text-light'>{heading2}</h1>
              <h2 style={{ fontSize: subheadingSize }} className='text-light'>{subheading}</h2>
              <p style={{ fontSize: additionalTextSize }} className='text-light'>{additionalText}</p>
            </div>
          </div>

          <div className='v-shape'>
            <div className='box1 size-small-1'>
              <h6 className='h5'>Web Development</h6>
            </div>
            <div className='box1 size-small-1'>
              <h6 className='h5'>Web Development</h6>
            </div>
            <div className='box1 size-small-1'>
              <h6 className='h5'>Web Development</h6>
            </div>
          </div>
        </section>
      </div>

      <div className='intro-section'>
        <div className='container intro-content'>
          <img src={png} alt='Placeholder' className='intro-image' />
          <div className='intro-text'>
            <h2>Redefine Dining Experience with Digital Restaurant Solutions</h2>
            <p>
              This is some placeholder text. You can replace it with your content. It will be displayed next to the image on the left.
            </p>
            <button className='action-button'>Click Me</button>
          </div>
        </div>
      </div>

      <section className='services section-bg' id='services'>
        <div className='container'>
          <header className='section-header'>
            <h3>Services</h3>
            <p>
              Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.
            </p>
          </header>
          <div className='row'>
            {services.map((service, index) => (
              <div key={index} className='col-md-6 col-lg-4'>
                <div className='box'>
                  <div className='icon' style={{ background: '#fff' }}>
                    <i className={`fa ${service.icon} service-icon`} style={{ color: '#c59c35' }}></i>
                  </div>
                  <h3 className='title'>{service.title}</h3>
                  <p className='description' style={{ fontSize: '18px' }}>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className='container box-wrapper'>
        <div className='container'>
          <h2 style={{ fontSize: '35px' }} className='text-light mt-5 text-center'>{whyChooseTitle}</h2>
          <p style={{ fontSize: '18px' }} className='text-light text-center'>{whyChooseDescription}</p>
        </div>

        {shapeBoxes.map((box, index) => (
          <figure key={index} className='shape-box-1 shape-box_half-1'>
            <img style={{ height: '100%', width: '100%' }} src={box.imgSrc} alt={box.alt} />
            <div className='brk-abs-overlay-1 z-index-0 bg-black opacity-60'></div>
            <figcaption>
              <div className='show-cont-1'>
                <h3 className='card-no-1'>{box.cardNo}</h3>
                <h4 className='card-main-title-1'>{box.title}</h4>
              </div>
              <p className='card-content-1'>{box.description}</p>
              <Link to={box.link} className='read-more-btn-1'>Read More</Link>
            </figcaption>
            <span className='after-1'></span>
          </figure>
        ))}
      </div>

      <section className='services section-bg' id='services'>
        <div className='container'>
          <header className='section-header'>
            <h3>Our Services for Every Industry</h3>
            <p>
              Proven by our years of experience, we are all about delivering excellence across industries—from foods and beverages to retail and beyond.
            </p>
          </header>
          <div className='row'>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Education} alt='Education & E-learning' />
                </div>
                <h3 className='title'>Education & E-learning</h3>
                <p className='description' style={{ fontSize: '18px' }}></p>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Food} alt='Food & Restaurant' />
                </div>
                <h3 className='title'>Food & Restaurant</h3>
                <p className='description' style={{ fontSize: '18px' }}></p>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Gaming} alt='Sports & Gaming' />
                </div>
                <h3 className='title'>Sports & Gaming</h3>
                <p className='description' style={{ fontSize: '18px' }}></p>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Tour} alt='Tour & Travels' />
                </div>
                <h3 className='title'>Tour & Travels</h3>
                <p className='description' style={{ fontSize: '18px' }}></p>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Banking} alt='Banking & Finance' />
                </div>
                <h3 className='title'>Banking & Finance</h3>
                <p className='description' style={{ fontSize: '18px' }}></p>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Media} alt='Media & Publication' />
                </div>
                <h3 className='title'>Media & Publication</h3>
                <p className='description' style={{ fontSize: '18px' }}></p>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Healthcare} alt='Healthcare' />
                </div>
                <h3 className='title'>Healthcare</h3>
                <p className='description' style={{ fontSize: '18px' }}></p>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '60px', width: '60px' }} src={RealEstate} alt='Real Estate' />
                </div>
                <h3 className='title'>Real Estate</h3>
                <p className='description' style={{ fontSize: '18px' }}></p>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '60px' }} src={ECommerce} alt='E-Commerce' />
                </div>
                <h3 className='title'>E-Commerce</h3>
                <p className='description' style={{ fontSize: '18px' }}></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainContent;

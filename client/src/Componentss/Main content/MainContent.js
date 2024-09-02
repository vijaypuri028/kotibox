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
  services11,
  servicesp,
  Hiredevelopmentmain1,
  Technologiesp,
  Technologies1,
  Technologies2,
  Technologies3,
  Technologies4,
  Technologies5,
  Technologies6,
  Technologies7,
  Technologies8,
  Technologies9,
  Technologies1img,
  Technologies2img,
  Technologies3img,
  Technologies4img,
  Technologies5img,
  Technologies6img,
  Technologies7img,
  Technologies8img,
  Technologies9img,
  whyChooseTitle,
  whyChooseDescription,
  shapeBoxes
}) {
  return (
    <>
      <div className='intro-section'>
        <div className='container intro-content'>
          <img src={png} alt='Placeholder' className='intro-image' />
          <div className='intro-text'>
            <h2>{services11}</h2>
            <p>{servicesp}</p>
            <button className='btn btn-danger'>{Hiredevelopmentmain1}</button>
          </div>
        </div>
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
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Food} alt='Food & Restaurant' />
                </div>
                <h3 className='title'>Food & Restaurant</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Gaming} alt='Sports & Gaming' />
                </div>
                <h3 className='title'>Sports & Gaming</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Tour} alt='Tour & Travels' />
                </div>
                <h3 className='title'>Tour & Travels</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Banking} alt='Banking & Finance' />
                </div>
                <h3 className='title'>Banking & Finance</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Media} alt='Media & Publication' />
                </div>
                <h3 className='title'>Media & Publication</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Healthcare} alt='Healthcare' />
                </div>
                <h3 className='title'>Healthcare</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '60px', width: '60px' }} src={RealEstate} alt='Real Estate' />
                </div>
                <h3 className='title'>Real Estate</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '60px' }} src={ECommerce} alt='E-Commerce' />
                </div>
                <h3 className='title'>E-Commerce</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='bg-light'>
        <div className='overview'>
          <div className="profile__inner d-flex flex-wrap justify-content-between align-items-center">
            <div className="profile__text ms-2  mt-4 mt-md-0 text-start">
              <h1 style={{ fontSize: "30px" }}>Your industry wasn't found here? Don't worry!</h1>
              <p style={{ fontSize: "18px" }}>Contact us to describe your project and obtain the best personalized product. Get in touch with us.</p>
            </div>
            <ul className="snslist1">
              <li className='btn btn-danger mt-2'>Connect With Our Expert <i className="bi bi-arrow-right-circle"></i></li>
            </ul>
          </div>
        </div>
      </div>

      <section className='services section-bg' id='services'>
        <div className='container'>
          <header className='section-header'>
            <h3>Technologies We Use</h3>
            <p>{Technologiesp}</p>
          </header>
          <div className='row'>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies1img} alt={Technologies1} />
                </div>
                <h3 className='title'>{Technologies1}</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies2img} alt={Technologies2} />
                </div>
                <h3 className='title'>{Technologies2}</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies3img} alt={Technologies3} />
                </div>
                <h3 className='title'>{Technologies3}</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies4img} alt={Technologies4} />
                </div>
                <h3 className='title'>{Technologies4}</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies5img} alt={Technologies5} />
                </div>
                <h3 className='title'>{Technologies5}</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies6img} alt={Technologies6} />
                </div>
                <h3 className='title'>{Technologies6}</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies7img} alt={Technologies7} />
                </div>
                <h3 className='title'>{Technologies7}</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies8img} alt={Technologies8} />
                </div>
                <h3 className='title'>{Technologies8}</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies9img} alt={Technologies9} />
                </div>
                <h3 className='title'>{Technologies9}</h3>
              </div>
            </div>
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
                <h4 className='card-main-title-1'>{box.title} <br/>{box.title1}</h4>
              </div>
              <p className='card-content-1'>{box.description}</p>
              <Link to={box.link} className='read-more-btn-1'>Read More</Link>
            </figcaption>
            <span className='after-1'></span>
          </figure>
        ))}
      </div>
    </>
  );
}

export default MainContent;

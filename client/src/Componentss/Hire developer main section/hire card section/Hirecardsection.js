import React from 'react';
import './Hirecard.css'; // External CSS

import Education from '../../Kotibox img/Idusteries/book.png';
import ECommerce from '../../Kotibox img/Idusteries/Eccomerce.png';
import Food from '../../Kotibox img/Idusteries/food.png';
import Gaming from '../../Kotibox img/Idusteries/game.png';
import Tour from '../../Kotibox img/Idusteries/tour.png';
import Banking from '../../Kotibox img/Idusteries/Banking.png';
import RealEstate from '../../Kotibox img/Idusteries/realstetate.png';
import Media from '../../Kotibox img/Idusteries/icons8-media-64.png';
import Healthcare from '../../Kotibox img/Idusteries/Heathcare.png';
import { Link } from 'react-router-dom';

import Accordionimg from '../../Kotibox img/Main img/Process.jpg'


export default function Hirecardsection({
    imgSrc,
    mainText1,
    mainTextp,
    sectionHeading,
    sectionDescription,
    imgSrc1,
    imgSrc2,
    imgSrc3,
    cardTitle1,
    cardDescription1,
    cardTitle2,
    cardDescription2,
    cardTitle3,
    cardDescription3,
    cardTitle4,
    cardDescription4,
    cardTitle5,
    cardDescription5,
    cardTitle6,
    cardDescription6,
    sectionHeading2,
    sectionpra,
    Industriesheading,
    Industriesp,
    accordionheading,
    accordionpra
}) {
    return (
        <>
            <div className="intro-section">
                <div className="container intro-content">
                    <img src={imgSrc} alt="Main" className="intro-image" />
                    <div className="intro-text">
                        <h2>{mainText1}</h2>
                        <p>{mainTextp}</p>
                        <Link style={{textDecoration:"none"}} to='/contact'>  <button className="mx-auto action-button">Click Me</button> </Link>
                    </div>
                </div>
            </div>

            <div style={{ width: "80%" }} className="other-sections mx-auto pt-5 pb-5 ">
                <h2 style={{ fontSize: "2rem", fontWeight: "700", textTransform: "uppercase" }} >{sectionHeading2}</h2>
                <p className="p-2 text-light">
                    {sectionpra}
                </p>

                <div className="job-options row  ">
                    <div className="job-option col-lg-3 col-md-6 col-sm-12">
                        <img className="job-img" src="http://upcharnuskhe.com/wp-content/uploads/2016/04/bddnn-300x300.jpg" alt="Part-Time Jobs" />
                        <h3>Hourly Hiring</h3>
                        <p></p>
                        <Link style={{textDecoration:"none"}} to='/contact'>  <button className='mx-auto'>HIRE NOW </button> </Link>
                    </div>

                    <div className="job-option col-lg-3 col-md-6 col-sm-12">
                        <img className="job-img" src="http://upcharnuskhe.com/wp-content/uploads/2016/04/bddnn-300x300.jpg" alt="Part-Time Jobs" />
                        <h3>Hire Full Time
                            Dedicated Resource
                        </h3>
                        <p></p>
                        <Link style={{textDecoration:"none"}} to='/contact'> <button className='mx-auto'>HIRE NOW</button></Link>
                    </div>

                    <div className="job-option col-lg-3 col-md-6 col-sm-12">
                        <img className="job-img" src="http://upcharnuskhe.com/wp-content/uploads/2016/04/bddnn-300x300.jpg" alt="Hourly Jobs" />
                        <h3>Dedicated Team
                            Hiring</h3>
                        <p></p>
                        <Link style={{textDecoration:"none"}} to='/contact'> <button className='mx-auto'>HIRE NOW</button> </Link>
                    </div>
                </div>
            </div>


            <div className="hirecard-section text-center">
                <h2 style={{ fontSize: "2rem", fontWeight: "700", textTransform: "uppercase" }}  className="p-2 mt-5 text-light">{sectionHeading}</h2>
                <p className="p-2 text-light">{sectionDescription}</p>

                <div className="card-section mx-auto row">

                    <div className="hire-card col-lg-3 col-md-6 col-sm-12">
                        <img className="p-1 pb-3" src={imgSrc1} alt="Web Developer" />
                        <h3>{cardTitle1}</h3>
                        <p>{cardDescription1}</p>
                        <Link style={{textDecoration:"none"}} to='/contact'> <button className='mx-auto'>Hire Now</button> </Link>
                    </div>

                    <div className="hire-card col-lg-3 col-md-6 col-sm-12">
                        <img className="p-1 pb-3" src={imgSrc2} alt="UI/UX Designer" />
                        <h3>{cardTitle2}</h3>
                        <p>{cardDescription2}</p>
                        <Link style={{textDecoration:"none"}} to='/contact'>  <button className='mx-auto'>Hire Now</button> </Link>
                    </div>

                    <div className="hire-card col-lg-3 col-md-6 col-sm-12">
                        <img className="p-1 pb-3" src={imgSrc3} alt="Full Stack Developer" />
                        <h3>{cardTitle3}</h3>
                        <p>{cardDescription3}</p>
                        <Link style={{textDecoration:"none"}} to='/contact'>  <button className='mx-auto'>Hire Now</button> </Link>
                    </div>

                </div>

                <div className="card-section mx-auto row">
                    {/* Card 1 */}
                    <div className="hire-card col-lg-3 col-md-6 col-sm-12">
                        <img className="p-1 pb-3" src={imgSrc1} alt="Web Developer" />
                        <h3>{cardTitle4}</h3>
                        <p>{cardDescription4}</p>
                        <Link style={{textDecoration:"none"}} to='/contact'> <button className='mx-auto'>Hire Now</button> </Link>
                    </div>
                    {/* Card 2 */}
                    <div className="hire-card col-lg-3 col-md-6 col-sm-12">
                        <img className="p-1 pb-3" src={imgSrc2} alt="UI/UX Designer" />
                        <h3>{cardTitle5}</h3>
                        <p>{cardDescription5}</p>
                        <Link style={{textDecoration:"none"}} to='/contact'> <button className='mx-auto'>Hire Now</button> </Link>
                    </div>

                    <div className="hire-card col-lg-3 col-md-6 col-sm-12">
                        <img className="p-1 pb-3" src={imgSrc3} alt="Full Stack Developer" />
                        <h3>{cardTitle6}</h3>
                        <p>{cardDescription6}</p>
                        <Link style={{textDecoration:"none"}} to='/contact'>   <button className='mx-auto'>Hire Now</button> </Link>
                    </div>

                </div>


            </div>


            <section className='services section-bg' id='services'>
                <div className='container'>
                    <header className='section-header'>
                        <h3 className='w-55'>{Industriesheading}</h3>
                        <p>
                            {Industriesp}
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


            <div className='bg-light pb-5'>
  <div className='container'>
    <h1 className='text-center'>{accordionheading}</h1>
    <p className='mx-auto w-75 text-center'>{accordionpra}</p>

    {/* Row for accordion and image */}
    <div className='row align-items-center mt-5 pt-5 pb-5' style={{ gap: '50px' }}>
      
      {/* Accordion Section */}
      <div className='col-12 col-md-7'>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Requirement Gathering
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>First, our knowledgeable staff concentrates on gathering from the client all the data needed to begin the development, including the company's philosophy, goal, and mission as well as product and service expertise.</strong>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Wireframing
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>The development team prepares a wireframe to aid in the well-organized development process by defining the choices of features and specifications.</strong>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Designing
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>The interactive user interface is currently being prepared by the UI/UX designers. It consists of a collection of different mock designs from which the client can select the preferred look.</strong>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Development
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>With close collaboration with the designers, the development team will now endeavor to produce a dependable application. Our group employs agile approaches in order to meet client expectations.</strong>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Testing
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Your app is put through a battery of tests prior to launch.</strong>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                Quality Assurance
              </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Our QA team ensures that the application meets the highest quality standards, running tests to ensure smooth performance.</strong>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                Maintenance and Support
              </button>
            </h2>
            <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Our team continues to collaborate closely with the customer to offer support and maintenance after the application launch as the business evolves.</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className='col-12 col-md-4 text-center'>
        <img style={{ height: '400px', width: '100%', objectFit: 'cover', borderRadius: '8px' }} src={Accordionimg} alt='Accordion Illustration' />
      </div>
    </div>
  </div>
</div>


        </>
    );
}
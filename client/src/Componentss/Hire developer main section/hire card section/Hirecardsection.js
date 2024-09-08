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
    Industriesp
}) {
    return (
        <>
            <div className="intro-section">
                <div className="container intro-content">
                    <img src={imgSrc} alt="Main" className="intro-image" />
                    <div className="intro-text">
                        <h2>{mainText1}</h2>
                        <p>{mainTextp}</p>
                        <button className="mx-auto action-button">Click Me</button>
                    </div>
                </div>
            </div>

            <div style={{ width: "80%" }} className="other-sections mx-auto pt-5 pb-5 ">
                <h2 style={{ fontSize: "2.5rem", fontWeight: "700", textTransform: "uppercase" }} >{sectionHeading2}</h2>
                <p className="p-2 text-light">
                    {sectionpra}
                </p>

                <div className="job-options row  ">
                    <div className="job-option col-lg-3 col-md-6 col-sm-12">
                        <img className="job-img" src="http://upcharnuskhe.com/wp-content/uploads/2016/04/bddnn-300x300.jpg" alt="Part-Time Jobs" />
                        <h3>Hourly Hiring</h3>
                        <p></p>
                        <button className='mx-auto'>HIRE NOW </button>
                    </div>

                    <div className="job-option col-lg-3 col-md-6 col-sm-12">
                        <img className="job-img" src="http://upcharnuskhe.com/wp-content/uploads/2016/04/bddnn-300x300.jpg" alt="Part-Time Jobs" />
                        <h3>Hire Full Time
                            Dedicated Resource
                        </h3>
                        <p></p>
                        <button className='mx-auto'>HIRE NOW</button>
                    </div>

                    <div className="job-option col-lg-3 col-md-6 col-sm-12">
                        <img className="job-img" src="http://upcharnuskhe.com/wp-content/uploads/2016/04/bddnn-300x300.jpg" alt="Hourly Jobs" />
                        <h3>Dedicated Team
                            Hiring</h3>
                        <p></p>
                        <button className='mx-auto'>HIRE NOW</button>
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
                        <button className='mx-auto'>Hire Now</button>
                    </div>

                    <div className="hire-card col-lg-3 col-md-6 col-sm-12">
                        <img className="p-1 pb-3" src={imgSrc2} alt="UI/UX Designer" />
                        <h3>{cardTitle2}</h3>
                        <p>{cardDescription2}</p>
                        <button className='mx-auto'>Hire Now</button>
                    </div>

                    <div className="hire-card col-lg-3 col-md-6 col-sm-12">
                        <img className="p-1 pb-3" src={imgSrc3} alt="Full Stack Developer" />
                        <h3>{cardTitle3}</h3>
                        <p>{cardDescription3}</p>
                        <button className='mx-auto'>Hire Now</button>
                    </div>

                </div>

                <div className="card-section mx-auto row">
                    {/* Card 1 */}
                    <div className="hire-card col-lg-3 col-md-6 col-sm-12">
                        <img className="p-1 pb-3" src={imgSrc1} alt="Web Developer" />
                        <h3>{cardTitle4}</h3>
                        <p>{cardDescription4}</p>
                        <button className='mx-auto'>Hire Now</button>
                    </div>
                    {/* Card 2 */}
                    <div className="hire-card col-lg-3 col-md-6 col-sm-12">
                        <img className="p-1 pb-3" src={imgSrc2} alt="UI/UX Designer" />
                        <h3>{cardTitle5}</h3>
                        <p>{cardDescription5}</p>
                        <button className='mx-auto'>Hire Now</button>
                    </div>

                    <div className="hire-card col-lg-3 col-md-6 col-sm-12">
                        <img className="p-1 pb-3" src={imgSrc3} alt="Full Stack Developer" />
                        <h3>{cardTitle6}</h3>
                        <p>{cardDescription6}</p>
                        <button className='mx-auto'>Hire Now</button>
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

        </>
    );
}
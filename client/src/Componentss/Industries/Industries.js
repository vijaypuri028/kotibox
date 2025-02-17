import React, { useEffect } from 'react';
import './Industries.css';

import img1 from '../Kotibox img/Main img/Educationin.jpg'
import img2 from '../Kotibox img/Main img/foodin.jpg'
import img3 from '../Kotibox img/Main img/Healthcarein.jpg'
import img4 from '../Kotibox img/Main img/Tourin.jpg'
import img5 from '../Kotibox img/Main img/realestatein.jpg'
import img6 from '../Kotibox img/Main img/gamein.jpg'
import img7 from '../Kotibox img/Main img/bankin.jpg'
import img8 from '../Kotibox img/Main img/E-coomercein.jpg'
import img9 from '../Kotibox img/Main img/Publicationin.jpg'


export default function Industries() {
  useEffect(() => {
    // Example of adding an event listener
    const handleResize = () => {
      console.log('Window resized');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const services = [
    {
      title: 'Education & E-learning',
      description: 'creating future-oriented web solutions and mobile apps with intelligent learning. and tailoring these services to transform the business and academic sectors.',
      bgImage: img1,
    },
    {
      title: 'Food & Restaurants',
      description: 'Investigate restaurant app development to take your company to new technological heights, increasing sales and gratifying patrons while streamlining operations.',
      bgImage: img2,
    },
    {
      title: 'Healthcare',
      description: 'Being a top provider of healthcare application development services, we take great pride in our developers ability to produce creative apps that meet the ever-changing needs of the modern health sector.',
      bgImage: img3,
    },
    {
      title: 'Tour & Travels',
      description: 'Use our specialists intelligent logistics software solutions to streamline your logistics processes. Our end-to-end solutions go above and beyond expectations in lowering operational expenses, facilitating smooth operations, and enhancing customer service.',
      bgImage: img4,
    },
    {
        title: 'Real Estate ',
        description: 'The company specializes in creating cutting-edge mobile apps and web solutions for real estate, making the process of buying, selling, renting, and managing properties as simple as putting on pajamas.',
        bgImage: img5,
      },
      {
        title: 'Sports & Gaming',
        description: 'We are a top game development company that specializes in creating innovative online games for consoles, mobile devices, and PCs. Our talented development team works with a variety of game engines with expertise.',
        bgImage: img6,
      },
      {
        title: 'Banking & Finance',
        description: 'Kotibox provides mobile banking app development services. Our experts create and build applications that allow customers to transfer funds, make payments, and make other financial transactions using mobile devices.',
        bgImage: img7,
      },
      {
        title: 'E-Commerce',
        description: 'We are a scalable, user-friendly, and reliable e-commerce website development firm that can assist you in creating a variety of eCommerce solutions. We assist you in removing any obstacles posed by intricate sales procedures so that your clients may easily make purchases from you.',
        bgImage: img8,
      },
      {
        title: 'Media & Publication',
        description: 'Our expertise lies in creating stable streaming platforms, engaging content management systems, and superior live video solutions that meet the constantly evolving digital demands of viewers across the globe. ',
        bgImage: img9,
      },
  ];

  return (
    <div className='industries '>
      <section className="min-h-screen bg-gray-900 text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
        <span className="text-gray-400 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center">
          Industries
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-indigo-600 ml-3 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
        <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">
        Creating Truly Special For Diverse Industries
        </h1>
        <div className='industries-img  '>
          <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="service-card" style={{ backgroundImage: `url(${service.bgImage})` }}>
                <div className="service-content">
                  <h2 className="text-white text-2xl font-bold mb-2">{service.title}</h2>
                  <p style={{fontSize:"15px"}} className="text-gray-300 text-light">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

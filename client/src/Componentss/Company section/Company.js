import React from 'react';
import './company.css';

const companyLogos = [
  { src: 'https://www.jploft.com/img/technologies-ic14.svg', name: 'IOS' },
  { src: ' https://www.jploft.com/img/technologies-ic15.svg', name: 'Android' },
  { src: 'https://www.jploft.com/img/technologies-ic16.svg', name: 'IONIC' },
  { src: 'https://www.jploft.com/img/technologies-ic17.svg', name: 'Flutter' },
  { src: 'https://www.jploft.com/img/technologies-ic18.svg', name: 'Xamarin' },
  { src: 'https://www.jploft.com/img/technologies-ic4.svg', name: 'React native' },
];

const companyLogo1 = [
  { src: 'https://www.jploft.com/img/technologies-ic19.svg', name: 'Cordova' },
  { src: 'https://www.jploft.com/img/technologies-ic-swift.svg', name: 'Swift' },
  { src: 'https://www.jploft.com/img/technologies-ic-java.svg', name: 'Java' },
];

const companyLogoimg = [
  { src: 'https://www.jploft.com/img/technologies-ic1.svg', name: 'HTML5' },
  { src: 'https://www.jploft.com/img/technologies-ic2.svg', name: 'CSS' },
  { src: 'https://www.jploft.com/img/technologies-ic4.svg', name: 'React ' },
  { src: 'https://www.jploft.com/img/technologies-ic6.svg', name: 'NEXT.JS' },
  { src: 'https://www.jploft.com/img/technologies-ic3.svg', name: 'Angular' },
];

const companyLogoimgs = [
  { src: 'https://www.jploft.com/img/technologies-ic10.svg', name: 'Java' },
  { src: 'https://www.jploft.com/img/technologies-ic13.svg', name: 'Node' },
  { src: 'https://www.jploft.com/img/technologies-ic11.svg', name: 'Python' },
  { src: 'https://www.clipartkey.com/mpngs/m/286-2861496_laravel-6-logo-transparent-cartoons-laravel-6-logo.png', name: 'Laravel' },
  { src: 'https://www.jploft.com/img/technologies-ic9.svg', name: '. Net' },
];

export default function Company() {
  return (
    <div className='company-section'>
      <div className='company-section-text'>
        <h1>Get Services Built with the Latest Robust Technologies</h1>
        <p>KOTIBOX uses cutting-edge technologies to develop unique solutions for your business. Our team’s deep expertise covers a vast range of technologies, making us stand above other companies.</p>
      </div>

      <div className='Mobile App mt-4'>
        <h1 className='text-light text-center mt-5'>Mobile App</h1>
        <div className="company-logos">
          {companyLogos.map((logo, index) => (
            <div key={index} className="company-logo-container">
              <img src={logo.src} alt={`Company Logo ${index + 1}`} className="company-logo" />
              <p className='text-light text-center'>{logo.name}</p>
            </div>
          ))}
        </div>
        <div className="company-logos">
          {companyLogo1.map((logo, index) => (
            <div key={index} className="company-logo-container">
              <img src={logo.src} alt={`Company Logo ${index + 1}`} className="company-logo" />
              <p className='text-light text-center'>{logo.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='Mobile App mt-4'>
        <h1 className='text-light text-center mt-5'>Web Development</h1>
        <div className="company-logos">
          {companyLogoimg.map((logo, index) => (
            <div key={index} className="company-logo-container">
              <img src={logo.src} alt={`Company Logo ${index + 1}`} className="company-logo" />
              <p className='text-light text-center'>{logo.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='Mobile App mt-4'>
        <h1 className='text-light text-center mt-5'>Back-end Development</h1>
        <div className="company-logos">
          {companyLogoimgs.map((logo, index) => (
            <div key={index} className="company-logo-container">
              <img src={logo.src} alt={`Company Logo ${index + 1}`} className="company-logo" />
              <p className='text-light text-center'>{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

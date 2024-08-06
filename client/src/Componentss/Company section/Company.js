import React from 'react';
import './company.css';

const companyLogos = [
  'https://www.jploft.com/img/technologies-ic14.svg',
 ' https://www.jploft.com/img/technologies-ic15.svg',
  'https://www.jploft.com/img/technologies-ic16.svg',
  'https://www.jploft.com/img/technologies-ic17.svg',
  'https://www.jploft.com/img/technologies-ic18.svg',
  'https://www.jploft.com/img/technologies-ic4.svg',
 
];

const companyLogo1 = [
  'https://www.jploft.com/img/technologies-ic19.svg',
  'https://www.jploft.com/img/technologies-ic-swift.svg',
  'https://www.jploft.com/img/technologies-ic-java.svg',
];
const companyLogoimg = [
  'https://www.jploft.com/img/technologies-ic1.svg',
  'https://www.jploft.com/img/technologies-ic2.svg',
  'https://www.jploft.com/img/technologies-ic4.svg',
  'https://www.jploft.com/img/technologies-ic6.svg',
  'https://www.jploft.com/img/technologies-ic3.svg'
];
const companyLogoimgs = [
  'https://www.jploft.com/img/technologies-ic10.svg',
  'https://www.jploft.com/img/technologies-ic13.svg',
  'https://www.jploft.com/img/technologies-ic11.svg',
  'https://www.jploft.com/img/technologies-ic13-1.svg',
  'https://www.jploft.com/img/technologies-ic9.svg'
];

export default function Company() {
  return (
    <>
      <div className='company-section'>
        <div className='company-section-text'>
          <h1>Get Services Built with the Latest Robust Technologies</h1>
          <p>KOTIBOX uses cutting-edge technologies to develop unique solutions for your business. Our team’s deep expertise covers a vast range of technologies, making us stand above other companies.</p>
        </div>
        <div className='Mobile App mt-4'>
          <h1 className='text-light text-center mt-5'>Mobile App</h1>
        
        <div className="company-logos">
          {companyLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`Company Logo ${index + 1}`} className="company-logo" />
          ))}
        </div>
        <div className="company-logo1">
          {companyLogo1.map((logo, index) => (
            <img key={index} src={logo} alt={`Company Logo ${index + 1}`} />
          ))}
        </div>
        </div>
        <div className='Mobile App mt-4'>
          <h1 className='text-light text-center mt-5'>Web Development</h1>
        
        <div className="company-logos">
          {companyLogoimg.map((logo, index) => (
            <img key={index} src={logo} alt={`Company Logo ${index + 1}`} className="company-logo" />
          ))}
        </div>
     
        </div>
        <div className='Mobile App mt-4'>
          <h1 className='text-light text-center mt-5'>Back-end Development</h1>
        
        <div className="company-logos">
          {companyLogoimgs.map((logo, index) => (
            <img key={index} src={logo} alt={`Company Logo ${index + 1}`} className="company-logo" />
          ))}
        </div>
     
        
        </div>
      </div>
    </>
  );
}

import React from 'react';
import './company.css';
import IOS from '../Kotibox img/icon/icons8-apple-48.png'
import Android from '../Kotibox img/icon/icons8-android-os-48.png'
import IONIC from '../Kotibox img/icon/ionic.png'
import Flutter from '../Kotibox img/icon/Flutter.png'
import Xamarin from '../Kotibox img/icon/xamarin-logo.png'
import Reactimg from '../Kotibox img/icon/react netive.png'
import Swift from '../Kotibox img/icon/swift.png'
import Java from '../Kotibox img/icon/icons8-java-48.png'
import HTML5 from '../Kotibox img/icon/Html.png'
import Css from '../Kotibox img/icon/Css.png'
import JS from '../Kotibox img/icon/Js.png'
import Angular from '../Kotibox img/icon/icons8-angularjs-144.png'
import Nodejs from '../Kotibox img/icon/icons8-node-js-48.png'
import Python from '../Kotibox img/icon/icons8-python-48.png'
import Laravel from '../Kotibox img/icon/icons8-laravel-64.png'
import DotNet from '../Kotibox img/icon/dote net.webp'

const companyLogos = [
  { src: IOS, name: 'IOS' },
  { src: Android , name: 'Android' },
  { src: IONIC, name: 'IONIC' },
  { src: Flutter, name: 'Flutter' },
  { src: Xamarin, name: 'Xamarin' },
  { src: Reactimg , name: ' React' },
];

const companyLogo1 = [
  { src: 'https://www.jploft.com/img/technologies-ic19.svg', name: 'Cordova' },
  { src: Swift, name: 'Swift' },
  { src: Java, name: 'Java' },
];

const companyLogoimg = [
  { src: HTML5, name: 'HTML5' },
  { src: Css, name: 'CSS' },
  { src: Reactimg, name: 'React ' },
  { src: JS, name: 'JS' },
  { src: Angular, name: 'Angular' },
];

const companyLogoimgs = [
  { src: Java, name: 'Java' },
  { src: Nodejs, name: 'Node' },
  { src: Python, name: 'Python' },
  { src: Laravel, name: 'Laravel' },
  { src: DotNet, name: '. Net' },
];

export default function Company() {
  return (
    <div className='company-section'>
      <div className='company-section-text'>
        <h1>Delivering Trendy solutions with cutting-edge technology excites us.</h1>

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
              <img style={{objectFit:"cover"}} src={logo.src} alt={`Company Logo ${index + 1}`} className="company-logo" />
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

import React from 'react';
import {  FaCode } from 'react-icons/fa';
import './Hiremain.css';


export default function Hiredevelopmentmain(props) {
  const {
    sectionhead,
    sectionp,
    section1,
    sectionp1,
    section2,
    sectionp2,
    section3,
    sectionp3,
    section4,
    sectionp4,
    section5,
    sectionp5,
  } = props;


  const featureData = [
    { title: "Committed Programmers", text: "We are aware of your needs and assist you in finding the most qualified eLearning app developers to provide top-notch services.", img: "https://www.Kotibox.com/img/focused-team.svg" },
    { title: "Support & Maintenance", text: "For any project centered on educational software development, we offer expert support & maintenance services.", img: "https://www.Kotibox.com/img/cost-effective.svg" },
    { title: "On Time and within budget", text: "We realize the significance of your money and time. So, we believe in providing a high-quality job on time.", img: "https://www.Kotibox.com/img/work-force.svg" },
    { title: "Individualized Creation", text: "With the assistance of our committed developers, who offer the best eLearning Development Services, we are able to offer the greatest education solution.", img: "https://www.Kotibox.com/img/privacy-security.svg" },
    { title: "Excellent User Experience", text: "Since we recognize the value of your idea, we create websites and applications that are visually appealing, draw users in, and offer superior user experience.", img: "https://www.Kotibox.com/img/enterprices-solutions.svg" },
    { title: "Security", text: "We recognize that, as technology advances on a regular basis, organizations must also adapt. Thus, we are up to date with the newest technologies.", img: "https://www.Kotibox.com/img/enterprices-solutions.svg" },
  ];

  return (
    <>
      <div style={{ paddingBottom: "70px", paddingTop: "60px" }} className='bg-light'>
        <h1 className='text-center pt-5 cards-wrapper-text-1'>{sectionhead}</h1>
        <p style={{width:"80%"}} className='mx-auto text-center '>{sectionp}</p>
        <div className="cards-wrapper mx-auto">

          <div className="card-item-5 mt-5">
            <div className="card-content-wrapper">
              <FaCode className="card-icon" />
              <h3 className="card-heading">{section1}</h3>
              <p className="card-description">{sectionp1}</p>
            </div>
          </div>


          <div className="card-item-5">
            <div className="card-content-wrapper">
              <FaCode className="card-icon" />
              <h3 className="card-heading">{section2}</h3>
              <p className="card-description">{sectionp2}</p>
            </div>
          </div>

          

          <div className="card-item-5">
            <div className="card-content-wrapper">
              <FaCode className="card-icon" />
              <h3 className="card-heading">{section3}</h3>
              <p className="card-description">{sectionp3}</p>
            </div>
          </div>

        

          <div className="card-item-5">
            <div className="card-content-wrapper">
              <FaCode className="card-icon" />
              <h3 className="card-heading">{section4}</h3>
              <p className="card-description">{sectionp4}</p>
            </div>
          </div>

        

          <div className="card-item-5">
            <div className="card-content-wrapper">
              <FaCode className="card-icon" />
              <h3 className="card-heading">{section5}</h3>
              <p className="card-description">{sectionp5}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="feat bg-gray pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="section-head col-sm-12">
              <h4><span>Why Choose</span> US?</h4>
              <p>We consider your needs when providing dependable education software development services for your company. These are some of the main characteristics that make us the ideal option for you!</p>
            </div>

            {featureData.map((item, index) => (
              <div className="col-lg-4 col-sm-6" key={index}>
                <div className="item1">
                  <span className={`icon feature_box_col_${index + 1}`}>
                    <img src={item.img} alt={item.title} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    
    </>
  );
}

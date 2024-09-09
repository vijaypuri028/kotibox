import React from 'react';
import { FaRegLightbulb, FaCode, FaMobileAlt, FaHeartbeat, FaMusic, FaPaintBrush } from 'react-icons/fa';
import './Hiremain.css';
import arrowImage from '../../Kotibox img/icon/c.png';

export default function Hiredevelopmentmain(props) {
  const {
    hireservicemain1,
    hireservicemain2,
    hireservicemainpp,
    title1,
    title2,
    title3,
    title4,
    title5,
    title6,
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

  const blogData = [
    {
      icon: <FaRegLightbulb size={50} color="#c59c35" />,
      title: title1,
    },
    {
      icon: <FaRegLightbulb size={50} color="#c59c35" />,
      title: title2,
    },
    {
      icon: <FaRegLightbulb size={50} color="#c59c35" />,
      title: title3,
    },
    {
      icon: <FaRegLightbulb size={50} color="#c59c35" />,
      title: title4,
    },
    {
      icon: <FaCode size={50} color="#c59c35" />,
      title: title5,
    },
    {
      icon: <FaMobileAlt size={50} color="#c59c35" />,
      title: title6,
    },
  ];

  const featureData = [
    { title: "Committed Programmers", text: "We are aware of your needs and assist you in finding the most qualified eLearning app developers to provide top-notch services.", img: "https://www.jploft.com/img/focused-team.svg" },
    { title: "Support & Maintenance", text: "For any project centered on educational software development, we offer expert support & maintenance services.", img: "https://www.jploft.com/img/cost-effective.svg" },
    { title: "On Time and within budget", text: "We realize the significance of your money and time. So, we believe in providing a high-quality job on time.", img: "https://www.jploft.com/img/work-force.svg" },
    { title: "Individualized Creation", text: "With the assistance of our committed developers, who offer the best eLearning Development Services, we are able to offer the greatest education solution.", img: "https://www.jploft.com/img/privacy-security.svg" },
    { title: "Excellent User Experience", text: "Since we recognize the value of your idea, we create websites and applications that are visually appealing, draw users in, and offer superior user experience.", img: "https://www.jploft.com/img/enterprices-solutions.svg" },
    { title: "Security", text: "We recognize that, as technology advances on a regular basis, organizations must also adapt. Thus, we are up to date with the newest technologies.", img: "https://www.jploft.com/img/enterprices-solutions.svg" },
  ];

  return (
    <>
      <div style={{ paddingBottom: "70px", paddingTop: "60px" }} className='bg-light'>
        <h1 className='text-center pt-5 cards-wrapper-text-1'>{sectionhead}</h1>
        <p className='mx-auto w-50'>{sectionp}</p>
        <div className="cards-wrapper mx-auto">

          <div className="card-item-5 mt-5">
            <div className="card-content-wrapper">
              <FaHeartbeat className="card-icon" />
              <h3 className="card-heading">{section1}</h3>
              <p className="card-description">{sectionp1}</p>
            </div>
          </div>

          <i class="bi bi-arrow-return-right fs-1 arrow-image"></i>

          <div className="card-item-5">
            <div className="card-content-wrapper">
              <FaMusic className="card-icon" />
              <h3 className="card-heading">{section2}</h3>
              <p className="card-description">{sectionp2}</p>
            </div>
          </div>

          <i class="bi bi-arrow-return-right fs-1 arrow-image"></i>

          <div className="card-item-5">
            <div className="card-content-wrapper">
              <FaPaintBrush className="card-icon" />
              <h3 className="card-heading">{section3}</h3>
              <p className="card-description">{sectionp3}</p>
            </div>
          </div>

          <i class="bi bi-arrow-return-right fs-1 arrow-image"></i>

          <div className="card-item-5">
            <div className="card-content-wrapper">
              <FaCode className="card-icon" />
              <h3 className="card-heading">{section4}</h3>
              <p className="card-description">{sectionp4}</p>
            </div>
          </div>

          <i class="bi bi-arrow-return-right fs-1 arrow-image"></i>

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

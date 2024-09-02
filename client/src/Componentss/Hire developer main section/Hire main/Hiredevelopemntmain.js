import React from 'react';
import { FaRegLightbulb, FaCode, FaMobileAlt } from 'react-icons/fa';
import './Hiremain.css';

export default function Hiredevelopmentmain(props) {
  const {
    hireservicemain,
    hireservicep,
    hireservicemain1,
    hireservicemain2,
    hireservicemainpp,
    title1,
    title2,
    title3,
    title4,
    title5,
    title6
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

  return (
    <>
      <div className="feat bg-gray pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="section-head col-sm-12">
              <h4><span>Why Choose</span> US ?</h4>
              <p>
                We consider your needs when providing dependable education software development services for your company. These are some of the main characteristics that make us the ideal option for you!
              </p>
            </div>
            {[
              { title: "Committed Programmers", text: "We are aware of your needs and assist you in finding the most qualified eLearning app developers to provide top-notch services.", img: "https://www.jploft.com/img/focused-team.svg" },
              { title: "Support & Maintenance", text: "For any project centered on educational software development, we offer expert support & maintenance services.", img: "https://www.jploft.com/img/cost-effective.svg" },
              { title: "On Time and within budget", text: "We realize the significance of your money and time. So, we believe in providing a high-quality job on time.", img: "https://www.jploft.com/img/work-force.svg" },
              { title: "Individualized Creation", text: "With the assistance of our committed developers, who offer the best eLearning Development Services, we are able to offer the greatest education solution.", img: "https://www.jploft.com/img/privacy-security.svg" },
              { title: "Excellent User Experience", text: "Since we recognize the value of your idea, we create websites and applications that are visually appealing, draw users in, and offer superior user", img: "https://www.jploft.com/img/enterprices-solutions.svg" },
              { title: "Security", text: "We recognize that, as technology advances on a regular basis, organizations must also adapt. Thus, we are up to date with the newest technologies.", img: "https://www.jploft.com/img/enterprices-solutions.svg" },
            ].map((item, index) => (
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

      <div className="intro-section">
        <div className="container intro-content">
          <img
            src="https://img.freepik.com/free-photo/good-advice-from-beautiful-woman_329181-3527.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723680000&semt=ais_hybrid"
            alt="Placeholder"
            className="intro-image"
          />
          <div className="intro-text">
            <h2>{hireservicemain}</h2>
            <p>{hireservicep}</p>
            <button className="action-button">GET A QUOTE</button>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "white", fontFamily: "600" }}>
        <h1 className="text-center">
          {hireservicemain1} <span style={{ color: "#ff6347" }}>{hireservicemain2}</span>
        </h1>
        <p className="text-center">
          {hireservicemainpp}
        </p>

        <div className="container" style={{ backgroundColor: "white" }}>
          <hr className="mt-5" />
          <div className="row mt-5">
            {blogData.map((blog, index) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div style={{ height: "250px" }} className="blog_card">
                  <div className="blog_card_icon text-center mt-3">
                    {blog.icon}
                  </div>
                  <div className="blog_card_content">
                    <h3 className="text-center">{blog.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

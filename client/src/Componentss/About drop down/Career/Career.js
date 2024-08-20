import React from 'react';
import './Careerabout.css';  // Updated CSS file name

function Career() {
  const cardData = [
    {
      title: "There are three responses to a piece of design - yes, no, and WOW!",
      link: "#"
    },{
      title: "There are three responses to a piece of design - yes, no, and WOW!",
      link: "#"
    },
    {
      title: "There are three responses to a piece of design - yes, no, and WOW!",
      link: "#"
    },
    {
      title: "It is the long history of humankind that those who learned to collaborate and improvise most effectively have prevailed",
      link: "#"
    },
    {
      title: "There are three responses to a piece of design - yes, no, and WOW!",
      link: "#"
    },
    {
      title: "I strive for two things in design: simplicity and clarity. Great design is born of those two things",
      link: "#"
    },
    {
      title: "It is the long history of humankind that those who learned to collaborate and improvise most effectively have prevailed",
      link: "#"
    },
    {
      title: "There are three responses to a piece of design - yes, no, and WOW!",
      link: "#"
    }
  ];

  return (
    <>
      <section className="career-intro bg-gray pt-5 pb-5">
        <div className="container text-light">
          <div className="row">
            <div className="section-header col-12 text-center">
              <h1><span>We Are</span> Hiring</h1>
              <p className='mt-4 description'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s.
              </p>
            </div>

            {['Focused Team', 'Cost Efficient', 'Dedicated Workforce', 'Customized Solutions', 'Flexibility', 'Privacy & Security'].map((item, index) => (
              <div key={index} className="col-lg-4 col-sm-6">
                <div className="feature-item">
                  <span className="feature-icon">
                    <img src={`https://www.jploft.com/img/${item.toLowerCase().replace(/ /g, '-')}.svg`} alt={item} />
                  </span>
                  <h3>{item}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="career-reasons">
        <h1 className='text-center title'>Why Should You Join Us</h1>
        <p className='text-center subtitle mt-4'>
          At JPLoft, you will find everything at a place needed to grow as a seasoned professional. From your skills, knowledge, experience to creativity, communication, work ethics & more.
        </p>
        <div className="container card-container">
          {cardData.map((card, index) => (
            <a key={index} className="card" href={card.link}>
              <h3 className="card-title">{card.title}</h3>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default Career;

import React from 'react';
import { FaRegLightbulb, FaCode, FaMobileAlt } from 'react-icons/fa';
import './Hiremain.css'

export default function Hiredevelopmentmain() {

  const notes = [
    {
      title: 'Card Title 1',
      content: 'Our experienced team of Android developers is committed to developing custom solutions.',
      image: 'https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Card Title 3',
      content: 'Our experienced team of Android developers is committed to developing custom solutions.',
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Card Title 4',
      content: 'Our experienced team of Android developers is committed to developing custom solutions.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fG9mZmljZSUyMGVtcGxveWVlfGVufDB8fDB8fHww',
    },
  ];

  const blogData = [
    {
      icon: <FaRegLightbulb size={50} color="#c59c35" />,
      title: 'Here Comes The Blog Title.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident voluptatem.',
    },
    {
      icon: <FaRegLightbulb size={50} color="#c59c35" />,
      title: 'Here Comes The Blog Title.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident voluptatem.',
    },
    {
      icon: <FaRegLightbulb size={50} color="#c59c35" />,
      title: 'Here Comes The Blog Title.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident voluptatem.',
    },
    {
      icon: <FaRegLightbulb size={50} color="#c59c35" />,
      title: 'Here Comes The Blog Title.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident voluptatem.',
    },
    {
      icon: <FaCode size={50} color="#c59c35" />,
      title: 'Here Comes The Blog Title.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident voluptatem.',
    },
    {
      icon: <FaMobileAlt size={50} color="#c59c35" />,
      title: 'Here Comes The Blog Title.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident voluptatem.',
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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s.
              </p>
            </div>
            {[
              { title: "Focused Team", img: "https://www.jploft.com/img/focused-team.svg" },
              { title: "Cost Efficient", img: "https://www.jploft.com/img/cost-effective.svg" },
              { title: "Dedicated Workforce", img: "https://www.jploft.com/img/work-force.svg" },
              { title: "Customized Solutions", img: "https://www.jploft.com/img/privacy-security.svg" },
              { title: "Flexibility", img: "https://www.jploft.com/img/enterprices-solutions.svg" },
              { title: "Privacy & Security", img: "https://www.jploft.com/img/enterprices-solutions.svg" },
            ].map((item, index) => (
              <div className="col-lg-4 col-sm-6" key={index}>
                <div className="item1">
                  <span className={`icon feature_box_col_${index + 1}`}>
                    <img src={item.img} alt={item.title} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa.</p>
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
            <h2>Our Android app developers are here to turn your vision into a stunning, functional reality.</h2>
            <p>
              This is some placeholder text. You can replace it with your content.
              It will be displayed next to the image on the left.
            </p>
            <button className="action-button">Click Me</button>
          </div>
        </div>
      </div>

      <div className=' ' style={{ backgroundColor: "white" }}>
        <h1 className='text-center'>
          Android App Development Services Our Developers Excel In
        </h1>
        <p className='text-center '>
          Access dedicated teams of Android developers, consultants, and engineers who can create customized solutions for your business, the market you want to target, and your brand's persona.
        </p>

        <div className="container" style={{ backgroundColor: "white" }}>
          <hr className='mt-5 ' />
          <div className="row mt-5">
            {blogData.map((blog, index) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                <div className="blog_card">
                  <div className="blog_card_icon text-center mt-3">
                    {blog.icon}
                  </div>
                  <div className="blog_card_content">
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='container text-light'>
        <h2 style={{ color: "orange" }}>Hire Android App Developers for Every Business </h2>
        <p>Our experienced team of Android developers is committed to developing custom solutions suited to your business's specific needs. Whether you're a new business seeking to establish yourself or an established company looking to create something new, we have the experience to make your ideas come to life.</p>
      </div>

      <div className="card-container mt-5">
        {notes.map((card, index) => (
          <div
            className="card-item"
            key={index}
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <h3 className="card-title">{card.title}</h3>
            <h3 className="card-content">{card.content}</h3>
            <span className="card-more">Read More</span>
          </div>
        ))}
      </div>

      {/* <div className='container' style={{ marginTop: '150px' }}>
        <h2 style={{ color: 'orange' }}>Our Android App Developers Expertise</h2>
        <p className='text-light'>
          Hire Android app developers who are skilled at creating custom mobile applications to increase your business's efficiency. Our developers have expertise in various domains, including Android app development, testing, maintenance, and support. We can create high-quality apps that align with your business goals.
        </p>
      </div> */}
    </>
  );
}

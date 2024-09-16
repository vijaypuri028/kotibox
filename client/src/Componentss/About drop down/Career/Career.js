import React from 'react';
import './Careerabout.css';  
import Navbar from '../../Navbars/Navbar';
import Footer from '../../footer/footer';
import Blog from '../../blog/blog';
import Button from '../../button/Button';
import imgSrc from "../../Kotibox img/Main img/Game development.jpg";
import Webservicemain from '../../Webservicemain.js/Webservicemain';
import { Link } from 'react-router-dom';
import pngimg from '../../Kotibox img/Main img/png img/AIpng.jpg';

function Career() {
    const mainText = { Text: "WEBSITE DEVELOPMENT" }
    const Secondtext = { Text: "Your Partner " }
    const textArray = ["laravel", "CodeIgniter", "WordPress", "WooCommerce", "Magento"];
  


    const cardData1 = [
        {
          title: "There are three responses to a piece of design - yes, no, and WOW!",
          link: "#",
          imageSrc: "https://images.pexels.com/photos/26692092/pexels-photo-26692092/free-photo-of-woman-sitting-with-laptop-in-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },{
          title: "There are three responses to a piece of design - yes, no, and WOW!",
          link: "#",
          imageSrc: "https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          title: "There are three responses to a piece of design - yes, no, and WOW!",
          link: "#",
          imageSrc: "https://images.pexels.com/photos/5325104/pexels-photo-5325104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          title:  "There are three responses to a piece of design - yes, no, and WOW!",
          link: "#",
          imageSrc: "https://images.pexels.com/photos/7433825/pexels-photo-7433825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          title: "There are three responses to a piece of design - yes, no, and WOW!",
          link: "#",
          imageSrc: "https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          title:  "There are three responses to a piece of design - yes, no, and WOW!",
          link: "#",
          imageSrc: "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          title:  "There are three responses to a piece of design - yes, no, and WOW!",
          link: "#",
          imageSrc: "https://images.pexels.com/photos/246658/pexels-photo-246658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          title: "There are three responses to a piece of design - yes, no, and WOW!",
          link: "#",
          imageSrc: "https://images.pexels.com/photos/5467588/pexels-photo-5467588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          title: "There are three responses to a piece of design - yes, no, and WOW!",
          link: "#",
          imageSrc: "https://images.pexels.com/photos/13620267/pexels-photo-13620267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          title: "There are three responses to a piece of design - yes, no, and WOW!",
          link: "#",
          imageSrc: "https://images.pexels.com/photos/90333/pexels-photo-90333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
       
       
      ];

  return (
    <>
      <Navbar/>
      <Webservicemain imgSrc={imgSrc} mainText={mainText.Text} Secondtext={Secondtext.Text} textArray={textArray} />
      

      <div className='intro-section'>
        <div className='container intro-content'>
          <img src={pngimg} alt='Tech Solutions' className='intro-image' />
          <div className='intro-text'>
            <h2>Using Tech to Build a Better World!</h2>
            <p>
              Since the inception of Kotibox in 2013, we are known as a pioneer Outsourced Software Development Company, serving clients globally with development centers in India and sales offices in the USA, Canada, and Dubai.
              Our expert team uses proven methodologies and business knowledge to deliver high-quality solutions to our renowned clients.
              We drive real innovation and help transform and grow organizations using trending technologies.
            </p>
            <Link  style={{textDecoration:"none"}} to='/contact'> <button className='btn btn-danger'>Learn More</button> </Link>
          </div>
        </div>
      </div>

   

      <section className="why-join-us">
            <h1 className='text-center text-light title'>Why Should You Join Us</h1>
           
            <div className="career-section card-career-section mx-auto mt-5  ">
              {cardData1.map((card, index) => (
                <div key={index} className="company-card bg-light ">
                  <div className="card-image" style={{ backgroundImage: `url(${card.imageSrc})` }}></div>
                  <div className="card-content">
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-description">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>



      <Button/>
  
      <Footer/>
    </>
  );
}

export default Career;

import React from 'react';
import './Careerabout.css';  
import Navbar from '../../Navbars/Navbar';
import Footer from '../../footer/footer';
import Blog from '../../blog/blog';
import Button from '../../button/Button';
import imgSrc from "../../Kotibox img/Main img/Game development.jpg";
import Webservicemain from '../../Webservicemain.js/Webservicemain';

function Career() {
    const mainText = { Text: "WEBSITE DEVELOPMENT" }
    const Secondtext = { Text: "Your Partner " }
    const textArray = ["laravel", "CodeIgniter", "WordPress", "WooCommerce", "Magento"];
  
    const cardData = [
      {
        title: "There are three responses to a piece of design - yes, no, and WOW!",
        link: "#",
        imageSrc: "https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png"
      },{
        title: "There are three responses to a piece of design - yes, no, and WOW!",
        link: "#",
        imageSrc: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png"
      },
      {
        title: "There are three responses to a piece of design - yes, no, and WOW!",
        link: "#",
        imageSrc: "https://download.logo.wine/logo/Node.js/Node.js-Logo.wine.png"
      },
      {
        title:  "There are three responses to a piece of design - yes, no, and WOW!",
        link: "#",
        imageSrc: "https://1.bp.blogspot.com/-9oEdNse-Jpg/XqGy4q33HII/AAAAAAAAAq0/b_1A9VJPdrAJANfxpBIlWHUqcaMC0-LfACLcBGAsYHQ/w1200-h630-p-k-no-nu/1.jpg"
      },
      {
        title: "There are three responses to a piece of design - yes, no, and WOW!",
        link: "#",
        imageSrc: "https://static.vecteezy.com/system/resources/previews/022/100/945/large_2x/java-logo-transparent-free-png.png"
      },
      {
        title:  "There are three responses to a piece of design - yes, no, and WOW!",
        link: "#",
        imageSrc: "https://isocpp.org/files/img/cpp_logo.png"
      },
      {
        title:  "There are three responses to a piece of design - yes, no, and WOW!",
        link: "#",
        imageSrc: "https://pluspng.com/img-png/apple-ios-logo-png-ios-bug-can-force-apple-iphones-to-call-911-repeatedly-1649.png"
      },
      {
        title: "There are three responses to a piece of design - yes, no, and WOW!",
        link: "#",
        imageSrc: "https://pngimg.com/uploads/php/php_PNG43.png"
      },
      {
        title: "There are three responses to a piece of design - yes, no, and WOW!",
        link: "#",
        imageSrc: "https://laravelnews.s3.amazonaws.com/images/laravel-featured.png"
      },
      {
        title: "There are three responses to a piece of design - yes, no, and WOW!",
        link: "#",
        imageSrc: "http://www.goodworklabs.com/wp-content/uploads/2014/05/Android.jpg"
      },
      {
        title: "There are three responses to a piece of design - yes, no, and WOW!",
        link: "#",
        imageSrc: "https://developer.okta.com/assets-jekyll/blog/tutorial-kotlin-beginners-guide/kotlin-logo-social-21c8518b19eb96d96f35e0057bb92b7e1281a24820e0fa09e39c42f184bd7faa.png"
      },
      {
        title: "There are three responses to a piece of design - yes, no, and WOW!",
        link: "#",
        imageSrc: "https://codegeekz.com/wp-content/uploads/angularjs.jpg"
      },
      {
        title: "There are three responses to a piece of design - yes, no, and WOW!",
        link: "#",
        imageSrc: "https://cdn.iconscout.com/icon/free/png-512/microsoft-dotnet-1-1175178.png"
      },
      {
        title: "There are three responses to a piece of design - yes, no, and WOW!",
        link: "#",
        imageSrc: "https://th.bing.com/th/id/OIP.JkGb2iOR8rNEl6Gz7MyFYAHaDk?rs=1&pid=ImgDetMain"
      },
      {
        title: "There are three responses to a piece of design - yes, no, and WOW!",
        link: "#",
        imageSrc: "https://guidingcode.com/wp-content/uploads/2020/10/check-python-version-in-windows-macos-linux-800x500.png"
      },
      {
        title: "There are three responses to a piece of design - yes, no, and WOW!",
        link: "#",
        imageSrc: "https://i.pinimg.com/originals/d5/b9/3b/d5b93bad3c10cc5b92b47e4678598548.jpg"
      }
    ];

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
      


      <section style={{backgroundColor:"white"}} className="career-reasons">
        <h1 style={{fontSize:"50px"}} className='text-center title'>Current Openings</h1>
       
        <div className="career-section card-career-section  mx-auto mt-5 ">
          {cardData.map((card, index) => (
            <a key={index} className="card" href={card.link}>
              <img  className="card-image" src={card.imageSrc} alt={`Card ${index}`} />
              
              <h3 className="card-title">{card.title} <br/> <li className='btn btn-light' >Apply Here</li></h3>
              
            </a>
            
          ))}
        </div>
      </section>


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
      <Blog/>
      <Footer/>
    </>
  );
}

export default Career;

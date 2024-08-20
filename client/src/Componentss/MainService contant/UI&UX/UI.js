import React from 'react'
import Navbar from '../../Navbars/Navbar'
import Webservicemain from '../../Webservicemain.js/Webservicemain'
import imgSrc from '../../Kotibox img/Main img/UI UX.jpg'
import Footer from '../../footer/footer'
import Blog from '../../blog/blog'
import MainContent from '../../Main content/MainContent'
import Marquee from '../../Marquee/Marquee'

export default function UI() {
  const mainText = { Text: "WEBSITE  DEVELOPMENT" }
  const Secondtext = { Text: "Your Partner " }
  const textArray = ["figma", "wix-studio"];


  const services = [
    { icon: "bi bi-0-square", title: "Custom Website Development", description: "We offer custom website design and development services to leverage our client business with a whole new brand identity on the web. Our team of web designers and developers is highly proficient in creating professional websites for your business." },
    { icon: "bi bi-pc-display", title: "E-commerce Web developmet", description: "WordPress is the most preferred open source CMS for custom web development. It enables creating Blog, Magazine, E-Commerce and other web development projects. JPLoft has expertise in WordPress Development, thanks to our experienced team of WordPress" },
    { icon: "bi bi-pc-display", title: "ERP Development", description: "We at JPLoft create B2B and B2C websites for our clients’ eCommerce web development needs. Hire our highly proficient eCommerce web developers to create fully responsive eCommerce websites, accessible on different platforms like mobile, tablets, desktops and " },
    { icon: "bi bi-pc-display", title: "Web App Development", description: "If your business requires custom CMS or SaaS development needs, our web developers can build tailored CMS & SaaS web solutions as per your business requirements. Our web programmers have expertise in technologies like PHP, ASP.NET,  JAVA and Python." },
    { icon: "bi bi-pc-display", title: "Single Landing page website", description: "Our web application developers are competent to build apps on the web to empower your business. They have immense experience and technical expertise in creating web applications for real estate, travel, eCommerce and social  media industries." },
    { icon: "bi bi-pc-display", title: "Gaming Website", description: "We develop ERP software for our global clients irrespective of what industry they belong to. Our web developers build Enterprise Resource Planning (ERP) systems to help businesses manage planning, inventory, human resource management and  finance management." },
    // Add more services as needed
  ];

  const shapeBoxes = [
    {
      imgSrc: "https://images.pexels.com/photos/326518/pexels-photo-326518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Design",
      cardNo: "01",
      title: "Custom ",
      description: "We provide the best eCommerce website with the help of our dedicated developers who provide the best CakePHP Website Development Services.",
      link: "/design"
    },
    {
      imgSrc: "https://images.pexels.com/photos/1714340/pexels-photo-1714340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Design",
      cardNo: "02",
      title: "Maintenance",
      description: "We provide the best eCommerce website with the help of our dedicated developers who provide the best CakePHP Website Development Services.",
      link: "/design"
    },
    {
      imgSrc: "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Design",
      cardNo: "03",
      title: "Support",
      description: "We provide the best eCommerce website with the help of our dedicated developers who provide the best CakePHP Website Development Services.",
      link: "/design"
    },
    {
      imgSrc: "https://images.pexels.com/photos/19747867/pexels-photo-19747867/free-photo-of-man-working-on-computer-at-desk-in-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Design",
      cardNo: "04",
      title: "On-time",
      description: "We provide the best eCommerce website with the help of our dedicated developers who provide the best CakePHP Website Development Services.",
      link: "/design"
    },
    {
      imgSrc: "https://images.pexels.com/photos/19761838/pexels-photo-19761838/free-photo-of-a-monitor-on-a-desk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      alt: "Design",
      cardNo: "05",
      title: "Budget",
      description: "We provide the best eCommerce website with the help of our dedicated developers who provide the best CakePHP Website Development Services.",
      link: "/design"
    },
    {
      imgSrc: "https://images.pexels.com/photos/25568813/pexels-photo-25568813/free-photo-of-home-office-with-computer.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Design",
      cardNo: "06",
      title: "Security",
      description: "We provide the best eCommerce website with the help of our dedicated developers who provide the best CakePHP Website Development Services.",
      link: "/design"
    },
  ];
  return (
    <>
    <Navbar/>
    <Webservicemain imgSrc={imgSrc} mainText={mainText.Text}  Secondtext={Secondtext.Text} textArray={textArray} />
    <MainContent
       
        benefitTitle="Website  Development Benefits"
        benefitDescription="Kotibox is a top development company with Moodle solutions..."
        services={services}
        whyChooseTitle="Why Choose Kotibox for Website  Development?"
        whyChooseDescription="Because we provide reliable CakePHP development services for your business, keeping your requirements in mind. Here are a few key features that make us a perfect choice for you Because we provide reliable CakePHP development services for your business, keeping your requirements in mind. Here are a few key features that make us a perfect choice for you!!! "
        shapeBoxes={shapeBoxes}

        heading2="KOTIBOX"
        subheading="WEBDEVELOPMENT"
        subheadingSize="2em"
        additionalText="Since 2010"
        additionalTextSize="1.5em"

        circelhead="Web Development"
        circelsub="CakePHP is an advanced PHP7-based rapid application development framework that makes the web application development process easier."
        circeltext="As a prominent web development company across the world, JPLoft has highly experienced CakePHP developers that help you to create strong web apps. JPLoft builds websites that are more responsive and have elegant designs with extraordinary features. In this framework, you can improve your user interaction by developing a high-quality web app for your business."

      />
    
    
   
     <Blog/> 
     <Marquee/>
     <Footer/>
    </>
  )
}

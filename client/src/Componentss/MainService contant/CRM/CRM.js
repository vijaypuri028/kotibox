import React from 'react'
import Navbar from '../../Navbars/Navbar'
import Webservicemain from '../../Webservicemain.js/Webservicemain'
import imgSrc from '../../Kotibox img/Main img/CRM.jpg'
import Footer from '../../footer/footer'

import MainContent from '../../Main content/MainContent'


import Technologies1img from '../../Kotibox img/icon/icons8-java-48.png'
import Technologies2img from '../../Kotibox img/icon/icons8-java-48.png'
import Technologies3img from '../../Kotibox img/icon/icons8-java-48.png'
import Technologies4img from '../../Kotibox img/icon/icons8-java-48.png'
import Technologies5img from '../../Kotibox img/icon/icons8-java-48.png'
import Technologies6img from '../../Kotibox img/icon/icons8-java-48.png'
import { Link } from 'react-router-dom'

export default function CRM() {
  const mainText = { Text: "CRM DEVELOPMENT COMPANY" }
  const Secondtext = { Text: "Large-scale corporations, start-ups, and entrepreneurs are among the companies for which we provide CRM development services. By offering solutions that improve client interactions, we hope to completely change your business. You may take advantage of affordable CRM development services and automate your customer relationship management by working with our knowledgeable CRM developers. " }
  const textArray = ["CRM Consulting", "CRM Implementation", "Custam CRM Development", "CRM App" ];



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
    <Webservicemain imgSrc={imgSrc} mainText={mainText.Text}  Secondtext={Secondtext.Text}  textArray={textArray}  />
    <section className="section-services">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-8">
              <div className="header-section">
                <h2 className="title">Our Services for Developing Custom CRMs</h2>
                <p >
                A good provider of CRM Development Services is essential for managing customer relationships and an effective data gatherer. Reputable CRM software collects data from all business communication channels; long-term benefits come from working with Kotibox CRM software development company. It is an economical method of compiling and arranging customer data.                </p>

              </div>
            </div>
          </div>
          <div className="row text-center">

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-500px"></i>
                  <h3 className="title">CRM Implementation


                  </h3>
                </div>
                <div className="part-2">
                  <p className="description">
                  Proper preparation, in conjunction with a gradual development process and maintenance services, are essential components of CRM implementation. The bespoke CRM programming experts at Brainvire are equipped with the necessary skills to provide precise, high-quality CRM execution administrations. Through our customized CRM execution administrations, we address your business goals, improve execution, and elevate client commitment.</p>                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5 "></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-angellist"></i>
                  <h3 className="title">CRM Consulting
                  </h3>
                </div>
                <div className="part-2">
                  <p className="description">
                  We have years of experience providing excellent CRM solutions. You can acquire capable, moral, and effective CRM development solutions from us. In the unlikely event that you have any questions, speak with our executives. They can help you with counseling and setting up the creation of bespoke CRM software for your company. Our team of experts assists you in accordance with their understanding of the market's dynamic dimensions.                </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fas fa-award"></i>
                  <h3 className="title">CRM Applications


                  </h3>
                </div>
                <div className="part-2">
                  <p className="description">

                  It is easier to associate frameworks with a variety of clients while using mobile CRM apps. Since universal access relies on the accuracy of their unique links to the board data, portable CRM clients are more likely to favor it. Because customers love portable CRM, these apps will continue to become more and more common. We put together personalized CRM mobile apps that connect you with time-pressed clients.             </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>




          </div>
        </div>
      </section>

      <MainContent
        benefitTitle="Website Development Benefits"
        benefitDescription="Kotibox is a top development company with Moodle solutions..."
        services={services}
        whyChooseTitle="Why Choose Kotibox for Website Development?"
        whyChooseDescription="Because we provide reliable CakePHP development services for your business, keeping your requirements in mind. Here are a few key features that make us a perfect choice for you!!!"
        shapeBoxes={shapeBoxes}
        heading2="KOTIBOX"
        subheading="WEBDEVELOPMENT"
        subheadingSize="2em"
        additionalText="Since 2010"
        additionalTextSize="1.5em"
        circelhead="A Variety of Services We Provide for Website Development"
        circelsub="We help various organizations with their unique difficulties by utilizing our skills in custom web development. Both startups and large corporations can use our products."
        circeltext="As a prominent web development company across the world, JPLoft has highly experienced CakePHP developers that help you to create strong web apps. JPLoft builds websites that are more responsive and have elegant designs with extraordinary features. In this framework, you can improve your user interaction by developing a high-quality web app for your business."

        services11="With Us, Launch Your Dream Project"
        servicesp="We have collaborated with a number of the most cutting-edge concepts and companies in the business."
        Hiredevelopmentmain1="Let's Connect"


        Technologiesp="Technology Employed
We are a full-service web development business that adds value to our clients' projects by utilizing the newest technology stack. This is an important tech stack that we are knowledgeable with"
        Technologies1="React Js Development"
        Technologies2="Node Js Development"
        Technologies3="Angular Js Development"
        Technologies4="Vue Js Development"
        Technologies5="Express Js Development"
        Technologies6="laravel Development"
        Technologies7="Python Development"
        Technologies8="WordPress Development"
        Technologies9="Ember js WebDevelopment"

        Industriesheading="Customized CRM  Development for Various Industry Verticals"
        Industriesp="Our renowned services are provided to a wide range of companies and sectors, including startups, large corporations, and small businesses. Prepare to explode with the assistance of our skilled Custom CRM developers—you can anticipate cutting-edge digital solutions that will propel your company to new heights."

        sectionhead="Our CRM Development Process"
        sectionp=""
        section1="Planning and Analysis of Requirements
"
        sectionp1="Before creating a comprehensive plan and strategy, our team of business analysts first gathers client needs and performs an analysis. This includes defining the project scope, timeline, and resources needed for the CRM development project."
        section2="Designing and Prototyping"
        sectionp2="Our design team assumes leadership of the project during this phase and develops a visual design and CRM software prototype while taking the client's branding and UI preferences into account."
        section3="Development and Coding"
        sectionp3="This stage marks the beginning of the CRM software's actual development. The required code is written by our hardworking group of professional CRM developers, who also integrate modules and features and guarantee optimal functionality."
        section4="Testing and Quality"
        sectionp4="To find and address faults and issues with the CRM software, our team of quality analysts and testers does thorough testing, which includes functional, performance, and user testing."
        section5="Integration and Deployment"
        sectionp5="The CRM software is tested, and then the deployment and integration procedure is started. Our CRM team integrates the CRM program with the client's existing platforms and systems and installs it in the client's environment."
      />

      <section className='services section-bg' id='services'>
        <div className='container'>
          <header className='section-header'>
            <h3>Benefits of Custom CRM Development That Cannot Be Avoided</h3>
            <p>Businesses can take advantage of a number of indisputable advantages from custom CRM creation, which help to enhance client connections, streamline operations, and propel overall corporate performance.</p>
          </header>
          <div className='row'>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies1img} alt="Kotlin" />
                </div>
                <h3 className='title'>Better Communication with Customers</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies2img} alt="Swift" />
                </div>
                <h3 className='title'>Making decisions based on data</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies3img} alt="Flutter" />
                </div>
                <h3 className='title'>Growth and Revenue were both up</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies4img} alt="Java" />
                </div>
                <h3 className='title'>Better Customer Support</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies5img} alt="React Native" />
                </div>
                <h3 className='title'>Improved Cooperation Within</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies6img} alt="React Native" />
                </div>
                <h3 className='title'>streamlined procedures for sales</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    
 

     <Footer/>
    </>

  )
}

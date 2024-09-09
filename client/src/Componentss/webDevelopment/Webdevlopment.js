import React from 'react';
import './Webdevelopment.css';
import Navbar from '../Navbars/Navbar';
import Footer from '../footer/footer';
import Button from '../button/Button';
import Webservicemain from '../Webservicemain.js/Webservicemain';
import imgSrc from "../Kotibox img/Main img/Web10.jpg";
import MainContent from '../Main content/MainContent';
import { Link } from 'react-router-dom';

import Technologies1img from '../Kotibox img/icon/icons8-react-100.png'
import Technologies2img from '../Kotibox img/icon/Js.png'
import Technologies3img from '../Kotibox img/icon/Php.png'
import Technologies4img from '../Kotibox img/icon/icons8-laravel-64.png'
import Technologies5img from '../Kotibox img/icon/icons8-node-js-48.png'
import Technologies6img from '../Kotibox img/icon/icons8-java-48.png'

export default function WebDevelopment() {
  const mainText = "Website Development Company";
  const Secondtext = "We work with you to develop an engaging website that increases traffic and improves the visibility of your business. Our skilled group of web developers creates websites that are visually appealing, responsive, and user-friendly using the newest technologies. What makes us unique is our dedication to excellence, client happiness, and meticulous attention to detail.";
  const textArray = ["laravel", "Codeelgniter", "wordpress", "Woo commerce", "Mangento"];

  const services = [
    { icon: "bi bi-0-square", title: "Custom Website  Development", description: "We offer custom website design and development services to leverage our client business with a whole new brand identity on the web. Our team of web designers and developers is highly proficient in creating professional websites for your business." },
    { icon: "bi bi-pc-display", title: "E-commerce Web development", description: "WordPress is the most preferred open source CMS for custom web development. It enables creating Blog, Magazine, E-Commerce and other web development projects. JPLoft has expertise in WordPress Development, thanks to our experienced team of WordPress" },
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
      title: "Custom Development",
      description: "In order to create aesthetically pleasing, user-friendly, and performance-focused websites and web apps, we go above and above for our clients when providing custom web development services.",
      link: "/design"
    },
    {
      imgSrc: "https://images.pexels.com/photos/1714340/pexels-photo-1714340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Design",
      cardNo: "02",
      title: "Confidentiality ",
      title1: "& Security",
      description: "For any web development project, we execute non-disclosure agreements (NDAs) with our clients to guarantee the privacy and protection of their original web application concepts and personal data.",
      link: "/design"
    },
    {
      imgSrc: "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Design",
      cardNo: "03",
      title: "Support",
      description: "Our team of support engineers is committed to being available around-the-clock to address any questions you may have about web development solutions and to offer the necessary upkeep and support.",
      link: "/design"
    },
    {
      imgSrc: "https://images.pexels.com/photos/19747867/pexels-photo-19747867/free-photo-of-man-working-on-computer-at-desk-in-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Design",
      cardNo: "04",
      title: "On-time And",
      title1: "In Budget",
      description: "Whether using pre-built templates or unique designs, our highly qualified team of web developers guarantees that completed web development solutions will be delivered on schedule and within the allotted budget",
      link: "/design"
    },
    {
      imgSrc: "https://images.pexels.com/photos/19761838/pexels-photo-19761838/free-photo-of-a-monitor-on-a-desk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      alt: "Design",
      cardNo: "05",
      title: "Dedicated Developers",
      description: "Use the skills of our committed web designers and developers to turn your web development idea into a world-class website that can increase revenue.",
      link: "/design"
    },
    {
      imgSrc: "https://images.pexels.com/photos/25568813/pexels-photo-25568813/free-photo-of-home-office-with-computer.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Design",
      cardNo: "06",
      title: "Outstanding User ",
      title1: "Interface",
      description: "The secret to any website or web app solution's success is a seamless user experience. As a result, we guarantee the delivery of web development solutions that provide a first-rate user experience.",
      link: "/design"
    },
  ];

  return (
    <>
      <Navbar />
      <Webservicemain
        imgSrc={imgSrc}
        mainText={mainText}
        Secondtext={Secondtext}
        textArray={textArray}
        serviceButton=' CONSULT OUR EXPERT '
      />

      <section className="section-services">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-8">
              <div className="header-section">
                <h2 className="title">A Variety of Services We Provide for Website Development</h2>
                <p >
                  We help various organizations with their unique difficulties by utilizing our skills in custom web development. Both startups and large corporations can use our products.
                </p>

              </div>
            </div>
          </div>
          <div className="row text-center">

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-500px"></i>
                  <h3 className="title">eCommerce Development</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    To create the e-commerce store of your dreams, get customized eCommerce platform development services. You might become a business success story with the aid of our e-commerce web development specialists.
                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5 "></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-angellist"></i>
                  <h3 className="title">Personalized Website Development  </h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    Use our bespoke web development services to create a dynamic, responsive, and captivating website that provides users with a cutting-edge experience that can convert them into buyers.
                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fas fa-award"></i>
                  <h3 className="title">Web App Development</h3>
                </div>
                <div className="part-2">
                  <p className="description">

                    Web applications are full of possibilities and have the power to turn a typical organization into a remarkable one. Thus, we are here to assist you with our offshore web app development services.
                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-asymmetrik"></i>
                  <h3 className="title">Landing Page Development</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    The landing page serves as an initial impression, and our goal is to convert visitors into paying customers. As a full-cycle web development firm, impressions rather than web pages are what we produce.
                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fas fa-broadcast-tower"></i>
                  <h3 className="title">Website Designing Services</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    We can be your ideal pick for a web designing and development firm that will work tirelessly for you, whether it be creating a brand-new website from scratch or giving the one that already exists a makeover.                </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>
            {/* / End Single Service */}

            {/* Start Single Service */}
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-canadian-maple-leaf"></i>
                  <h3 className="title text-center">Web Development for Cloud (SaaS)
                  </h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    Our SaaS application development services can help you take full advantage of the many benefits that cloud computing has to offer. We create contemporary cloud apps with the newest technologies.
                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-canadian-maple-leaf"></i>
                  <h3 className="title">UI/UX Development
                  </h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    A website or app's UI/UX is like its soul. Our UI/UX development services guarantee unparalleled designs and user interfaces that assist companies in quickly reaching their target market and holding onto their current clientele.
                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-canadian-maple-leaf"></i>
                  <h3 className="title">Web upkeep and support

                  </h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    We can offer the best web support and maintenance services for enterprise web application maintenance and custom web apps thanks to our expertise in responsive web development.
                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-canadian-maple-leaf"></i>
                  <h3 className="title">WordPress Development
                  </h3>
                </div>
                <div className="part-2">
                  <p className="description">For creating custom websites, WordPress is the most popular open-source content management system. It makes it possible to create web development projects like blogs, magazines, e-commerce, and others. Because of our skilled staff of WordPress developers, KOTIBOX has experience with WordPress development.
                  </p>
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

        services11="Boost the Growth of Your Business!"
        servicesp="We have always aimed to surpass our clients' expectations by providing unrivaled web development services, regardless of the complexity. So let's make your ideas a reality, if you have any."
        Hiredevelopmentmain1="Hire Web Developer"


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

        Industriesheading="Customized Mobile Application Development for Various Industry Verticals"
        Industriesp="Our renowned services are provided to a wide range of companies and sectors, including startups, large corporations, and small businesses. Prepare to explode with the assistance of our skilled mobile app developers—you can anticipate cutting-edge digital solutions that will propel your company to new heights."

        sectionhead="Our Website Development Process"
        sectionp=""
        section1="Analyzing Requirements"
        sectionp1="defining a roadmap and requirements, then creating a team structure."
        section2="UI/UX Design"
        sectionp2="combining profitable design to provide a flawless user experience for clients."
        section3="Development Phase"
        sectionp3="completing backend development and developing an agile development methodology' API."
        section4="Testing Phase"
        sectionp4="Your app is put through a battery of tests before to launch."
        section5="Deployment & Support"
        sectionp5="The website will be launched, and in the future, we'll offer assistance and maintenance."
      />

      <section className='services section-bg' id='services'>
        <div className='container'>
          <header className='section-header'>
            <h3>Technologies We Use</h3>
            <p>Technologies We Use</p>
          </header>
          <div className='row'>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies1img} alt="Kotlin" />
                </div>
                <h3 className='title'>React</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies2img} alt="Swift" />
                </div>
                <h3 className='title'>Java Script </h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies3img} alt="Flutter" />
                </div>
                <h3 className='title'>PHP</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies4img} alt="Java" />
                </div>
                <h3 className='title'>laravel</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies5img} alt="React Native" />
                </div>
                <h3 className='title'>NodeJS</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies6img} alt="Technology Name" />
                </div>
                <h3 className='title'>Java</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Button />
      <Footer />
    </>
  );
}

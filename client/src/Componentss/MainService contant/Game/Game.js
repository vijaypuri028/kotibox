import React from 'react'
import Navbar from '../../Navbars/Navbar'
import Footer from '../../footer/footer'
import Webservicemain from '../../Webservicemain.js/Webservicemain'
import imgSrc from '../../Kotibox img/Main img/Game2.jpg'
import Blog from '../../blog/blog'
import MainContent from '../../Main content/MainContent'
import Marquee from '../../Marquee/Marquee'
import png1 from '../../Kotibox img/Main img/png img/Fullstack.jpg'

import Technologies1img from '../../Kotibox img/icon/icons8-java-48.png'
import Technologies2img from '../../Kotibox img/icon/icons8-java-48.png'
import Technologies3img from '../../Kotibox img/icon/icons8-java-48.png'
import Technologies4img from '../../Kotibox img/icon/icons8-java-48.png'
import Technologies5img from '../../Kotibox img/icon/icons8-java-48.png'
import Technologies6img from '../../Kotibox img/icon/icons8-java-48.png'
import { Link } from 'react-router-dom'

export default function Game() {
  const mainText = { Text: "SAAS APPLICATION" }
  const Secondtext = { Text: "We offer the best SaaS development services, customizations, and integrations to companies based on their specific requirements. " }
  const textArray = ["Unity Game Development ", "VR Game Development", "AR Game Development"];



  const services = [
    { icon: "bi bi-0-square", title: "Custom Website Development", description: "We offer custom website design and development services to leverage our client business with a whole new brand identity on the web. Our team of web designers and developers is highly proficient in creating professional websites for your business." },
    { icon: "bi bi-pc-display", title: "E-commerce Web developmet", description: "WordPress is the most preferred open source CMS for custom web development. It enables creating Blog, Magazine, E-Commerce and other web development projects. Kotibox has expertise in WordPress Development, thanks to our experienced team of WordPress" },
    { icon: "bi bi-pc-display", title: "ERP Development", description: "We at Kotibox create B2B and B2C websites for our clients’ eCommerce web development needs. Hire our highly proficient eCommerce web developers to create fully responsive eCommerce websites, accessible on different platforms like mobile, tablets, desktops and " },
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
      <Navbar />
      <Webservicemain imgSrc={imgSrc} mainText={mainText.Text} Secondtext={Secondtext.Text} textArray={textArray} />
      <section className="section-services">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-8">
              <div className="header-section">
                <h2 className="title">SaaS Application Development Services
                  We Offer</h2>
                <p >Among our many SaaS services is a well-thought-out selection of the functional and architectural building blocks needed to create successful solutions and start a SaaS application development business.
                </p>

              </div>
            </div>
          </div>
          <div className="row text-center">

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-500px"></i>
                  <h3 className="title">Design and Development of SaaS Apps</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                  We offer full-service SaaS software design and development, transforming your imaginative idea into a dependable and adaptable application.
                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5 "></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-angellist"></i>
                  <h3 className="title">UX and UI Design for SaaS </h3>
                </div>
                <div className="part-2">
                  <p className="description">
                  kotibox conducts user experience research for upcoming SaaS or a UX audit of your present SaaS, and it creates intuitive, responsive user interfaces.                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fas fa-award"></i>
                  <h3 className="title">SaaS App Optimization</h3>
                </div>
                <div className="part-2">
                  <p className="description">

                  Throughout your service offering, our team of SaaS app optimization experts works with you to make the most of it.                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-asymmetrik"></i>
                  <h3 className="title">Consulting for SaaS
                  </h3>
                </div>
                <div className="part-2">
                  <p className="description">
                  Our consultants establish the TCO and ROI calculations, design the development roadmap, and provide other project assistance for your SaaS proposal.                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fas fa-broadcast-tower"></i>
                  <h3 className="title">Transfer of Technology
                  </h3>
                </div>
                <div className="part-2">
                  <p className="description">
                  When migrating your SaaS application from its present tech stack to a new or different one, we assist you at every stage.</p>                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>
            {/* / End Single Service */}


          </div>
        </div>
      </section>

      <MainContent
        png={png1}
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
        circeltext="As a prominent web development company across the world, Kotibox has highly experienced CakePHP developers that help you to create strong web apps. Kotibox builds websites that are more responsive and have elegant designs with extraordinary features. In this framework, you can improve your user interaction by developing a high-quality web app for your business."

        services11="Employ a Group of Committed SaaS Developers to Quickly Expand Your Company"
        servicesp="Our specialty is developing cloud-based SaaS apps that boost business expansion, develop fresh workflows, and enable indefinite scalability for your application."
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

        Industriesheading="Customized SAAS Application Development for Various Industry Verticals"
        Industriesp="Our renowned services are provided to a wide range of companies and sectors, including startups, large corporations, and small businesses. Prepare to explode with the assistance of our skilled SAAS developers—you can anticipate cutting-edge digital solutions that will propel your company to new heights."

        sectionhead="Our Website Development Process"
        sectionp=""
        section1="Overview of the Project"
        sectionp1="Our project manager will draft a document outlining the technical features of your SaaS application after you sign an NDA, taking into account your business requirements and adhering to stringent confidentiality guidelines."
        section2="Establishing Procedures"
        sectionp2="The second round of the process entails creating your application using a user journey map and submitting a desktop and mobile mockup for approval."
        section3="Backend Manifests Itself"
        sectionp3="Our group of skilled backend SaaS developers now constructs the work logic and integrates the database."
        section4="SaaS Applications Are Evaluated"
        sectionp4="Our SaaS-based application development process ends with our QA professionals assessing how well your app performs in various scenarios."
        section5="SaaS Maintainance
"
        sectionp5="We are the SaaS application development business that offers a warranty on created SaaS solutions in addition to the Service Level Agreement."
      />

      <section className='services section-bg' id='services'>
        <div className='container'>
          <header className='section-header'>
            <h3>Technologies We Use</h3>
            <p></p>
          </header>
          <div className='row'>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies1img} alt="Kotlin" />
                </div>
                <h3 className='title'>Kotlin</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies2img} alt="Swift" />
                </div>
                <h3 className='title'>Swift</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies3img} alt="Flutter" />
                </div>
                <h3 className='title'>Flutter</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies4img} alt="Java" />
                </div>
                <h3 className='title'>Java</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies5img} alt="React Native" />
                </div>
                <h3 className='title'>React Native</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies6img} alt="Technology Name" />
                </div>
                <h3 className='title'>Objective C</h3>
              </div>
            </div>
          </div>
        </div>
      </section>




      <Blog />
      <Marquee />
      <Footer />
    </>
  )
}
import React from 'react'
import Navbar from '../../Navbars/Navbar'
import Footer from '../../footer/footer'
import Webservicemain from '../../Webservicemain.js/Webservicemain'
import imgSrc from '../../Kotibox img/Main img/Costum.jpg'
import MainContent from '../../Main content/MainContent'


import Technologies1img from '../../Kotibox img/icon/icons8-java-48.png'
import Technologies2img from '../../Kotibox img/icon/icons8-java-48.png'
import Technologies3img from '../../Kotibox img/icon/icons8-java-48.png'
import Technologies4img from '../../Kotibox img/icon/icons8-java-48.png'
import Technologies5img from '../../Kotibox img/icon/icons8-java-48.png'
import { Link } from 'react-router-dom'

export default function Custom() {
  const mainText = { Text: "  CUSTOM SOFTWARE DEVELOPMENT" }
  const Secondtext = { Text: "We use industry best practices to provide our premium clients with scalable and reliable custom software. " }
  const textArray = ["Open Source Software", "Custom CRM", "Cloud-Based-Development", "ERP Software", "Enterprise Software", "Web Based Sodtware"];



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
      <Navbar />
      <Webservicemain imgSrc={imgSrc} mainText={mainText.Text} Secondtext={Secondtext.Text} textArray={textArray} />
      <section className="section-services">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-8">
              <div className="header-section">
                <h2 className="title">Custom Software Development Services We Deliver</h2>
                <p >
                  Our goal is to bring your ideas to life as effectively and efficiently as possible. Through Blockchain development tools, our proactive team of enthusiastic and knowledgeable brains is dedicated to enabling people digitally. Our selection of blockchain-related services is extensive and accessible to new fields of inquiry, ranging from tokenomics to metaverse platforms.
                </p>

              </div>
            </div>
          </div>
          <div className="row text-center">

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-500px"></i>
                  <h3 className="title">Development of Open Source Software
                  </h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    Use our improved development services to participate in a cooperative software development process and make source code accessible to the general public. Our group of skilled programmers will write code to construct and enhance the program as a whole using their expertise.                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5 "></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-angellist"></i>
                  <h3 className="title">Cloud-Based Development </h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    With our cloud development services, you may expand your company into new markets and embrace technical advancements while staying up to date. Owebest can assist your company in the most effective manner to facilitate the transition to PaaS, SaaS, and LaaS models.                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fas fa-award"></i>
                  <h3 className="title">Development of ERP Software
                  </h3>
                </div>
                <div className="part-2">
                  <p className="description">

                    To improve key corporate operations, work with our skilled enterprise resource planning experts to renovate or create ERP software from scratch. Accounting, production, distribution and inventory management, and other areas are covered by our ERP software development services.                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-asymmetrik"></i>
                  <h3 className="title">Web-Based Software Development
                  </h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    The devoted bespoke software developers at Owebest create programs that work with any web browser when connected to the internet. We provide web-based software solutions that are accessible, scalable, and do not require the installation of any software.                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fas fa-broadcast-tower"></i>
                  <h3 className="title">Software Solution Based on Windows
                  </h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    We are happy to assist anyone looking for a Windows-based software solution with all the requirements. A Windows-powered machine with a broad range of capability and compatibility can install and execute our products directly. </p>                 <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>
            {/* / End Single Service */}

            {/* Start Single Service */}
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-canadian-maple-leaf"></i>
                  <h3 className="title text-center">Development of Enterprise Software

                  </h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    In order to deliver the best corporate software development solutions, our company locates the flaws in your program and has professionals re-engineer it. In the sector, Owebest provides sincere development services that pave the way for scalable and approachable business.                  </p>
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

        services11="Together, we can build a decentralized future that will optimize your potential and produce unrivaled results."
        servicesp="Hire kotibox's blockchain development specialists to build your company's blockchain solution. They will carefully choose blockchain platforms including Ethereum, Hyperledger, and others. To put you at the forefront of technological improvements, we stay current on the newest developments in blockchain development."
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

        Industriesheading="Customized Blockchain  Development for Various Industry Verticals"
        Industriesp="Our renowned services are provided to a wide range of companies and sectors, including startups, large corporations, and small businesses. Prepare to explode with the assistance of our skilled Custom Software developers—you can anticipate cutting-edge digital solutions that will propel your company to new heights."

        sectionhead="Our Custom Software Development Process"
        sectionp=""
        section1="Collecting Requirements"
        sectionp1="recognizes and respects the goals and commercial needs of the client.
Assemble functional and non-functional needs and define goals."
        section2="Architecture for Software"
        sectionp2="Based on the requirements, create the software's architecture and design.
defining data flow, database structure, user interface design, and software components."
        section3="Development"
        sectionp3="Here is where the program development and coding start.
The developer uses the newest frameworks, languages, and tools when writing code.
incorporating APIs or other third-party components (if required)."
        section4="Testing"
        sectionp4="Carries out testing to improve software functionality and ensures quality.
carries out user acceptability, system, unit, and integration testing.
During this stage, problems and bugs are found, reported, and fixed."
        section5="Deployment"
        sectionp5="It is implemented after the testing and approval phase is over.
configures databases, servers, and many infrastructure parts.
guarantees efficient software handling."
      />

      <section className='services section-bg' id='services'>
        <div className='container'>
          <header className='section-header'>
            <h3>New Technologies We Include in Our Software Development Offerings</h3>
            <p>Blockchain development firm Kotibox provides a range of blockchain software development outsourcing services.</p>
          </header>
          <div className='row'>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies1img} alt="Kotlin" />
                </div>
                <h3 className='title'>API Development</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies2img} alt="Swift" />
                </div>
                <h3 className='title'>Data-Driven Software Solution</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies3img} alt="Flutter" />
                </div>
                <h3 className='title'>Artificial Intelligence</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies4img} alt="Java" />
                </div>
                <h3 className='title'>Software Consulting</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies5img} alt="React Native" />
                </div>
                <h3 className='title'>Infrastructure Services</h3>
              </div>
            </div>
          </div>
        </div>
      </section>




 
      <Footer />
    </>
  )
}

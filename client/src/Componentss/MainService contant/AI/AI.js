import React from 'react'
import Navbar from '../../Navbars/Navbar'
import Webservicemain from '../../Webservicemain.js/Webservicemain'
import imgSrc from '../../Kotibox img/Main img/AI10.jpg'
import Footer from '../../footer/footer'
import MainContent from '../../Main content/MainContent'
import Technologies1img from '../../Kotibox img/service/AI13.png'
import Technologies2img from '../../Kotibox img/service/AI14.png'
import Technologies3img from '../../Kotibox img/service/AI3.png'
import Technologies4img from '../../Kotibox img/service/AI5.png'
import Technologies5img from '../../Kotibox img/service/AI10.png'
import Technologies6img from '../../Kotibox img/service/AI11.png'
import png1 from '../../Kotibox img/Main img/png img/AIpng.jpg'
import From from '../../FooterFrom/From';
import { Link } from 'react-router-dom'

export default function AI() {
  const mainText = { Text: " AI Development Company" }
  const Secondtext = { Text: "With our highly customized AI strategies, our Artificial Intelligence solutions will help you accelerate corporate growth, increase efficiency, and increase sales. We are developing AI solutions every day for every conceivable level of AI software complexity, whether it be custom AI solutions for your business platforms, process automation, intelligence robots, VA systems, or home security. " }
  const textArray = ["Custom AI Software Development", "AI Consulting Services", "Generative AI", "AI-as-a-Service (AIaaS)"];



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
                <h2 className="title">A Variety of Services We Provide for AI DEvelopment</h2>
                <p >
                  Our reliable, data-driven artificial intelligence technologies boost output and expansion. Take advantage of Kotibox's  development of flexible AI services to integrate emerging technologies like augmented reality, machine learning, and the internet of things into your most sophisticated AI solutions.
                </p>

              </div>
            </div>
          </div>
          <div className="row text-center">

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-500px"></i>
                  <h3 className="title">Chatbot Development</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    As a cutting-edge AI development firm, we offer chatbot development and AI support as conversational AI development solutions. With the help of our expandable chatbot program, you can automate customer assistance tasks and get a competitive advantage for your company through elevated customer happiness and high user engagement.                 </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5 "></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-angellist"></i>
                  <h3 className="title">AI Consulting Services</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    In order to give the most innovative and adaptable AI services combined with cutting-edge tools, functions, and technologies for successful company and startup performance, we provide AI consulting services. We offer full-service artificial intelligence consultancy, from strategy and AI model creation to ideation. </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fas fa-award"></i>
                  <h3 className="title">Custom AI Software Development</h3>
                </div>
                <div className="part-2">
                  <p className="description">

                    As one of the leading AI development firms, we create incredibly scalable and dependable Artificial Intelligence software using cutting-edge machine learning and algorithm generating methodologies. It aids in the expansion of enterprises and startups and makes AI software more reliable, approachable, and simple to use.                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>



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

        services11="With Us, Launch Your Dream Project"
        servicesp="We have collaborated with a number of the most cutting-edge concepts and companies in the business."
        Hiredevelopmentmain1="Let's Connect"

        Industriesheading="Customized AI Development for Various Industry Verticals"
        Industriesp="Our renowned services are provided to a wide range of companies and sectors, including startups, large corporations, and small businesses. Prepare to explode with the assistance of our skilled AI developers—you can anticipate cutting-edge digital solutions that will propel your company to new heights."

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
            <h3>Decide Which AI Development Approaches Will Work Best in the Future</h3>
            <p></p>
          </header>
          <div className='row'>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies1img} alt="Kotlin" />
                </div>
                <h3 className='title'>Minimal-risk Management</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies2img} alt="Swift" />
                </div>
                <h3 className='title'>Quick decision-making</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies3img} alt="Flutter" />
                </div>
                <h3 className='title'>Quick business expansion </h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies4img} alt="Java" />
                </div>
                <h3 className='title'>Improved client satisfaction </h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies5img} alt="React Native" />
                </div>
                <h3 className='title'>Enhanced Output </h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies6img} alt="Technology Name" />
                </div>
                <h3 className='title'>Enhanced User Interaction</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <From heading="500+ Companies Trust Stream Box"  uptext="Let's Discuss" />
      <Footer />
    </>
  )
}

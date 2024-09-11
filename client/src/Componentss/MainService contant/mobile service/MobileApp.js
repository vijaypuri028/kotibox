import React from 'react'
import Navbar from '../../Navbars/Navbar'
import Webservicemain from '../../Webservicemain.js/Webservicemain'
import Footer from '../../footer/footer'
import Button from '../../button/Button'
import imgSrc from '../../Kotibox img/Main img/App10.jpg'

import MainContent from '../../Main content/MainContent'
import { Link } from 'react-router-dom'
import Technologies1img from '../../Kotibox img/icon/Kotlin.png'
import Technologies2img from '../../Kotibox img/icon/swift.png'
import Technologies3img from '../../Kotibox img/icon/Flutter.png'
import Technologies4img from '../../Kotibox img/icon/icons8-java-48.png'
import Technologies5img from '../../Kotibox img/icon/react netive.png'
import Technologies6img from '../../Kotibox img/icon/c.png'
import png1 from '../../Kotibox img/png img/mobile.png1.jpg'

export default function MobileApp() {
  const mainText = { Text: "Mobile AppDevelopment Company" }
  const Secondtext = { Text: "Businesses can create user-centric applications by utilizing our mobile application development solutions. Our skilled programmers and app developers build dependable mobile solutions that are designed to increase the potential of your company. Using state-of-the-art technologies like AI, ML, AR/VR, and more, we have also created a number of B2B apps that are intended to grow them even more." }
  const textArray = ["React native", "Flutter", "Android", "IOS"];


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
                <h2 className="title">A Variety of Services We Provide for App DEvelopment</h2>
                <p >
                  We help various organizations with their unique difficulties by utilizing our skills in custom App development. Both startups and large corporations can use our products.
                </p>

              </div>
            </div>
          </div>
          <div className="row text-center">

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-500px"></i>
                  <h3 className="title">Android App development</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    Are you trying to make an Android app that can draw in money and capture users' attention right away? Take advantage of our experts' help with Android app development. They will offer software that is specially made to fit your budget. Make sure your Android application needs are ready, and let's get started on the path to success together.                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5 "></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-angellist"></i>
                  <h3 className="title">Iphone App Development </h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    Are you going to make an application for the iPhone that is interesting enough to draw users in? For app creation, you'll require assistance from a leading iPhone business. We provide the best known iOS application design and development services in the industry, which are perfect for any kind of business need or requirement. Employ iPhone app developers right now.                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fas fa-award"></i>
                  <h3 className="title">React Native App Development</h3>
                </div>
                <div className="part-2">
                  <p className="description">

                    Being a skilled React Native mobile app development business, we make use of the React framework's power and native platform capabilities to create enterprise-grade mobile apps that function on both the iOS and Android platforms.                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-asymmetrik"></i>
                  <h3 className="title">Flutter App Development</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    Using a single codebase and Flutter frameworks, kotibox Global is a reputable Flutter mobile app development firm that creates dynamic, highly functioning, natively compiled, multi-platform mobile applications.                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fas fa-broadcast-tower"></i>
                  <h3 className="title">Consultation for Mobile Apps
                  </h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    We have designed our Mobile App Consultation services to assist you in navigating the complex world of mobile app development. We assess your company's needs, suggest the best technology, and offer a detailed development plan. We offer guidance on all facets of market research, including cost estimation, technological viability, and user experience design</p>                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fas fa-broadcast-tower"></i>
                  <h3 className="title">App Maintenance and Support
                  </h3>
                </div>
                <div className="part-2">
                  <p className="description">In addition to creating online and mobile applications, we focus on maintaining and supporting mobile applications. We can extend the life of your mobile application and make sure it continues to function flawlessly for many years to come. Additionally, we can lessen the needs for app maintenance on mobile devices and delegate the remaining tasks to mobile application developers and testers.
                  </p>            </div>
              </div>
            </div>
            {/* / End Single Service */}

            {/* Start Single Service */}

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

        services11="Developing Brilliant Ideas for More Than Ten Years."
        servicesp="Do you have brilliant ideas that you think may be turned into a successful business using mobile applications?"
        Hiredevelopmentmain1="Let's Connect"

        Industriesheading="Customized Mobile Application Development for Various Industry Verticals"
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





      <Button />

      <Footer />
    </>
  )
}

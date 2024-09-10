import React from 'react'
import Navbar from '../../Navbars/Navbar'
import Webservicemain from '../../Webservicemain.js/Webservicemain'
import imgSrc from '../../Kotibox img/Main img/Digital.jpg'
import Footer from '../../footer/footer'
import MainContent from '../../Main content/MainContent'
import Technologies1img from '../../Kotibox img/icon/icons8-java-48.png'
import Technologies2img from '../../Kotibox img/icon/icons8-java-48.png'
import Technologies3img from '../../Kotibox img/icon/icons8-java-48.png'
import png1 from '../../Kotibox img/png img/DMpng.jpg'

import { Link } from 'react-router-dom'

export default function Digitalmarketing() {
  const mainText = { Text: "Digital Marketing Company" }
  const Secondtext = { Text: "To promote your brand, you will always demand top-class digital marketing services. Our team will create an effective plan to gram maximum profit from the market and amplify your organization. We have placed countless businesses to the next level with our internet marketing services." }
  const textArray = ["SEO", "SMO", "PPC", "Content Marketing" ,"Inbund Marketing"];

    
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
            <Webservicemain imgSrc={imgSrc} mainText={mainText.Text}  Secondtext={Secondtext.Text} textArray={textArray} />
            <section className="section-services">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-8">
              <div className="header-section">
                <h2 className="title">A Variety of Services We Provide for Digital Marketing</h2>
                <p >
                  We help various organizations with their unique difficulties by utilizing our skills in custom Digital Marketing Services. Both startups and large corporations can use our products.
                </p>

              </div>
            </div>
          </div>
          <div className="row text-center">

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-500px"></i>
                  <h3 className="title">Search Engine Optimization/Search Engine Marketing</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                  Consumers look for your goods or services online, but they can't get in touch with you if they can't see you. Through comprehensive search marketing and optimization services, Owebest guarantees that the potential customer not only finds you but also becomes a convert. Our goal is to ensure that your website receives a sufficient number of qualified visitors that become long-term customers. Furthermore, we completely incorporate your search engine marketing initiatives with your other advertising operations.                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5 "></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-angellist"></i>
                  <h3 className="title">Social Media Marketing </h3>
                </div>
                <div className="part-2">
                  <p className="description">
                  Users search the web for a product or service you offer, but if they cannot see you, they won’t be able to reach to you. With end-to-end search marketing and optimization solutions, Owebest makes sure the prospect not only reaches to you but convert as well. We make sure that you receive enough qualified visits to your website, and those visits convert into customer relationships. Moreover, we fully integrate your search marketing efforts with your other marketing campaigns.                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fas fa-award"></i>
                  <h3 className="title">Pay Per Click (PPC)</h3>
                </div>
                <div className="part-2">
                  <p className="description">

                  Pay Per Click (PPC) advertising is a highly effective means of driving high-quality traffic to your website. As audiences are time-constrained and require more than just a standard ad to capture their interest, Owebest creates PPC advertisements that effectively entice potential customers to visit your website and convert. Our qualified team analyzes your business in detail to determine the most appropriate keywords to use, and we monitor and manage your PPC advertising campaigns.                 </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fas fa-award"></i>
                  <h3 className="title">Marketing Automation</h3>
                </div>
                <div className="part-2">
                  <p className="description">

                  A lot of software is utilized in digital marketing for repetitive tasks like social networking and email marketing. These automation tools give the customer a personalized service in addition to simplifying the labor. Investment in marketing automation has risen as the digital marketing era gains traction.              </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>
           
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fas fa-award"></i>
                  <h3 className="title">Influencer Marketing</h3>
                </div>
                <div className="part-2">
                  <p className="description">

                  An organic approach to locating a business influencer: Finding an influencer marketer depends on your aims and goals. We'll assist you in finding the influencer that best fits your objectives. Sometimes, in order to keep things simple, a product's local market must be larger than its global market.           </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fas fa-award"></i>
                  <h3 className="title">Inbound Marketing</h3>
                </div>
                <div className="part-2">
                  <p className="description">

                  One of the first marketing companies, SMAC Digital, can assist you with all of your inbound marketing initiatives. With the aid of inbound marketing, we have assisted numerous domestic and international clients in building their target clientele and ultimately growing their organization. SMAC Digital uses the following approach to leverage inbound marketing to grow your company.           </p>
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
        circeltext="As a prominent web development company across the world, JPLoft has highly experienced CakePHP developers that help you to create strong web apps. JPLoft builds websites that are more responsive and have elegant designs with extraordinary features. In this framework, you can improve your user interaction by developing a high-quality web app for your business."

        services11="Remember To Seek Professional Advice Regarding Your Digital Assets"
        servicesp="Together, we strive to increase your company's profitability and produce a favorable return on investment so you may grow it"
        Hiredevelopmentmain1="Let's Connect"

        Industriesheading="Customized Digital Marketing Service for Various Industry Verticals"
        Industriesp="Our renowned services are provided to a wide range of companies and sectors, including startups, large corporations, and small businesses. Prepare to explode with the assistance of our skilled Digital Marketers—you can anticipate cutting-edge digital solutions that will propel your company to new heights."
        
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
            <h3>With the aid of our skilled team of digital marketers, we help you maximize the return on your marketing investments across online and offline platforms.</h3>
          <p></p>
          </header>
          <div className='row'>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies1img} alt="Kotlin" />
                </div>
                <h3 className='title'>Modern Digital Marketing Strategy</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies2img} alt="Swift" />
                </div>
                <h3 className='title'>powerful designers with creativity</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies3img} alt="Flutter" />
                </div>
                <h3 className='title'>Real Success Stories</h3>
              </div>
            </div>

          </div>
        </div>
      </section>


   
            <Footer />
        </>

    )
}

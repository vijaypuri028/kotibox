import React from 'react'
import Navbar from '../../Navbars/Navbar'
import Footer from '../../footer/footer'

import Webservicemain from '../../Webservicemain.js/Webservicemain'
import imgSrc from '../../Kotibox img/Main img/Blockchain.jpg'
import MainContent from '../../Main content/MainContent'

import png1 from '../../Kotibox img/Main img/png img/crm.png'
import Technologies1img from '../../Kotibox img/icon/icons8-java-48.png'
import Technologies2img from '../../Kotibox img/icon/icons8-java-48.png'
import Technologies3img from '../../Kotibox img/icon/icons8-java-48.png'
import Technologies4img from '../../Kotibox img/icon/icons8-java-48.png'
import Technologies5img from '../../Kotibox img/icon/icons8-java-48.png'
import Technologies6img from '../../Kotibox img/icon/icons8-java-48.png'
import { Link } from 'react-router-dom'


export default function Blockchain() {
  const mainText = { Text: "BLOCKCHAIN   DEVELOPMENT COMPANY " }
  const Secondtext = { Text: "Our blockchain development services are designed to expedite your market success journey, making sure your blockchain project not only gets off the ground but takes off and grows. We provide you with the experience and support you need to boldly develop your ideas and be an innovator in your sector, from custom-designed concepts to seamless integration and more." }
  const textArray = ["Cryptocurrency Development", "Crypto Wallet Development", "Smart Contract Development"];



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
    <Navbar/>
    <Webservicemain  imgSrc={imgSrc} mainText={mainText.Text}  Secondtext={Secondtext.Text}  textArray={textArray}  />
   
    <section className="section-services">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-8">
              <div className="header-section">
                <h2 className="title">Blockchain Development Services We Offer</h2>
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
                  <h3 className="title">Crypto Wallet Development</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                  Our team has the know-how to create incredibly safe cryptocurrency wallets that help customers move and safeguard their digital assets. Our wallets are easy to use and offer straightforward designs and features.
                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5 "></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-angellist"></i>
                  <h3 className="title">ICO Development </h3>
                </div>
                <div className="part-2">
                  <p className="description">
                  Engage us for our expert ICO development services; we produce outstanding results. Our group specializes in developing token-based fundraising platforms. To help you stand out in the token sales market, you should investigate our wide range of applications.
                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fas fa-award"></i>
                  <h3 className="title">NFT Development</h3>
                </div>
                <div className="part-2">
                  <p className="description">

                  With our extensive background in blockchain development, we are able to design NFT marketplaces that prioritize security and safety for cryptocurrency collectors. Our technologies ensure safe token purchases and sales on the market by preventing duplicate transactions.
                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fab fa-asymmetrik"></i>
                  <h3 className="title">Smart Contract Development</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                  To expedite the procedure, reduce delays and legal complications brought on by manual documentation, and streamline the process overall, our skilled blockchain engineers can create and implement smart contracts for blockchain platforms.
                  </p>
                  <Link href="#"><i className="fas fa-arrow-circle-right"></i>Read More  <i class="bi bi-arrow-right ms-1 fs-5"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i className="fas fa-broadcast-tower"></i>
                  <h3 className="title">Exchange Development</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                  With exchange system creation, we can provide flexibility so that we can customize our services to your needs. Depending on what your company needs, we may design a decentralized exchange network with no middlemen or a central exchange system with administrative control.              </p>
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
                  <h3 className="title text-center">Cryptocurrency Development
                  </h3>
                </div>
                <div className="part-2">
                  <p className="description">
                  Allow our skilled group of engineers to handle the creation of your cryptocurrency requirements. Our expertise lies in creating a diverse range of nonfungible tokens (NFTs) for altcoins and bitcoins, in addition to creating personalized smart contracts that incorporate strong security measures to guarantee the protection of transactions on decentralized blockchain networks.
                  </p>
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
        Industriesp="Our renowned services are provided to a wide range of companies and sectors, including startups, large corporations, and small businesses. Prepare to explode with the assistance of our skilled Block chain developers—you can anticipate cutting-edge digital solutions that will propel your company to new heights."

        sectionhead="Our Blockchain Development Process"
        sectionp=""
        section1="Enrollment of Users"
        sectionp1="The first step is to register for an account on the blockchain app, providing the necessary personal data and verifying their identity through high-security authentication methods."
        section2="Wallet Creation"
        sectionp2="Users are prompted to create a digital wallet in the app after registering. Tokens and cryptocurrency are examples of digital assets that can be safely stored in a wallet."
        section3="Transaction Initiation & Verification"
        sectionp3="Users of the program can keep track of previous transaction details, such as dates, amounts, timestamps, and transaction IDs,once the transaction has been verified and validated. Users are kept up to date on the status of transactions in real time."
        section4="Verification and Implementation"
        sectionp4="The digital assets will be moved from the sender's wallet to the recipient's wallet once the transaction has been verified and validated. Users are kept up to date on the status of transactions in real time."
        section5="Transaction and Monitoring History"
        sectionp5="Users of the program can keep track of previous transaction details, such as dates, amounts, timestamps, and transaction IDs, by searching through their transaction history. Consequently, there is an increase in trust and accountability throughout the transaction process."
      />

      <section className='services section-bg' id='services'>
        <div className='container'>
          <header className='section-header'>
            <h3>Utilize the Potential of Blockchain Technology with Our Tailored Blockchain Solutions</h3>
            <p>Blockchain development firm Kotibox provides a range of blockchain software development outsourcing services.</p>
          </header>
          <div className='row'>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies1img} alt="Kotlin" />
                </div>
                <h3 className='title'>Blockchain Consulting</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies2img} alt="Swift" />
                </div>
                <h3 className='title'>Prototyping & Architecting</h3>
              </div>
            </div>
            <div className='col-md-6 col-lg-4'>
              <div className='box'>
                <div className='icon' style={{ background: '#fff' }}>
                  <img style={{ height: '50px', width: '50px' }} src={Technologies3img} alt="Flutter" />
                </div>
                <h3 className='title'>Blockchain Development</h3>
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


    <Footer/>
    </>
  )
}

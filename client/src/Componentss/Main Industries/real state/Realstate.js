import React from 'react'
import Navbar from '../../Navbars/Navbar'
import Webservicemain from '../../Webservicemain.js/Webservicemain'
import Industriesmain from '../Industries main content/industriesmain'
import Footer from '../../footer/footer'
import imgSrc from "../../Kotibox img/Main img/RealEste.jpg";
import From from '../../FooterFrom/From';

import png1 from '../../Kotibox img/Main img/png img/crm.png';
import png2 from '../../Kotibox img/Main img/png img/crm.png';
import Hiredevelopemntmain from '../../Hire developer main section/Hire main/Hiredevelopemntmain';

export default function Realstate() {
  const mainText = { Text: "Real Estate App development Company" }
  const Secondtext = { Text: "The company specializes in creating cutting-edge mobile apps and web solutions for real estate, making the process of buying, selling, renting, and managing properties as simple as putting on pajamas " }
  const textArray = ["laravel", "Codeelgniter", "wordpress", "Woo commerce", "Mangento"];
  return (
    <>
      <Navbar />
      <Webservicemain imgSrc={imgSrc} mainText={mainText.Text} Secondtext={Secondtext.Text} textArray={textArray} />
      <Industriesmain

        mainHeading="Real Estate Development Solutions"
        subHeading="Buy, Sell, Rent, and Manage: A Whole Real Estate Buying and Managing Experience"
        introText="
With our mobile app and web development solutions, we have assisted hundreds of clients worldwide in setting new records in the real estate industry over the course of our more than 10 years of experience."
        buttonText="Learn More"

        subHeading1="Buy, Sell, Rent, and Manage: A Whole Real Estate Buying and Managing Experience"
        introText1="We don't restrict ourselves to a certain amount of solutions here at Kotibox Global. Thus, with our clever real estate mobile and online development, we cover every facet of real estate. Using a constantly changing digital experience, we assist businesses, agencies, and realtors in connecting with potential clients.

For this reason, we provide our solutions to any real estate company for both residential and commercial real estate needs."

        subHeading2="Services for Developing Custom Startup Apps Tailored to Your Needs"
        introText2="With our startup application development solutions, you may achieve your business objectives and push your company to new heights."

        imgAlt1="Good advice from a beautiful woman"
        imgText1="Real Estate Mobile App Development"
        Text1='Our next-generation mobile app developers for real estate give you the tool to largely autonomously run your real estate firm. Its features, which include geolocation, actual photographs and videos, 3-D virtual property tours, and more, make it easier to convert leads.'



        imgAlt2="Office environment"
        imgText2="Real Estate Website Development"
        Text2='Real estate websites ease of use might benefit your clients. For agencies, realtors, and businesses with the greatest business growth, we create and design custom real estate websites with advanced big data management, Power BI analytics, and AI-powered data insights.'

        imgAlt3="Office environment"
        imgText3="Development of Property Management Systems"
        Text3='We assist you in creating your own property management software from the ground up. You may take total control over the information about your properties on your internet portals using this software. It also provides remote shared workflow features and cloud-based interoperability.'


        imgAlt4="Office environment"
        imgText4="Real Estate CRM, CMS, and ERP Systems"
        Text4='We create unique real estate CRM and CMS development with cutting-edge client data management for small and large businesses alike. Our ERP solutions include AI-powered business insights, Power BI, and big data integration, among other advanced analytics.'

        imgSrc9={png1}
        imgSrc10={png2}
      />
      <Hiredevelopemntmain
        hireservicemain="Services for Developing Custom Restaurant Apps Tailored to Your Needs"
        hireservicep="With our restaurant application development solutions, you may achieve your goals and grow your business to a great extent."
        hireservicemain1="Solutions for Online Learning - "
        hireservicemain2="Straight Out of the Future"
        hireservicemainpp="At KotiboxTechnologies, our goal is to develop robust Android applications that take a different approach for our esteemed clients, enabling them to grow their enterprises to new heights.fulfill all of your needs."


        sectionhead=" Steps to hiring  Kotibox E-Learning software developers"
        sectionp="Hiring eLearning software developers from Kotibox is an easy and effective process made to fit the unique needs of your educational project. Our developers are dedicated to creating unique eLearning programs that raise standards and enhance student performance. The following is how to work with Kotibox E-Learning software developers"
        section1="First Consultation"
        sectionp1="We begin with an introductory consultation to learn about the goals and specifications of your project. This makes it possible for us to tailor our services to your vision and objectives."
        section2="Analysis of the Project"
        sectionp2="Our specialists carefully assess the requirements of your project before submitting a comprehensive proposal. This contains an outline of the development process, a cost estimate, and a project timeframe."
        section3="Team Selection"
        sectionp3="We recommend an experienced team of software developers for eLearning based on the specifications of your project. To find out if they are the greatest fit for your needs, you may look through their experience, past projects, and profile"
        section4="Develop & Updates"
        sectionp4="Our developers adhere to the schedule and plan as they begin the development process. We make use of agile methodologies and provide frequent status reports and updates to make sure the project is moving forward as planned."
        section5="Deployment & Assistance"
        sectionp5="Prior to releasing the completed product, the group conducts thorough quality assurance and testing. When the project is finished, we start the eLearning program and continue to help and support it to ensure optimal results"
      />



<From heading="500+ Companies Trust Stream Box"  uptext="Let's Discuss" />

      <Footer />



    </>
  )
}

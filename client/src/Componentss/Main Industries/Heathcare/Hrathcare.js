import React from 'react'
import Navbar from '../../Navbars/Navbar'
import Webservicemain from '../../Webservicemain.js/Webservicemain'
import Industriesmain from '../Industries main content/industriesmain'
import Footer from '../../footer/footer'
import imgSrc from "../../Kotibox img/Main img/AI DEvelopment.jpg";
import Hiredevelopemntmain from '../../Hire developer main section/Hire main/Hiredevelopemntmain';

import png1 from '../../Kotibox img/png img/good-advice-from-beautiful-woman.png';
import png2 from '../../Kotibox img/png img/office 2.png';

import jpg1 from '../../Kotibox img/Main img/pexels-athena-2582938.jpg'
import jpg2 from '../../Kotibox img/Main img/pexels-format-380633-1029757.jpg'
import jpg3 from '../../Kotibox img/Main img/pexels-goumbik-577210.jpg'
import jpg4 from '../../Kotibox img/Main img/pexels-goumbik-590022.jpg'


export default function Heathcare() {
  const mainText = { Text: "Use cutting-edge medical software to enhance patient care," }
  const Secondtext = { Text: "adhere to better medical procedures " }
  const textArray = ["laravel", "Codeelgniter", "wordpress", "Woo commerce", "Mangento"];

  return (
    <>
      <Navbar />
      <Webservicemain imgSrc={imgSrc} mainText={mainText.Text} Secondtext={Secondtext.Text} textArray={textArray} />
      <Industriesmain 
      mainHeading="Heathcare Software Development Services" 
      subHeading="Tour Software Development Services"
      introText="We are experts in developing customized Heathcare  apps tailored to your business's requirements. Our team can assist you in designing and implementing an application that will improve your customer experience."
      buttonText="Let's Disscus"
   
      subHeading1="Utilize Our Digital Healthcare App Development Services to Improve Patient Care"
      introText1="To guarantee efficient business operations, are you going to provide cloud-based healthcare solutions such as EHR, EMR, telemedicine, and medical management? You can get assistance with that from our healthcare software development services. Together, we can create a health app that will transform your medical facility into a more patient-focused environment."
   
      subHeading2="Hire Mobile App Developers for Healthcare to Provide Best-In-Class Products"
      introText2="When delivering healthcare services, technology-driven innovation can help you cut down on operating expenses and turnaround times. We can assist you in executing it flawlessly.."
   
      imgSrc1={jpg1}
      imgAlt1="Good advice from a beautiful woman"
      imgText1="Healthcare Mobile Applications"
      Text1='Our apps offer straightforward monitoring, tracking, and interaction features, so you can take on the complicated requirements and obstacles faced by healthcare professionals to ensure smooth operation with our mobile healthcare application development services.'
   
      
   
      imgSrc2={jpg2}
      imgAlt2="Office environment"
      imgText2="Medical Billing Software"
       Text2='Employ our talented developers to create medical billing software that satisfies your needs. Medical billing software has been produced for a variety of healthcare businesses that manage health data, billing appointments, scheduling appointments, and reporting.'
   
       imgSrc3={jpg3}
      imgAlt3="Office environment"
      imgText3="Consulting for Health Apps"
       Text3='Our healthcare app consulting service gives you the know-how to successfully negotiate the challenging landscape of healthcare app development. In order to create a plan for a successful application, we will collaborate with you to determine the objectives, features, and functionalities of the app.'
   
   
       imgSrc4={jpg4}
      imgAlt4="Office environment"
      imgText4="Upkeep and Assistance"
       Text4='To guarantee the best possible monitoring of healthcare apps, we offer comprehensive support for security, code management, compliance, performance, and application infrastructure. Our goal is to give your application optimal performance and ongoing stability.'
   
   
       imgSrc9={png1}
       imgSrc10={png2}
      
      />

             <Hiredevelopemntmain
                hireservicemain="Tailored Healthcare App Creation Services Tailored to Your Requirements"
                hireservicep="With our solutions for developing mobile applications for healthcare, you may enhance your business objectives and generate substantial growth."
                hireservicemain1="Solutions for Online Learning - "
                hireservicemain2="Straight Out of the Future"
                hireservicemainpp="At KotiboxTechnologies, our goal is to develop robust Android applications that take a different approach for our esteemed clients, enabling them to grow their enterprises to new heights.fulfill all of your needs."
                title1="Education platforms that are scalable"
                title2="Gamification of Education"
                title3="Gamification of Education"
                title4="Gamification of Education"
                title5="Gamification of Education"
                title6="Gamification of Education"
                />



     
      <Footer />





    </>
  )
}

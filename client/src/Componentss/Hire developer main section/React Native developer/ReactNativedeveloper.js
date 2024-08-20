import React from 'react'
import Navbar from '../../Navbars/Navbar'
import Webservicemain from '../../Webservicemain.js/Webservicemain'
import Hiredevelopmentmain from '../Hire main/Hiredevelopemntmain'
import Footer from '../../footer/footer'
import Blog from '../../blog/blog'
import Marquee from '../../Marquee/Marquee'
import imgSrc from "../../Kotibox img/Main img/AI DEvelopment.jpg"; 
import Hirecardsection from '../hire card section/Hirecardsection'
import imgSrc1 from "../../Kotibox img/Main img/Game2.jpg"; 
import imgSrc2 from "../../Kotibox img/Main img/pexels-athena-2582938.jpg";
import imgSrc3 from "../../Kotibox img/Main img/Eccomerce2.jpg";
import imgSrc5 from "../../Kotibox img/Main img/Eccomerce2.jpg";

export default function ReactNativedeveloper() {
    const mainText = { Text: "WEBSITE  DEVELOPMENT" }
    const Secondtext = { Text: "Your Partner " }
    const textArray = ["laravel", "Codeelgniter", "wordpress", "Woo commerce" ,"Mangento"];
  return (
   <>
    <Navbar/>
    <Webservicemain imgSrc={imgSrc} mainText={mainText.Text}  Secondtext={Secondtext.Text} textArray={textArray}  />
    <Hirecardsection
                imgSrc={imgSrc5}
                mainText1="Dedicated & Affordable Android App Developers for Hire" 
                mainTextp="Enhance your business’s efficiency with top-quality Android mobile applications designed within budget and deadlines. If you choose to hire an experienced Android application developer at JPLoft, you’re not only hiring a developer but a professional who will meet your project’s demands and timeframe."
                sectionHeading="Hire Our Developers"
                sectionDescription="Expert in React, Node.js, and MongoDB. Expert in React, Node.js, and MongoDB Expert in React, Node.js, and MongoDB. Expert in React, Node.js, and MongoDB Expert in React, Node.js, and MongoDB. Expert in React, Node.js, and MongoDB"
                imgSrc1={imgSrc1}
                cardTitle1="Web Developer"
                cardDescription1="Expert in React, Node.js, and MongoDB."
                imgSrc2={imgSrc2}
                cardTitle2="UI/UX Designer"
                cardDescription2="Creative and user-focused design expert."
                imgSrc3={imgSrc3}
                cardTitle3="Full Stack Developer"
                cardDescription3="Proficient in frontend and backend technologies."
            />
    <Hiredevelopmentmain/>
    

   
   
   <Blog/>
   <Marquee/>
   <Footer/>
    

   
   
   
   
   </>
  )
}

import React from 'react'
import Footer from '../../footer/footer'
import Navbar from '../../Navbars/Navbar'
import Webservicemain from '../../Webservicemain.js/Webservicemain'
import Hiredevelopmntmain from '../../Hire developer main section/Hire main/Hiredevelopemntmain'
import imgSrc from "../../Kotibox img/Main img/Game development.jpg"; 
import imgSrc1 from "../../Kotibox img/Main img/Game2.jpg"; 
import imgSrc2 from "../../Kotibox img/Main img/pexels-athena-2582938.jpg";
import imgSrc3 from "../../Kotibox img/Main img/Eccomerce2.jpg";
import imgSrc5 from "../../Kotibox img/Main img/Eccomerce2.jpg";
import Marquee from '../../Marquee/Marquee'
import Hirecardsection from '../hire card section/Hirecardsection'
import Blog from '../../blog/blog'

export default function Android() {
    const mainText = { Text: "WEBSITE DEVELOPMENT" }
    const Secondtext = { Text: "Your Partner " }
    const textArray = ["laravel", "CodeIgniter", "WordPress", "WooCommerce", "Magento"];
  
    return (
        <>
            <Navbar/>
            <Webservicemain imgSrc={imgSrc} mainText={mainText.Text} Secondtext={Secondtext.Text} textArray={textArray} />
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
            <Hiredevelopmntmain/>
            <Blog/>
            <Marquee/>
            <Footer/>
        </>
    )
}

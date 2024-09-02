import React from 'react';
import Navbar from '../../../Navbars/Navbar';
import Webservicemain from '../../../Webservicemain.js/Webservicemain';
import Industriesmain from '../industriesmain';

import Footer from '../../../footer/footer';
import imgSrc from "../../../Kotibox img/Main img/Bitcon.jpg";

import png1 from '../../../Kotibox img/png img/good-advice-from-beautiful-woman.png';
import png2 from '../../../Kotibox img/png img/office 2.png';
import Hiredevelopemntmain from '../../../Hire developer main section/Hire main/Hiredevelopemntmain';
export default function Sports() {
  const mainText = "WEBSITE DEVELOPMENT";
  const Secondtext = "Your Partner";
  const textArray = ["laravel", "Codeelgniter", "wordpress", "Woo commerce", "Mangento"];

  return (
    <>
      <Navbar />
      <Webservicemain imgSrc={imgSrc} mainText={mainText} Secondtext={Secondtext} textArray={textArray} />
      <Industriesmain mainHeading="Tour Software Development Services"
        subHeading="Tour Software Development Services"
        introText="We are experts in developing customized restaurant apps tailored to your business's requirements. Our team can assist you in designing and implementing an application that will improve your customer experience."
        buttonText="Learn More"

        subHeading1="Tour Software Development Services"
        introText1="We are experts in developing customized restaurant apps tailored to your business's requirements. Our team can assist you in designing and implementing an application that will improve your customer experience."

        subHeading2="Tour Software Development Services"
        introText2="We are experts in developing customized restaurant apps tailored to your business's requirements. Our team can assist you in designing and implementing an application that will improve your customer experience."

        imgAlt1="Good advice from a beautiful woman"
        imgText1="Tour App Image 1"
        Text1='Build a custom restaurant app tailored to your business needs.'



        imgAlt2="Office environment"
        imgText2="Tour App Image 2"
        Text2='Build a custom restaurant app tailored to your business needs.'


        imgAlt3="Office environment"
        imgText3="Tour App Image 2"
        Text3='Build a custom restaurant app tailored to your business needs.'



        imgAlt4="Office environment"
        imgText4="Tour App Image 2"
        Text4='Build a custom restaurant app tailored to your business needs.'


        imgAlt5="Office environment"
        imgText5="Tour App Image 2"
        Text5='Build a custom restaurant app tailored to your business needs.'


        imgAlt6="Office environment"
        imgText6="Tour App Image 2"
        Text6='Build a custom restaurant app tailored to your business needs.'

        imgAlt7="Office environment"
        imgText7="Tour App Image 2"
        Text7='Build a custom restaurant app tailored to your business needs.'


        imgAlt8="Office environment"
        imgText8="Tour App Image 2"
        Text8='Build a custom restaurant app tailored to your business needs.'

        imgSrc9={png1}
        imgSrc10={png2} />

      <Hiredevelopemntmain
        hireservicemain="Services for Developing Custom Restaurant Apps Tailored to Your Needs"
        hireservicep="With our restaurant application development solutions, you may achieve your goals and grow your business to a great extent."
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
  );
}

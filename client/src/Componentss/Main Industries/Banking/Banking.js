import React from 'react'
import Navbar from '../../Navbars/Navbar'
import Industriesmain from '../Industries main content/industriesmain'
import Footer from '../../footer/footer'
import Webservicemain from '../../Webservicemain.js/Webservicemain'
import imgSrc from "../../Kotibox img/Main img/AI DEvelopment.jpg";
import png1 from '../../Kotibox img/png img/good-advice-from-beautiful-woman.png';
import png2 from '../../Kotibox img/png img/office 2.png';
import Hiredevelopemntmain from '../../Hire developer main section/Hire main/Hiredevelopemntmain';
export default function Banking() {
  const mainText = { Text: "developing cutting-edge mobile apps and custom " }
  const Secondtext = { Text: "software to reduce industry issues and increase client loyalty" }
  const textArray = ["laravel", "Codeelgniter", "wordpress", "Woo commerce", "Mangento"];

  return (
    <>
      <Navbar />
      <Webservicemain imgSrc={imgSrc} mainText={mainText.Text} Secondtext={Secondtext.Text} textArray={textArray} />
      <Industriesmain
        mainHeading="Development of Personalized Mobile Banking Software"
        subHeading="Tour Software Development Services"
        introText="Our commitment to fulfilling the dynamic demands of contemporary banking surpasses merely facilitating safe and straightforward transactions. Our personalized mobile banking software solutions provide real-time account access, incredibly user-friendly interfaces, and specialized tools for money management to users. As a leading provider of banking software, we guarantee accessibility and ease through the use of our tailored solutions, which offer the best possible mobile banking user experience."
        buttonText="Learn More"

        subHeading1="Using Banking App Development, Transform Digital Banking and Increase Core Offering"
        introText1="Kotibox offers assistance for developing mobile banking apps. Our professionals design and develop mobile applications that let users transfer money, send money, and perform other financial operations. In addition to developing unique mobile banking app services, we offer banking app development services for a range of platforms, including native apps for iOS, Android, and Windows and cross-platform hybrid apps."

        subHeading2="Tour Software Development Services"
        introText2="We are experts in developing customized restaurant apps tailored to your business's requirements. Our team can assist you in designing and implementing an application that will improve your customer experience."

        imgAlt1="Good advice from a beautiful woman"
        imgText1="Modernization of Banking Software"
        Text1='As part of our commitment to making sure your bank s infrastructure is future-proof, we offer services for updating software that promote technological advancement. Our specialty is integrating legacy systems with ease and reviving your company with cutting-edge, scalable, and modern solutions. We guarantee that the banking systems you put in place are not only current but also flexible enough to adjust to the ever-changing needs of the financial world.'

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
        imgSrc10={png2}

      />
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
  )
}

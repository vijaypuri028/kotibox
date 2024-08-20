import React from 'react'
import Navbar from '../../Navbars/Navbar'
import Webservicemain from '../../Webservicemain.js/Webservicemain'
import Industriesmain from '../Industries main content/industriesmain'
import Company from '../../Company section/Company'
import Marquee from '../../Marquee/Marquee'
import Blog from '../../blog/blog'
import Footer from '../../footer/footer'
import imgSrc from "../../Kotibox img/Main img/AI DEvelopment.jpg";

import png1 from '../../Kotibox img/png img/good-advice-from-beautiful-woman.png';
import png2 from '../../Kotibox img/png img/office 2.png';

import jpg1 from '../../Kotibox img/Main img/pexels-athena-2582938.jpg'
import jpg2 from '../../Kotibox img/Main img/pexels-format-380633-1029757.jpg'
import jpg3 from '../../Kotibox img/Main img/pexels-goumbik-577210.jpg'
import jpg4 from '../../Kotibox img/Main img/pexels-goumbik-590022.jpg'
import jpg5 from '../../Kotibox img/Main img/pexels-monoar-rahman-22660-109371.jpg'
import jpg6 from '../../Kotibox img/Main img/pexels-pixabay-4158.jpg'
import jpg7 from '../../Kotibox img/Main img/pexels-sorjigrey-9956769.jpg'
import jpg8 from '../../Kotibox img/Main img/pexels-format-380633-1029757.jpg'

export default function Heathcare() {
  const mainText = { Text: "WEBSITE  DEVELOPMENT" }
  const Secondtext = { Text: "Your Partner " }
  const textArray = ["laravel", "Codeelgniter", "wordpress", "Woo commerce", "Mangento"];

  return (
    <>
      <Navbar />
      <Webservicemain imgSrc={imgSrc} mainText={mainText.Text} Secondtext={Secondtext.Text} textArray={textArray} />
      <Industriesmain 
      mainHeading="Tour Software Development Services" 
      subHeading="Tour Software Development Services"
      introText="We are experts in developing customized restaurant apps tailored to your business's requirements. Our team can assist you in designing and implementing an application that will improve your customer experience."
      buttonText="Learn More"
   
      subHeading1="Tour Software Development Services"
      introText1="We are experts in developing customized restaurant apps tailored to your business's requirements. Our team can assist you in designing and implementing an application that will improve your customer experience."
   
      subHeading2="Tour Software Development Services"
      introText2="We are experts in developing customized restaurant apps tailored to your business's requirements. Our team can assist you in designing and implementing an application that will improve your customer experience."
   
      imgSrc1={jpg1}
      imgAlt1="Good advice from a beautiful woman"
      imgText1="Tour App Image 1"
      Text1='Build a custom restaurant app tailored to your business needs.'
   
      
   
      imgSrc2={jpg2}
      imgAlt2="Office environment"
      imgText2="Tour App Image 2"
       Text2='Build a custom restaurant app tailored to your business needs.'
   
       imgSrc3={jpg3}
      imgAlt3="Office environment"
      imgText3="Tour App Image 2"
       Text3='Build a custom restaurant app tailored to your business needs.'
   
   
       imgSrc4={jpg4}
      imgAlt4="Office environment"
      imgText4="Tour App Image 2"
       Text4='Build a custom restaurant app tailored to your business needs.'
   
       imgSrc5={jpg5}
      imgAlt5="Office environment"
      imgText5="Tour App Image 2"
       Text5='Build a custom restaurant app tailored to your business needs.'
   
       imgSrc6={jpg6}
      imgAlt6="Office environment"
      imgText6="Tour App Image 2"
       Text6='Build a custom restaurant app tailored to your business needs.'
   
       imgSrc7={jpg7}
      imgAlt7="Office environment"
      imgText7="Tour App Image 2"
       Text7='Build a custom restaurant app tailored to your business needs.'
   
       imgSrc8={jpg8}
      imgAlt8="Office environment"
      imgText8="Tour App Image 2"
       Text8='Build a custom restaurant app tailored to your business needs.'
   
       imgSrc9={png1}
       imgSrc10={png2}
      
      />





      <Company />
      <Blog />
      <Marquee/>
      <Footer />





    </>
  )
}

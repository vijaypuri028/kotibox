import React from 'react'
import Navbar from '../../Navbars/Navbar'
import Industriesmain from '../Industries main content/industriesmain'
import Footer from '../../footer/footer'
import Blog from '../../blog/blog'
import Webservicemain from '../../Webservicemain.js/Webservicemain'
import imgSrc from "../../Kotibox img/Main img/AI DEvelopment.jpg"; 
import Company from '../../Company section/Company'
import Marquee from '../../Marquee/Marquee'

import png1 from '../../Kotibox img/png img/good-advice-from-beautiful-woman.png';
import png2 from '../../Kotibox img/png img/office 2.png';



import Hiredevelopemntmain from '../../Hire developer main section/Hire main/Hiredevelopemntmain';

export default function Food() {
  const mainText = { Text: "Explore restaurant app development to take " }
  const Secondtext = { Text: "your company to new technological heights" }
  const textArray = ["laravel", "Codeelgniter", "wordpress", "Woo commerce" ,"Mangento"];



  return (
   <>
   <Navbar/>
   <Webservicemain imgSrc={imgSrc} mainText={mainText.Text}  Secondtext={Secondtext.Text} textArray={textArray}  />
   <Industriesmain 
   
   mainHeading="Restaurant POS Software Development" 
   subHeading="Tour Software Development Services"
   introText="Billing and sales processes may be easily automated with our personalized POS systems. With its ability to track inventories, the restaurant POS software facilitates easy communication between servers, cooks, and even managers."
   buttonText="Learn More"

   subHeading1="Utilize Digital Restaurant Solutions to Transform the Dining Experience for Patrons"
   introText1="The introduction of restaurant applications has simplified eating out. We may now get our favorite foods delivered right to our door. To build an online restaurant environment for customers, restaurant applications are utilized. After choosing their favorite dish, they may place an online order, pay for it, and receive it. Food can be delivered to your home, place of business, or anyplace you like. Our website's creation for restaurant services is focused on tailoring each application to your establishment's requirements."

   subHeading2="Tour Software Development Services"
   introText2="We are experts in developing customized restaurant apps tailored to your business's requirements. Our team can assist you in designing and implementing an application that will improve your customer experience."

 
   imgAlt1="Good advice from a beautiful woman"
   imgText1="Development of Restaurant Web Portals"
   Text1='Create a strong business identity and draw in customers with a restaurant app. By providing timely promotions and adding game features that increase client engagement and loyalty, you may stand out in a crowded industry.'

   


   imgAlt2="Office environment"
   imgText2="App Development for Restaurant Chains"
    Text2='Make the most of the revenue from your chain restaurant by utilizing an application that is of the highest caliber, created by our skilled staff. With its customizable functionality and easy-to-use design, the restaurant chain app provides GPS instructions for each location and easy branch administration.'

   imgAlt3="Office environment"
   imgText3="Tailored Waiter Management Options"
    Text3='Our specially created waiter management software improves the efficiency of front-of-house operations in your restaurant. As a specialized mobile restaurant app development company, we provide apps that help with order administration, task delegation, and customer support Coordination.'


  
   imgAlt4="Office environment"
   imgText4="Restaurant Discounts App Development"
    Text4='Take advantage of our offers on restaurant applications to increase client loyalty and attract new business. Being the top restaurant and food app development company in the sector, we create apps that enable eateries to provide consumers with enticing offers, rebates, and loyalty plans.'

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
   
   <Company/>
   <Blog/>
   <Marquee/>
   <Footer />
   </>
  )
}

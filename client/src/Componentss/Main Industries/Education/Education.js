import React from 'react'
import Navbar from '../../Navbars/Navbar'
import Industriesmain from '../Industries main content/industriesmain'
import Footer from '../../footer/footer'
import Webservicemain from '../../Webservicemain.js/Webservicemain'
import imgSrc from "../../Kotibox img/Main img/AI DEvelopment.jpg"; 
import png1 from '../../Kotibox img/png img/good-advice-from-beautiful-woman.png';
import png2 from '../../Kotibox img/png img/office 2.png';
import Hiredevelopemntmain from '../../Hire developer main section/Hire main/Hiredevelopemntmain';

export default function Education() {
  const mainText = { Text: "Using cutting-edge technology to promote " }
  const Secondtext = { Text: "innovation in e-learning and education" }
  const textArray = ["laravel", "Codeelgniter", "wordpress", "Woo commerce" ,"Mangento"];

  return (
   <>
   <Navbar/>
   <Webservicemain imgSrc={imgSrc} mainText={mainText.Text}  Secondtext={Secondtext.Text} textArray={textArray}  />
   <Industriesmain 
   mainHeading="Solutions for Online Learning - Straight Out of the Future" 
   subHeading="Utilize Our Education Software Development Services to Ensure Success"
   introText="We do provide contemporary digital education options. Nonetheless, we always work to comprehend market trends in order to predict the needs of the global community. We're happy to inform you that we have everything taken care of."
   buttonText="Let's Disscus"

   subHeading1="Utilize Our Education Software Development Services to Ensure Success"
   introText1="Your e-learning process is modernized with Kotibox Global Technologies. We connect your present corporate and educational software, move to the cloud, rethink the UI/UX to make everything mobile-friendly, and incorporate AI to personalize and adjust learning. We'll also make sure we abide by data security and education regulations."

   subHeading2="Get a Tailored Quote for the Development of eLearning Apps"
   introText2="Are you prepared to move forward? A thorough proposal that is customized to meet your needs will be given to you by our staff."

   imgAlt1="Good advice from a beautiful woman"
   imgText1="Online Classroom Solution"
   Text1='Our services offer an environment for real-time and interactive education, delivering an immersive and engaging learning experience for students and teachers globally. Transform traditional classrooms into dynamic virtual classrooms that connect teachers and students from all over the world.'

   imgAlt2="Office environment"
   imgText2="Development of Educational Games"
    Text2='use our services to create instructional games while fusing enjoyment and learning. We create dynamic, gamified learning experiences for students. Our goal is to increase the accessibility, enjoyment, and memorability of learning for students studying a variety of subjects.'

   imgAlt3="E-Book Reading App"
   imgText3="E-Book Reading App"
    Text3='Use our eLearning platform development services to improve your educational experience. We create unique platforms that optimize learning materials, increase student participation, and expedite administrative procedures, all of which contribute to the improvement of the educational process for both students and academic institutions.'


 
   imgAlt4=""
   imgText4="Learning Management System (LMS)"
    Text4='Enhance the efficiency of your educational management by utilizing the help of our Learning Management System (LMS) implementation and personalization. We integrate powerful learning management systems and tailor their functions to the diverse requirements of schools.'


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

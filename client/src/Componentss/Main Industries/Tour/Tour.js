import React from 'react';
import Navbar from '../../Navbars/Navbar';
import Webservicemain from '../../Webservicemain.js/Webservicemain';
import Industriesmain from '../Industries main content/industriesmain';
import Footer from '../../footer/footer';


import Hiredevelopemntmain from '../../Hire developer main section/Hire main/Hiredevelopemntmain';

import png1 from '../../Kotibox img/png img/good-advice-from-beautiful-woman.png';
import png2 from '../../Kotibox img/png img/office 2.png';





export default function Tour() {
    const mainText = { Text: "Take Your Travel and Hospitality Business to " }
    const Secondtext = { Text: " New Heights with Our Tailored Travel Solutions" }
    const textArray = ["Laravel", "CodeIgniter", "WordPress", "WooCommerce", "Magento"];

    return (
        <>
            <Navbar />
            <Webservicemain
                mainText={mainText.Text} Secondtext={Secondtext.Text} textArray={textArray}
            />
            <Industriesmain
                mainHeading="Services We Provide for Travel Software Development"
                subHeading="Tour Software Development Services"
                introText="Your travel agency can become more successful by implementing a corporate travel application and increasing return on investment. We provide an amazing user experience that makes people more attracted to and loyal to your company."
                buttonText="Let's Dissucus"

                subHeading1="Feature-Rich Travel and Booking  Solutions: Boost the Travel Sector"
                introText1="With a track record of success in targeted marketing and providing individualized services through native applications that can draw in new users and hold on to current ones, Kotibox offers top-notch services for developing travel apps. Our travel-focused app development team has the necessary knowledge and experience to build mobile applications especially for travel-related businesses."

                subHeading2="Employ Travel App Developers to Provide Tourism Solutions That Are Future-Ready"
                introText2="Use our skilled developers to create your travel application. Get in touch with us to find out how our knowledgeable staff can make your project a reality."


                imgAlt1="Good advice from a beautiful woman"
                imgText1="Booking Solution for Vehicle Rentals"
                Text1='We will develop an application to offer rental solutions that, among other things, will enhance your client experience by providing a range of payment choices and fee estimates. Additionally, you can let your users get real-time trip information.'




                imgAlt2="Office environment"
                imgText2="Travel CRM  Development"
                Text2='The time has come to create a complete travel management program that enables users to make reservations for lodging, airfare, and other forms of transportation. The program ought to facilitate booking and provide simple connectivity with payment systems.'

                imgAlt3="Office environment"
                imgText3="Application for Booking Tickets
"
                Text3='Our solutions help agents with lead generation, tracking, scheduling, and messaging so they can focus on strengthening client connections and increasing sales. Obtain increased productivity and simpler procedures!'



                imgAlt4="Office environment"
                imgText4="Development of Travel Guide Apps"
                Text4='Make sure you can put an end to consumers annoyance by providing local landmarks, maps, transit choices, availability in real time, and more. Comprehensive business solutions must be provided to customers.'


                imgSrc9={png1}
                imgSrc10={png2}



            />
            <Hiredevelopemntmain
                hireservicemain="Now, talk about the software development needs you have for education."
                hireservicep="possess particular requirements for development? Get in touch with us to go over your needs and see how we can modify our eLearning software to suit the specific objectives of your project."
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

import React from 'react'
import { FaMinus, FaHandHoldingUsd } from 'react-icons/fa'
import './service.css'

import Website from '../Kotibox img/service/Website.png'
import Mobile from '../Kotibox img/service/Mobile2.png'
import Digital from '../Kotibox img/icon/icons8-marketing-64.png'
import Fullstack from '../Kotibox img/icon/icons8-stack-48.png'
import CRM from '../Kotibox img/service/CRM.png'
import ERP from '../Kotibox img/service/CRM 1.png'
import Game from '../Kotibox img/service/game3.png'
import UI from '../Kotibox img/service/icons8-design-94.png'

function Services() {
  return (
    <section id="service">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section_title text-center">
              <h2>Our Services</h2>
              <div className="brand_border">
                <FaMinus aria-hidden="true" />
                <FaHandHoldingUsd />
                <FaMinus aria-hidden="true" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. <br />Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes</p>
            </div>

          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
                <div  className="icon ">
                  <img src={Website} alt='' />
                </div>
              </div>
              <h4 className="single_service-heading text-center">Web development</h4>
              <div className="single_service-body">

                <p>Kotibox Global Technologies is regarded as one of the top website development companies worldwide and specializes in custom web solutions. We work with you to develop an engaging website that increases traffic and improves the visibility of your business. Our skilled group of web developers creates websites that are visually appealing, responsive, and user-friendly using the newest technologies. What makes us unique is our dedication to excellence, client happiness, and meticulous attention to detail. </p>
              </div>
              <div className='single_service-btn mt-1 '>
                <li className='btn btn-dark '>laravel</li>
                <li className='btn btn-dark'>Codeelgniter</li>
                <li className='btn btn-dark'>wordpress</li>
                <li className='btn btn-dark'>Woo commerce</li>
                <li className='btn btn-dark'>Mangento</li>
                <li className='btn btn-dark'>Yii</li>
              </div>
              <div className='icon-arrow' >
              <i   class="bi bi-arrow-right-circle-fill  text-danger mt-4 "></i>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
                <div className="icon ">
                  <img src={Mobile} alt='' />
                </div>
              </div>
              <h4 className="single_service-heading text-center">Mobile Development</h4>
              <div className="single_service-body">

                <p>Kotibox Global Technologies is globally known as one of the best mobile app development companies. We are committed to transforming your vision into exceptional mobile app development. Our team of experts works on the latest technologies to create innovative and user-friendly apps that cater to your unique business requirements. Our seamless solutions are designed to offer robust functionality and cutting-edge design. Owebest Technologies is your trusted partner in developing mobile applications that leave a lasting impact.  </p>
              </div>
              <div className='single_service-btn mt-1 '>
                <li className='btn btn-dark'>React native</li>
                <li className='btn btn-dark'>Flutter</li>
                <li className='btn btn-dark '>Android</li>
                <li className='btn btn-dark'>IOS</li>

              </div>
              <div className='icon-arrow'>
              <i  class="bi bi-arrow-right-circle-fill  text-danger  "></i>
              </div>
            </div>
            
          </div>

          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
                <div  className="icon ">
                  <img src={UI} alt='' />
                </div>
              </div>
              <h4 className="single_service-heading text-center">UI & UX Design</h4>
              <div className="single_service-body">

                <p>Our first responsibility is our clientele. We pay attention to you, get to know your company, its goods, its needs, its principles, and its goals, and we treat it as our own. Serving the demands of our clients and the target market you wish to engage with is our main priority. We assist you in creating a creating UI/UX design that gives you an edge over the competition and is ready for the future. We offer a broad range of website design services, such as The concept, originality, and flair of your logo are what set you apart from the competition in the marketplace. Our designers are highly skilled in producing distinctive and captivating logos for your business. </p>
              </div>
              <div className='single_service-btn mt-1 '>
                <li className='btn btn-dark '>figma</li>
                <li className='btn btn-dark'>wix-studio</li>
                <li className='btn btn-dark'>wix-studio</li>


              </div>
              <div className='icon-arrow' >
              <i  class="bi bi-arrow-right-circle-fill  text-danger mt-1 "></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
                <div className="icon ">
                  <img src={Digital} alt='' />
                </div>
              </div>
              <h4 className="single_service-heading text-center">Digital Marketing</h4>
              <div className="single_service-body">

                <p>Our partner places confidence and market values in us as an award-winning digital marketing business. We offer a variety of marketing solutions that follow our partners' insights. We add value to your brand's assets so that they can provide quality leads. Our skilled digital marketers possess the ability to attract your desired clientele to your company. Our efforts become increasingly successful and produce the intended campaigns. We assist you in marketing your company's products or services. With our cutting-edge app development services, you may grow your company and gain a competitive edge in the ever-changing digital market. We assist you in marketing your company's products or services.  </p>
              </div>
              <div className='single_service-btn mt-1 '>
                <li className='btn btn-dark '>SEO</li>
                <li className='btn btn-dark'>SMO</li>
                <li className='btn btn-dark'>PPC</li>
                <li className='btn btn-dark'>SMM</li>
                <li className='btn btn-dark'>Content Marketing</li>
                <li className='btn btn-dark'>Inbund Marketing</li>
              </div>
              <div className='icon-arrow' >
              <i   class="bi bi-arrow-right-circle-fill  text-danger  "></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
                <div  className="icon ">
                  <img src={Website} alt='' />
                </div>
              </div>
              <h4 className="single_service-heading text-center">eCommerce  Development</h4>
              <div className="single_service-body">

                <p>We are a scalable, user-friendly, and reliable e-commerce website development firm that can assist you in creating a variety of eCommerce solutions. We assist you in removing any obstacles posed by intricate sales procedures so that your clients may easily make purchases from you. We are a group of skilled e-commerce developers who stay current with emerging trends and technology in the industry. Our group of skilled eCommerce developers is up to date on the newest developments in both technology and fashion. We can assist you in developing an eCommerce solution that is specific to your company's requirements as we know what it takes to establish a profitable online store.  </p> 
              </div>
              <div className='single_service-btn '>
                <li className='btn btn-dark '>Woo Commerce</li>
                <li className='btn btn-dark'>magento</li>
                <li className='btn btn-dark'>Shopify</li>
                <li className='btn btn-dark'>opencart</li>
              </div>
              <div className='icon-arrow' >
              <i  class="bi bi-arrow-right-circle-fill  text-danger  "></i>
              </div>
            </div>
            
          </div>

          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
                <div  className="icon ">
                  <img src={Fullstack} alt='' />
                </div>
              </div>
              <h4 className="single_service-heading text-center">Fullstack Development</h4>
              <div className="single_service-body">

                <p>Global organizations receive Full Stack development services from us, a reputable FULL STACK development firm. Our adaptable Full Stack development solutions support businesses in making significant profits and thriving in this cutthroat environment. For user-focused and distinctive mobile, web, and other software development projects, hire our Full Stack developers.

                  We provide solid and natively developed experiences for desktop, mobile, and web platforms, drawing from our more than ten years of experience developing mobility solutions. We provide solid and natively developed experiences for desktop, mobile, and web platforms, drawing from our more than ten years of experience developing mobility solutions. We provide solid and natively developed experiences for desktop. </p>
              </div>
              <div className='single_service-btn mt-1 '>
                <li className='btn btn-dark '>Angular JS</li>
                <li className='btn btn-dark'>Node JS</li>
                <li className='btn btn-dark'>React JS</li>

              </div>
              <div className='icon-arrow' >
              <i  class="bi bi-arrow-right-circle-fill  text-danger mt-1 "></i>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
                <div  className="icon ">
                  <img src={Game} alt='' />
                </div>
              </div>
              <h4 className="single_service-heading text-center ">Game Development</h4>
              <div className="single_service-body">

                <p>Reshape the learning experience by blending the knowledge with the latest technological inventions. Our developers are capable of bringing your ideas into fantastic game reality by crafting ground-breaking solutions. Unlock virtual worlds using JPLoft's innovation  inventions. Our developers are capable of bringing your ideas into fantastic game reality by crafting ground.Reshape the learning experience by blending the knowledge with the latest technological inventions. Our developers are capable of bringing your ideas into fantastic game reality by crafting ground-breaking solutions. Unlock virtual worlds using JPLoft's innovation  inventions. Our developers are capable of bringing your ideas into fantastic game reality by crafting ground.</p>
              </div>
              <div className='single_service-btn mt-5 '>
                <li className='btn btn-dark '>Unity Game</li>
                <li className='btn btn-dark'>HTML Game</li>
                <li className='btn btn-dark'>VR Game</li>

              </div>
              <div className='icon-arrow' >
              <i  class="bi bi-arrow-right-circle-fill  text-danger  "></i>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
                <div  className="icon ">
                  <img src={CRM} alt='' />
                </div>
              </div>
              <h4 className="single_service-heading text-center">CRM Development</h4>
              <div className="single_service-body">

                <p>Give users a customized experience by utilizing CRM software. With the aid of our CRM software, you can collect and evaluate all the data in one location while interacting with users via a variety of channels to increase productivity and efficiency. CRM is utilized to provide a better user experience by allowing data insight across a variety of company verticals, including sales, marketing, and customer care. We assist you in creating a unique CRM depending on the features and needs of your company. Our talented development team assesses the scope of the project and creates the CRM solution that will work best for you. With the aid of our customized CRM solution, you can achieve tremendous growth </p>
              </div>
              <div className='single_service-btn  '>
                <li className='btn btn-dark '>CRM Consulting</li>
                <li className='btn btn-dark'>CRM Implementation</li>
                <li className='btn btn-dark'>Custam CRM Development</li>
                <li className='btn btn-dark'>CRM App</li>
              </div>
              <div className='icon-arrow' >
              <i  class="bi bi-arrow-right-circle-fill  text-danger "></i>
              </div>
            </div>
          </div>





          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
                <div  className="icon ">
                  <img src={ERP} alt='' />
                </div>
              </div>
              <h4 className="single_service-heading text-center ">ERP Solutions  </h4>
              <div className="single_service-body">

                <p>Use our cutting-edge enterprise solution to streamline your business processes, empowering growth, enhancing team productivity, and facilitating efficient operation management. We assist you in creating unique business solutions that incorporate multi-business features. It addresses all aspects of the business, including team management, sales, marketing, content management, and technical support. Use our bespoke corporate solution to make sure your company can meet market demand. We provide</p>

              </div>
              <div className='single_service-btn mt-4 '>
                <li className='btn btn-dark '>ERP Consulting </li>
                <li className='btn btn-dark'>Customized ERP</li>
                <li className='btn btn-dark mt-2'>ERP Applications</li>
                <li className='btn btn-dark mt-2'>ERP Implementation</li>
              </div>
              <div className='icon-arrow'>
              <i  class="bi bi-arrow-right-circle-fill  text-danger mt-5 "></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

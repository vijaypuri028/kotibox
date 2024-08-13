import React from 'react'
import { FaLaptop, FaMinus, FaCrop, FaCogs, FaHandHoldingUsd, FaQuidditch, FaNewspaper, FaSmile } from 'react-icons/fa'
import './service.css'

import Website from '../Kotibox img/service/Website.png'
import Mobile  from '../Kotibox img/service/Mobile2.png'
import Digital from '../Kotibox img/service/DM.png'
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
                <div style={{marginLeft:"150px"}} className="icon ">
                  <img src={Website} alt='' />
                </div>
              </div>
              <h4 className="single_service-heading text-center">Web development</h4>
              <div className="single_service-body">
               
                <p>Get cost-effective and eye-catching web development solutions for your business to thrive. Boost User Experiences and unleash innovation with KOTIBOX Get cost-effective and eye-catching web development solutions for your business to thrive. Boost User Experiences and unleash innovation with KOTIBOX </p>
              </div>
              <div  className='single_service-btn mt-1 '>
                <li  className='btn btn-dark '>laravel</li>
                <li className='btn btn-dark'>Codeelgniter</li>
                <li className='btn btn-dark'>wordpress</li>
                <li className='btn btn-dark'>Woo commerce</li>
                <li className='btn btn-dark'>Mangento</li>
                <li className='btn btn-dark'>Yii</li>
                </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
              <div style={{marginLeft:"150px"}} className="icon ">
              <img src={Mobile} alt='' />
                </div>
              </div>
              <h4 className="single_service-heading text-center">Mobile Development</h4>
              <div className="single_service-body">
               
                <p>Access an extensive range of forward-thinking mobile app development solutions to reach target audiences. Our developers are dedicated to delivering superior mobile app solutions for every business, enabling seamless user experience on every device. Boost User Experiences and unleash innovation with KOTIBOX </p>
              </div>
              <div  className='single_service-btn mt-1 '>
              <li className='btn btn-dark'>React native</li>
              <li className='btn btn-dark'>Flutter</li>
                <li  className='btn btn-dark '>Android</li>
                <li className='btn btn-dark'>IOS</li>
               
                </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
              <div style={{marginLeft:"150px"}} className="icon ">
              <img src={UI} alt='' />
                </div>
              </div>
              <h4 className="single_service-heading text-center">UI & UX Design</h4>
              <div className="single_service-body">
                
                <p>Automate your business with safe and secure digital solutions empowered with core technologies like AI and Blockchain.Automate your business with safe and secure digital solutions empowered with core technologies like AI and Blockchain digital solutions empowered with core technologies like AI and Blockchain</p>
              </div>
              <div  className='single_service-btn mt-1 '>
                <li  className='btn btn-dark '>figma</li>
                <li className='btn btn-dark'>wix-studio</li>
                <li className='btn btn-dark'>wix-studio</li>

                
                </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
              <div style={{marginLeft:"150px"}} className="icon ">
              <img src={Digital} alt='' />
                </div>
              </div>
              <h4 className="single_service-heading text-center">Digital Marketing</h4>
              <div className="single_service-body">
                
                 <p>Maneuver your brand with our Marketing & SEO strategies, tactics and technical expertise to grab the attention of larger audiences and convert more of them to revenue generating customers. Strengthen Your personal brand  tactics and technical expertise to grab the </p>
              </div>
              <div  className='single_service-btn mt-1 '>
                <li  className='btn btn-dark '>SEO</li>
                <li className='btn btn-dark'>SMO</li>
                <li className='btn btn-dark'>PPC</li>
                <li className='btn btn-dark'>SMM</li>
                <li className='btn btn-dark'>Content Marketing</li>
                <li className='btn btn-dark'>Inbund Marketing</li>
                </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
              <div style={{marginLeft:"150px"}} className="icon ">
              <img src={Website} alt='' />
                </div>
              </div>
              <h4 className="single_service-heading text-center">eCommerce  Development</h4>
              <div className="single_service-body">
                
                <p>Partner with JPLoft to craft innovative solutions and unlock the potential of your online business. Our team of eCommerce developers is expert in delivering innovative e-commerce applications  Our team of eCommerce developers is expert in delivering innovative e-commerce applications</p>
              </div>
              <div  className='single_service-btn mt-5 '>
                <li  className='btn btn-dark '>Woo Commerce</li>
                <li className='btn btn-dark'>magento</li>
                <li className='btn btn-dark'>Shopify</li>
                <li className='btn btn-dark'>opencart</li>
                </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
              <div style={{marginLeft:"150px"}} className="icon ">
              <img src={Fullstack} alt='' />
                </div>
              </div>
              <h4 className="single_service-heading text-center">Fullstack Development</h4>
              <div className="single_service-body">
                
                <p>Automate your business with safe and secure digital solutions empowered with core technologies like AI and Blockchain.Automate your business with safe and secure digital solutions empowered with core technologies like AI and Blockchain.Automate your business with safe and secure digital solutions empowered with core technologies like AI and Blockchain.</p>
              </div>
              <div  className='single_service-btn mt-1 '>
                <li  className='btn btn-dark '>Angular JS</li>
                <li className='btn btn-dark'>Node JS</li>
                <li className='btn btn-dark'>React JS</li>
                
                </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
              <div style={{marginLeft:"150px"}} className="icon ">
              <img src={Game} alt='' />
                </div>
              </div>
              <h4 className="single_service-heading text-center ">Game Development</h4>
              <div className="single_service-body">
                
                <p>Reshape the learning experience by blending the knowledge with the latest technological inventions. Our developers are capable of bringing your ideas into fantastic game reality by crafting ground-breaking solutions. Unlock virtual worlds using JPLoft's innovation  inventions. Our developers are capable of bringing your ideas into fantastic game reality by crafting ground.</p>
              </div>
              <div  className='single_service-btn mt-1 '>
                <li  className='btn btn-dark '>Unity Game</li>
                <li className='btn btn-dark'>HTML Game</li>
                <li className='btn btn-dark'>VR Game</li>
                
                </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
              <div style={{marginLeft:"150px"}} className="icon ">
              <img src={CRM} alt='' />
                </div>
              </div>
              <h4 className="single_service-heading text-center">CRM Development</h4>
              <div className="single_service-body">
                
                <p>Automate your business with safe and secure digital solutions empowered with core technologies like AI and Blockchain. Automate your business with safe and secure digital solutions empowered with core technologies like AI and Blockchain. </p>
              </div>
              <div  className='single_service-btn  '>
                <li  className='btn btn-dark '>CRM Consulting</li>
                <li className='btn btn-dark'>CRM Implementation</li>
                <li className='btn btn-dark'>Custam CRM Development</li>
                <li className='btn btn-dark'>CRM App</li>
                </div>
            </div>
          </div>

        

      
         
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
              <div style={{marginLeft:"150px"}} className="icon ">
              <img src={ERP} alt='' />
                </div>
              </div>
              <h4 className="single_service-heading text-center ">ERP Solutions  </h4>
              <div className="single_service-body">
                
                <p>Maneuver your brand with our Marketing & SEO strategies, tactics and technical expertise to grab the attention of larger audiences and convert more of them to revenue generating customers. Strengthen Your personal brand.</p>
                
              </div>
             <div  className='single_service-btn mt-1 '>
                <li  className='btn btn-dark '>ERP Consulting </li>
                <li className='btn btn-dark'>Customized ERP</li>
                <li className='btn btn-dark'>ERP Applications</li>
                <li className='btn btn-dark'>ERP Implementation</li>
                </div> 
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

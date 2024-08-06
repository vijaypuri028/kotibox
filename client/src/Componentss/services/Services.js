import React from 'react'
import { FaLaptop, FaMinus, FaCrop, FaCogs, FaHandHoldingUsd, FaQuidditch, FaNewspaper, FaSmile } from 'react-icons/fa'
import './service.css'

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
            {/* <div  className='single_service-btn mt-5 '>
                <li  className='btn btn-dark '>more</li>
                <li className='btn btn-dark'>more</li>
                <li className='btn btn-dark'>more</li>
                <li className='btn btn-dark'>more</li>
                </div> */}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
                <div className="icon">
                  <FaLaptop />
                </div>
              </div>
              <div className="single_service-body">
                <h4 className="single_service-heading">Web development</h4>
                <p>Get cost-effective and eye-catching web development solutions for your business to thrive. Boost User Experiences and unleash innovation with KOTIBOX.</p>
              </div>
              <div  className='single_service-btn mt-5 '>
                <li  className='btn btn-dark '>laravel</li>
                <li className='btn btn-dark'>opencart</li>
                <li className='btn btn-dark'>shopify</li>
                <li className='btn btn-dark'>wordpress</li>
                </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
                <div className="icon">
                  <FaQuidditch />
                </div>
              </div>
              <div className="single_service-body">
                <h4 className="single_service-heading">Mobile Development</h4>
                <p>Access an extensive range of forward-thinking mobile app development solutions to reach target audiences. Our developers are dedicated to delivering superior mobile app solutions for every business, enabling seamless user experience on every device.</p>
              </div>
              <div  className='single_service-btn mt-5 '>
                <li  className='btn btn-dark '>Android</li>
                <li className='btn btn-dark'>IOS</li>
                <li className='btn btn-dark'>React native</li>
                <li className='btn btn-dark'>flutter</li>
                </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
                <div className="icon">
                  <FaNewspaper />
                </div>
              </div>
              <div className="single_service-body">
                <h4 className="single_service-heading">UI & UX Design</h4>
                <p>Automate your business with safe and secure digital solutions empowered with core technologies like AI and Blockchain.</p>
              </div>
              <div  className='single_service-btn mt-5 '>
                <li  className='btn btn-dark '>figma</li>
                <li className='btn btn-dark'>wix-studio</li>
                
                </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
                <div className="icon">
                  <FaSmile />
                </div>
              </div>
              <div className="single_service-body">
                <h4 className="single_service-heading">AI and Blockchain Development</h4>
                <p>Automate your business with safe and secure digital solutions empowered with core technologies like AI and Blockchain.</p>
              </div>
              <div  className='single_service-btn mt-5 '>
                <li  className='btn btn-dark '>Blockchain</li>
                <li className='btn btn-dark'>AI</li>
                <li className='btn btn-dark'>NFT</li>
                <li className='btn btn-dark'>ICO</li>
                </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
                <div className="icon">
                  <FaCrop />
                </div>
              </div>
              <div className="single_service-body">
                <h4 className="single_service-heading">eCommerce App Development</h4>
                <p>Partner with JPLoft to craft innovative solutions and unlock the potential of your online business. Our team of eCommerce developers is expert in delivering innovative e-commerce applications.</p>
              </div>
              <div  className='single_service-btn mt-5 '>
                <li  className='btn btn-dark '>E-commerce</li>
                <li className='btn btn-dark'>magento</li>
                <li className='btn btn-dark'>Shopify</li>
                <li className='btn btn-dark'>opencart</li>
                </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
                <div className="icon">
                  <FaCogs />
                </div>
              </div>
              <div className="single_service-body">
                <h4 className="single_service-heading">Game Development</h4>
                <p>Reshape the learning experience by blending the knowledge with the latest technological inventions. Our developers are capable of bringing your ideas into fantastic game reality by crafting ground-breaking solutions. Unlock virtual worlds using JPLoft's innovation.</p>
              </div>
              <div  className='single_service-btn mt-5 '>
                <li  className='btn btn-dark '>AR game</li>
                <li className='btn btn-dark'>VR game</li>
                <li className='btn btn-dark'>SMM</li>
                
                </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
                <div className="icon">
                  <FaCogs />
                </div>
              </div>
              <div className="single_service-body">
                <h4 className="single_service-heading">Digital Marketing</h4>
                 <p>Maneuver your brand with our Marketing & SEO strategies, tactics and technical expertise to grab the attention of larger audiences and convert more of them to revenue generating customers. Strengthen Your personal brand.</p>
              </div>
              <div  className='single_service-btn mt-5 '>
                <li  className='btn btn-dark '>SEO</li>
                <li className='btn btn-dark'>SMO</li>
                <li className='btn btn-dark'>PPC</li>
                <li className='btn btn-dark'>SSM</li>
                </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="single_service hvr-curl-top-right">
              <div className="single_service-left">
                <div className="icon">
                  <FaCogs />
                </div>
              </div>
              <div className="single_service-body">
                <h4 className="single_service-heading">Graphic Design & Video Editing </h4>
                <p>Maneuver your brand with our Marketing & SEO strategies, tactics and technical expertise to grab the attention of larger audiences and convert more of them to revenue generating customers. Strengthen Your personal brand.</p>
                
              </div>
             <div  className='single_service-btn mt-5 '>
                <li  className='btn btn-dark '>photoshop</li>
                <li className='btn btn-dark'>Coral</li>
                <li className='btn btn-dark'>After-effect</li>
                <li className='btn btn-dark'>Blender</li>
                </div> 
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

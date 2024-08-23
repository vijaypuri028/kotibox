import React from 'react';
import { FaAward, FaCogs, FaSmile, FaLock, FaHeadset, FaThumbsUp } from 'react-icons/fa';
import './Company.css';
import Navbar from '../../Navbars/Navbar';
import Footer from '../../footer/footer';
import Marquee from '../../Marquee/Marquee';
import Button from '../../button/Button';
import Blog from '../../blog/blog'
import Webservicemain from '../../Webservicemain.js/Webservicemain';
import imgSrc from "../../Kotibox img/Main img/Game development.jpg";
import { Link } from 'react-router-dom';

function CompanyAbout() {
  const mainText = { Text: "WEBSITE DEVELOPMENT" }
  const Secondtext = { Text: "Your Partner " }
  const textArray = ["laravel", "CodeIgniter", "WordPress", "WooCommerce", "Magento"];

  const values = [
    {
      icon: <FaAward size={50} />,
      title: 'Expertise',
      description: 'We have successfully surpassed this milestone with our dedicated and continuous efforts to build innovative, robust & business-centric mobility solutions for the web, mobile, and everything digital.'
    },
    {
      icon: <FaCogs size={50} />,
      title: 'Highly Process Oriented',
      description: 'We have successfully surpassed this milestone with our dedicated and continuous efforts to build innovative, robust & business-centric mobility solutions for the web, mobile, and everything digital.'
    },
    {
      icon: <FaSmile size={50} />,
      title: 'No Surprises',
      description: 'We have successfully surpassed this milestone with our dedicated and continuous efforts to build innovative, robust & business-centric mobility solutions for the web, mobile, and everything digital.'
    },
    {
      icon: <FaLock size={50} />,
      title: 'Peace of Mind',
      description: 'We have successfully surpassed this milestone with our dedicated and continuous efforts to build innovative, robust & business-centric mobility solutions for the web, mobile, and everything digital.'
    },
    {
      icon: <FaHeadset size={50} />,
      title: 'Committed Support',
      description: 'We have successfully surpassed this milestone with our dedicated and continuous efforts to build innovative, robust & business-centric mobility solutions for the web, mobile, and everything digital.'
    },
    {
      icon: <FaThumbsUp size={50} />,
      title: 'Customer Satisfaction',
      description: 'We have successfully surpassed this milestone with our dedicated and continuous efforts to build innovative, robust & business-centric mobility solutions for the web, mobile, and everything digital.'
    },
  ];
  return (
    <>
    <Navbar/>
    <Webservicemain imgSrc={imgSrc} mainText={mainText.Text} Secondtext={Secondtext.Text} textArray={textArray} />

   
      <div
        className='textt-box'
        style={{
          backgroundSize: 'cover',
          padding: '20px',
        }}
      >
        <div className='container mt-5'>
          <h1 style={{ fontWeight: '800' }}>Partner with Us</h1>
          <p style={{ fontSize: '18px' }}>
            JPLoft, a decade-old digital solutions company, specializes in mobile & web app, and website development.
            We serve businesses of all sizes, from startups to Fortune 500 companies, across various industries.
            Our collaborative and consultative approach, paired with extensive technical expertise, helps clients
            reach and maintain their goals. With a track record of diverse projects and significant achievements,
            partnering with us offers a competitive advantage through our experience and knowledge.
          </p>

          <div className='row mt-5'>
            <div className='col-md-4'>
              <h1>1300+</h1>
              <h4>Projects Delivered</h4>
              <p>
                We have successfully surpassed this milestone with our dedicated and continuous efforts to build
                innovative, robust & business-centric mobility solutions for the web, mobile, and everything digital.
              </p>
            </div>
            <div className='col-md-4'>
              <h1>1300+</h1>
              <h4>Projects Delivered</h4>
              <p>
                We have successfully surpassed this milestone with our dedicated and continuous efforts to build
                innovative, robust & business-centric mobility solutions for the web, mobile, and everything digital.
              </p>
            </div>
            <div className='col-md-4'>
              <h1>1300+</h1>
              <h4>Projects Delivered</h4>
              <p>
                We have successfully surpassed this milestone with our dedicated and continuous efforts to build
                innovative, robust & business-centric mobility solutions for the web, mobile, and everything digital.
              </p>
            </div>
            <div className='col-md-4 mt-5'>
              <h1>1300+</h1>
              <h4>Projects Delivered</h4>
              <p>
                We have successfully surpassed this milestone with our dedicated and continuous efforts to build
                innovative, robust & business-centric mobility solutions for the web, mobile, and everything digital.
              </p>
            </div>
            <div className='col-md-4 mt-5'>
              <h1>1300+</h1>
              <h4>Projects Delivered</h4>
              <p>
                We have successfully surpassed this milestone with our dedicated and continuous efforts to build
                innovative, robust & business-centric mobility solutions for the web, mobile, and everything digital.
              </p>
            </div>
            <div className='col-md-4 mt-5'>
              <h1>1300+</h1>
              <h4>Projects Delivered</h4>
              <p>
                We have successfully surpassed this milestone with our dedicated and continuous efforts to build
                innovative, robust & business-centric mobility solutions for the web, mobile, and everything digital.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section ">
      <div className="video-container">
        <div className='upper-text ms-5 '>
          <h1 className='text-light' style={{fontSize:"50px"}} >We are</h1>
          <h1 style={{fontSize:"55px"}} >KOTIBOX</h1>
        </div>
        <iframe
          className="video mx-auto ms-5 "
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="text-container py-5 pt-5 ">
        <h1>About Us</h1>
        <h2>Our Journey</h2>
        <p>
          Welcome to our website! We are passionate about providing you with the
          best experience possible. Our journey began several years ago with the
          mission to deliver high-quality content and services to our users.
        </p>
        <p>
          Our team is dedicated to continuous improvement and innovation, ensuring
          that we stay at the forefront of our industry. We believe in the power of
          community and are committed to fostering a supportive and engaging
          environment for all our users.
        </p>



      </div>

    
    

          </div>

      <div className='' style={{ backgroundColor: 'white', marginTop: '50px' }}>
        <div className='container mt-5' >
          <h1 className='mx-auto ' style={{ backgroundColor: 'white', marginTop: '50px' }}>Our Value</h1>
          <h5 className='mt-5'>
            At JPLoft, we devote ourselves to a well-established set of cultural and professional values that showcase
            how with the highest aspirations we engage with our colleagues, fellows, alumni, partners, and board members.
          </h5>
        </div>
        <div className='container'>
          <div className='row mt-5'>
            {values.map((value, index) => (
              <div key={index} className='col-md-4 mt-5'>
                <div>{value.icon}</div>
                <h4 className='mt-4'>{value.title}</h4>
                <p className='mt-3'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section id="team" className="team-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="site-heading text-center">
              <h2 className='text-light'>Our <span>Team</span></h2>
              <h4 className='text-light'>Meet our awesome and expert team members</h4>
            </div>
          </div>
        </div>
        <div className="row team-items">
          <div className="col-md-4 single-item">
            <div className="item">
              <div className="thumb">
                <img className="img-fluid" src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Thumb" />
                <div className="overlay">
                  <h4>Lorem Ipsum</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <div className="social">
                    <ul>
                      <li className="twitter">
                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                      </li>
                      <li className="pinterest">
                        <Link href="#"><i className="fab fa-pinterest"></i></Link>
                      </li>
                      <li className="instagram">
                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                      </li>
                      <li className="vimeo">
                        <Link href="#"><i className="fab fa-vimeo-v"></i></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="info">
                <span className="message">
                  <Link href="#"><i className="fas fa-envelope-open"></i></Link>
                </span>
                <h4>Lorem Ipsum</h4>
                <span>Project Manager</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 single-item">
            <div className="item">
              <div className="thumb">
                <img className="img-fluid" src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Thumb" />
                <div className="overlay">
                  <h4>Lorem Ipsum</h4>
                  <p>kING.</p>
                  <div className="social">
                    <ul>
                      <li className="twitter">
                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                      </li>
                      <li className="pinterest">
                        <Link href="#"><i className="fab fa-pinterest"></i></Link>
                      </li>
                      <li className="instagram">
                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                      </li>
                      <li className="vimeo">
                        <Link href="#"><i className="fab fa-vimeo-v"></i></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="info">
                <span className="message">
                  <Link href="#"><i className="fas fa-envelope-open"></i></Link>
                </span>
                <h4>Lorem Ipsum</h4>
                <span>App Developer</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 single-item">
            <div className="item">
              <div className="thumb">
                <img className="img-fluid" src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Thumb" />
                <div className="overlay">
                  <h4>Lorem Ipsum</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <div className="social">
                    <ul>
                      <li className="twitter">
                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                      </li>
                      <li className="pinterest">
                        <Link href="#"><i className="fab fa-pinterest"></i></Link>
                      </li>
                      <li className="instagram">
                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                      </li>
                      <li className="vimeo">
                        <Link href="#"><i className="fab fa-vimeo-v"></i></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="info">
                <span className="message">
                  <Link href="#"><i className="fas fa-envelope-open"></i></Link>
                </span>
                <h4>Lorem Ipsum</h4>
                <span>Web Designer</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 single-item">
            <div className="item">
              <div className="thumb">
                <img className="img-fluid" src="https://img.freepik.com/free-photo/business-concept-portrait-confident-young-businesswoman-keeping-arms-crossed-looking-camera-w_1258-104422.jpg" alt="Thumb" />
                <div className="overlay">
                  <h4>Lorem Ipsum</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <div className="social">
                    <ul>
                      <li className="twitter">
                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                      </li>
                      <li className="pinterest">
                        <Link href="#"><i className="fab fa-pinterest"></i></Link>
                      </li>
                      <li className="instagram">
                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                      </li>
                      <li className="vimeo">
                        <Link href="#"><i className="fab fa-vimeo-v"></i></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="info">
                <span className="message">
                  <Link href="#"><i className="fas fa-envelope-open"></i></Link>
                </span>
                <h4>Lorem Ipsum</h4>
                <span>Web Designer</span>
              </div>
            </div>
          </div> <div className="col-md-4 single-item">
            <div className="item">
              <div className="thumb">
                <img className="img-fluid" src="https://img.freepik.com/free-photo/close-up-confident-corporate-woman-professional-entrepreneur-smiling-cross-arms-chest-smiling-enthusiastic-standing-white-background_1258-85600.jpg" alt="Thumb" />
                <div className="overlay">
                  <h4>Lorem Ipsum</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <div className="social">
                    <ul>
                      <li className="twitter">
                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                      </li>
                      <li className="pinterest">
                        <Link href="#"><i className="fab fa-pinterest"></i></Link>
                      </li>
                      <li className="instagram">
                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                      </li>
                      <li className="vimeo">
                        <Link href="#"><i className="fab fa-vimeo-v"></i></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="info">
                <span className="message">
                  <Link href="#"><i className="fas fa-envelope-open"></i></Link>
                </span>
                <h4>Lorem Ipsum</h4>
                <span>Web Designer</span>
              </div>
            </div>
          </div> <div className="col-md-4 single-item">
            <div className="item">
              <div className="thumb">
                <img className="img-fluid" src="https://media.istockphoto.com/id/1158915109/photo/smiling-indian-young-businesswoman-wear-white-suit-looking-at-camera-isolated-on-grey-studio.webp?b=1&s=170667a&w=0&k=20&c=MfGk8jBrA0djnayzMobPKmrSjtRq_Ht7zqov9MsL84E=" alt="Thumb" />
                <div className="overlay">
                  <h4>Lorem Ipsum</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <div className="social">
                    <ul>
                      <li className="twitter">
                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                      </li>
                      <li className="pinterest">
                        <Link href="#"><i className="fab fa-pinterest"></i></Link>
                      </li>
                      <li className="instagram">
                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                      </li>
                      <li className="vimeo">
                        <Link href="#"><i className="fab fa-vimeo-v"></i></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="info">
                <span className="message">
                  <Link href="#"><i className="fas fa-envelope-open"></i></Link>
                </span>
                <h4>Lorem Ipsum</h4>
                <span>Web Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Button/>
    <Blog/>
    <Marquee/>
    <Footer/>

    </>
  );
}

export default CompanyAbout;
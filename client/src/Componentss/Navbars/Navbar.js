import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

import Android from '../Kotibox img/icon/icons8-android-os-48.png'
import Java from '../Kotibox img/icon/icons8-java-48.png'
import AngularJS from '../Kotibox img/icon/icons8-angularjs-144.png'
import Wordpress from '../Kotibox img/icon/icons8-apple-48.png'
import Blockchain from '../Kotibox img/icon/icons8-android-os-48.png'
import DotNet from '../Kotibox img/icon/dote net.webp'
import Fullstack from '../Kotibox img/icon/icons8-stack-48.png'
import IOS from '../Kotibox img/icon/icons8-apple-48.png'
import Laravel from '../Kotibox img/icon/icons8-laravel-64.png'
import Magento from '../Kotibox img/icon/icons8-magento-100.png'
import NodeJs from '../Kotibox img/icon/icons8-node-js-48.png'
import react from '../Kotibox img/icon/react netive.png'
import reactNative from '../Kotibox img/icon/react netive.png'
import php from '../Kotibox img/icon/Php.png'
import python from '../Kotibox img/icon/icons8-python-48.png'

import Website from '../Kotibox img/service/Website.png'
import Mobile from '../Kotibox img/service/Mobile1.png'
import Digital from '../Kotibox img/icon/icons8-marketing-64.png'
import Artificial from '../Kotibox img/service/AI5.png'
import CRM from '../Kotibox img/service/CRM.png'

import Game from '../Kotibox img/service/game3.png'
import Custom from '../Kotibox img/service/Custom.png'
import logo from '../Kotibox img/Main img/png img/Logo.png'
import Ecommerce from '../Kotibox img/service/icons8-crm-64 (1).png'





export default function Navbar() {

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: ''
  });

  // Modal open and close functions
  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
    // For example, you might want to send this data to an API
    handleModalClose(); // Close modal after form submission
  };


  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };




  return (
    <>
      <nav className="navbar navbar-expand-lg  fixed-top " >
        <div className="container-fluid">
          <Link className="navbar-brand ms-4 " to="/"><img className='logo-kotibox' src={logo} alt='' /></Link>
          <button class="navbar-toggler" type="button" onClick={toggleMenu} aria-expanded={isMenuOpen} aria-label="Toggle navigation">
            <span class="navbar-toggler-icon bg-light"></span>
          </button>
          <div className={`collapse navbar-collapse justify-content-center ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">


              <li style={{ fontSize: "17px" }} className="nav-item ms-4 ">
                <Link className="nav-link   " aria-current="page" to="/CompanyAbout" style={{ color: "#fff", fontWeight: "bold", transition: "color 0.3s ease" }} > About </Link>
              </li>



              <li style={{ fontSize: "17px" }} className="nav-item dropdown ms-4"  >
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" style={{ color: "#fff", fontWeight: "bold", transition: "color 0.3s ease" }} >
                  Services
                </Link>
                <div className="dropdown-menu large-dropdown1 bg-dark" aria-labelledby="navbarDropdown">

                  <div className="dropdown-container">


                    <div className="dropdown-row ">
                      <Link className="dropdown-item2  " to="/webDevelopment"> <img className='icon-img' src={Website} alt='' />Website Development</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="/MobileApp"> <img className='icon-img' src={Mobile} alt='' />Mobile App Development </Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="/digitalmarketing"><img className='icon-img' src={Digital} alt='' /> Digital Marketing </Link> <hr className='text-light' />

                      <Link className="dropdown-item2 " to="/AI"><img className='icon-img' src={Artificial} alt='' /> Artificial Intelligence </Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={Artificial} alt='' /> Content Marketing </Link> <hr className='text-light' />


                    </div>
                    <div className="dropdown-row ">
                      <Link className="dropdown-item2 " to="/Blockchain"><img className='icon-img' src={Blockchain} alt='' /> Blockchain</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="/Game"><img className='icon-img' src={Game} alt='' /> Saas Applinction</Link> <hr className='text-light' />
                      <Link className="dropdown-item2" to="/Custom"><img className='icon-img' src={Custom} alt='' /> Custom Software Development</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="/Eccomerce"> <img className='icon-img' src={Ecommerce} alt='' /> Ecommerce Solutions</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"> <img className='icon-img' src={Ecommerce} alt='' /> ERP Development</Link> <hr className='text-light' />
                    </div>
                    <div className="dropdown-row ">

                      <Link className="dropdown-item2 " to="/Fullstack"><img className='icon-img' src={Fullstack} alt='' /> Full stack </Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="/CRM"><img className='icon-img' src={CRM} alt='' /> CRM Development</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={CRM} alt='' /> UI/UX & Videography</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={CRM} alt='' /> Game Development</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={CRM} alt='' /> Project Management Services</Link> <hr className='text-light' />
                    </div>


                    <div className="dropdown-row">
                      <img className='dropdown-img-hire' src='https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                    </div>

                  </div>

                </div>
              </li>




              <li style={{ fontSize: "17px" }} className="nav-item dropdown ms-4">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" style={{ color: "#fff", fontWeight: "bold", transition: "color 0.3s ease" }} >
                  Industries
                </Link>
                <div className="dropdown-menu large-dropdown3 bg-dark" aria-labelledby="navbarDropdown">
                  <div className="dropdown-container">

                    <div className="dropdown-row  ">

                      <Link className="dropdown-item2 " to="/Education"><img className='icon-img' src={Fullstack} alt='' />  Education & E-learning </Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="/Food"><img className='icon-img' src={CRM} alt='' /> Food & Restaurants</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={CRM} alt='' />  Media & Publication</Link> <hr className='text-light' />

                    </div>

                    <div className="dropdown-row ">

                      <Link className="dropdown-item2 " to="/Tour"><img className='icon-img' src={Fullstack} alt='' />  Tour & Travels </Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="/bankig"><img className='icon-img' src={CRM} alt='' /> Banking & Finance</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="/Heathcare"><img className='icon-img' src={CRM} alt='' />  Healthcare</Link> <hr className='text-light' />

                    </div>



                    <div className="dropdown-row ">

                      <Link className="dropdown-item2 " to="/RealState"><img className='icon-img' src={Fullstack} alt='' />  Real Estate </Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={CRM} alt='' /> Game</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={CRM} alt='' /> Startups </Link> <hr className='text-light' />

                    </div>









                    <div className="dropdown-row">
                      <img className='dropdown-img-1 mt-4' src='https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />

                    </div>

                  </div>
                </div>
              </li>

              <li style={{ fontSize: "17px" }} className="nav-item dropdown ms-4">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" style={{ color: "#fff", fontWeight: "bold", transition: "color 0.3s ease" }} >
                  Hire Developer
                </Link>
                <div className="dropdown-menu large-dropdown4 bg-dark" aria-labelledby="navbarDropdown">

                  <div className="dropdown-container">

                    <div className="dropdown-row ">
                      <Link className="dropdown-item2  " to="/Android"> <img className='icon-img' src={Android} alt='' /> HIRE <br /> Android Developer</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="/javaDeveloper"><img className='icon-img' src={Java} alt='' /> HIRE <br /> JAVA Developer </Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="/Angulardeveloper"><img className='icon-img' src={AngularJS} alt='' /> HIRE <br /> AngularJS Developer </Link> <hr className='text-light' />

                      <Link className="dropdown-item2 " to="/Blockchaindeveloper"><img className='icon-img' src={Blockchain} alt='' /> HIRE <br />  Blockchain Developer</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="/Dotnetdeveloper"><img className='icon-img' src={DotNet} alt='' />HIRE <br /> Dot Net Developer</Link> <hr className='text-light' />

                    </div>
                    <div className="dropdown-row ">
                      <Link className="dropdown-item2" to="/Fullstackdeveloper"><img className='icon-img' src={Fullstack} alt='' /> HIRE <br /> Full Stack Developer</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="/IOSdeveloper"><img className='icon-img' src={IOS} alt='' /> HIRE <br /> IOS Developer</Link> <hr className='text-light' />
                      <Link className="dropdown-item2" to="/Laraveldeveloper"><img className='icon-img' src={Laravel} alt='' /> HIRE <br /> Laravel Developer</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="/Magentodeveloper"><img className='icon-img' src={Magento} alt='' /> HIRE <br /> Magento Developer </Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="/NodeJsdeveloper"><img className='icon-img' src={NodeJs} alt='' /> HIRE <br /> NodeJs Developer</Link> <hr className='text-light' />

                    </div>
                    <div className="dropdown-row ">
                      <Link className="dropdown-item2 " to="/wordpressdeveloper"><img className='icon-img' src={Wordpress} alt='' /> HIRE <br /> Wordpress Developer</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="/Reactjsdeveloper"><img className='icon-img' src={react} alt='' /> HIRE <br /> ReactJS Developer</Link> <hr className='text-light' />
                      <Link className="dropdown-item2   " to="/ReactNativedeveloper"><img className='icon-img' src={reactNative} alt='' /> HIRE <br /> React Native Developer</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="/Phpdeveloper"><img className='icon-img' src={php} alt='' /> HIRE <br /> PHP Developer</Link> <hr className='text-light' />

                      <Link className="dropdown-item2 " to="/Pythondeveloper"><img className='icon-img' src={python} alt='' /> HIRE <br />  Python Developer </Link> <hr className='text-light' />

                    </div>



                    <div className="dropdown-row">
                      <img className='dropdown-img-hire' src='https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />



                    </div>

                  </div>

                </div>
              </li>


              <li style={{ fontSize: "17px" }} className="nav-item dropdown ms-4"  >
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" style={{ color: "#fff", fontWeight: "bold", transition: "color 0.3s ease" }} >
                  Product
                </Link>
                <div className="dropdown-menu large-dropdown10 bg-dark" aria-labelledby="navbarDropdown">

                  <div className="dropdown-container">


                    <div className="dropdown-row ">
                      <Link className="dropdown-item2  " to="/HRMS"> <img className='icon-img' src={Website} alt='' />Stream Box (HRMS)</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"> <img className='icon-img' src={Mobile} alt='' /> Hospital Management</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={Digital} alt='' /> Club Management </Link> <hr className='text-light' />



                    </div>

                    <div className="dropdown-row ">
                      <Link className="dropdown-item2  " to="#"> <img className='icon-img' src={Website} alt='' />School Management</Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"> <img className='icon-img' src={Mobile} alt='' /> Restaurants Ordering App  </Link> <hr className='text-light' />
                      <Link className="dropdown-item2 " to="#"><img className='icon-img' src={Digital} alt='' /> Gym Management </Link> <hr className='text-light' />



                    </div>






                    <div className="dropdown-row">
                      <img className='dropdown-img-1 mt-2' src='https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />

                    </div>

                  </div>

                </div>
              </li>


              <li style={{ fontSize: "17px" }} className="nav-item ms-4 ">
                <Link className="nav-link   " aria-current="page" to="/contact" style={{ color: "#fff", fontWeight: "bold", transition: "color 0.3s ease" }} > Contact Us </Link>
              </li>


              <li style={{ fontSize: "17px" }} className="nav-item ms-4 ">
                <Link className="nav-link   " aria-current="page" to="/Career" style={{ color: "#fff", fontWeight: "bold", transition: "color 0.3s ease" }} > Career </Link>
              </li>

              <li style={{ fontSize: "17px" }} className="nav-item ms-4 ">
        <button
          className="nav-link btn btn-danger"
          aria-current="page"
          onClick={handleModalOpen}
          style={{
            color: "#fff",
            fontWeight: "bold",
            transition: "color 0.3s ease",
          }}
        >
          Book A Call Now
        </button>
      </li>




            </ul>
          </div>
        </div>

      </nav>
    {/* Modal */}
    {showModal && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Book an Appointment</h5>
                <button type="button" className="close" onClick={handleModalClose}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control bg-light "
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control bg-light"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control bg-light"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="date">Select Date</label>
                    <input
                      type="date"
                      className="form-control bg-light"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="time">Select Time</label>
                    <input
                      type="time"
                      className="form-control bg-light"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
 
 

    </>
  );
}
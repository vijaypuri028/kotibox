import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Make sure to create and import this CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faCode, faInfoCircle, faHome } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
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

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-tranprent fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1" to="#">KOTIBOX</Link>
        <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li style={{fontSize:"20px"}} className="nav-item">
              <Link className="nav-link active  " aria-current="page" to="#"> About Us</Link>
            </li>
            <li style={{fontSize:"20px"}} className="nav-item dropdown ms-4">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button">
                 Services
              </Link>
              <div className="dropdown-menu large-dropdown bg-dark" aria-labelledby="navbarDropdown">
                <div className="dropdown-container">
                  <div className="dropdown-row">
                    <Link className="dropdown-item text-danger pt-1 " to="#"><FontAwesomeIcon className='drop-icon'  icon={faCogs} /> Action 1</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faCogs} /> Action 3</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon   className='drop-icon'  icon={faCogs} /> Action 2</Link>
                  </div>
                  <div className="dropdown-row">
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faCogs} /> Action 5</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon   className='drop-icon' icon={faCogs} /> Action 4</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faCogs} /> Action 6</Link>
                  </div>
                  <div className="dropdown-row">
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faCogs} /> Action 8</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon   className='drop-icon' icon={faCogs} /> Action 7</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faCogs} /> Action 9</Link>
                  </div>
                  <div className="dropdown-row">
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faCode} /> Action 8</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon  className='drop-icon'  icon={faCode} /> Action 7</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon   className='drop-icon' icon={faCode} /> Action 9</Link>
                  </div>
                   
                </div>
              </div>
            </li>
            <li style={{fontSize:"20px"}} className="nav-item dropdown ms-4">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button">
              Our Services
              </Link>
              <div className="dropdown-menu large-dropdown bg-dark" aria-labelledby="navbarDropdown">
                <div className="dropdown-container">
                  <div className="dropdown-row">
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faCogs} /> Action 2</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon   className='drop-icon' icon={faCogs} /> Action 1</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faCogs} /> Action 3</Link>
                  </div>
                  <div className="dropdown-row">
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faCogs} /> Action 5</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon   className='drop-icon' icon={faCogs} /> Action 4</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faCogs} /> Action 6</Link>
                  </div>
                  <div className="dropdown-row">
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faCogs} /> Action 8</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon   className='drop-icon' icon={faCogs} /> Action 7</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faCogs} /> Action 9</Link>
                  </div>
                  <div className="dropdown-row">
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faCode} /> Action 8</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon   className='drop-icon' icon={faCode} /> Action 7</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faCode} /> Action 9</Link>
                  </div>
                </div>
              </div>
            </li>
            <li style={{fontSize:"20px"}} className="nav-item dropdown ms-4">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button">
              Industries
              </Link>
              <div className="dropdown-menu large-dropdown bg-dark" aria-labelledby="navbarDropdown">
                <div className="dropdown-container">
                    
                  <div className="dropdown-row">
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faCode} /> Action 2</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon   className='drop-icon' icon={faCode} /> Action 1</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faCode} /> Action 3</Link>
                  </div>
                  <div className="dropdown-row">
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faCode} /> Action 5</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon   className='drop-icon' icon={faCode} /> Action 4</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faCode} /> Action 6</Link>
                  </div>
                  <div className="dropdown-row">
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faCode} /> Action 8</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon   className='drop-icon' icon={faCode} /> Action 7</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faCode} /> Action 9</Link>
                  </div>
                  <div className="dropdown-row">
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faCode} /> Action 8</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon   className='drop-icon' icon={faCode} /> Action 7</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon   className='drop-icon' icon={faCode} /> Action 9</Link>
                  </div>
                    
                </div>
              </div>
            </li>
            <li style={{fontSize:"20px"}} className="nav-item dropdown active ms-2">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button">
                Solutions
              </Link>
              <div className="dropdown-menu large-dropdown bg-dark" aria-labelledby="navbarDropdown">
                <div className="dropdown-container">
                  <div className="dropdown-row">
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faInfoCircle} /> Action </Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon  className='drop-icon'  icon={faInfoCircle} /> COMPANY </Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon  className='drop-icon'  icon={faInfoCircle} /> Action 3</Link>
                  </div>
                    
                  <div className="dropdown-row">
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faInfoCircle} /> Action 5</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon   className='drop-icon' icon={faInfoCircle} /> Action 4</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faInfoCircle} /> Action 6</Link>
                  </div>
                  <div className="dropdown-row">
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon className='drop-icon' icon={faInfoCircle} /> Action 8</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon  className='drop-icon'  icon={faInfoCircle} /> Action 7</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon  className='drop-icon'  icon={faInfoCircle} /> Action 9</Link>
                  </div>
                   
                </div>
              </div>
            </li>
            <li style={{fontSize:"20px"}} className="nav-item dropdown active ms-2">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button">
                Resources
              </Link>
              <div className="dropdown-menu large-dropdown bg-dark" aria-labelledby="navbarDropdown">
                <div className="dropdown-container">
                  <div className="dropdown-row">
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon   className='drop-icon' icon={faInfoCircle} /> Action </Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon   className='drop-icon' icon={faInfoCircle} /> COMPANY </Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon   className='drop-icon' icon={faInfoCircle} /> Action 3</Link>
                  </div>
                  <div className="dropdown-row">
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon  className='drop-icon'  icon={faInfoCircle} /> Action 4</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon  className='drop-icon'  icon={faInfoCircle} /> Action 5</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon   className='drop-icon' icon={faInfoCircle} /> Action 6</Link>
                  </div>
                  <div className="dropdown-row">
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon  className='drop-icon'  icon={faInfoCircle} /> Action 7</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon  className='drop-icon'  icon={faInfoCircle} /> Action 8</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon  className='drop-icon'  icon={faInfoCircle} /> Action 9</Link>
                  </div>
                </div>
              </div>
            </li>
            <li style={{fontSize:"20px"}} className="nav-item dropdown active ms-2">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button">
                Contact us
              </Link>
              <div className="dropdown-menu large-dropdown bg-dark" aria-labelledby="navbarDropdown">
                <div className="dropdown-container">
                  <div className="dropdown-row">
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon  className='drop-icon'  icon={faInfoCircle} /> COMPANY </Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon  className='drop-icon'  icon={faInfoCircle} /> Action </Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon  className='drop-icon'  icon={faInfoCircle} /> Action 3</Link>
                  </div>
                  <div className="dropdown-row">
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon  className='drop-icon'  icon={faInfoCircle} /> Action 4</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon  className='drop-icon'  icon={faInfoCircle} /> Action 5</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon  className='drop-icon'  icon={faInfoCircle} /> Action 6</Link>
                  </div>
                  <div className="dropdown-row">
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon  className='drop-icon'  icon={faInfoCircle} /> Action 7</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon   className='drop-icon' icon={faInfoCircle} /> Action 8</Link>
                    <Link className="dropdown-item text-danger" to="#"><FontAwesomeIcon  className='drop-icon'  icon={faInfoCircle} /> Action 9</Link>
                  </div>
                </div>
              </div>
            </li>

            <li style={{fontSize:"20px"}} className="nav-item">
              <Link className="nav-link " aria-current="page" to="#"> Portfolio</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

import React from 'react';
import './overview.css';
import { Link } from 'react-router-dom';
import Overviewimg from '../Kotibox img/Main img/png img/webpng.png'

function Overview() {
  return (
    <div className='overview mx-auto'>
      <div className="profile__inner d-flex flex-wrap justify-content-between align-items-center">
        <div className="profile__img">
          <img className='img-fluid' src={Overviewimg} alt="Profile" />
        </div>
        <div className="profile__text ms-2  mt-4 mt-md-0">
          <h1>Are you still concerned about your technology partner?</h1>
          <p>
            Through the development of solutions for businesses, entrepreneurs, industry leaders, and governmental organizations, we bring the digital future closer to people.
          </p>
          <ul className="snslist">
          <Link style={{textDecoration:"none"}} to='/contact'>  <li  className='btn btn-danger mt-2 '>Connect With Our Expert</li> </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Overview;

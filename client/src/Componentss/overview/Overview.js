import React from 'react';
import './overview.css';
import { Link } from 'react-router-dom';

function Overview() {
  return (
    <div className='overview  mx-auto '>
      <div className="profile__inner grid d-flex justify-content-between">
        <div className="profile__img">
          <img className='ms-5' src="https://th.bing.com/th/id/OIP.L_SsZ-1aHhtJPAgFyvmb4gAAAA?w=468&h=532&rs=1&pid=ImgDetMain" alt="Profile" />
        </div>

        <div className="profile__text text-center">
          <h1>Still worried about technology partner for your business?</h1>
          <p className='text-light w-75 text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ullam ipsam, molestias at nobis rem eaque
            in suscipit minima laudantium, qui exercitationem accusantium ducimus magnam voluptatibus quod, ad inventore?
            Ipsa.
          </p>

          <ul className="snslist flex mt-5">
            <li  className='btn btn-outline-light p-3'>Consult with our Tecnical Advisor</li>
         
        
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Overview;

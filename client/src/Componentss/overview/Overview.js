import React from 'react';
import './overview.css';

function Overview() {
  return (
    <div className='overview mx-auto'>
      <div className="profile__inner d-flex justify-content-between align-items-center">
        <div className="profile__img">
          <img className='img-fluid' src='https://www.jploft.com/img/call_disccuss1.webp' alt="Profile" />
        </div>
        <div className="profile__text text-center ms-5">
          <h1>Still worried about technology partner for your business?</h1>
          <p className='text-light w-75 mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ullam ipsam, molestias at nobis rem eaque
            in suscipit minima laudantium, qui exercitationem accusantium ducimus magnam voluptatibus quod, ad inventore?
            Ipsa.
          </p>
          <ul className="snslist d-flex justify-content-center mt-5">
            <li className='btn btn-danger p-3'>Consult with our Technical Advisor</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Overview;

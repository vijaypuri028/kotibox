import React from 'react';
import hadderimg from '../Kotibox img/A Img/hadderimg.png';

function From({ heading, uptext }) {  // Destructure the props to get the heading
  return (
    <>
      <div className="contact10-form-container text-light ">
        <div className="image-section">
          <img src={hadderimg} alt="Contact" />
        </div>
        <form className="form10-section">
          <div className='d-flex align-items-center justify-content-between'>
            <div className='bg-danger flex-grow-1' style={{ height: "2px", marginRight: "10px" }}></div>
            <h6 className='text-danger' style={{ fontWeight: "bold", letterSpacing: "2px", fontSize: "14px", textTransform: "uppercase" }}>
              {uptext}
            </h6>
            <div className='bg-danger flex-grow-1' style={{ height: "2px", marginLeft: "10px" }}></div>
          </div>



          <h2>{heading}</h2> {/* Use the heading prop here */}
          <div className="form-group">
            <input className='text-light' type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <input className='text-light' type="tel" id="mobile" name="mobile" placeholder="Enter your mobile number" required />
          </div>
          <div className="form-group">
            <input className='text-light' type="email" id="email" name="email" placeholder="Enter your email address" required />
          </div>
          <div className="form-group">
            <input className='text-light' type="text" id="subject" name="subject" placeholder="Enter subject" required />
          </div>
          <div className="form-group">
            <textarea className='text-light' id="message" name="message" rows="4" placeholder="Type your message here..." required></textarea>
          </div>
          <button type="submit" className="submit-button btn btn-danger">Submit</button>
        </form>
      </div>
    </>
  );
}

export default From;

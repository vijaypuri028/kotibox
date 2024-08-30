import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './client.css'; // Import your CSS file here

const Client = () => {
  return (
    <section className="testimonial text-center">
      <div className="container">
        <div className="heading white-heading">Words From Clients That Fuels Us!</div>
        <p className='text-light'>We believe in empowering our relationships with clear communication.
        And that's where the magic happens!</p>
        <div id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-bs-ride="carousel" data-bs-pause="hover" data-bs-interval="5000" data-bs-duration="2000">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="testimonial4_slide">
                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-circle img-responsive" alt="Client 1" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                <h4>Client 1</h4>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial4_slide">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-circle img-responsive" alt="Client 2" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                <h4>Client 2</h4>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial4_slide">
                <img src="https://images.pexels.com/photos/27928257/pexels-photo-27928257/free-photo-of-portrait-of-a-young-woman-with-wavy-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-circle img-responsive" alt="Client 3" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                <h4>Client 3</h4>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#testimonial4" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#testimonial4" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Client;

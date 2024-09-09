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
                {/* <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-circle img-responsive" alt="Client 1" /> */}
                <p>The team at Kotibox Global Technologies was incredibly responsive and communicative throughout the entire process. They took the time to understand my vision and provided regular updates, ensuring that I was always in the loop.

                  Expertise: Their technical skills are top-notch. They not only delivered a visually stunning website but also ensured that it was highly functional and user-friendly. They made excellent recommendations on design and functionality that enhanced the overall user experience.</p>
                <h4>Sylvie</h4>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial4_slide">
                {/* <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-circle img-responsive" alt="Client 2" /> */}
                <p>The quality of the final product was outstanding. The app is visually appealing, performs seamlessly across different devices, and is free from bugs. Their attention to detail ensured that the app was not only functional but also engaging and intuitive for users. Kotiboc team adhered to the project timeline impressively. Despite the complexity of the app, they delivered on schedule, which was crucial for our launch plans. Their efficient project management and dedication to deadlines were highly commendable.</p>
                <h4>Harrison</h4>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial4_slide">
                {/* <img src="https://images.pexels.com/photos/27928257/pexels-photo-27928257/free-photo-of-portrait-of-a-young-woman-with-wavy-hair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-circle img-responsive" alt="Client 3" /> */}
                <p>Kotibox Teamdemonstrated a deep understanding of ERP systems and tailored their approach to meet our specific needs. Their technical expertise was evident in the robust and scalable solution they provided. They not only addressed our current requirements but also considered future growth and adaptability.</p>
                <h4>harry bidwell</h4>
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

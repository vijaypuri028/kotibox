import React, { useEffect } from 'react';
import $ from 'jquery';
import './client.css';
import img1 from '../Kotibox img/png img/man 2.jpg';
import img2 from '../Kotibox img/png img/office 1.png';
import img3 from '../Kotibox img/png img/young-beautiful-brunette-businesswoman-smiling-pointing-finger-side.png';

export default function Client() {
  useEffect(() => {
    $(".client-single").on("click", function (event) {
      event.preventDefault();
      const active = $(this).hasClass("active");
      const parent = $(this).closest(".testi-wrap");

      if (!active) {
        const activeBlock = parent.find(".client-single.active");
        const currentPos = $(this).attr("data-position");
        const newPos = activeBlock.attr("data-position");

        activeBlock
          .removeClass("active")
          .removeClass(newPos)
          .addClass("inactive")
          .addClass(currentPos)
          .attr("data-position", currentPos);

        $(this)
          .addClass("active")
          .removeClass("inactive")
          .removeClass(currentPos)
          .addClass(newPos)
          .attr("data-position", newPos);
      }
    });
  }, []);

  const testimonials = [
    {
      img: img1,
      rating: 5, 
      text: "Great service!",
      name: "John Doe",
      
    },
    {
      img: img2,
      rating: 4, 
      text: "Outstanding support  ",
      name: "Jane Smith",
     
    },
    {
      img: img3,
      rating: 5, 
      text: "Highly recommend!",
      name: "Michael Brown",
     
    },
  ];

  return (
    <section className="reviews">
      <div className="reviews-title">
        <p>Reviews</p>
      </div>
      <div className="reviews-row row-first">
        {testimonials.map((testimonial, index) => (
          <div className="reviews-card" key={index}>
            <div className="img-container">
              <img
                className="card-img1"
                src={testimonial.img}
                alt={testimonial.name}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%', // Makes the image round
                  objectFit: 'cover',  // Ensures the image covers the circle
                }}
              />
                <div className="card-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="gold" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12.627l-4.577 2.402 1.187-5.026L0 6.273l5.108-.442L8 1.027 9.892 5.831 15 6.273l-4.61 3.73 1.187 5.026L8 12.627z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="card-text">
              <div className="card-title">
                <p>“{testimonial.text}”</p>
              </div>
              <div className="card-author">
                <svg width="9" height="2" viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.526123 1.13867H8.25949" stroke="black" strokeWidth="0.822209" />
                </svg>
                <p>{testimonial.name}</p>
              </div>
            
            </div>
          </div>
        ))}
      </div>
      <div className="reviews-row row-first">
        {testimonials.map((testimonial, index) => (
          <div className="reviews-card" key={index}>
            <div className="img-container">
              <img
                className="card-img1"
                src={testimonial.img}
                alt={testimonial.name}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%', // Makes the image round
                  objectFit: 'cover',  // Ensures the image covers the circle
                }}
              />
                <div className="card-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="gold" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12.627l-4.577 2.402 1.187-5.026L0 6.273l5.108-.442L8 1.027 9.892 5.831 15 6.273l-4.61 3.73 1.187 5.026L8 12.627z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="card-text">
              <div className="card-title">
                <p>“{testimonial.text}”</p>
              </div>
              <div className="card-author">
                <svg width="9" height="2" viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.526123 1.13867H8.25949" stroke="black" strokeWidth="0.822209" />
                </svg>
                <p>{testimonial.name}</p>
              </div>
            
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

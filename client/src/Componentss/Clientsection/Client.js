import React, { useEffect } from 'react';
import $ from 'jquery';
import './client.css';

const testimonials = [
  {
    img: "https://tse3.mm.bing.net/th?id=OIP.h0hPZzAziPf3v-srHQTdWQHaHa&pid=Api&P=0&h=180",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    name: "Manjay Gupta"
  },
  {
    img: "https://www.lensmen.ie/wp-content/uploads/2015/02/Profile-Portrait-Photographer-in-Dublin-Ireland..jpg",
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.",
    name: "Sarah Smith"
  },
  {
    img: "https://tse4.mm.bing.net/th?id=OIP.BzMS3A4hVqzKe2jsV7rPFwHaJ4&pid=Api&P=0&h=180",
    text: "Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    name: "John Doe"
  },
  {
    img: "https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    name: "Emily Johnson"
  },
  {
    img: "https://i.pinimg.com/originals/8b/96/25/8b96256ee406a5c929f8808984dbed59.jpg",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nemo enim ipsam voluptatem quia.",
    name: "Michael Brown"
  },
  {
    img: "https://i.pinimg.com/originals/3e/37/a1/3e37a1bd45c70cb972bf95105ba4adc6.jpg",
    text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.",
    name: "Jessica White"
  },
  {
    img: "https://tse1.mm.bing.net/th?id=OIP.auqpQeIbgN-Hwb09Aa49YQHaFj&pid=Api&P=0&h=180",
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat.",
    name: "David Wilson"
  }
];

export default function Client() {
  useEffect(() => {
    $(".client-single").on("click", function (event) {
      event.preventDefault();
      const active = $(this).hasClass("active");
      const parent = $(this).parents(".testi-wrap");

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

  return (
    <section id="testimonial-area">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="section-heading text-center text-light">
              <h5>Testimonial Design</h5>
              <h2>A Word From Our Customers</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        <div className="testi-wrap mt-1">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`client-single ${index === 0 ? 'active position-1' : `inactive position-${index + 1}`}`} data-position={`position-${index + 1}`}>
              <div className="client-img">
                <img src={testimonial.img} alt={testimonial.name} />
              </div>
              <div className="client-comment">
                <h3 className='text-light '>{testimonial.text}</h3>
                <span><i className="fa fa-quote-left  "></i></span>
              </div>
              <div className="client-info ">
                <p>{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

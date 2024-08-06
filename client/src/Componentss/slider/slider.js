import React, { useEffect } from 'react';
import './slider.css';
import { Link } from 'react-router-dom';

export default function Slider() {
  useEffect(() => {
    const COMPONENT_SELECTOR = '.carousel__wrapper';
    const CONTROLS_SELECTOR = '.carousel__controls';
    const CONTENT_SELECTOR = '.carousel__content';

    const components = document.querySelectorAll(COMPONENT_SELECTOR);

    for (let i = 0; i < components.length; i++) {
      const component = components[i];
      const content = component.querySelector(CONTENT_SELECTOR);
      let x = 0;
      let mx = 0;
      const maxScrollWidth =
        content.scrollWidth - content.clientWidth / 2 - content.clientWidth / 2;
      const nextButton = component.querySelector('.arrow-next');
      const prevButton = component.querySelector('.arrow-prev');

      if (maxScrollWidth !== 0) {
        component.classList.add('has-arrows');
      }

      if (nextButton) {
        nextButton.addEventListener('click', function (event) {
          event.preventDefault();
          x = content.clientWidth / 2 + content.scrollLeft;
          content.scroll({
            left: x,
            behavior: 'smooth',
          });
        });
      }

      if (prevButton) {
        prevButton.addEventListener('click', function (event) {
          event.preventDefault();
          x = content.clientWidth / 2 - content.scrollLeft;
          content.scroll({
            left: -x,
            behavior: 'smooth',
          });
        });
      }

      const mousemoveHandler = (e) => {
        const mx2 = e.pageX - content.offsetLeft;
        if (mx) {
          content.scrollLeft = content.sx + mx - mx2;
        }
      };

      const mousedownHandler = (e) => {
        content.sx = content.scrollLeft;
        mx = e.pageX - content.offsetLeft;
        content.classList.add('dragging');
      };

      const scrollHandler = () => {
        toggleArrows();
      };

      const toggleArrows = () => {
        if (content.scrollLeft > maxScrollWidth - 10) {
          nextButton.classList.add('disabled');
        } else if (content.scrollLeft < 10) {
          prevButton.classList.add('disabled');
        } else {
          nextButton.classList.remove('disabled');
          prevButton.classList.remove('disabled');
        }
      };

      const mouseupHandler = () => {
        mx = 0;
        content.classList.remove('dragging');
      };

      content.addEventListener('mousemove', mousemoveHandler);
      content.addEventListener('mousedown', mousedownHandler);
      if (component.querySelector(CONTROLS_SELECTOR) !== undefined) {
        content.addEventListener('scroll', scrollHandler);
      }
      content.addEventListener('mouseup', mouseupHandler);
      content.addEventListener('mouseleave', mouseupHandler);
    }
  }, []);

  let i = 1;
  let n = 1;

  return (
    <div className="container">
      <div className="carousel">
        <div className="carousel__header">
          <h2 className="carousel__headline text-light">About</h2>
        </div>
        {Array.from({ length: 2 }).map(() => (
          <div className="carousel__wrapper" key={i}>
            <div className="carousel__controls">
              <button style={{position:"absolute",left:"-1%"}} className="carousel__arrow disabled arrow-prev  "></button>
              <button style={{position:"absolute",right:"-100%",  }} className="carousel__arrow arrow-next"></button>
            </div> 
            <ul className="carousel__content">
              {Array.from({ length: 20 }).map(() => (
                <li className="carousel__item" key={n}>
                  <Link to="#">
                    <img
                      className="carousel__item__image"
                      src={`https://picsum.photos/id/${i}${n}/500/300`}
                      alt=""
                    />
                    <div className="carousel__description">
                      <h3 className="carousel__title">Amazing Title {n++}</h3>
                      <span className="carousel__subtitle">
                        Some subtitle goes here
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {n = 1}
      </div>
    </div>
  );
}

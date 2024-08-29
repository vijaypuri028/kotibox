import React, { useEffect } from 'react';
import './slider.css';
import { Link } from 'react-router-dom';

export default function Slider() {
  useEffect(() => {
    const COMPONENT_SELECTOR = '.carousel__wrapper';
    const CONTENT_SELECTOR = '.carousel__content';

    const components = document.querySelectorAll(COMPONENT_SELECTOR);

    components.forEach((component) => {
      const content = component.querySelector(CONTENT_SELECTOR);
      let x = 0;
      const maxScrollWidth =
        content.scrollWidth - content.clientWidth;

      const nextButton = component.querySelector('.arrow-next');
      const prevButton = component.querySelector('.arrow-prev');

      const scrollContent = (direction) => {
        const scrollAmount = content.clientWidth;
        content.scrollBy({
          left: direction === 'next' ? scrollAmount : -scrollAmount,
          behavior: 'smooth',
        });
      };

      nextButton?.addEventListener('click', () => scrollContent('next'));
      prevButton?.addEventListener('click', () => scrollContent('prev'));

      content.addEventListener('scroll', () => {
        if (content.scrollLeft >= maxScrollWidth - 10) {
          nextButton?.classList.add('disabled');
        } else if (content.scrollLeft <= 10) {
          prevButton?.classList.add('disabled');
        } else {
          nextButton?.classList.remove('disabled');
          prevButton?.classList.remove('disabled');
        }
      });
    });
  }, []);

  return (
    <div className="container">
      <div className="carousel">
        <div className="carousel__header">
          <h2 className="carousel__headline text-light">About</h2>
        </div>
        <div className="carousel__wrapper">
          <div className="carousel__controls">
            <button className="carousel__arrow arrow-prev disabled"></button>
            <button className="carousel__arrow arrow-next"></button>
          </div>
          <ul className="carousel__content">
            {Array.from({ length: 10 }).map((_, index) => (
              <li className="carousel__item" key={index}>
                <Link to="#">
                  <img
                    className="carousel__item__image"
                    src={`https://picsum.photos/id/${index + 1}/500/300`}
                    alt=""
                  />
                  <div className="carousel__description">
                    <h3 className="carousel__title text-light ">Amazing Title {index + 1}</h3>
                    <span className="carousel__subtitle">
                      Some subtitle goes here
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

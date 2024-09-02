import React, { useEffect, useRef } from 'react';
import './blog.css';

function Blog() {
  const articleRefs = useRef([]);

  useEffect(() => {
    const articles = articleRefs.current;

    articles.forEach((i) => {
      const handleMouseMove = (e) => {
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        i.querySelector(".overlay").style.setProperty(
          "background-image",
          `radial-gradient(circle at ${(mouseX * 100) / -i.offsetWidth + 100}% ${(mouseY * 100) / -i.offsetHeight + 100
          }%, rgba(0, 0, 0, 0.2) 25%, rgba(0, 0, 0, 0.33) 50%)`
        );
        i.style.setProperty(
          "transform",
          `rotateY(${(((mouseX * 100) / i.offsetWidth - 50) / 100) * 2}deg) rotateX(${(((mouseY * 100) / i.offsetHeight - 50) / 100) * 2
          }deg)`
        );
      };

      const handleMouseLeave = () => {
        i.style.setProperty("transform", `rotateX(0deg) rotateY(0deg)`);
        i.querySelector(".overlay").style.setProperty(
          "background-image",
          `radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.3) 50%)`
        );
      };

      i.addEventListener("mousemove", handleMouseMove);
      i.addEventListener("mouseleave", handleMouseLeave);


      return () => {
        i.removeEventListener("mousemove", handleMouseMove);
        i.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <>
      <div className='text-center text-light pt-5  ' >
        <h1>What's Up in the Tech World?</h1>
        <p>Always keep abreast with the latest developments, theories, and news in contemporary tech.</p>
      </div>
      <div className="wrap mx-auto ">
        {[
          {
            title: "Juno Solves 39-Year Old Mystery of Jupiter Lightning",
            cat: "Humans in Space",
            image:
              "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            title: "Astronomers Spot a Distant and Lonely Neutron Star",
            cat: "Moon to Mars",
            image:
              "https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            title:
              "Solar flares and eruptions can impact radio communications, electric power grids, and navigation signals and pose risks to spacecraft and astronauts.",
            cat: "Burst of Energy",
            image:
              "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            title:
              "Astronauts Safely in Orbit Following Launch to International Space Station",
            cat: "Flight",
            image:
              "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            title: "NASA to Host Live Discussion on New Mars Science Results",
            cat: "Humans in Space",
            image:
              "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            title: "NASA Finds Ancient Organic Material, Mysterious Methane on Mars",
            cat: "Moon to Mars",
            image:
              "https://images.pexels.com/photos/8528742/pexels-photo-8528742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
        ].map((article, index) => (
          <div
            key={index}
            className="article"
            ref={(el) => (articleRefs.current[index] = el)}
            style={{ backgroundImage: `url(${article.image})` }}
          >
            <div className="overlay"></div>
            <div className="wrap-cat">
              <span className="cat" data-hover={article.cat}>
                {article.cat}
              </span>
            </div>
            <h1>
              <span>{article.title}</span>
            </h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blog;

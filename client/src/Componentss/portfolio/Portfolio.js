import React from 'react';
import './Portfolio.css';
import Navbar from '../Navbars/Navbar';
import Footer from '../footer/footer';
import Blog from '../blog/blog';
import Button from '../button/Button';
import Webservicemain from '../Webservicemain.js/Webservicemain'; // Adjust the path if needed
import imgSrc from "../Kotibox img/Main img/Game development.jpg";
import { Link } from 'react-router-dom';

export default function Portfolio() {
    const mainText = "WEBSITE DEVELOPMENT";
    const secondText = "Your Partner";
    const textArray = ["laravel", "CodeIgniter", "WordPress", "WooCommerce", "Magento"];

    return (
        <>
            <Navbar />
            <Webservicemain imgSrc={imgSrc} mainText={mainText} secondText={secondText} textArray={textArray} />

            <div className="block_info text-light text-center mt-5 ">
                <h1 className="title">Ivanna Sakhno</h1>
                <div className="description">
                    <p>Ivanna Sakhno is a Ukrainian-American actress known for her roles in both Ukrainian and Hollywood films.</p>
                    <p>Born on November 14, 1997, in Kyiv, Ukraine, she moved to the United States at a young age to pursue a career in acting.</p>
                    <p>Sakhno has gained international recognition through her performances in several notable projects.</p>
                </div>
                <a className="subtitle" href="https://www.imdb.com/name/nm4854961/" target="_blank" rel="noopener noreferrer">
                    <span className="inner_subtitle">IMDb</span>
                </a>
                <ul className="list">
                    {[
                        { src: "https://www.youtube.com/embed/6MsM6S53lLQ" , imgSrc: "https://github.com/BlackStar1991/Ivanna-Sakhno/blob/main/img/movies/Ahsoka.jpg?raw=true", alt: "Star Wars Ahsoka poster" },
                        { src: "https://www.youtube.com/embed/8BAhwgjMvnM?showinfo=0&iv_load_policy=3&control=0", imgSrc: "https://github.com/BlackStar1991/Ivanna-Sakhno/blob/main/img/movies/Pacific-Rim-Uprising.jpg?raw=true", alt: "Pacific Rim Uprising poster" },
                        { src: "https://www.youtube.com/embed/6U1Vl0H2tI0?showinfo=0&iv_load_policy=3&control=0", imgSrc: "https://github.com/BlackStar1991/Ivanna-Sakhno/blob/main/img/movies/Let-It-Snow.jpg?raw=true", alt: "Let It Snow poster" },
                        { src: "https://www.youtube.com/embed/CXkUaaVrB_s?showinfo=0&iv_load_policy=3&control=0", imgSrc: "https://github.com/BlackStar1991/Ivanna-Sakhno/blob/main/img/movies/The-Spy-Who-Dumped-Me.jpg?raw=true", alt: "The Spy Who Dumped Me poster" },
                        { src: "https://www.youtube.com/embed/ZALZLLpUkQw?showinfo=0&iv_load_policy=3", imgSrc: "https://github.com/BlackStar1991/Ivanna-Sakhno/blob/main/img/movies/High-Fidelity.jpg?raw=true", alt: "High Fidelity poster" },
                        { src: "https://www.youtube.com/embed/Xxxf2K69EYo?showinfo=0&iv_load_policy=3&control=0", imgSrc: "https://github.com/BlackStar1991/Ivanna-Sakhno/blob/main/img/movies/The-Reunion.jpg?raw=true", alt: "The Reunion poster" },
                        { src: "https://www.youtube.com/embed/BRb4U99OU80?showinfo=0&iv_load_policy=3&control=0", imgSrc: "https://github.com/BlackStar1991/Ivanna-Sakhno/blob/main/img/movies/M3GAN.jpg?raw=true", alt: "M3GAN 2 poster" }
                    ].map((item, index) => (
                        <li key={index} className="item">
                            <input className="input_radio" type="radio" name="block" />
                            <div className="front_side">
                                <iframe className="iframe" loading="lazy" src={item.src}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                            <div className="back_side">
                                <img className="poster" src={item.imgSrc} alt={item.alt} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="block_picture">
                {/* <img className="person" src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Ivanna Sakhno" /> */}
            </div>

            <section className="work section">
    <h2 style={{ fontSize: "30px" }} className="section__title text-light">
        My Most <br />
        Recent Works
    </h2>
    <div className="work__container container grid text-light">
        {[...Array(6)].map((_, index) => (
            <article key={index} className="work__card">
                <Link to="#" target="blank" className="work_link">
                    <img
                        src="https://images.unsplash.com/photo-1616865609199-abb1465abf5c?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI3NzQwNjN8&ixlib=rb-4.0.3&q=85"
                        alt="Work 1"
                        className="work__img"
                    />
                    <i className="ri-arrow-right-circle-line work__icon"></i>
                </Link>
                <h2 className="work__title">Creative Website</h2>
                <span className="work__subtitle">Website Design</span>
            </article>
        ))}
    </div>
</section>


            <Button />
            <Blog/>
            <Footer />
        </>
    );
}
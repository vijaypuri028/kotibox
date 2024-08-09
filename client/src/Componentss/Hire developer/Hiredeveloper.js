import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import './hiredeveloper.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hiredeveloper() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div style={{backgroundColor:"black"}} className="team-boxed  ">
      <div className="container">
        <div className="intro">
          <h2 className="text-center">Hire Developer</h2>
          <p className="f-5">
            Your Technical Mastermind Is Here. Let's bring your idea to life digitally with the assistance of top developers at KOTIBOX.
          </p>
        </div>
        <Slider {...settings}>
          <div className="row people d-flex justify-content-between ms-1">
            <div className="col-md-6 col-lg-4 item ">
              <div style={{color:"white", backgroundColor:"#221f1d"}} className="box  ">
                <img
                  className="rounded-circle"
                  src="https://www.jploft.com/img/node_js_hire.svg"
                  alt="NODE DEVELOPER"
                />
                <h3 className="name">NODE DEVELOPER</h3>
                <p className="title">Developer - Blogger</p>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam
                </p>
                <div className="social">
                  <Link to="#"><i className="fa fa-facebook-official"></i></Link>
                  <Link to="#"><i className="fa fa-twitter"></i></Link>
                  <Link to="#"><i className="fa fa-instagram"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <div style={{color:"white", backgroundColor:"#221f1d"}} className="box ">
                <img
                  className="rounded-circle"
                  src="https://www.jploft.com/img/flutter_hire.svg"
                  alt="HIRE FLUTTER DEVELOPER"
                />
                <h3 className="name">HIRE FLUTTER DEVELOPER</h3>
                <p className="title">Developer - Blogger</p>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in
                </p>
                <div className="social">
                  <Link to="#"><i className="fa fa-facebook-official"></i></Link>
                  <Link to="#"><i className="fa fa-twitter"></i></Link>
                  <Link to="#"><i className="fa fa-instagram"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <div style={{color:"white", backgroundColor:"#221f1d"}} className="box ">
                <img
                  className="rounded-circle"
                  src="https://www.jploft.com/img/ios_hire.svg"
                  alt="HIRE IOS DEVELOPER"
                />
                <h3 className="name">HIRE IOS DEVELOPER</h3>
                <p className="title">Developer - Blogger</p>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam
                </p>
                <div className="social">
                  <Link to="#"><i className="fa fa-facebook-official"></i></Link>
                  <Link to="#"><i className="fa fa-twitter"></i></Link>
                  <Link to="#"><i className="fa fa-instagram"></i></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row people  d-flex justify-content-between">
            <div className="col-md-6 col-lg-4 item">
              <div style={{color:"white", backgroundColor:"#221f1d"}} className="box  ">
                <img
                  className="rounded-circle"
                  src="https://www.jploft.com/img/reactnative_hire.svg"
                  alt="REACT DEVELOPER"
                />
                <h3 className="name">REACT DEVELOPER</h3>
                <p className="title">Developer - Blogger</p>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam
                </p>
                <div className="social">
                  <Link to="#"><i className="fa fa-facebook-official"></i></Link>
                  <Link to="#"><i className="fa fa-twitter"></i></Link>
                  <Link to="#"><i className="fa fa-instagram"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <div style={{color:"white", backgroundColor:"#221f1d"}} className="box ">
                <img
                  className="rounded-circle"
                  src="https://th.bing.com/th/id/OIP.EDJ9xoErBbZqK2tExVoJfAHaHY?rs=1&pid=ImgDetMain"
                  alt="PYTHON DEVELOPER"
                  style={{ width: '110px', height: '110px' }}
                  
                />
                <h3 className="name mt-5">PYTHON DEVELOPER</h3>
                <p className="title">Developer - Blogger</p>
                <p className="description mt-5 ">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in
                </p>
                <div className="social">
                  <Link to="#"><i className="fa fa-facebook-official"></i></Link>
                  <Link to="#"><i className="fa fa-twitter"></i></Link>
                  <Link to="#"><i className="fa fa-instagram"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <div style={{color:"white", backgroundColor:"#221f1d"}} className="box ">
                <img
                  className="rounded-circle"
                  src="https://th.bing.com/th?id=OIP.FH2Sq5c4b0fgaE-sGQEqqwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                  alt="JAVA DEVELOPER"
                  style={{ width: '110px', height: '110px' }}
                />
                <h3 className="name mt-5">JAVA DEVELOPER</h3>
                <p className="title">Developer - Blogger</p>
                <p className="description mt-5 ">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam
                </p>
                <div className="social">
                  <Link to="#"><i className="fa fa-facebook-official"></i></Link>
                  <Link to="#"><i className="fa fa-twitter"></i></Link>
                  <Link to="#"><i className="fa fa-instagram"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
     className={`${className} custom-arrow custom-next-arrow`}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
     className={`${className} custom-arrow custom-prev-arrow`}
      onClick={onClick}
    />
  );
}


export default Hiredeveloper;

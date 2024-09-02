import React from 'react';
import './Hirecard.css'; // External CSS

export default function Hirecardsection({
    imgSrc,
    mainText1,
    mainTextp,
    sectionHeading,
    sectionDescription,
    imgSrc1,
    imgSrc2,
    imgSrc3,
    cardTitle1,
    cardDescription1,
    cardTitle2,
    cardDescription2,
    cardTitle3,
    cardDescription3
}) {
    return (
        <>
            <div className="intro-section">
                <div className="container intro-content">
                    <img src={imgSrc} alt="Main" className="intro-image" />
                    <div className="intro-text">
                        <h2>{mainText1}</h2>
                        <p>{mainTextp}</p>
                        <button className="mx-auto action-button">Click Me</button>
                    </div>
                </div>
            </div>
            <div className="hirecard-section text-center">
                <h2 className="p-2 mt-5 text-light">{sectionHeading}</h2>
                <p className="p-2 text-light">{sectionDescription}</p>

                <div className="card-section mx-auto row">
                    {/* Card 1 */}
                    <div className="hire-card col-lg-3 col-md-6 col-sm-12">
                        <img className="p-1 pb-3" src={imgSrc1} alt="Web Developer" />
                        <h3>{cardTitle1}</h3>
                        <p>{cardDescription1}</p>
                        <button>Hire Now</button>
                    </div>
                    {/* Card 2 */}
                    <div className="hire-card col-lg-3 col-md-6 col-sm-12">
                        <img className="p-1 pb-3" src={imgSrc2} alt="UI/UX Designer" />
                        <h3>{cardTitle2}</h3>
                        <p>{cardDescription2}</p>
                        <button>Hire Now</button>
                    </div>
                    {/* Card 3 */}
                    <div className="hire-card col-lg-3 col-md-6 col-sm-12">
                        <img className="p-1 pb-3" src={imgSrc3} alt="Full Stack Developer" />
                        <h3>{cardTitle3}</h3>
                        <p>{cardDescription3}</p>
                        <button>Hire Now</button>
                    </div>
                </div>

                <div className="other-sections pt-5 pb-5">
                    <h2>Job Opportunities</h2>
                    <p className="p-2 text-light">
                        Expert in React, Node.js, and MongoDB. Expert in React, Node.js, and MongoDB. Expert in React, Node.js, and MongoDB. Expert in React, Node.js, and MongoDB. Expert in React, Node.js, and MongoDB. Expert in React, Node.js, and MongoDB.
                    </p>

                    <div className="job-options row">
                        <div className="job-option col-lg-3 col-md-6 col-sm-12">
                            <img className="job-img" src="http://upcharnuskhe.com/wp-content/uploads/2016/04/bddnn-300x300.jpg" alt="Part-Time Jobs" />
                            <h3>Part-Time Jobs</h3>
                            <p>Flexible working hours and exciting projects. Join our team and grow with us full-time.</p>
                            <button>Apply Now</button>
                        </div>

                        <div className="job-option col-lg-3 col-md-6 col-sm-12">
                            <img className="job-img" src="http://upcharnuskhe.com/wp-content/uploads/2016/04/bddnn-300x300.jpg" alt="Part-Time Jobs" />
                            <h3>Part-Time Jobs</h3>
                            <p>Flexible working hours and exciting projects. Join our team and grow with us full-time.</p>
                            <button>Apply Now</button>
                        </div>

                        <div className="job-option col-lg-3 col-md-6 col-sm-12">
                            <img className="job-img" src="http://upcharnuskhe.com/wp-content/uploads/2016/04/bddnn-300x300.jpg" alt="Hourly Jobs" />
                            <h3>Hourly Jobs</h3>
                            <p>Join our team and grow with us full-time. Join our team and grow with us full-time.</p>
                            <button>Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
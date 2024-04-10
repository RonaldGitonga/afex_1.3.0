'use client'
import React from 'react'
import Link from 'next/link';
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button" className={ `slick-next ${className}`} style={{ ...style }} onClick={onClick} ><i className="fal fa-angle-right"></i></button>
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
    <button type="button" className={ `slick-prev ${className}`} style={{ ...style }} onClick={onClick} ><i className="fal fa-angle-left"></i></button>
      
    );
}

function Courses() {
    const courses = [
        {
            category: 'SAT',
            title: 'SATs',
            description: 'Unlock your potential with our SAT Prep Classes. Tailored strategies, expert instruction, and comprehensive resources are designed to elevate your scores and confidence. Enroll Now and start your journey to SAT success with AFEXHub.',
            link: '/Courses/SAT',
            img: 'assets/img/courses/SATs.jpg',
        },
        {
            category: 'IELTS/TOEFL',
            title: 'IELTS/TOEFL',
            description: " Essential for students and professionals targeting English-speaking countries.We sharpen your language skills for university admissions, visa applications, and work permits.Our personalized study plans and expert feedback prepare you for these language proficiency tests.",
            link: '/Courses/IELTS-TOEFL',
            img: 'assets/img/courses/IELTS.jpg',
        },
   
     
        {
            category: 'GRE/GMAT ',
            title: 'GRE/GMAT test prep',
            description: "Master the GRE/GMAT with our specialized prep classes. Our expert-led courses offer personalized strategies and up-to-date resources to ensure you excel. Ready to take the first step towards your graduate education goals?",
            link: '/Courses/GRE&GMAT',
            img: 'assets/img/courses/GMAT.jpg',
        },
      

   
    
    ];

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: <SamplePrevArrow/>,
        nextArrow: <SampleNextArrow/>,
        speed: 1000,
        slidesToShow: 2.4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
             
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 0.7
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                }
            }
        ]
    };

    return (
        <>
            <section className="courses pt-120 pb-120 p-relative fix">
                <div className="animations-01">
                    <img src="assets/img/bg/an-img-03.png" alt="an-img-01" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 p-relative">
                            <div className="section-title center-align mb-50 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s" >
                                <h5>
                                    {/* <i className="fal fa-graduation-cap" /> Our Courses */}
                                </h5>
                                <h2>Our Services</h2>
                            </div>
                        </div>
                    </div>
                    <Slider className="row class-active" {...settings}>
                        {courses.map((course, index) => (
                            <div key={index} className="col-lg-4 col-md-6 ">
                                <div className="courses-item mb-30 hover-zoomin">
                                    <div className="thumb fix">
                                        <Link href={course.link}>
                                            <img src={course.img} alt="contact-bg-an-01" />
                                        </Link>
                                    </div>
                                    <div className="courses-content">
                                        <div className="cat">
                                            <i className="fal fa-graduation-cap" /> {course.category}
                                        </div>
                                        <h3>
                                            <Link href={course.link}>{course.title}</Link>
                                        </h3>
                                        <p>
                                            {course.description}
                                        </p>
                                        <Link href={course.link} className="readmore">
                                            Read More <i className="fal fa-long-arrow-right" />
                                        </Link>
                                    </div>
                                    <div className="icon">
                                        <img src="assets/img/icon/cou-icon.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Courses

import React from 'react'
import Link from 'next/link'
//aimport { fetchfrontCourses } from "../../../libs/data";

const First=()=>{
  //get all courses
    
  const courses=[
  {
    imgSrc: 'assets/img/courses/SATs.jpg',
    category: 'SATs',
    title: 'SAT Test Prep',
    description:'Unlock your potential with our SAT Prep Classes. Tailored strategies, expert instruction, and comprehensive resources are designed to elevate your scores and confidence. Enroll Now and start your journey to SAT success with AFEXHub.'
     ,
    page:'/Courses/SAT'
    },
  {
    imgSrc: 'assets/img/courses/IELTS.jpg',
    category: 'IELTS/TOEFL',
    title: 'IELTS/TOEFL Prep',
    description:"Navigate your global ambitions with AFEXHub's IELTS & TOEFL prep programs. Essential for students and professionals targeting English-speaking countries, our courses sharpen your language skills for university admissions, visa applications, and work permits."
    
     ,page:'/Courses/IELTS-TOEFL'
    },
  {
    imgSrc: 'assets/img/courses/GMAT.jpg',
    category: 'GRE/GMAT',
    title: 'GRE/GMAT Test Prep',
    description:"Master the GRE/GMAT with AfexHub's specialized prep classes. Our expert-led courses offer personalized strategies and up-to-date resources to ensure you excel. Ready to take the first step towards your graduate education goals? Enroll Now."
      
    ,page:'/Courses/GRE&GMAT'
    },
  ]
  return (
    <>
      <section
        className="shop-area pt-120 pb-120 p-relative "
        data-animation="fadeInUp animated"
        data-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <h6 className="mt-20 mb-50">Showing 1–3 of 3 results</h6>
            </div>
            <div className="col-lg-6 col-sm-6 text-right">
              <select name="orderby" className="orderby" aria-label="Shop order">
                <option value="menu_order">Default sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="date">Sort by latest</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
            </div>
          </div>
          <div className="row align-items-center rounded-sm">
            {courses.map((course,index) => (
              <div className="col-lg-4 col-md-6 round-4" key={index}>
                <div className="courses-item mb-30 hover-zoomin">
                  <div className="thumb fix">
                    <Link href={course.page}>
                      <img src={course.imgSrc} alt="course-img" />
                    </Link>
                  </div>
                  <div className="courses-content">
                    <div className="cat">
                      <i className="fal fa-graduation-cap" /> {course.price}
                    </div>
                    <h3>
                      <Link href={course.page}>{course.title}</Link>
                    </h3>
                    <p>{course.description}</p>
                  <Link href={course.page} className="readmore">
                      Read More <i className="fal fa-long-arrow-right" />
                    </Link>
                  </div>
                  <div className="icon">
                    <img src="assets/img/icon/cou-icon.png" alt="icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </>
  );
}

export default First;
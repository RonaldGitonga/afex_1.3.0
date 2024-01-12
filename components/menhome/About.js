'use client'
import React from 'react'
import Link from 'next/link'
import { Reveal } from '../Reveal/Reveal'

function About() {
  return (
    <>
       <section className="about-area about-p pt-50 pb-50 p-relative fix" style={{ background: "#fff" }} >
            <div className="animations-02">
                <img src="assets/img/bg/an-img-02.jpg" alt="contact-bg-an-01" />
            </div>

            <div className="container">
                <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s" >
                    <img src="assets/img/afex-pics/KARIMI POTRAIT.jpg" alt="img" className='rounded-4' />
                    <div className="about-text second-about">
                       
                        <span>
                         15<sub>+</sub>
                        </span>
                        <Reveal>
                        <p>Years of Experience</p>
                        </Reveal>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="about-content s-about-content pl-15 wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s" >
                    <div className="about-title second-title pb-25">
                        <h5>
                        <i className="fal fa-graduation-cap" /> About Our Campus
                        </h5>
                        <h2>About Us</h2>
                    </div>
                    <Reveal>
                    <p className="text-black">
                    Discover your path to global education with AFEX Hub. 
                    Specializing in SAT, GMAT, and IELTS preparation, we 
                    also guide aspiring students towards prestigious US 
                    and Canadian universities. Our focused training and expert
                    guidance are designed to boost your exam success and simplify
                    your international academic journey.
                    </p>
                    </Reveal>
                    
                    <div className="about-content2">
                        <div className="row">
                        <div className="col-md-12">
                            <ul className="green2">
                            <li>
                                <div className="abcontent">
                                <div className="ano">
                            
                                    < span style={{fontWeight:'bold',fontFamily:'Montserrat'}}>15+</span>
                              
                                </div>{" "}
                                <div className="text">
                                    <Reveal>
                                    <h3 style={{color:'black'}}>Years Experience</h3>
                                    </Reveal>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="abcontent">
                                <div className="ano">
                                    <span style={{fontWeight:'bold',fontFamily:'Montserrat'}}>82</span>
                                </div>{" "}
                                <div className="text">
                                    <Reveal>
                                    <h3 style={{color:'black'}}>Annual U.S Admissions</h3>
                                    </Reveal>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="slider-btn mt-20">
                        <Link href="/About" className="btn ss-btn smooth-scroll" style={{color:'white'}}>
                        Read More <i className="fal fa-long-arrow-right" />
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
       </section>
    </>
  )
}

export default About
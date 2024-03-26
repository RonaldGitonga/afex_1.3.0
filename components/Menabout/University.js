'use client'
import React from 'react'
import { Reveal } from '../Reveal/Reveal'

function University() {
  return (
    <>
        <section className="about-area about-p pt-120 pb-120 p-relative fix" style={{backgroundImage:"linear-gradient(180deg, rgba(26,69,126,1) 51%, rgba(255,255,255,1) 100%)"}}>
            <div className="animations-02">
                <img src="assets/img/afex-pics/OMTATA PORTRAIT 1.jpg" alt="contact-bg-an-01" style={{backgroundBlendMode:'normal'}}/>
            </div>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s" >
                    <img src="assets/img/afex-pics/OMTATA POTRAIT 1.jpg" className='rounded-4'alt="img" />
                    <div className="about-text second-about three-about">
                        <span>
                        82 <sub>+</sub>
                        </span>

                      <Reveal><p>US Admissions Annually</p></Reveal>  
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="about-content s-about-content pl-15 wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s" >
                    <div className="about-title second-title pb-25">
                        <h5 style={{fontWeight:"bold",color:'#dbac3b' }}>
                        <i className="fal fa-graduation-cap" /> About AfexHub
                        </h5>
                   <Reveal>   <h2 style={{color:'#dbac3b'}}>Who We are</h2> </Reveal>  
                    </div>
                    <Reveal>
                    <p className="txt-clr" style={{fontWeight:'bold', color:'#dbac3b'}}>
                    Greetings from AFEXHub! Over the past 5 years in Kenya, we have been passionately
                     helping families navigate the journey to top universities in the US and Canada. 
                     Whether you're a student preparing for the SAT, GMAT, and IELTS, or a parent 
                     seeking the best for your child, we're here to guide you every step of the way. 
                     Our team takes pride in having assisted 152 students in realizing their university 
                     dreams, securing over 32 million dollars in scholarships. Together, let's embark 
                     on this exciting educational journey, equipped with our full academic and financial support. 
                    </p>
                    </Reveal>
                  
                    <div className="about-content2">
                        <div className="row">
                        <div className="col-md-12">
                            <ul className="green2">
                            <li>
                                <div className="abcontent">
                                <div className="ano">
                                    <span>25% </span>
                                </div>{" "}
                                <div className="text">
                                  <Reveal>  <h3 style={{color:'black',fontWeight:'bold', fontFamily:'Montserrat'}}>SAT Scorers </h3></Reveal>
                                  <Reveal>
                                  <p style={{color:'black',fontWeight:'bold', fontFamily:'Montserrat'}}>
                                    Top 1% of the SAT Scores Worldwide
                                    </p>
                                  </Reveal>
                                 
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="abcontent">
                                <div className="ano">
                                    <span>82</span>
                                </div>{" "}
                                <div className="text">
                              <Reveal>     <h3 style={{color:'black',fontWeight:'bold', fontFamily:'Montserrat'}}>US Admissions</h3></Reveal> 
                              <Reveal>
                                    <p style={{color:'black',fontWeight:'bold'}}>
                                    Average Annual School Admissions
                                    </p>
                                    </Reveal>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default University
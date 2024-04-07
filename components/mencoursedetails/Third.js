import React, { useState } from 'react'
import Link from 'next/link'
import{}from 'react-icons'

const faqItems = [
    {
        id: 'headingThree',
        question: 'What is the SAT exam, and why is it important for college admissions?',
        answer: " The SAT, or Scholastic Assessment Test, is a standardized exam evaluating critical reading, math, and writing skills. Colleges use SAT scores as a crucial component in the admissions process, providing a standardized measure of a student's readiness for higher education."
    },
        {
        id: 'headingOne',
        question: ' How is the SAT structured, and what does each section assess?',
        answer: " The SAT comprises three main sections: Evidence-Based Reading, Writing, and Math. The exam assesses critical reading, writing, and mathematical skills, providing colleges with a comprehensive evaluation of a student's academic capabilities",
    },
    {
        id: 'headingTwo',
        question: 'How can I prepare effectively for the SAT?',
        answer: "Effective SAT preparation involves a combination of content review and test-taking strategies. Utilize practice tests, focus on strengthening weak areas, and employ time management techniques to ensure optimal performance on exam day.",
    },
    ];

function Third() {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <section className="project-detail">
                <div className="container">
                    <div className="lower-content">
                        <div className="row">
                            <div className="text-column col-lg-9 col-md-9 col-sm-12">
                                <h2>The SAT Prep Course</h2>
                             
                                <div className="inner-column">
                                    <div className="course-meta2 review style2 clearfix mb-30">
                                        <ul className="left">
                                            <li>
                                                <div className="author">
                                                    
                                                    <div className="text">
                                                        
                                                        <p>Instructor-Led</p>
                                                    </div>
                                                </div>
                                            </li>
                                            
                                        </ul>
                                        
                                    </div>
                                    <h3>Course Overview</h3>
                                    <p>
                                    Join AfexHub’s exceptional SAT Prep Program and be part of a focused learning community. Our program accommodates up to 20 students per class, ensuring a personalized and interactive classroom experience. We emphasize a balanced approach, combining individual attention, group discussions, and practice tests to fully prepare you for the SAT.
                                    </p>
                                    <p>
                                    For students abroad or unable to attend in person, we offer one-on-one online sessions, bringing our expert guidance right to your screen. Whether in a classroom or online, our goal is to help you master the SAT, boost your confidence, and open doors to your dream university or college.
                                    </p>
                                 
                                    <h4 className='text-orange-700'><strong>What You Will Learn</strong></h4>
                                    
                                    <div>
                                    <strong>Comprehensive Digital SAT Understanding:</strong>
                                    <br/>
                                     Gain a deep understanding of both the Verbal and Mathematics modules, focusing on the nuances of the digital test format.
                                    </div>
                                    <div>
                                    <strong>Enhanced Test-Taking Skills:</strong>
                                    <br/>
                                     Develop key skills such as time management, question analysis, and strategies specifically tailored for the digital SAT environment.
                                    </div>
                                    <div>
                                    <strong>Score Improvement:</strong> 
                                    <br/>
                                    Achieve a significant boost in practice test scores, laying a solid foundation for excelling in the actual SAT. 85% of our students see a score improvement  100 pts but the end of the program.
                                    </div>
                                   <div>
                                   <strong>Confidence and Preparedness: </strong>
                                   <br/>
                                   Build confidence in your test-taking abilities, ensuring you feel ready and composed on test day.
                                   </div>
                                   
                                        
                                   
                                    <ul className="pr-ul">
                                        <li>
                                            <div className="icon">
                                                <i className="fal fa-check" />
                                            </div>
                                            <div className="text">
                                            Systematically expand vocabulary
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fal fa-check" />
                                            </div>
                                            <div className="text">
                                            Consistently practice with authentic mock tests
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fal fa-check" />
                                            </div>
                                            <div className="text">
                                            Enhance time management strategies for optimal performance
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fal fa-check" />
                                            </div>
                                            <div className="text">
                                            Utilize our varied study resources and seek 
                                            expert guidance for comprehensive preparation
                                            </div>
                                        </li>
                                    </ul>
                                    <h4>Study Options:</h4>
                                    <table className="table table-bordered mb-40">
                                        <thead>
                                            <tr>
                                                <th>Options</th>
                                                <th>Length</th>
                                                <th>Time</th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Monday, Wednesday & Friday</td>
                                                <td>8-12 Weeks</td>
                                                <td>9.30am - 2.30pm</td>
                                            </tr>
                                            
                                            <tr>
                                                <td>Saturdays</td>
                                                <td>15 Weeks</td>
                                                <td>9.30am - 2.30pm</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <h3>Frequently Asked Questions</h3>
                                    
                                    <div className="faq-wrap pt-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                        <div className="accordion" id="accordionExample">
                                            {faqItems.map((item, index) => (
                                                <div className="card" key={index}>
                                                    <div className="card-header" id={item.id}>
                                                        <h2 className="mb-0">
                                                            <button className={`faq-btn${activeIndex === index ? '' : ' collapsed'}`} type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target={`#collapse${index}`}
                                                                onClick={() => handleToggle(index)}>
                                                                {item.question}
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id={`collapse${index}`}
                                                        className={`collapse${activeIndex === index ? ' show' : 'true'}`}
                                                        data-bs-parent="#accordionExample" >
                                                        <div className="card-body">{item.answer}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <aside className="sidebar-widget info-column">
                                    <div className="inner-column3">
                                        <h3>Course Features</h3>
                                        <ul className="project-info clearfix">
                                            <li>
                                                <div className="priceing">
                                                    <strong>Ksh.60,000</strong> 
                                                    
                                                </div>
                                            </li>
                                            
                                           
                                            <li>
                                                <span className="icon fal fa-clock" />{" "}
                                                <strong>Duration: </strong> <span>8-12 weeks</span>
                                            </li>
                                            <li>
                                                <span className="icon fal fa-user" />{" "}
                                                <strong>Enrolled: </strong> <span>20 students</span>
                                            </li>
                                            <li>
                                                <span className="icon fal fa-globe" />{" "}
                                                <strong>Language: </strong> <span>English</span>
                                            </li>
                                            <li>
                                                <div className="slider-btn">
                                                    <Link href="/Contact" className="btn ss-btn smoth-scroll" style={{color:'#fff',background:'#af3d2c'}}>
                                                        Enroll <i className="fal fa-long-arrow-right" />
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Third;
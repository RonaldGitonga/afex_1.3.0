'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const faqItems = [
    {
        id: 'headingOne',
        question: 'What is the GRE/GMAT, and why do candidates take these tests?',
        answer: "The GRE (Graduate Record Examination) and GMAT (Graduate Management Admission Test) are standardized exams commonly required for graduate program admissions. These assessments evaluate candidates' academic skills, including verbal, quantitative, and analytical writing abilities. " },
        {
        id: 'headingTwo',
        question: "When should candidates start preparing for the GRE/GMAT, and how can they register for the tests?",
        answer: "It's advisable to begin GRE/GMAT preparation well in advance of application deadlines. Candidates can easily register for the tests online through the official testing organizations' websites. You ensure you secure your preferred test dates and locations." },
    {
        id: 'headingThree',
        question: "What is considered a competitive GRE/GMAT score for various programs?",
        answer: "Competitive scores can vary depending on the specific graduate program and institution. Candidates are encouraged to research the average scores of admitted students for their chosen programs. Additionally, other application components, such as GPAs and letters of recommendation and statements of purpose, play a role in the admission process."}
    
        ,{
            id: 'headingFour',
            question: "What are effective GRE/GMAT preparation strategies, and are there recommended study materials?",
            answer: "Effective preparation involves a combination of self-study using official test prep materials, review books, online resources, or seeking guidance from test prep professionals. Practice tests and questions from official sources are valuable. Some candidates may also consider joining study groups or seeking personalized support to optimize their preparation. "
        },
        ];

function First() {

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
                                <h2>The GRE & GMAT Test Prep Course</h2>
                             
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
                                    Start your application to grad school with AfexHub's GRE/GMAT Prep Program. Tailored to unlock your highest potential, our program is intentionally designed to help you master both the quantitative and verbal aspects of these exams. With a focus on analytical writing, problem-solving, and data interpretation, our experienced instructors guide you through each component, ensuring a comprehensive understanding. 
                                      </p>
                                    <p>
                                    We offer personalized study plans, mock exams, and strategic review sessions to boost your confidence and skills. Whether you're aiming for a top-tier graduate program or a competitive business school, our program is your pathway to achieving outstanding scores and setting a strong foundation for your future academic and professional achievements.
  
                                   </p>
                                 
                                    <h4 ><strong>Key Goals For The Program</strong></h4>
                                    
                                    <div>
                                    <strong>Achieve Competitive Scores:</strong>
                                    <br/>
                                    Equip you with the skills and strategies to secure high scores, essential for your admission to top graduate and business schools.
                                    </div>
                                    <div>
                                    <strong>Comprehensive Understanding:</strong>
                                    <br/>
                                     Develop key skills such as time management, question analysis, and strategies specifically tailored for the digital SAT environment.
                                    </div>
                                    <div>
                                    <strong>Score Improvement:</strong> 
                                    <br/>
                                    Ensure you have a thorough understanding of all GRE/GMAT components, including quantitative reasoning, verbal reasoning, and analytical writing.
                                   </div>
                                   <div>
                                   <strong>Build Analytical and Critical Thinking: </strong>
                                   <br/>
                                   Enhance your analytical and critical thinking abilities, crucial for solving complex problems and interpreting data effectively.

                                   </div>
                                   <div>
                                   <strong>Customized Learning Experience:</strong>
                                   <br/>
                                   Provide a learning approach tailored to your unique strengths and areas for improvement, ensuring maximum progress and test readiness.
                                   </div>
                                           <ul className="pr-ul">
                                        <li>
                                            <div className="icon">
                                                <i className="fal fa-check" />
                                            </div>
                                            <div className="text">
                                            Verbal Excellence: Develop advanced vocabulary, critical reading skills, and effective strategies for verbal reasoning.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fal fa-check" />
                                            </div>
                                            <div className="text">
                                            Quantitative Mastery: Strengthen mathematical foundations and learn advanced problem-solving techniques.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fal fa-check" />
                                            </div>
                                            <div className="text">
                                            Analytical Writing Skills: Enhance the ability to analyze complex issues and communicate thoughts clearly.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fal fa-check" />
                                            </div>
                                            <div className="text">
                                            Strategic Time Management: Acquire techniques to optimize time allocation across various sections.
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
                                                <td>Tuesdays & Thursdays</td>
                                                <td>10 Weeks</td>
                                                <td>5.00pm - 7.00pm</td>
                                            </tr>
                                            <tr>
                                                <td>Saturdays</td>
                                                <td>10 Weeks</td>
                                                <td>10.00am - 2.30pm</td>
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
                                                        className={`collapse${activeIndex === index ? ' hide' : 'true'}`}
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
                                                    <strong>Ksh.70,000/-</strong> 
                                                    
                                                </div>
                                            </li>
                                            
                                           
                                            <li>
                                                <span className="icon fal fa-clock" />{" "}
                                                <strong>Duration: </strong> <span>10 weeks</span>
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
                                                    <Link href="/Contact" className="btn ss-btn smooth-scroll" style={{color:'#fff',background:'#af3d2c'}}>
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

export default First
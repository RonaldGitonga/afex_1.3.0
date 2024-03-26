import React, { useState } from 'react'
import Link from 'next/link'

const faqItems = [
    {
        id: 'headingThree',
        question: 'What is the difference between IELTS and TOEFL?',
        answer: ' IELTS and TOEFL are both English proficiency exams, but IELTS is more widely accepted globally, often preferred for immigration purposes, while TOEFL is commonly required for admission to U.S. universities. The key distinction lies in their scoring systems and test formats.'
    },
        {
        id: 'headingOne',
        question: 'How can I prepare effectively for the IELTS/TOEFL exams?',
        answer: ' Effective preparation involves a balanced focus on all language skills—listening, reading, writing, and speaking. Utilize sample tests for practice, expand your vocabulary, refine grammar, and seek feedback to identify areas for improvement.',
    },
    {
        id: 'headingTwo',
        question: 'What is the minimum score required to pass the IELTS/TOEFL exams?',
        answer: 'There is no specific "passing" score; it depends on the requirements of the institution or organization you are applying to. Typically, a score above 6.5 for IELTS and 80 for TOEFL is considered competitive, but it is crucial to check the specific score requirements of your intended destination or institution.',
    }
    ];

function Second() {

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
                                <h2>The IELTS/TOEFL Test Prep Course</h2>
                             
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
                                        <ul className="right">
                                            <li className="price"></li>
                                        </ul>
                                    </div>
                                    <h3>Course Overview</h3>
                                    <p>
                                        
                                    The IELTS (International English Language Testing System) and TOEFL 
                                    (Test of English as a Foreign Language) exams are widely recognized assessments 
                                    of English proficiency. Designed to evaluate a test-taker's ability to understand 
                                    and use English in academic and real-life contexts, these exams assess listening, 
                                    reading, writing, and speaking skills. They are crucial for non-native English speakers 
                                    seeking admission to universities, employment opportunities, or immigration processes, 
                                    providing a standardized measure of language proficiency on an international scale.
                                    </p>
                                    <p>
                                    At AFEX Hub, we understand the importance of language proficiency tests for students
                                    looking to study abroad. That's why we offer comprehensive test preparation programs 
                                    for the TOEFL and IELTS exams, two of the most widely accepted language proficiency 
                                    tests for academic purposes. Our experienced tutors will provide you with the tools 
                                    and resources needed to excel on these exams, including personalized study plans, 
                                    practice tests, and feedback on your progress. With our help, you can feel confident 
                                    and prepared to demonstrate your language proficiency to universities and colleges worldwide
                                    </p>
                                 
                                    <h4>Key Goals For The Program</h4>
                                    <div>
                                    <strong>Achieve High Test Scores:</strong>
                                    <br/>
                                    Ensure you attain top scores in IELTS/TOEFL, meeting and exceeding the language proficiency requirements of universities and immigration authorities.
                                    </div>
                                    <div>
                                    <strong>Enhance All Language Skills:</strong>
                                    <br/>
                                    Assist you in developing comprehensive language skills – listening, speaking, reading, and writing – to ensure well-rounded proficiency in English.
                                      </div>
                                    <div>
                                    <strong>Build Test Confidence:</strong> 
                                    <br/>
                                    Equip you with effective test-taking strategies and practice, boosting confidence to excel under exam conditions.
                                   </div>
                                   <div>
                                   <strong>Real-World Language Application: </strong>
                                   <br/>
                                   Prepare you for real-life English usage, beneficial for academic, professional, and personal goals in English-speaking environments.
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
                                                <td>Tuesdays & Thursdays</td>
                                                <td>5 Weeks</td>
                                                <td>11.30am - 2.00pm</td>
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
                                                    <strong>Ksh.17,000</strong> 
                                                    
                                                </div>
                                            </li>
                                            
                                           
                                            <li>
                                                <span className="icon fal fa-clock" />{" "}
                                                <strong>Duration: </strong> <span>5 weeks</span>
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

export default Second;
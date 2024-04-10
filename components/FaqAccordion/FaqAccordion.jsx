'use client'
import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section ' style={{paddingTop:'0px',marginTop:'-80px',marginBottom:'0px'}}>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5' style={{fontWeight:'bolder',color:'#1a457e'}}>Frequently asked questions</h2>
            <p className='text-center mb-5' style={{fontWeight:'bold'}}>Some of the answers you might need.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Who is eligible for financial aid?</Accordion.Header>
                    <Accordion.Body>
                    Financial aid eligibility varies from one university to another and can depend on several factors, including your academic achievements, financial need, and citizenship status. In the United States and Canada, many universities offer financial aid options, including scholarships, grants, and loans. To determine your eligibility for financial aid, you typically need to complete the CSS or the equivalent Canadian application. We can assist you in understanding the financial aid process, finding scholarships, and ensuring you meet the requirements to access financial support for your studies abroad.
                         </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>What are the Ivy leagues?</Accordion.Header>
                    <Accordion.Body>
                    The Ivy League is a group of eight private institutions of higher education in the United States, known for their academic excellence, prestigious reputation, and selective admissions.They include Brown University (Providence, Rhode Island)
                    Columbia University (New York City, New York)
                    Cornell University (Ithaca, New York)
                    Dartmouth College (Hanover, New Hampshire)
                    Harvard University (Cambridge, Massachusetts)
                    University of Pennsylvania (Philadelphia, Pennsylvania)
Princeton University (Princeton, New Jersey)
Yale University (New Haven, Connecticut)
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Can I apply to any universities?</Accordion.Header>
                    <Accordion.Body>
                    Yes, you can apply to a wide range of universities in the United States and Canada. However, it's important to consider each university's specific admission requirements, budget, location, and academic programs to find the best fit for your educational goals.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>How long have you been in the market?</Accordion.Header>
                    <Accordion.Body>
                    AFEXHub Ltd has been proudly serving students in Kenya and providing expert guidance for university and college applications since 2018. Our experience and dedication to helping students achieve their educational goals have been a driving force in our commitment to excellence. We look forward to continuing to support students on their academic journeys for years to come.
                    </Accordion.Body>
                </Accordion.Item>
           
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;
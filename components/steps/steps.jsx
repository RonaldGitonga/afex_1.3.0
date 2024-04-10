'use client'
import React from 'react';
import { Card } from 'react-bootstrap';


function Steps() {
  return (
    <div style={{background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(219,172,59,1) 54%)"}}>
        <div className="container" >
            <h2 className='text-center mb-5' style={{color:'#af3d2c',fontWeight:'bolder'}}>What Do I Need ?</h2>
            <div className='row g-4' >
                <div className='col-lg-4' style={{backgroundColor:'transparent'}}>
                    <Card className='d-flex align-items-center border-0 h-100'style={{backgroundColor:'transparent'}}>
                        <div className='mt-3'>
                
                        </div>
                        <Card.Body style={{color:"#1a457e", fontWeight:'bold'}}>
                            <Card.Title className='text-center text-capitalize mb-3'>
                            STEP 1: Profile Review
                            </Card.Title>
                            <Card.Text className='text-center'>
                            The applicant's academic and extracurricular activities history and coordination of these activities.   
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100' style={{backgroundColor:'transparent'}}>
                        
                        <div className='mt-3'>
                     
                        </div>
                        <Card.Body style={{color:"#1a457e", fontWeight:'bold'}}>
                            <Card.Title className='text-center text-capitalize mb-3'>
                            STEP 2: Test prep
                            </Card.Title>
                            <Card.Text className='text-center'>
                            Applicants who need to do either the SAT, IELTS, GRE, GMAT etc will go through several weeks of test preparation. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
               
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'style={{backgroundColor:'transparent'}}>
                        <div className='mt-3'>
                            
                
                        </div>
                        <Card.Body style={{color:"#1a457e", fontWeight:'bold'}}>
                            <Card.Title className='text-center text-capitalize mb-3'>
                            STEP 3:  Selection of schools
                            </Card.Title>
                            <Card.Text className='text-center'>
                            We will advise applicants to apply to 12 schools out of 22 shortlisted schools from over 200 universities.

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'style={{backgroundColor:'transparent'}}>
                        <div className='mt-3'>
                            
                
                        </div>
                        <Card.Body style={{color:"#1a457e", fontWeight:'bold'}}>
                            <Card.Title className='text-center text-capitalize mb-3'>
                            STEP 4:  Essay Review
                            </Card.Title>
                            <Card.Text className='text-center'>
                            We will advise applicants to apply to 12 schools out of 22 shortlisted schools from over 200 universities.

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'style={{backgroundColor:'transparent'}}>
                        <div className='mt-3'>
                            
                
                        </div>
                        <Card.Body style={{color:"#1a457e", fontWeight:'bold'}}>
                            <Card.Title className='text-center text-capitalize mb-3'>
                            Step 5: Financial Aid Application
                            </Card.Title>
                            <Card.Text className='text-center'>
                            Advice parents on the process, assess their financial profile and assist in completing the application forms if applicable.

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>


            </div>
         
        </div>
    </div>
  )
}

export default Steps;
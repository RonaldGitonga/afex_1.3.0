import React from 'react';
import { Card } from 'react-bootstrap';
import CountUp from 'react-countup'

function ChooseSection() {
  return (
    <div>
        <div className="container">
            <h2 className='text-center mb-5'>Why choose Us ?</h2>
            <div className='row g-4'>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'>
                        <div className='mt-3'>
                        <CountUp style={{fontFamily:'Montserrat',fontSize:'35px', color:'#af3d2c',fontWeight:'bolder'}}
                    start={0}
                    end={1570}
                    duration={12}
                    
                />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center text-capitalize mb-3'>
                                Admissions in 2023
                            </Card.Title>
                            <Card.Text className='text-center'>
                            At AFEX Hub, our unique blend of personalized coaching, experienced tutors, the best resources, and a deep commitment to each student's success sets us apart.  
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100' >
                        
                        <div className='mt-3'>
                         
                        <CountUp style={{fontFamily:'Montserrat',fontSize:'35px', color:'#af3d2c',fontWeight:'bolder'}}
                    start={0}
                    end={7500000}
                    duration={12}
                    
                         />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center text-capitalize mb-3'>
                              Dollars in Average Annual Scholarships since 2018
                            </Card.Title>
                            <Card.Text className='text-center'>
                            We not only prepare you for tests and admissions but also our dedicated team also specializes in helping students secure funding, ensuring both academic and financial support.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center border-0 h-100'>
                        <div className='mt-3'>
                            
                        <CountUp style={{fontFamily:'Montserrat',fontSize:'35px', color:'#af3d2c',fontWeight:'bolder'}}
                    start={0}
                    end={25}
                    duration={20}
                    
                />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center text-capitalize mb-3'>
                                Percent of The Top 1% SAT Scores World wide
                            </Card.Title>
                            <Card.Text className='text-center'>
                            Discover how we can enhance your journey to a world-class educational institution.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseSection;
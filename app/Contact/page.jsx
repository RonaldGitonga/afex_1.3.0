'use client'
import React from 'react';
import './Contact.css';
import Header from '@/components/headerone/Main'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import emailjs from '@emailjs/browser'

function Contact() {
    const [firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[email,setemail]=useState('');
    const[phone,setphone]=useState('');
    const[message,setmessage]=useState('');

      const [loading,setLoading]=useState(false);


      const handleSubmit=(e)=>{
        e.preventDefault();
    
        setLoading(true);
        emailjs.send(
          'service_epchor9',
          'template_z80dsmq',
          {
            from_firstName:firstName,
            from_lastName:lastName,
            to_name:"AfexHub Kenya",
            from_email:email,
            to_email:'info.kenya@afexhub.co.ke',
            from_phone:phone,
            message:message
    
          },
          'TwFsrPqxSmJVbbCD5'
    
        )
        .then(()=>{
          setLoading(false);
          alert('Thank you.I will get back to you as soon as possible');
            setFirstName('')
            setLastName('')
            setemail('')
            setphone('')
            setmessage('')
    
        },(error)=>{
          setLoading(false);
          console.log(error);
          alert('Something went wrong')
        })
    }
  return (
    <>
        <Header/>
    <div className='contact-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold 'style={{color:'#fff'}}>Get In Touch</h1>
                <p className='text-center w-75 mb-5'></p>
            </div>
        </header>

        <div className='container my-5 d-flex justify-content-center'>
            <Form id='contact-form' onSubmit={handleSubmit}>
                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label >First Name</Form.Label>
                        <Form.Control onChange={e=>setFirstName(e.target.value)} as='input'name='firstName' placeholder='First name' />
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Label >Last Name</Form.Label>
                        <Form.Control onChange={e=>setLastName(e.target.value)} as='input'name='lastName'placeholder='Last name' />
                    </Col>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label >Email</Form.Label>
                    <Form.Control type='email' name='email' as='input' onChange={e=>setemail(e.target.value)} placeholder='Enter email' />
                    <Form.Text className='text-muted'>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label >Phone Number</Form.Label>
                    <Form.Control onChange={e=>setphone(e.target.value)}as='input' type='text' name='phone'placeholder='Your Phone Number' />
                </Form.Group>

                {/* <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>Location</Form.Label>
                        <Form.Select defaultValue="London">
                            <option>London</option>
                            <option>Manchester</option>
                            <option>Kisumu</option>
                        </Form.Select>
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Label>Postcode</Form.Label>
                        <Form.Control placeholder='Postcode' />
                    </Col>
                </Row> */}

                <Form.Group className='mb-3'>
                    <Form.Label >Your Message</Form.Label>
                    <Form.Control  onChange={e=>setmessage(e.target.value)} name='message' as="textarea" rows={3} />
                </Form.Group>

                <Button variant="danger btn-lg" type='submit'>Submit</Button>
            </Form>
        </div>
        </div>


    </>
  )
}

export default Contact;
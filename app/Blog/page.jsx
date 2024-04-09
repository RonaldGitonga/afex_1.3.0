'use client'
import React from 'react';
import './Blog.css';
import  Link  from 'next/link';
import { Card } from 'react-bootstrap';
import Header from '@/components/headerone/Main'


const blogs = [
    {
        id: 1,
        img: ['https://utfs.io/f/06ab74db-bf41-4f81-b88c-e25788223009-fjfg0d.jpg'],
        title: 'Life After Joining Harvard',
        description: 'After stepping onto the prestigious Harvard campus, life becomes a whirlwind of intellectual challenges and vibrant experiences. From engaging lectures to forming lifelong connections, every moment is a step toward ...'},
    {
        id: 2,
        img: ['https://utfs.io/f/64ec360f-64cb-41be-8403-d505a78db290-fh89mx.jpg'],
        title: "Let's talk Money ",
        description: 'As a college freshman, balancing academics and finances is key. Explore part-time jobs, freelance opportunities, or campus gigs. Networking and utilizing resources can unlock ...'
    },
    {
        id: 3,
        img: ['https://utfs.io/f/a3ad6f60-cb48-451f-a142-64f1d7f6453d-ffkvuu.jpg'],
        title: 'SAT Preps',
        description: "SAT preparation begins with a strategic approach. Practice regularly, utilize study guides, and focus on weak areas. Don't forget to manage time effectively during the test, ensuring a calm and confident performance."
    },

];

function Blog() {
  return (
    <>
    <Header/>
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold ' style={{color:"#fff"}}>Blog</h1>
                <p className='text-center w-75 mb-5'>“There’s a lot of information out there for free, so you’ve got to figure out what makes your information different.” – Matt Wolfe</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link href="/Blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Blog;
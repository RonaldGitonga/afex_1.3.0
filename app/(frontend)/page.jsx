'use client'
import React from 'react';
import './Home.css';

import About from "@/components/menhome/About"
 import "@/app/home.css"
import  Link  from 'next/link';
import Header from '@/components/headerone/Main'
import Testimonial from '@/components/menhome/Testimonial'
import Slider from '@/components/menhome/Sliderone'
import Consulting from '@/components/Menabout/Consulting'
import ChooseSection from '../../components/ChooseSection/ChooseSection';

import FaqAccordion from '@/components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import Map from '@/components/Map/Map';

import Courses from '@/components/menhome/Courses'

const blogs = [
    {
        id: 1,
        img: ['https://utfs.io/f/ea4bc170-f8e2-4e2a-b0e5-b3a6f99b880e-yvf5ne.jpg'],
        title: "Empowering Change through Code: Jackline Matesu's Journey to Bucknell University's Computer Science Program",
        description: "What attracted you to Bucknell University's Computer Science program, and what do you hope to gain from your time there? I was attracted to Bucknell’s advanced makerspaces where students are able to launch their projects and get assistance from their professors and fellow students on how to improve their projects until they achieve the desired result. The program also contains a lot of intense programming courses ranging from python, Java to React which ensure that the student is efficient in coding. The Res college for society and technology also caught my eye as one gets to mingle with other students from other tech courses and build their own network."
    },
    {
        id: 2,
        img: ['https://utfs.io/f/8bef9787-ebc4-4af0-9fb8-0c398b1ab0ff-fibutn.jpg'],
        title: "Lights, Camera, Action! John Muigai's Road to New York University with AFEX's Support",
        description: " Can you tell us about your journey and decision to pursue film and photography in college? I have been interested in pursuing film from a young age. I am incredibly passionate about theatre, drama and literature and all those interests culminated in an affinity for film. I chose to pursue it at college level because much as one can do it without necessarily having studied at college level, having a degree from a renowned university will set you apart from others in this very competitive industry. Moreover, a lot of colleges offer work placements and exposure opportunities that can really give one a leg-up in their journey into the arts.   What inspired your passion for film and photography, particularly in the context of your experiences in Nairobi? As a young African Filmmaker, I have grown up on Western Media and watched the global cinema scene be engulfed by its influence. I either saw a few African stories that were built on stereotypes, caricatures and Western idea",
    },
    {
        id: 3,
        img: ['https://utfs.io/f/21bbd0c2-80be-407d-9805-1af46e1b1795-ff139h.jpg'],
        title: "Pioneering Change: Amy Angel Oduor's Path to Cornell University's School of Engineering",
        description: "We dive into the inspiring journey of Amy Angel Oduor, a visionary student who has secured admission to Cornell University's esteemed School of Engineering to pursue her passion for Civil Engineering. Amy's story is a testament to her unwavering dedication to making a positive impact through her chosen field. Q: Can you tell us about the moment you first felt drawn to civil engineering?",
     }
];

function Home() {
  return (
    <>
 <Header/>
 <Slider/>
<div className='home-page'>
        

    

        <div className="py-5">
            <ChooseSection />
        </div>
        <About/>

       
        <Courses/>
        <Consulting/>
      

        <div className="py-5 mt-50">
            <FaqAccordion />
        </div>
        <Testimonial/>
        

        <div className='blog-section text-light py-5' >
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5 ' style={{color:'#fff'}}>Latest Posts</h2>
                <div className='row g-4'>
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link href="https://afexhub.blogspot.com/search?updated-max=2023-06-05T03:43:00-07:00&max-results=7" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5'>
                                        <Card.Title style={{fontWeight:'bold'}}>{blog.title}</Card.Title>
                                        <Card.Text>{blog.description.slice(0,104)+'...'}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
                <Link href="/Blog">
                    <button type='button' className='btn  btn-lg mt-5 'style={{background:'#af3d2c',color:'white'}}>Read More Blogs</button>
                </Link>
            </div>
        </div>
        <Map/>
    </div>

    </>
   
  )
}

export default Home;
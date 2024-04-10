
import React from 'react';
import './Home.css';

import About from "@/components/menhome/About"
 import "@/app/home.css"

import Header from '@/components/headerone/Main'
import Testimonial from '@/components/menhome/Testimonial'
import Slider from '@/components/menhome/Sliderone'
import Consulting from '@/components/Menabout/Consulting'
import ChooseSection from '../../components/ChooseSection/ChooseSection';

import FaqAccordion from '@/components/FaqAccordion/FaqAccordion';

import Map from '@/components/Map/Map';

import Courses from '@/components/menhome/Courses'
import BlogCarousel from '@/components/BlogCarousel/blogCarousel';


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

        <Consulting/>
        <Courses/>
        
      

        <div className="py-5 mt-50">
            <FaqAccordion />
        </div>
        <Testimonial/>
        
        <BlogCarousel/>
       
        <Map/>
    </div>

    </>
   
  )
}

export default Home;
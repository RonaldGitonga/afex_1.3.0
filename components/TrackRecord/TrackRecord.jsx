import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import { Reveal } from '../Reveal/Reveal';



const schools=[
    {
        title:"Harvard",
        imageSrc:'https://utfs.io/f/f333e724-0700-483e-b221-1e3ea7efc24d-lcv3tu.png',
        admissions:5
    },
    {
        title:"Princeton",
        imageSrc:'https://utfs.io/f/4ca2b24d-949e-4d33-9843-db3957d9c82f-g45lca.webp',
        admissions:11
    },
    {
        title:"UPenn",
        imageSrc:'https://utfs.io/f/31328ccd-2583-4577-944b-0b058aadbf40-1udlka.jpg',
        admissions:17
    },
    {
        title:"Columbia",
        imageSrc:'https://utfs.io/f/ea0d4dc4-daad-4a78-8365-43a0cc61ade3-yc5lyz.webp',
        admissions:15
    },
    {
        title:"MIT",
        imageSrc:'https://utfs.io/f/7c65d176-5305-4a42-88e9-086ab25904a1-2bfc.webp',
        admissions:5
    },
    {
        title:"Duke",
        imageSrc:'https://utfs.io/f/399579bf-3098-4a8c-b1f1-7e8704f9b9fa-197zf.jpg',
        admissions:10
    },
    {
        title:"NYU",
        imageSrc:'https://utfs.io/f/32b39fe9-858a-472e-9999-a94263439a4a-1o16.png',
        admissions:17
    },
    {
        title:"Cornell",
        imageSrc:'https://utfs.io/f/a98dc821-e52a-42cd-ae67-52ff0e9b6295-yquxsc.svg.png',
        admissions:41
    },
    {
        title:"Yale",
        imageSrc:'https://utfs.io/f/2921bf0a-eb9d-4dc0-85d9-c2ba97b15140-1epx2o.jpg',
        admissions:20
    },
    {
        title:"Caltech",
        imageSrc:'https://utfs.io/f/e42393a9-fb25-45b4-b9d8-74a49bcc88c5-92saqs.png',
        admissions:7
    },
    {
        title:"Bryn Mawr",
        imageSrc:'https://utfs.io/f/0b645e34-3a2a-427e-8374-67688d2c6609-2qg977.svg.png',
        admissions:11
    },
    {
        title:"University Of Toronto",
        imageSrc:'https://utfs.io/f/127f47d2-b857-4c15-bd61-8443c97eabdc-it2m4v.webp',
        admissions:6
    },
    {
        title:"Mount Holyoke",
        imageSrc:'https://utfs.io/f/65d30ccd-6766-4cfc-9cd3-56cf3ea513fe-4di56d.svg.png',
        admissions:20
    },
    {
        title:"Brown University",
        imageSrc:'https://utfs.io/f/0a5364b5-0d02-4d98-90d2-2218708459d5-1jyzw6.jpg',
        admissions:4
    },
    {
        title:"Stanford",
        imageSrc:'https://utfs.io/f/73b269fa-508d-465a-98e2-f6dee6504254-lpjqx5.jpg',
        admissions:10
    },
    {
        title:"John Hopkins",
        imageSrc:'https://utfs.io/f/1b2d7031-1c5d-49f9-a4c5-d1ffa3679185-noc1wi.jpg',
        admissions:9
    },
    {
        title:"Bucknell University",
        imageSrc:'https://utfs.io/f/10e2691b-662e-44c3-8b63-34917c985f3a-qiexou.png',
        admissions:12
    },
    {
        title:"University of British Columbia",
        imageSrc:'https://utfs.io/f/626a57ef-723b-4bfc-96d2-32ebb9573b63-2h6e.webp',
        admissions:7
    },
    
    
]
function Testimonial() {

     let settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2,
        outerHeight:100,
        innerHeight:100,
        
        
 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
      };
      

  return (
    <>
       <section className="testimonial-area pt-120 pb-115 p-relative fix"style={{backgroundImage:"url(https://utfs.io/f/135c3b8c-5ca5-4be7-a0cb-ea8147455ee8-wylmfh.png)", paddingTop:'30px',paddingBottom:'30px' ,height:'100%'}}>
            
            <div className="animations-02">
                <Image width={40} height={40}src="/assets/img/bg/an-img-04.png" alt="contact-bg-an-01" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-50 wow fadeInDown animated " data-animation="fadeInDown" data-delay=".4s" style={{background:'#fff',borderRadius:'12px'}} >
                            <h5  style={{fontWeight:'bolder',paddingTop:'5px'}}>
                                <i className="fal fa-graduation-cap" /> Admissions
                            </h5>
                       
                            <h2 style={{color:'#1a457e',fontWeight:'bold' }}>Admissions</h2>
                          
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <Slider className="testimonial-active wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" {...settings}>

                        {schools.map((school,index)=>(
                            <div key={index} className="single-testimonial text-center">
                            <div className="qt-img">
                                <Image width={300} height={300}src={school.imageSrc} className='rounded-4' alt="img" />
                     
                            </div>
                            <p style={{fontWeight:'bolder'}}>
                            {school.title}
                            </p>  
                           
                            <div className="ta-info">
                            <h6>{school.admissions}</h6>
                          
                            </div>
                        </div>
                        ))}
                            
                            
                     

                        </Slider>
                    </div>
                </div>
            </div>
       </section>
    </>
  )
}

export default Testimonial
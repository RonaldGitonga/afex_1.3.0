import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';
import { Reveal } from '../Reveal/Reveal';
function Testimonial() {

     let settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2,
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
       <section className="testimonial-area pt-120 pb-115 p-relative fix" style={{marginTop:'-40px',background:'url(https://utfs.io/f/135c3b8c-5ca5-4be7-a0cb-ea8147455ee8-wylmfh.png)'}}>
            <div className="animations-01">
                <Image width={300} height={300} src="/assets/img/bg/an-img-03.png" alt="an-img-01" />
            </div>
            <div className="animations-02">
                <Image width={40} height={40}src="/assets/img/bg/an-img-04.png" alt="contact-bg-an-01" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-50 wow fadeInDown animated " data-animation="fadeInDown" data-delay=".4s" style={{background:'#fff',borderRadius:'12px'}} >
                            <h5 style={{fontWeight:'bolder',paddingTop:'5px'}}>
                                <i className="fal fa-graduation-cap" /> Testimonials
                            </h5>
                       
                            <h2 style={{color:'#1a457e' ,fontWeight:'bold'}}>

                                 Testimonials</h2>
                          
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <Slider className="testimonial-active wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s" {...settings}>

                          

                            <div className="single-testimonial text-center" style={{background:'#fff'}} >
                                <div className="qt-img">
                                    <Image width={40} height={40}src="/assets/img/testimonial/qt-icon.png"  alt="img" />
                                </div>
                                <p style={{color:'#1a457e', fontWeight:'bold'}}>
                                When I first started at Afex I did not know much about college application to the USA or Canada, but with time I was guided through school selection and essay writing until I had secured the best credentials to be accepted into a university.
                                </p>
                                <div className="testi-author">
                                    <Image width={80} height={80}src="https://utfs.io/f/09f09322-1703-4c36-ae31-28829ff4045c-ig9ynh.jpg" alt="img" style={{borderRadius:'50px' }} />
                                </div>
                                <div className="ta-info">
                                <h6>Jackelin Masetu</h6>
                                <span>Bucknell University</span>
                                </div>
                            </div>


                            <div className="single-testimonial text-center">
                                <div className="qt-img">
                                    <Image width={40} height={40} src="/assets/img/testimonial/qt-icon.png" alt="img" />
                                </div>
                                <p style={{color:'#1a457e', fontWeight:'bold'}}>
                                AFEX also helped me with my SATs, prepping me with lessons and materials that gave me the concepts necessary to ace the SAT. I came to AFEX on the brink of giving up on this process with a 1320 on my SAT but I left with a 1500.
                                </p>
                                <div className="testi-author">
                                    <Image width={80} height={80}src="https://utfs.io/f/4b0e4ce4-4fb1-4fe9-a979-5a63da66d888-lq2u9m.jpg" alt="img" style={{borderRadius:'50px' }}/>
                                </div>
                                <div className="ta-info">
                                <h6>Whitney Njogu</h6>
                                <span>Princeton University</span>
                                </div>
                            </div>

                            <div className="single-testimonial text-center">
                                <div className="qt-img">
                                    <Image width={40} height={40}src= "/assets/img/testimonial/qt-icon.png"alt="img" />
                         
                                </div>
                                <p style={{color:'#1a457e', fontWeight:'bold'}}>
                                Looking back on my college application, I am grateful that AFEX was there with me every step of the way. I got milestones of what I was supposed to have done,early deadlines so that I wouldn't rush at the last minute which greatly contributed to my acceptance. 
                                </p>  
                                <div className="testi-author">
                                    <Image width={80} height={80}src="https://utfs.io/f/1a53565a-9867-4803-90a6-d2ac19ad5b76-vb3brz.jpg" alt="img" style={{borderRadius:'50px' }} />
                                </div>
                                <div className="ta-info">
                                <h6>Purity Wanjiku</h6>
                                <span>Bryn Mawr College</span>
                                </div>
                            </div>
                            
                     

                        </Slider>
                    </div>
                </div>
            </div>
       </section>
    </>
  )
}

export default Testimonial
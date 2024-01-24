import React from 'react'
import  Link  from 'next/link';
import Slider from "react-slick";


const slides=[
    {
        title:"Main_slide",
        imageUrl:'https://utfs.io/f/d174cad4-a039-4b8b-9e0a-0300705ac079-2f9.webp',
        desc1:'Welcome To AFEX Hub',
        desc2:'Seize Your Opportunity',
        cta:'Take a look',
        ctaLink:'/'
    },
    {
        title:"banner_slide",
        imageUrl:'https://utfs.io/f/82e27d27-1d41-4c51-b8df-f6d7e8c5202e-31lipj.jpeg',
        desc1:'Enrollment is in progress.',
        desc2:'Sign Up Now',
        cta:'Register',
        ctaLink:'/Contact'
    },
    {
        title:"Financial_aid_slide",
        imageUrl:'https://utfs.io/f/caaf0226-90e1-4cb1-bf62-41a6ab02b58e-g3ny04.jpg',
        desc1:'Need Financial Assistance?',
        desc2:'We Can help.',
        cta:'Find Out',
        ctaLink:'/Contact'
    },
    {
        title:"Testimonials_slide",
        imageUrl:'https://utfs.io/f/8bd8613b-9f20-4cf3-a224-ba55eb883e34-4yiw8h.jpg',
        desc1:"And We're Good At It.",
        desc2:'Hear From Others Like You.',
        cta:'More Like This',
        ctaLink:'/About'
    }
]

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button" className={ `slick-next ${className}`} style={{ ...style }} onClick={onClick} ><i className="far fa-angle-right"></i></button>
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button" className={ `slick-prev ${className}`} style={{ ...style }} onClick={onClick} ><i className="far fa-angle-left"></i></button>
    );
}

function Sliderone() {

    const settings = {
        autoplay: true,
		autoplaySpeed: 8000,
		dots:false ,
		fade: true,
		arrows: true,
		prevArrow: <SamplePrevArrow/>,
		nextArrow: <SampleNextArrow/>,
		responsive: [
			{ breakpoint: 1200, settings: { dots: false, arrows: false } }
		]
      };


  return (
    <>
        
            <Slider className="slider-active" style={{ background: "#fff" }} {...settings}>
                {slides.map((slide,index)=>(
                    <section key={index} id="home" className="slider-area fix p-relative">
                       <div>
                       <div className="single-slider slider-bg"  style={{ backgroundImage: `url(${slide.imageUrl})` , backgroundSize: "cover" }} >
                       <div className="container">
                           <div className="row">
                           <div className="col-lg-7 col-md-7">
                               <div className="slider-content s-slider-content pt-200 mt-200">
                               <h5 data-animation="fadeInUp" data-delay=".4s"  style={{fontWeight:'bolder'}}>
                                    AFEX Hub
                               </h5>
                               <h2 data-animation="fadeInUp" style={{color:'#1a457e',fontWeight:'bolder'}} data-delay=".4s">
                                   {slide.desc1}
                               </h2>
                               <p data-animation="fadeInUp" data-delay=".6s" style={{fontWeight:'bolder'}}>
                                   {slide.desc2}
                               </p>
                               <div className="slider-btn mt-30" >
                                   <Link href={slide.ctaLink} className="btn ss-btn active mr-15" data-animation="fadeInLeft" data-delay=".4s" style={{background:'#af3d2c',border:'none'}}>
                                       {slide.cta} <i className="fal fa-long-arrow-right"  />
                                   </Link>
                                   <Link href="/Contact" className="btn ss-btn active" data-animation="fadeInLeft" data-delay=".4s"  style={{background:'#af3d2c',border:'none'}}>
                                       Contact Us <i className="fal fa-long-arrow-right"  />
                                   </Link>
                               </div>
                               </div>
                           </div>
                           
                           </div>
                       </div>
                       </div>
                   </div>
                </section>   
                ))}
              
            </Slider>
      

       
    </>
  )
}

export default Sliderone
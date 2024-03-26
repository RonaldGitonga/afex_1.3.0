import React from 'react'
import  Link  from 'next/link';
import Slider from "react-slick";


const slides=[
    {
        title:"College_App_Prep",
        imageUrl:'https://utfs.io/f/ca7e6eff-03f7-4a6d-9bd8-97fdddd23adc-c6qepw.PNG',
        desc1:'Welcome To AFEX Hub',
        desc2:'Seize Your Opportunity',
        cta:'Take a look',
        ctaLink:'/Courses',
        bgPos:'center',
        textCol:'#1a457e'
    },
    {
        title:"sat_prep",
        imageUrl:'https://utfs.io/f/179f666a-2902-4992-9c85-4494d2b44fe8-zav50a.PNG',
        desc1:'Enrollment is in progress.',
        desc2:'Sign Up Now',
        cta:'Register',
        ctaLink:'/Courses/SAT',
        bgPos:'center',
        textCol:'#dbac3b'
    },
    {
        title:"ielts_prep",
        imageUrl:'https://utfs.io/f/b439e547-ce93-42a5-a41f-c175f7e7bef2-jgd7h9.PNG',
        desc1:'Need Financial Assistance?',
        desc2:'We Can help.',
        cta:'Find Out',
        ctaLink:'/Courses/IELTS-TOEFL',
        bgPos:'center',
        textCol:'#dbac3b'
    },
    {
        title:"gre_gmat_prep",
        imageUrl:'https://utfs.io/f/314c2906-6171-4721-b687-bdf8a25f4716-yv8r2q.PNG',
        desc1:"And We're Good At It.",
        desc2:'Hear From Others Like You.',
        cta:'More Like This',
        ctaLink:'/Courses/GRE&GMAT',
        bgPos:'center',
        textCol:'#fff'
    },
    {
        title:"ssat_prep",
        imageUrl:'https://utfs.io/f/694cb270-7775-405b-b65a-cf51def6bcdd-7mt109.PNG',
        desc1:"And We're Good At It.",
        desc2:'Hear From Others Like You.',
        cta:'More Like This',
        ctaLink:'/Contact',
        bgPos:'center',
        textCol:'#fff'
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

function SliderFour() {

    const settings = {
        autoplay: true,
		autoplaySpeed: 8000,
		dots:false ,
		fade: true,
		arrows: false,
		prevArrow: <SamplePrevArrow/>,
		nextArrow: <SampleNextArrow/>,
		responsive: [
			{ breakpoint: 1200, settings: { dots: false, arrows: false } }
		]
      };


  return (
    <>
        
            <Slider className="slider-active " style={{ background: "#fff", width:'100dvw',}} {...settings}>
                {slides.map((slide,index)=>(
                    <section key={index} id="home" className="slider-area fix p-relative">
                       <div>
                       <div className="single-slider slider-bg"  style={{ backgroundImage: `url(${slide.imageUrl})` ,height:'100%', backgroundSize: "contain",backgroundRepeat:'no-repeat'}} >
                       <div className="container">
                           <div className="row">
                           <div className="col-lg-7 col-md-7">
                               <div className="slider-content s-slider-content pt-0 mt-0">
                               <h5 data-animation="fadeInUp" data-delay=".4s"  style={{fontWeight:'bolder'}}>
                               
                               </h5>
                               {/* <h2 data-animation="fadeInUp" style={{color:slide.textCol ,fontWeight:'bolder'}} data-delay=".4s">
                                   {slide.desc1}
                               </h2>
                               <p data-animation="fadeInUp" data-delay=".6s" style={{fontWeight:'bolder'}}>
                                   {slide.desc2}
                               </p> */}
                               {/* <div className="slider-btn mt-30" >
                                   <Link href={slide.ctaLink} className="btn ss-btn active mr-15" data-animation="fadeInLeft" data-delay=".4s" style={{background:'#af3d2c',border:'none'}}>
                                       {slide.cta} <i className="fal fa-long-arrow-right"  />
                                   </Link>
                                   <Link href="/Contact" className="btn ss-btn active" data-animation="fadeInLeft" data-delay=".4s"  style={{background:'#af3d2c',border:'none'}}>
                                       Contact Us <i className="fal fa-long-arrow-right"  />
                                   </Link>
                               </div> */}
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

export default SliderFour
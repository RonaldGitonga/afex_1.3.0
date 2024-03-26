'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image';

function Main() {

    const [Btnshow, setBtnshow] = useState(false);
    const [mobile, setmobile] = useState(false);
    const [Events, setEvent] = useState(false);
    const [News, setNews] = useState(false);
    const [Services, setServices] = useState(false);
    const [Blog, setblog] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);
            if (mobile){
                console.log('mobile is active')
            } else{
                console.log('mobile is not active')
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
     
    }, []);
    useEffect(()=>{

    },[])




    return (
        <>
            <div className="header-area header-three" style={{fontFamily:'Montserrat',textDecoration:'none'}}>
                <div className="header-top second-header d-none d-md-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4 d-none d-lg-block ">
                                <div className="header-social">
                                    <span>
                                    {/* <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right
                                        xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">

                                        </div> */}
                                        Follow us:-
                                        <Link href="https://www.facebook.com/afexhome?mibextid=ZbWKwL" title="Facebook">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link href="https://www.instagram.com/afexkenya?igsh=ODA1NTc5OTg5Nw==" title="Instagram">
                                            <i className="fab fa-instagram" />
                                        </Link>
                                        <Link href="https://x.com/AfexKenya?t=16INcDh7pyWyzWB_7AKGLQ&s=09" title="Twitter">
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link href="https://www.youtube.com/watch?v=qHXxl7KE6Ho" title="Youtube">
                                            <i className="fab fa-youtube" />
                                        </Link>
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 d-none d-lg-block text-right">
                                <div className="header-cta">
                                    <ul>
                                        <li>
                                            <div className="call-box">
                                                <div className="icon">
                                                    <img src="/assets/img/icon/phone-call.png" alt="img" />
                                                </div>
                                                <div className="text">
                                                    <span>Call Now !</span>
                                                    <strong>
                                                        <Link href="tel:+254 704 904 500">+254 704 904 500</Link>
                                                    </strong>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="call-box">
                                                <div className="icon">
                                                    <img src="/assets/img/icon/mailing.png" alt="img" />
                                                </div>
                                                <div className="text">
                                                    <span>Email Now</span>
                                                    <strong>
                                                        <Link href="/Contact">info.kenya@afexhub.co.ke</Link>
                                                    </strong>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-sticky" className={`menu-area${isScrolled ? 'menu-area sticky-menu' : ''}`}>
                    <div className="container">
                        <div className="second-menu">
                            <div className="row align-items-center">
                                <div className="col-xl-3 col-lg-3">
                                    <div className="logo">
                                       <Link href="/">
                                            <img src="/assets/img/logo/AfexLogo.jpg"  alt="logo"  width={40} height={40}/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="main-menu text-right text-xl-right " style={{textDecoration:'none'}}>
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-sub">
                                                    <Link href="/">Home</Link>
                                                   
                                                </li>
                                                <li>
                                                    <Link href="/About">About Us</Link>
                                                </li>
                                                <li className="has-sub">
                                                    <Link href="/Courses">Courses</Link>
                                                    <ul>
                                                        <li>
                                                            <Link href="/Courses/SAT">SATs</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/Courses/GRE&GMAT">GRE/GMAT</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/Courses/IELTS-TOEFL">IELTS/TOEFL</Link>
                                                        </li>
                                                     
                                                      
                                                        
                                                    </ul>
                                                </li>
                                                <li className="has-sub">
                                                    <Link href="/Events">Events</Link>
                                                    {/* <ul>
                                                        <li>
                                                            <Link href="/Events">Events</Link>
                                                        </li>
                                                       
                                                        <li>
                                                            <Link href="/projects">Gallery</Link>
                                                        </li>
                                                        
                                                        <li>
                                                            <Link href="/FAQs">FAQs</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/Tutors">Our Tutors</Link>
                                                        </li>
                                                        
                                                       
                                                    </ul> */}
                                                </li>
                                                <li className="has-sub">
                                                    <Link href="/Blog">Blog</Link>
                                                
                                                </li>
                                                <li>
                                                    <Link href="/Contact">Contact</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 text-right d-none d-lg-block text-right text-xl-right">
                                    <div className="login">
                                        <ul>
                                            <li>
                                                <Link href="#" className="menu-tigger" onClick={() => { setBtnshow(true) }}>
                                                    <i className="fal fa-search" onClick={() => { setBtnshow(true) }} />
                                                </Link>
                                            </li>
                                            <li>
                                                <div className="second-header-btn">
                                                    <Link href="/Contact" className="btn rounded-4"> Enroll now </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mobile-menu mean-container">
                                        <div className="mean-bar">
                                            <a href="#nav" onClick={() => setmobile(!mobile)} className={`meanmenu-reveal ${mobile && "meanclose"}`} style={{ right: 0, left: "auto", textAlign: "center", textIndent: 0, fontSize: 18 }} >
                                                {mobile ? "X" : <span><span><span></span></span></span>}
                                            </a>
                                            {mobile &&
                                                <nav className="mean-nav">
                                                    <ul style={{ display: "block" }}>
                                                        <li className="has-sub">
                                                            <a href="/">Home</a>
                                                          
                    
                                                        </li>
                                                        <li>
                                                            <Link href="/About">About Us</Link>
                                                        </li>
                                                        <li className="has-sub">
                                                            <Link href="/Courses">Courses</Link>
                                                            <ul>
                                                                <li>
                                                                    <Link href="/Courses/SAT">SATs</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/Courses/GRE&GMAT">GRE/GMAT</Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/Courses/IELTS-TOEFL">IELTS/TOEFL</Link>
                                                                </li>
                                                     
                                                      
                                                        
                                                    </ul>
                                                         
                                                            

                                                            <a className={`mean-expand ${mobile && "mean-clicked"}`} onClick={() => { setNews(!News) }} href="#" style={{ fontSize: 18 }}>
                                                                {News ? "-" : "+"}
                                                            </a>
                                                        </li>
                                                        <li className="has-sub">
                                                            <a href="#">Pages</a>
                                                            {Services &&
                                                                <ul style={{ display: "block" }}>
                                                                    <li>
                                                                        <Link href="/Events">Events</Link>
                                                                    </li>
                                                                
                                                                </ul>
                                                            }
                                                            <a className={`mean-expand ${mobile && "mean-clicked"}`} onClick={() => { setServices(!Services) }} href="#" style={{ fontSize: 18 }}>
                                                                {Services ? "-" : "+"}
                                                            </a>
                                                        </li>
                                                        <li className="has-sub">
                                                            <Link href="/Blog">Blog</Link>
                                                           
                                                            
                                                        </li>
                                                        <li className="mean-last">
                                                            <Link href="/Contact">Contact</Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {Btnshow &&
                <>
                    <div className={`offcanvas-menu ${"active"}`}>
                        <span className="menu-close" onClick={() => setBtnshow(false)}>
                            <i className="fas fa-times" onClick={() => setBtnshow(false)} />
                        </span>
                        <form role="search" method="get" id="searchform" className="searchform" action="http://wordpress.zcube.in/xconsulta/" >
                            <input type="text" name="s" id="search" placeholder="Search" />
                            <button>
                                <i className="fa fa-search" />
                            </button>
                        </form>
                        <div id="cssmenu3" className="menu-one-page-menu-container">
                            <ul className="menu" style={{textDecoration:'none'}}>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom" style={{textDecoration:'none'}}>
                                    <Link href="/" >Home</Link>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                    <Link href="/About">About Us</Link>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                    <Link href="/courses">Courses</Link>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                    <Link href="/pricing">Pricing </Link>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                    <Link href="/team">Teacher</Link>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                    <Link href="/projects">Gallery</Link>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                    <Link href="/Blog">Blog</Link>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                    <Link href="/Contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div id="cssmenu2" className="menu-one-page-menu-container">
                            <ul id="menu-one-page-menu-12" className="menu">
                                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                    <Link href="#home">
                                        <span>+8 12 3456897</span>
                                    </Link>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                    <Link href="#howitwork">
                                        <span>info@example.com</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`offcanvas-overly ${"active"}`}> </div>
                </>
            }
        </>
    )
}

export default Main
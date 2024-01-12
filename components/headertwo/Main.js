import React, { useState, useEffect } from 'react'
import Link from 'next/link'

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
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className="header-area header">
                <div className="header-top second-header d-none d-md-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4 d-none d-lg-block ">
                                <div className="header-social">
                                    <span>
                                        Follow us:-
                                        <Link href="#" title="Facebook">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link href="#" title="LinkedIn">
                                            <i className="fab fa-instagram" />
                                        </Link>
                                        <Link href="#" title="Twitter">
                                            <i className="fab fa-twitter" />
                                        </Link>
                                        <Link href="#" title="Twitter">
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
                                                    <img src="assets/img/icon/phone-call.png" alt="img" />
                                                </div>
                                                <div className="text">
                                                    <span>Call Now !</span>
                                                    <strong>
                                                        <Link href="tel:+917052101786">+91 7052 101 786</Link>
                                                    </strong>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="call-box">
                                                <div className="icon">
                                                    <img src="assets/img/icon/mailing.png" alt="img" />
                                                </div>
                                                <div className="text">
                                                    <span>Email Now</span>
                                                    <strong>
                                                        <Link href="mailto:info@example.com"> info@example.com</Link>
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
                                            <img src="assets/img/logo/logo.png" alt="logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="main-menu text-right text-xl-right">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-sub">
                                                    <Link href="/">Home</Link>
                                                    <ul>
                                                        <li>
                                                            <Link href="/">University</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/home-two">Kindergarten</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/home-three">High School</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="/About">About Us</Link>
                                                </li>
                                                <li className="has-sub">
                                                    <Link href="/courses">Courses</Link>
                                                    <ul>
                                                        <li>
                                                            <Link href="/courses">Courses</Link>
                                                        </li>
                                                        <li>
                                                            {" "}
                                                            <Link href="/courses-2">Courses 02</Link>
                                                        </li>
                                                        <li>
                                                            {" "}
                                                            <Link href="/single-courses">Course Details</Link>
                                                        </li>
                                                        <li>
                                                            {" "}
                                                            <Link href="/single-courses-2">Course Details 02</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-sub">
                                                    <Link href="#">Pages</Link>
                                                    <ul>
                                                        <li>
                                                            <Link href="/event">Event</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/single-event">Event Details</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/projects">Gallery</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/pricing">Pricing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/faq">Faq</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/team">Teacher</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/team-single">Teacher Details</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/404-error">404 Error</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-sub">
                                                    <Link href="/Blog">Blog</Link>
                                                    <ul>
                                                        <li>
                                                            <Link href="/Blog">Blog</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/Blog-details">Blog Details</Link>
                                                        </li>
                                                    </ul>
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
                                                    <Link href="/Contact" className="btn">
                                                        admission open
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mobile-menu mean-container">
                                        <div className="mean-bar">
                                            <Link href="#nav" onClick={() => setmobile(!mobile)} className={`meanmenu-reveal ${mobile && "meanclose"}`} style={{ right: 0, left: "auto", textAlign: "center", textIndent: 0, fontSize: 18 }} >
                                                {mobile ? "X" : <span><span><span></span></span></span>}
                                            </Link>
                                            {mobile &&
                                                <nav className="mean-nav">
                                                    <ul style={{ display: "block" }}>
                                                        <li className="has-sub">
                                                            <Link href="/">Home</Link>
                                                            {Events &&
                                                                <ul style={{ display: "block" }}>
                                                                    <li>
                                                                        <Link href="/">University</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/home-two">Kindergarten</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/home-three">High School</Link>
                                                                    </li>
                                                                </ul>
                                                            }
                                                            <Link className={`mean-expand ${mobile && "mean-clicked"}`} onClick={() => { setEvent(!Events) }} href="#" style={{ fontSize: 18 }}>
                                                                {Events ? "-" : "+"}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/About">About Us</Link>
                                                        </li>
                                                        <li className="has-sub">
                                                            <Link href="/courses">Courses</Link>
                                                            {News &&
                                                                <ul style={{ display: "block" }}>
                                                                    <li>
                                                                        <Link href="/courses">Courses</Link>
                                                                    </li>
                                                                    <li>
                                                                        {" "}
                                                                        <Link href="/courses-2">Courses 02</Link>
                                                                    </li>
                                                                    <li>
                                                                        {" "}
                                                                        <Link href="/single-courses">Course Details</Link>
                                                                    </li>
                                                                    <li>
                                                                        {" "}
                                                                        <Link href="/single-courses-2">Course Details 02</Link>
                                                                    </li>
                                                                </ul>
                                                            }

                                                            <Link className={`mean-expand ${mobile && "mean-clicked"}`} onClick={() => { setNews(!News) }} href="#" style={{ fontSize: 18 }}>
                                                                {News ? "-" : "+"}
                                                            </Link>
                                                        </li>
                                                        <li className="has-sub">
                                                            <Link href="#">Pages</Link>
                                                            {Services &&
                                                                <ul style={{ display: "block" }}>
                                                                    <li>
                                                                        <Link href="/event">Event</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/single-event">Event Details</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/projects">Gallery</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/pricing">Pricing</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/faq">Faq</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/team">Teacher</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/team-single">Teacher Details</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/404-error">404 Error</Link>
                                                                    </li>
                                                                </ul>
                                                            }
                                                            <Link className={`mean-expand ${mobile && "mean-clicked"}`} onClick={() => { setServices(!Services) }} href="#" style={{ fontSize: 18 }}>
                                                                {Services ? "-" : "+"}
                                                            </Link>
                                                        </li>
                                                        <li className="has-sub">
                                                            <Link href="/Blog">Blog</Link>
                                                            {Blog &&
                                                                <ul style={{ display: "block" }}>
                                                                    <li>
                                                                        <Link href="/Blog">Blog</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/Blog-details">Blog Details</Link>
                                                                    </li>
                                                                </ul>
                                                            }
                                                            <Link className={`mean-expand ${mobile && "mean-clicked"}`} onClick={() => { setblog(!Blog) }} href="#" style={{ fontSize: 18 }}>
                                                                {Blog ? "-" : "+"}
                                                            </Link>
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
            </header>

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
                            <ul className="menu">
                                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                    <Link href="/">Home</Link>
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
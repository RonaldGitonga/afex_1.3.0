'use client'
import React, { useState } from "react";
import  Link  from "next/link" // Make sure to import Link from 'react-router-dom' if using Bootstrap's react-router integration
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container'>
            <Link className='navbar-brand' href='/'>
              Home
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setClick(!click)}
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className={`collapse navbar-collapse ${click ? "show" : ""}`}>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <Link className='nav-link' href='/courses'>
                    All Courses
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' href='/about'>
                    About
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' href='/team'>
                    Team
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' href='/pricing'>
                    Pricing
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' href='/journal'>
                    Journal
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' href='/contact'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className='start'>
              <div className='button'>GET CERTIFICATE</div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

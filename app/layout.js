import '@/app/home.css'

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import AuthProvider from "@/context/AuthProvider";
import { Toaster } from "react-hot-toast";
import Link from 'next/link'


import "@/app/front.css"
import "@/app/globals.css"



// //qeducato styles
 import '@/public/assets/css/bootstrap.min.css'
 import '@/public/assets/css/animate.min.css'
import '@/public/assets/css/magnific-popup.css'
import '@/public/assets/fontawesome/css/all.min.css'
import '@/public/assets/css/dripicons.css'
import '@/public/assets/css/slick.css'
 import '@/public/assets/css/meanmenu.css'
 import '@/public/assets/css/default.css'
import '@/public/assets/css/style.css'
 import '@/public/assets/css/responsive.css'
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapClient from '@/components/BootstrapClient';
// Supports weights 100-900
import '@fontsource-variable/montserrat';


// const montserrat=Montserrat({
//   subsets:['latin'],
//   display:'swap',
//   variable:'--font-montserrat',
// })
// export const metadata = {
//   title: "AFEX HUB",
//   description: "Kenya's Premier Test Prep Centre",
// };
export async function generateMetadata({params}){
  return{
    title:'Afex Hub',
    description:'College SAT,IELTS,GMAT Prep'
  }


}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className>
      <body >
        <AuthProvider>
          <Toaster position="top-center" reverseOrder={false}/>
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />


      {children}
      <div>
      <footer>
     <div className='container my-5'>
       <div className='row d-flex justify-content-between align-items-center'>
         <div className='col-md-4'>
           <Link href="/Contact">
             <button type='button' className='btn btn-outline-danger btn-lg mb-5 mb-md-4'>Get In Touch</button>
           </Link>
           <ul className='footer-social-icons list-unstyled d-flex justify-content-between'>
             <Link href="https://www.facebook.com/afexhome?mibextid=ZbWKwL">
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#af3d2c" class="bi bi-facebook" viewBox="0 0 16 16">
                   <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                 </svg>
               </li>
             </Link>
             <Link href="https://www.instagram.com/afexkenya/?igsh=ODA1NTc5OTg5Nw%3D%3D">
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#af3d2c" class="bi bi-instagram" viewBox="0 0 16 16">
                   <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                 </svg>
               </li>
             </Link>
             <Link href="https://www.tiktok.com/@afexkenya?_t=8km8f9jbqtS&_r=1">
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#af3d2c" class="bi bi-twitter" viewBox="0 0 16 16">
                   <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                 </svg>
               </li>
             </Link>
             <Link href="https://www.youtube.com/watch?v=qHXxl7KE6Ho">
               <li>
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#af3d2c" class="bi bi-youtube" viewBox="0 0 16 16">
                   <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z"/>
                 </svg>
               </li>
             </Link>
           </ul>
         </div>
         <div className='col-md-7 col-lg-6'>
           <div className='d-row d-md-flex justify-content-between align-items-center'>
             <div className='col-12 col-md-6 col-lg-5 mb-5 mt-4 my-md-0'>
               <ul className='footer-navigation list-unstyled mb-0 'style={{color:'#1a457e'}}>
                 <Link href="/" className='text-decoration-none text-danger'>
                   <li className='text-uppercase fw-semibold'>Home</li>
                 </Link>
                 <Link href="/Courses" className='text-decoration-none text-danger'>
                   <li className='text-uppercase fw-semibold'>Our courses</li>
                 </Link>
                 <Link href="/About" className='text-decoration-none text-danger'>
                   <li className='text-uppercase fw-semibold'>About us</li>
                 </Link>
                 <Link href="/Blog" className='text-decoration-none text-danger'>
                   <li className='text-uppercase fw-semibold'>Blog</li>
                 </Link>
                 <Link href="/Contact" className='text-decoration-none text-danger'>
                   <li className='text-uppercase fw-semibold'>Get In Touch</li>
                 </Link>
               </ul>
             </div>
             <div className='col-12 col-md-6 col-lg-7'>
               <ul className='list-unstyled mb-0'>
                 <li>
                   <p>Westcom Point- Mahiga Mairu Av., Nairobi</p>
                 </li>
                 <li>
                   <p>Phone Number - (+254)704904500</p>
                 </li>
                 <li>
                   <p>Email - info.kenya@afexhub.co.ke</p>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div className='bg-body-tertiary'>
       <div className='container'>
         <p className='p-3 m-0 text-center'>© 2023 Afex Hub Kenya | All Rights Reserved </p>
       </div>
     </div>
   </footer>
</div>
    
      <BootstrapClient/>

        </AuthProvider>
      </body>
    </html>
  );
}

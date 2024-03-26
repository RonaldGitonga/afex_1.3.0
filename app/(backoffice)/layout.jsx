
// import Navbar from "@/app/ui/dashboard/navbar/navbar"
// import Sidebar from "@/app/ui/dashboard/sidebar/sidebar";
import React from "react";
import styles from "@/app/ui/dashboard/dashboard.module.css"
import Header from '@/components/headertwo/Main'







export default function Layout({ children }) {
  return (
    <div>
      <Header/>
      {children}
      
    </div>


  );
}

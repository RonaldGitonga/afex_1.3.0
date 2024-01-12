"use client"
import React from 'react'
import styles from "@/app/ui/dashboard/sidebar/sidebar.module.css";
import { signOut } from 'next-auth/react';
import { MdLogout } from 'react-icons/md';

const SignOut = () => {
  return (
    <div>
     <button onClick={()=>signOut()}className={styles.logout}>
          <MdLogout />
          Logout
    </button>
    </div>
  )
}

export default SignOut;
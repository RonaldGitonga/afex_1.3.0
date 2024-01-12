'use client'
import {signOut} from 'next-auth/react'
import styles from "../../ui/dashboard/sidebar/sidebar.module.css";
import {useRouter} from 'next/navigation'
import {MdLogout} from 'react-icons/md'

function signOutUser(){
    const router=useRouter()
    signOut();
    router.push('/')
}
const signOutButton=()=>{
    <div>
        <button className={styles.logout} onClick={()=>{signOutUser()}}>
            <MdLogout />
            Logout
        </button>
  </div>
  }
  export default signOutButton;
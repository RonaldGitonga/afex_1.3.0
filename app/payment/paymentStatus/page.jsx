'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


import React from 'react'

const paymentStatus = () => {
    const [paymentStatus,setPaymentStatus]=useState(false)

    const router=useRouter();
    useEffect(() => {
     // Example: Axios fetch request
      const checkPaymentStatus = async () => {
       
        try {
    
          const response = await axios.get('/api/pesapal/checkPaymentStatus',orderID);
          // Handle the response data as needed
          if(response.status_code==1){
            setPaymentStatus(true)
           alert('Payment successful')
           console.log(response);
           router.push('/dashboard')
          
          } else{
            if(response.status_code==0){
                console.log(response);
                alert('Payment Unsuccessful.Please Try Again.')
            }
          }
        
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };


    
      // Uncomment the line below to call the function when the component mounts
    checkPaymentStatus();
    
    
    }, []); 
    // Dependency array, add dependencies if needed

    return(
        <div>
            Checking For Payment Confirmation.

        </div>
    )
}
export default paymentStatus;

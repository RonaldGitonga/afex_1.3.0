'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import IframeComponent from '@/components/analytics/IframeComponent';


const PaymentForm =() => {
  const router=useRouter();

  const [redirectUrl, setRedirectUrl] = useState('');

  //to confirm payment
  const [paymentStatus,setPaymentStatus]=useState(false)
  const [orderID,setOrderID]=useState('')
  const[paymentToken,setPaymentToken]=('')
  const[responseMessage,setResponseMessage]=('');



  const [merchantReference,setMerchantReference]=useState('')
  //check status of payments
  useEffect(() => {
    // Example: Axios fetch request
     const checkPaymentStatus = async () => {
      
       try {

          const body={orderID,paymentToken}
         const response = await axios.get('/api/pesapal/checkPaymentStatus',body);
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
   
   
   }, [orderID]); 


  const merchantreference = Math.floor(Math.random() * 10000000000)

//form for submit request
  const initialFormData = {
    id: JSON.stringify(merchantreference),
    currency: 'KES',
    amount: 10,
    description: 'SAT',
    callback_url: 'https://526f-41-212-41-131.ngrok-free.app/payment/makePayment',
    notification_id: 'ad56b548-81d5-4277-9238-ddc1ba3a60b0',
    billing_address: {
      email_address: 'rgatuiku@gmail.com',
      phone_number: '+254728033429',
      country_code: '',
      first_name: 'Ronald',
      middle_name: '',
      last_name: 'Gitonga',
      line_1: '',
      line_2: '',
      city: '',
      state: '',
      postal_code: null,
      zip_code: null,
    },
  };
  const [formData, setFormData] = useState(initialFormData);





  const handleSubmit = async (event) => {
    event.preventDefault();

    try 
    {
     
      const response = await axios.post(
        '/api/pesapal/submitPaymentOrder',
        formData
      
      );

      setRedirectUrl(response.data.redirect_url);
      setOrderID(response.data.order_tracking_id)
      setPaymentToken(response.data.token)

    } catch (error) {
      console.error(error);
      setResponseMessage('Error submitting order request');
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleBillingInputChange = (field, value) => {
    setFormData({
      ...formData,
      billing_address: {
        ...formData.billing_address,
        [field]: value,
      },
    });
  };


  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-600">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={(e) => handleInputChange('amount', e.target.value)}
            className="mt-1 p-2 border rounded-md w-full text-black"
          />
        </div>

        {/* Add other form fields similarly */}
       <button
          type="submit"
           //disabled={paymentStatus}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Make Payment
        </button>
      </form>
    {/* Response Iframe */}
    {redirectUrl && (
      // console.log(responseMessage);
        <div style={{width:'400px',height:'400px'}}>
          <IframeComponent redirect_url={redirectUrl}/>
    
     {/* <a className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'href={responseMessage.redirect_url}>{responseMessage}</a> */}
       </div>
       )}
   
    </div>

    
  );
};

export default PaymentForm;

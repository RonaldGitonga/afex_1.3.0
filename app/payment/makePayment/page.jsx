'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


const PaymentForm =() => {


  const merchantreference = Math.floor(Math.random() * 10000000000)

//form for submit request
  const initialFormData = {
    id: JSON.stringify(merchantreference),
    currency: 'KES',
    amount: 10,
    description: 'SAT',
    callback_url: 'https://ada6-41-212-41-131.ngrok-free.app/payment/paymentStatus',
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
  const [responseMessage, setResponseMessage] = useState('');
  const [orderID,setOrderID]=useState('')
  const [merchantReference,setMerchantReference]=useState('')



  const handleSubmit = async (event) => {
    event.preventDefault();

    try 
    {
     
      const response = await axios.post(
        '/api/pesapal/submitPaymentOrder',
        formData
      
      );

      setResponseMessage(response.data);
      setOrderID(response.data.order_tracking_id)
      console.log(responseMessage)
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
           disabled={paymentStatus}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit Order Request
        </button>
      </form>

      {responseMessage && (
        <div>
    
     <a className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'href={responseMessage}>{responseMessage}</a>
       </div>)}
    </div>
  );
};

export default PaymentForm;

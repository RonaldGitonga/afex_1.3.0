'use client'
import React, { useState } from 'react';
import axios from 'axios';

const IPNRegistrationComponent = () => {
  const [registrationStatus, setRegistrationStatus] = useState('');

  const registerIPN = async () => {
    try {
      const data = {
        url: 'https://5a24-41-212-41-131.ngrok-free.app/payment/registerIPN',
        ipn_notification_type: 'GET',
      };

      const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhIjoiZWQ2MTkwMGYtZGNiMy00NjM2LWIxNGUtY2U1MGQwYzk2M2I1IiwidWlkIjoicWtpbzFCR0dZQVhUdTJKT2ZtN1hTWE5ydW9ac3JxRVciLCJuYmYiOjE3MDY4MTMxNzksImV4cCI6MTcwNjgxNjc3OSwiaWF0IjoxNzA2ODEzMTc5LCJpc3MiOiJodHRwOi8vY3licWEucGVzYXBhbC5jb20vIiwiYXVkIjoiaHR0cDovL2N5YnFhLnBlc2FwYWwuY29tLyJ9.NakVTFT7Z679T8g26qBz07APzNKY7aGT1B9WwSFDH4E'

      const response = await axios.post(
        'https://cybqa.pesapal.com/pesapalv3/api/URLSetup/RegisterIPN',
        data,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
        console.log(response)
      setRegistrationStatus(JSON.stringify(response.data.ipn_id));
    } catch (error) {
      console.error(error);
      setRegistrationStatus('Error');
    }
  };

  return (
    <div>
      <h1>Pesapal IPN Registration</h1>
      <button onClick={registerIPN}>Register IPN</button>
      <p>Status: {registrationStatus}</p>
    </div>
  );
};

export default IPNRegistrationComponent;

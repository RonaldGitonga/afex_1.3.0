'use client'
import React, { useState } from 'react';
//import {saveResponseToFile} from '../lib/actions'

const MyComponent = () => {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const handleButtonClick = async () => {
    try {
      const response = await fetch('https://cybqa.pesapal.com/pesapalv3/api/Auth/RequestToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          "consumer_key": "qkio1BGGYAXTu2JOfm7XSXNruoZsrqEW", // Replace with your actual consumer key
          "consumer_secret":"osGQ364R49cXKeOYSpaOnT++rHs=", // Replace with your actual consumer secret
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResponseData(data);
      //saveResponseToFile(data)
      setError(null);
    } catch (error) {
      setResponseData(null);
      setError(error.message || 'Failed to fetch data');
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Fetch Data</button>

      {responseData && (
        <div>
          <h2>Response Data</h2>
          <pre>{JSON.stringify(responseData.token, null, 2)}</pre>
        </div>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default MyComponent;

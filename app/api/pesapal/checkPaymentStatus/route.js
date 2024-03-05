import {getAccessToken} from '@/lib/actions'
import axios from 'axios';
import { NextResponse } from "next/server";
export async function GET(req){
    const pesaPalToken=await getAccessToken()
    const orderId=req.body

    try {
        // Replace 'https://api.example.com/data' with your actual API endpoint
        const apiUrl = `https://cybqa.pesapal.com/pesapalv3/api/Transactions/GetTransactionStatus?orderTrackingId=${orderId}`;
    
        const response = await axios.get(apiUrl,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${pesaPalToken}`
                  },

            },);
    
        // Handle the response data as needed
        console.log('Incoming payment status response')
        console.log(response);
        return new Response(JSON.stringify(response))
      } catch (error) {
        // Handle errors
        console.error('Error fetching transaction data:', error.message);
      }
}
import {getAccessToken} from '@/lib/actions'
import axios from 'axios';
import { NextResponse } from "next/server";
export async function GET(req,res){
    // const pesaPalToken=await getAccessToken()
    const body=await req.body()
    
    console.log('request body incoming')
    console.log (body);
    try {
        // Replace 'https://api.example.com/data' with your actual API endpoint
        const apiUrl = `https://cybqa.pesapal.com/pesapalv3/api/Transactions/GetTransactionStatus?orderTrackingId=0e4a2a16-894f-46e9-b123-dd6099fe2637`;
    
        const response = await axios.get(apiUrl,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${body.token}`
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
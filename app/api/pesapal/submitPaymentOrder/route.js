import axios from "axios";

import {getAccessToken} from "@/lib/actions"
export async function POST(req,res){
    const body=await req.json()
    try 
    {
        const pesaPalToken=await getAccessToken();

        console.log('my pesapal token is: ',pesaPalToken)

         const response = await axios.post(
        'https://cybqa.pesapal.com/pesapalv3/api/Transactions/SubmitOrderRequest',
        body,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${pesaPalToken}`
          },
        })
        const paymentData={...response.data,token:pesaPalToken};

        
        console.log(paymentData);

      return new Response(JSON.stringify(paymentData))
      
    }
       catch (error) {
        console.log('Failed to obtain url')
        throw new Error(error)
      
       
      }

      
  };
 
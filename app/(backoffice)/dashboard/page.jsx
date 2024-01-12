import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from 'react';

export default async function dashboardpage(){
    //Protecting pages on the Server Side
    const session=await getServerSession(authOptions);

    if(!session){
        redirect('/login')
    }
    console.log(session)
    return(
        <div>
            
        </div>
    )
}
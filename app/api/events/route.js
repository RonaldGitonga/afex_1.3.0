import { connectToDB } from "@/lib/utils/connectToDb";
import { NextResponse } from "next/server";
import { Event } from "@/lib/models";



//Create New Event
export async function POST(request){
    const data=await request.json()
 
    const{title,date,time,location,description,image}=data


    try {
        connectToDB()

        //check if event already exists
        const existingEvent = await Event.findOne({title:title});
        if (existingEvent) {
            console.log('Event Already Exists')
            return NextResponse.json(
              {
                data: null,
                message: `Event With This Title ( ${title})  already exists in the Database`,
              },
              { status: 409 }
            );
          }
          else{
            console.log('Event Title is Unique')
          }
        //save New Event 

        const newEvent = new Event({
            date,
            title,
            time,
            location,
            description,
            image,
        
          });
      
          await newEvent.save();
          console.log(newEvent)
          console.log('Event Saved')
        return NextResponse.json(
            {
    
              message: "Event Created Successfully",
            },
            { status: 201 }
          );  
        
    } catch (error) {
        return NextResponse.json(
            {
              error,
              message: "Server Error: Something went wrong",
            },
            { status: 500 }
          );
    }
}
import { connectToDB } from "@/lib/utils/connectToDb";
import { NextResponse } from "next/server";
import { Course } from "@/lib/models";



//Create New Course
export async function POST(request){
    const data=await request.json()
 
    const{title,price,weeks,intake,desc,cohort,days,image}=data


    try {
        connectToDB()

        //check if Course already exists
        const existingCourse = await Course.findOne({title:title});
        if (existingCourse) {
            console.log('Course Already Exists')
            return NextResponse.json(
              {
                data: null,
                message: `Course With This Title ( ${title})  already exists in the Database`,
              },
              { status: 409 }
            );
          }
          else{
            console.log('Course Title is Unique')
          }
        //save New Course 

        const newCourse = new Course({
            title,
            desc,
            price,
            days,
            cohort,
            intake,
            weeks,
            image
        
          });
      
          await newCourse.save();
          console.log(newCourse)
          console.log('Course Saved')
        return NextResponse.json(
            {
    
              message: "Course Created Successfully",
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
import { fetchBlogs } from "@/lib/data"
import React from 'react'
import { connectToDB } from "@/lib/utils/connectToDb";
import { NextResponse } from "next/server";
import { Blog } from "@/lib/models";

//Create New Course
export async function GET(request){
    const data=await request.json()
 
    const{id,name,description,image,createdAt}=data


    try {
        connectToDB()

        //check if Course already exists
        const Blogs = await Blog.find({id:{}});
        if (blogs) {
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
            image,
            noOfModules,
        
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
import { connectToDB } from "@/lib/utils/connectToDb";
import { NextResponse } from "next/server";
import { Blog } from "@/lib/models";



//Create New Blog
export async function POST(request){
    const data=await request.json()
 
    const{name,description,image}=data


    try {
        connectToDB()

        //check if Blog already exists
        const existingBlog = await Blog.findOne({name:name});
        if (existingBlog) {
            console.log('Blog Already Exists')
            return NextResponse.json(
              {
                data: null,
                message: `Blog With This Title ( ${name})  already exists in the Database`,
              },
              { status: 409 }
            );
          }
          else{
            console.log('Blog Title is Unique')
          }
        //save New Blog 

        const newBlog = new Blog({
            name,
            description,
            image
        
          });
      
          await newBlog.save();
          console.log(newBlog)
          console.log('Blog Saved')
        return NextResponse.json(
            {
    
              message: "Blog Created Successfully",
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
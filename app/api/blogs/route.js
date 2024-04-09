import { connectToDB } from "@/lib/utils/connectToDb";
import { NextResponse } from "next/server";
import { Blog } from "@/lib/models";
import { fetchBlogs } from "@/lib/data";



//Create New Blog
export async function POST(request){
    const data= await request.json()
    const{name,description,image}=data

      //console log each field
      console.log('Params from client side')
      console.log(name)
      console.log(description)
      console.log(image)
      console.log('end of params')
 



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
            image,
        
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

//get all blogs dashboard

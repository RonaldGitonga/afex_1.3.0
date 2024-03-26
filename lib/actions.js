'use server'
import { getServerSession } from "next-auth";
import  {authOptions} from '@/lib/authOptions'
import { revalidatePath } from "next/cache";
import { Course,User,Blog } from "../lib/models";
import { connectToDB } from "./utils/connectToDb";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import axios from "axios";



export const addUser = async (formData) => {
  const { firstName,lastName, email, password, phoneNumber, address, role, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      hashedPassword,
      phoneNumber,
      address,
      role,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, role, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      role,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addCourse = async (formData) => {
  const { title, desc, price, weeks, intake, cohort,days,image,noOfModules } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newCourse = new Course({
      title,
      desc,
      price,
      days,
      cohort,
      intake,
      weeks,
      noOfModules,
      image,
  
    });

    await newCourse.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create course!");
  }

  revalidatePath("/dashboard/courses");
  redirect("/dashboard/courses");
};

export const updateCourse = async (formData) => {
  const { id, title, desc, price, days, cohort, intake,weeks,image,noOfModules } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      desc,
      price,
      days,
      cohort,
      intake,
      weeks,
      image,
      noOfModules,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Course.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update course!");
  }

  revalidatePath("/dashboard/courses");
  redirect("/dashboard/courses");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/courses");
};

export const deleteCourse = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Course.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete course!");
  }

  revalidatePath("/dashboard/courses");
};
//blog actions

export const deleteBlog = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Blog.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete course!");
  }

  revalidatePath("/dashboard/blogs");
};
// export const addBlog=async(formData)=>{
//   const { title, description, slug, date, file} =
//   Object.fromEntries(formData);

//   if (!file){
//     throw new Error ('No file uploaded!')

//   }
//   const bytes=await file.arrayBuffer()
//   const buffer=Buffer.from(bytes)

//   const path=join('/','tmp',file.name)
//   await writeFile(path,buffer)
//   console.log(`open ${path} to see the uploaded file`)
 
//     try {
//    connectToDB();

//   const newBlog = new Blog({
//      title,
//      description,
//      slug,
//      date,
  
//    });

//    await newBlog.save();
//   console.log('Blog Saved Successfully')
 
//  } catch (err) {
 
//    console.log(err);
//    throw new Error("Failed to create blog!");
 
//  }
// }



//EVENT ACTIONS
export const addEvent = async (formData) => {
  const { title, description,date,time,location,image } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newEvent = new Event({
      date,
      title,
      time,
      location,
      description,
      image,
  
    });

    await newEvent.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create event!");
  }

  revalidatePath("/dashboard/events");
  redirect("/dashboard/events");
};



export async function getSession() {
  return await getServerSession(authOptions)
  
}

//get current
export  async function getCurrentUser(){
    try {  
        const session=await getSession()

        if(!session?.user?.email){
            return null
        }

        const currentUser= await User.find({
            where:{
                email:session.user.email 

            }
    })

        if(!currentUser){
          return null
        }

        return{
            ...currentUser,
            createdAt:currentUser.createdAt.toISOString(),
            updatedAt:currentUser.updatedAt.toISOString(),
            emailVerified:currentUser.emailVerified?.toISOString() || null,
      


        }


    }
        catch (error) {
        return null
    }
}

// export  async function getCurrentUserInfo(){
//   try {  
//       const session=await getSession()

//       if(!session?.user?.email){
//           return null
//       }

//       const currentUser= await User.find({
//           where:{
//               email:session.user.email 

//           }
//   })

//       if(!currentUser){
//           return null
//       }

//       return{
//           ...currentUser,
  
//           username:currentUser.username,
//           userRole:currentUser.role,
//           userImage:currentUser.image,


//       }


//   }
//       catch (error) {
//         throw new Error(error);
//   }
// }


//get blogs many
export default async function getBlogs(){
  try {

    const blogs = await Blog.find().sort({ createdAt: 'desc' });

      const safeBlogs=blogs.map((blog)=>({
          ...blog,
          createdAt:blog.createdAt.toISOString()
      }))
      return safeBlogs;

      
  } catch (error) {
      throw new Error(error)
  }
}
    

  //get Access Token 
  export const getAccessToken = async () => {

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
      const accessToken=data.token;
      return accessToken;
      
    } catch (error) {
     
      throw new Error(error.message || 'Failed to fetch Token data');
    }
    }

    //get IPN ID
    export const getIpnID=async()=>{
      const accessToken=await getAccessToken()
    console.log('The access token returned is '+ accessToken)
    try {
      const data = {
        url: 'https://e50a-41-212-41-131.ngrok-free.app/payment/registerIPN',
        ipn_notification_type: 'GET',
      };
    
    
      const response = await axios.post(
        'https://cybqa.pesapal.com/pesapalv3/api/URLSetup/RegisterIPN',
        data,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${{accessToken}}`,
          },
        }
      );
    
      const ipn_ID=JSON.stringify(response.data.ipn_id)
      console.log ('the new ipn_id is from actions is '+ipn_ID);
    
     
      return ipn_ID;
    } catch (error) {
      console.error(error);
      throw new Error("did not recieve IPN id")
    }
    
    
    };
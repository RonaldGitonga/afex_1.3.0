'use client'
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { UploadDropzone} from '@/lib/uploadthing';
import { useRouter } from "next/navigation";
import styles from "@/app/ui/dashboard/blogs/addBlog/addBlog.module.css"



export default function AddBlogPage(){
//router
const router=useRouter()

//form data
const [formData, setFormData] = useState({
  title:'',
  price: '',
  weeks: '',
  intake: '',
  cohort: '',
  desc:'',
  days:'',

});
const[imageUrl,setImageUrl]=useState('')
const[loading,setLoading]=useState(false)
const [blogErr, setblogErr] = useState("");

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append('name', formData.name);
  data.append('description', formData.descrption);
  data.append('image', imageUrl);

  const myData=Object.fromEntries(data)

  try {
 
    console.log('sending myData')
     console.log(myData)
   
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/api/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body:JSON.stringify(myData),
    });

    const responseData = await response.json();

    if (response.ok) {
      setLoading(false);
      toast.success("Blog Created Successfully");
      reset();
      router.push("/dashboard/blogs");
    } else {
      setLoading(false);
      if (response.status === 409) {
        setblogErr("This blog already exists");
        toast.error("This blog already exists");
      } else {
        // Handle other errors
        console.error("Server Error:", responseData.message);
        toast.error("Oops Something Went wrong");
      }
    }
  } catch (error) {
    setLoading(false);
    console.error("Network Error:", error);
    toast.error("Something Went wrong, Please Try Again");
  }
}
return(
  <div className={styles.container}>
  <form onSubmit={handleSubmit} className={styles.form}>
      

          <input placeholder="Blog Title" id="name" type="text" name="name" onChange={handleChange} />
          <input  placeholder="Blog Content/Description" id="description" type="text" name="description"  onChange={handleChange} />
          <UploadDropzone
        name ='image'
        endpoint="imageUploader"
       
        
        onClientUploadComplete={(res) => {
          // Do something with the response
           setImageUrl(res[0].url)
      
           console.log(imageUrl);
          alert("Upload Completed");
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

          <button className='mt-20' type="submit">Submit</button>
          </form>
       </div>

)  
}
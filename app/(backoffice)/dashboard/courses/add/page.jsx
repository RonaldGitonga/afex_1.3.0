'use client'
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { UploadDropzone} from '@/lib/uploadthing';
import { useRouter } from "next/navigation";

import styles from "@/app/ui/dashboard/courses/addcourse/addcourse.module.css";



const AddCoursePage = () => {
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
  noOfModules:'',

});
const[imageUrl,setImageUrl]=useState('')
const[loading,setLoading]=useState(false)
const [courseErr, setCourseErr] = useState("");

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append('title', formData.title);
  data.append('price', formData.price);
  data.append('weeks', formData.weeks);
  data.append('intake', formData.intake);
  data.append('cohort', formData.cohort);
  data.append('desc', formData.desc);
  data.append('days', formData.days);
  data.append('image', imageUrl);
  data.append('noOfModules', formData.noOfModules);

  const myData=Object.fromEntries(data)

  try {
 
    console.log('sending myData')
     console.log(myData)
   
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/api/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body:JSON.stringify(myData),
    });

    const responseData = await response.json();

    if (response.ok) {
      setLoading(false);
      toast.success("Course Created Successfully");
      reset();
      router.push("/dashboard/courses");
    } else {
      setLoading(false);
      if (response.status === 409) {
        setCourseErr("This Course already exists");
        toast.error("This Course already exists");
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



  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
       

    

        <input type="text" placeholder="title" name="title" required onChange={handleChange} />
        <select name="days" id="days" onChange={handleChange}>
          <option value="general">Choose Days</option>
          <option value="Tuesdays & Thursdays">Tuesdays & Thursdays</option>
          <option value="Saturdays">Saturdays</option>
          <option value="Monday,Wednesday,Friday">Monday,Wednesday,Friday</option>
          <option value="Tuesday,Thursday,Saturday">Tuesday,Thursday,Saturday</option>
        </select>

        <input type="number" placeholder="price" name="price" required onChange={handleChange} />
        <input type="number" placeholder="weeks" name="weeks" required onChange={handleChange}/>
        <input type="text" placeholder="intake" name="intake" onChange={handleChange}/>
        <input type="text" placeholder="cohort" name="cohort" onChange={handleChange}/>
        <input type="number" className='h-30px' placeholder="No.Of Modules" name="noOfModules" onChange={handleChange}/>
       



       <label className="block mb-4 ">
        <span className="text-white">Picture:</span>

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
      </label>
   
        <textarea
          required
          name="desc"
          id="desc"
          rows="14"
          placeholder="Description"
          onChange={handleChange}
        ></textarea>
   
        <button type="submit">Create Course</button>
      </form>
    </div>
  );
};

export default AddCoursePage;

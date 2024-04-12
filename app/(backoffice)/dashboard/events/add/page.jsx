'use client'
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { UploadDropzone} from '@/lib/uploadthing';
import { useRouter } from "next/navigation";



const EventForm = () => {
  const router=useRouter()
  const [formData, setFormData] = useState({
    title:'',
    date: '',
    time: '',
    location: '',
    description: '',
    link:'',

  });
  const[imageUrl,setImageUrl]=useState('')
  const[loading,setLoading]=useState(false)
  const [eventErr, setEventErr] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', formData.title);
    data.append('date', formData.date);
    data.append('time', formData.time);
    data.append('location', formData.location);
    data.append('description', formData.description);
    data.append('image', imageUrl);
    data.append('link', formData.link);


    const myData=Object.fromEntries(data)

    try {
      // console.log('dat to be sent via API')
      // console.log(JSON.stringify(data));
      console.log('sending myData')
      console.log(myData)
     
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/events`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body:JSON.stringify(myData),
      });

      const responseData = await response.json();

      if (response.ok) {
        setLoading(false);
        toast.success("Event Created Successfully");
        reset();
        router.push("/dashboard/events");
      } else {
        setLoading(false);
        if (response.status === 409) {
          setEventErr("This Event already exists");
          toast.error("This Event already exists");
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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-lg text-black">
        <label className="block mb-4">
        <span className="text-gray-700">Title:</span>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          className="mt-1 p-2 block w-full rounded-md border-gray-300 text-black"
        />
        </label>
      <label className="block mb-4">
        <span className="text-gray-700">Date:</span>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          className="mt-1 p-2 block w-full rounded-md border-gray-300"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Time:</span>
        <input
          type="time"
          name="time"
          onChange={handleChange}
          className="mt-1 p-2 block w-full rounded-md border-gray-300"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Location:</span>
        <input
          type="text"
          name="location"
          onChange={handleChange}
          className="mt-1 p-2 block w-full rounded-md border-gray-300"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Description:</span>
        <textarea
          name="description"
          onChange={handleChange}
          className="mt-1 p-2 block w-full rounded-md border-gray-300 text-black"
        ></textarea>
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Google Form Link:</span>
        <input
          type="text"
          name="link"
          onChange={handleChange}
          className="mt-1 p-2 block w-full rounded-md border-gray-300 text-black"
        />
        </label>
      <label className="block mb-4">
        <span className="text-gray-700">Picture:</span>

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
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Create Event
      </button>
    </form>
  );
};

export default EventForm;

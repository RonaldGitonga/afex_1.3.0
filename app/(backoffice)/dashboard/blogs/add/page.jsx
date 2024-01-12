'use client'
import React, { useState} from 'react';
import axios from 'axios';
import ImageUpload from '@/components/Input/ImageUpload'
import Input from "@/components/Input/Input"
import { useRouter } from "next/navigation"




//create object for states makes it easier and neater
const initialState={
  name:'',
  imageSrc:'',
  description:''

}

export default function page(){
  const [state,setState]=useState(initialState);
  const router=useRouter()

const setCustomValue=(id,value)=>{
  setState((prevValues)=>({
      ...prevValues,
      [id]:value
  }))
}

function handleChange(event){
  setState({...state,[event.target.name]:event.target.value})
}

const onSubmit=(event)=>{
  event.preventDefault()

  axios.post('/api/blogs',state)
  .then(()=>{
      router.push('/dashboard/blogs')
  })
  .catch((err)=>{
      throw new Error(err)
  })

  router.refresh()

}
return(
  <form onSubmit={onSubmit} className='w-[600px] h-[700px] mx-auto py-12'>
      <div>
          <ImageUpload value={state.imageSrc} onChange={(value)=>setCustomValue('imageSrc',value)}/>
      </div>

       <div className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
          <Input placeholder="Blog Title" id="name" type="text" name="name"value={state.name} onChange={handleChange} />
          <Input big placeholder="Blog Content/Description" id="description" type="text" name="description" value={state.description} onChange={handleChange} />
          <div>
         
          </div>

          <button type="submit">Submit</button>
       </div>
  </form>
)  
}
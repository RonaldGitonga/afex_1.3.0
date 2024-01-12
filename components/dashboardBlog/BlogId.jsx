'use client'
import axios from "axios";
import Image from "next/image";
import React,{useState} from 'react'
import ImageUpload from "../Input/ImageUpload";
import Input from "../Input/Input";
import { useRouter } from "next/navigation";





const initialState={
    name:'',
    description:'',
    imageSrc:''

}

export default function BlogId({name,description,imageSrc,blogId}){
    const router=useRouter()
    const [state,setState]=useState(initialState)
    const [onActive,setOnActive]=useState(false)

    const setCustomValue=(id,value)=>{
        setState((prevValues)=>({
            ...prevValues,
            [id]:value
        }))
    }
    function handleChange(event){
        setState({...state,[event.target.name]:event.target.value})
    }

    const deleteBlog=()=>{
        axios.delete(`/api/blogs/${blogId}`)
        .then(()=>{
            router.refresh()
        })
        .catch((error)=>{
            throw new Error(error)
        })
        .finally(()=>{
            router.push('/')

        })
    }

    const onSubmit=(event)=>{
        event.preventDefault()
    
        axios.put(`/api/blogs/${blogId}`,state)
        .then(()=>{
            router.push('/')
        })
        .catch((err)=>{
            throw new Error(err)
        })
    
        router.refresh()
    
    }

    return(
        <div className="w-[500px] mx-auto py-16 bg-blue-200 px-12 flex flex-col gap-4">
            <div className="flex flex-col border-b-2">
                <span>{name}</span>

            </div>
            <div>
                <span>{description}</span>
            </div>

            <div>
                <Image src={imageSrc} width={400} height={400} alt="image"></Image>
            </div>

            <div className="flex justify-center gap-2">
                 <button className="uppercase" onClick={()=>setOnActive(!onActive)}>edit</button>
                 <button className="uppercase" onClick={deleteBlog}>Delete</button>
            </div>

            {onActive &&(
                <form onSubmit={onSubmit}>
                    <div>
                        <ImageUpload value={state.imageSrc} onChange={(value)=>setCustomValue('imageSrc',value)} />
                    </div>
                    <div className="flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2" >
                    <Input placeholder="Blog Header" id="name" type="text" name="name"value={state.name} onChange={handleChange} />
                    <Input big placeholder="Blog Content/Description" id="description" type="text" name="description" value={state.description} onChange={handleChange} />


                    </div>

                    <button type="submit">Submit</button>

                </form>
            )}

        </div>
    )
}
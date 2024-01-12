'use client'

import Image from "next/image"
import{RiDeleteBin5Line} from 'react-icons/ri'
import{BsFillPencilFill} from 'react-icons/bs'
import { useRouter } from "next/navigation"
import axios from "axios"





function SingleBlog({data,key}) {
    const router=useRouter()

    const deleteBlog=()=>{
        axios.delete(`/api/blogs/${data.id}`)
        .then(()=>{
            router.refresh()
        })
        .catch((error)=>{
            throw new Error(error)
        })
        .finally(()=>{
            router.push('/dashboard/blogs')

        })
    }
  return (
    <div className='w-[1100px] border-2 p-4'>
        <div>
            <div className='flex gap-2 justify-between items-center'>
                <Image src={data.imageSrc}width={400} height={300} alt='Blog Image'/>

                <div className="w-[530px] flex flex-col gap-4 leading-[1.5 ]">
                    <h1>{data.name}</h1>
                    <p>{data.description}</p>
                </div >
           
                        <div className=" flex items-center gap-4 mt-4  ">
                            <RiDeleteBin5Line onClick={deleteBlog} className="cursor-pointer text-[1.5rem]"/>
                            <BsFillPencilFill onClick={()=>router.push(`/blogs/${data.id}`)} className="cursor-pointer text-[1.2rem]"/>
                        </div>
               

            </div>
        </div>
        
    </div>
  )
}

export default SingleBlog
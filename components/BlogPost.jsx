'use client'
import { useSession } from "next-auth/react"
import { useEffect,useContext,useState } from "react"
import Image from "next/image"


const BlogPost = ({post,handleEdit, handleDelete}) => {
    // add functions here !
    const {data: session} = useSession();

    return (
    <div className="mb-20 ">
        <div className="">
            <Image
                src={session?.user?.image}  
                alt=""
                width={40}
                height={40}
                className="rounded-full"
                />  
        </div>
        <div>
            <p className=''>{post?.blog}</p>
        </div>
        
        <div className="gap-4">
            <button className="bg-white rounded-lg" onClick={handleDelete}>
                delete
            </button>
            <button className="bg-white rounded-lg" onClick={handleEdit}>
                edit
            </button>
        </div>
    </div>
  )
}

export default BlogPost
'use client'
import { useSession } from "next-auth/react"
import { useEffect,useContext,useState } from "react"
import Image from "next/image"


const BlogPost = ({post,handleEdit, handleDelete}) => {
    // add functions here !
    const {data: session} = useSession();

    return (
    <div className="flex justify-center mb-10">
        <div className="">
            <Image
                src={session?.user?.image}  
                alt=""
                width={40}
                height={40}
                className="rounded-full"
                />  
        </div>
        <div className="">
            <h1 className="">
                {post?.creator?.username}    
            </h1>
            <p>
                {post?.creator?.email}
            </p>
        </div>
        <div>
            <p className=''>{post?.blog}</p>
        </div>
    </div>
  )
}

export default BlogPost
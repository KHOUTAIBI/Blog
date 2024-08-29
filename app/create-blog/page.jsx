'use client'
import Form from "@/components/Form"
import { useState } from "react"
import { useSession } from "next-auth/react"
import axios from "axios"
import { useRouter } from "next/navigation"

const url = "http://localhost:3000/api/blog/new";

const page = () => {
    const router = useRouter();
    const {data : session} = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        creator : "",        
        blog : ""
    });
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);    
        try {
            const response = await axios.post(url,{
                creator : session?.user?.id,
                blog : post.blog,
            });
            if (response){  
                router.push("blogs/");
            }
            else {
                console.log("response probably null or undefined !");
            }
            
        }
        catch(error){
            console.log(error);
        }
        finally{
            setSubmitting(false)
        }

   } 

  return (
    <div>
        <Form
            post={post}
            submitting={submitting}
            type="Create"
            handleSubmit={handleSubmit}
            setPost={setPost}
        >
        </Form>
    </div>
  )
}

export default page
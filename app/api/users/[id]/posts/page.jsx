'use client'
import BlogPost from '@/components/BlogPost'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useSearchParams } from "next/navigation";


const Page = () => {


  const searchParams = useSearchParams();
  const [blogs, setBlogs] = useState([]);
  const { data: session } = useSession();
  const userBlogUrl = `http://localhost:3000/users/${session?.user?.id}`;

  // Component to list all blog posts
  const BlogPostList = ({ data }) => {
    return (

      <div className=''>
        {data?.map((element) => (
          <BlogPost
            post={element}
            key={element._id}
          />
        ))}
      </div>
    )
  }

  // Fetch all posts
  const getPosts = async () => {
    try {

      const response = await axios.get(userBlogUrl);
      setBlogs(response.data);

    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  }

  // Fetch blogs when the page loads
  useEffect(() => {
    getPosts();
  }, []);

  // Render the blog posts
  return (
    <div className=''>
      <BlogPostList data={blogs} />
    </div>
  )
}

export default Page;

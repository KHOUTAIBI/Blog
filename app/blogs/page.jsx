'use client'
import BlogPost from '@/components/BlogPost'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const blogUrl = 'http://localhost:3000/api/blog'

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();
  const { data: session } = useSession();

  // Component to list all blog posts
  const BlogPostList = ({ data }) => {
    return (
      <div>
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
      const response = await axios.get(blogUrl);
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

'use client'
import BlogPost from './BlogPost'
import { useState,useEffect,useContext } from 'react'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const blogUrl = ''

const Feed = () => {

  const [blogs, setBlogs] = useState([]);
  const router = useRouter();

  // This one will just show all of the blog posts in data

  const BlogPostList = ({data})=>{
        return (
        <div>
          {data?.map((element,index) => {
              <BlogPost
                post={element}
              />
            })
          }
        </div>
        )
  }

  // here we get all of the posts
  async function getPosts() {
      const response = await axios.get(blogUrl)  
      setBlogs(response);
  }

  //here we see the blog posts hopefully
  return (
    <div className=''>
          <BlogPostList
            data={blogs}
          />
    </div>
  )
}

export default Feed
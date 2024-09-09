'use client'
import BlogPost from './BlogPost'
import { useState,useEffect,useContext } from 'react'
import axios from 'axios'
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


  //Here we will handle the deletion of the posts !
  async function handleDelete(){
      const response = axios.delete()
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
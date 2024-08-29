import { set } from "mongoose"
import Link from "next/link"

const Form = ({post, setPost, submitting, handleSubmit }) => {
  return (
    <div>
        <section className="">
            <h1 className="flex justify-center font-bold text-2xl text-indigo-400 mb-10">
                Create your blog post
            </h1>
            <form
            onSubmit={handleSubmit}
            className="">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    <textarea
                    onChange={(event)=> {setPost({...post, blog : event.target.value})}} 
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="your blog" 
                    value={post.blog}>
                    </textarea>
                </label>
                <label className="flex justify-center">
                <button
                className="bg-indigo-100 rounded-lg pl-2 pr-2"
                type="submit"
                disabled = {submitting}>
                    Submit
                </button>
                </label>
            </form>            
        </section>
    </div>
  )
}

export default Form
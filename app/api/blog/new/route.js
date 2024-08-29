import { connectToDb } from "@/utils/databse";
import Blog from "@/utils/blog";

export const POST = async (request) => {
    const result = await request.json();
    try {
        await connectToDb();
        const newBlog = Blog({creator : result.creator, blog : result.blog});
        await newBlog.save();
        return new Response(JSON.stringify(newBlog),{status : 201}) //201 means that a post was created !, 200 is GET successful;
    }
    catch(error){
      console.log(error);
    }
}
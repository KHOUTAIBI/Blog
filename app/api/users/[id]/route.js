import Blog from "@/utils/blog";
import { connectToDb } from "@/utils/databse";



export const GET = async(request, {param}) => {
    try {
        await connectToDb();

        const blogs = await Blog.find({creator : param.id}).populate("creator");
        if (!blogs){
            return new Response("Blog not found", {status : 404});
        }   

        return new Response(JSON.stringify(blogs), {status : 200});
    }

    catch(error){
        return new Response("Failed to fetch users blog posts", {status : 500});
    }
}
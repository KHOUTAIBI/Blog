import Blog from "@/utils/blog";
import { connectToDb } from "@/utils/databse";

export const GET = async (request) => {
    try {

        await connectToDb();

        const blogs = await Blog.find({});  
        return new Response(JSON.stringify(blogs), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch all user blogs", { status: 500 });
    }
} 
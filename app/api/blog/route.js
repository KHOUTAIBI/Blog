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

export const PATCH = async (request, {params}) => {
    try{

        await connectToDb();

    

        return new Response("Patch successful", {status : 201});
    }

    catch(error){
        return new Response("Failed to patch the content", {status : 501});
    }
}

export const DELETE = async (request, {params}) => {
    try{
        await connectToDb();
        
        await Blog.findByIdAndDelete(params.id);
        
        return new Response("Deleted successfully", {status : 200});
    }

    catch(error){
        return new Response("Failed to delete the data", {status : 500});
    }
}


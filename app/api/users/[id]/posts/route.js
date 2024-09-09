import Blog from "@/utils/blog";
import { connectToDb } from "@/utils/databse";


export const GET = async(request, {params}) => {

    try {

    }

    catch(error){
        return new Response("Failed to fetch users blog posts", {status : 501});
    }
}
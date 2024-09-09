import Blog from "@utils/blog";
import { connectToDB } from "@utils/database";

//Getting the blogs of the user here
export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const blog = await Blog.findById(params.id).populate("creator")
        if (!blog) return new Response("Prompt Not Found", { status: 404 });

        return new Response(JSON.stringify(blog), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}


//deleting the posts with this !
export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the prompt by ID and remove it
        await Blog.findByIdAndRemove(params.id);

        return new Response("Prompt deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting prompt", { status: 500 });
    }
};
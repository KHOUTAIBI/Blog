import mongoose from "mongoose";
import { Schema,model,models, } from "mongoose";

const BlogSchema = new Schema({
    creator : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    blog : {
        type : String,
        required : [true, 'Blog required !']
    },
});

const Blog = models.Blog || model("Blog", BlogSchema);
export default Blog;
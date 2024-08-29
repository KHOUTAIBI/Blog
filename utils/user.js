import { model,models,Schema } from "mongoose";


const userSchema = new Schema({
    email: {
        type : String,
        unique : [true, 'Email already exists !'],
        required : [true, 'Email is required !']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [
            /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
            "Username invalid. It should be 8-20 characters long, alphanumeric, and must not start or end with special characters like '.' or '_'"
        ],
    },
    image: {
        type: String,
    },
})

const User = models.User || model("User", userSchema);
export default User;
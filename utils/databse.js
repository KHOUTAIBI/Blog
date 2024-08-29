import mongoose from "mongoose";
import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";

let isConnected = false;

export const connectToDb = async () =>{
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already connected');
        return null;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName : "blog",
        })
        isConnected = true;
        console.log("Connected to database !");
    }
    catch(error){
        console.log(error);
        throw new Error("Connection to the database failed !");
    }

    finally{
        console.log(`isConnected = ${isConnected}`);
    }
    
}
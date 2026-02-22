import mongoose from "mongoose";
import { ENV } from "./env.config.js";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(ENV.MONGO_URI, {
            autoIndex: ENV.NODE_ENV !== "production" // Off autoIndex on production
        });

        console.log(
            `MongoDB Connected | Host: ${conn.connection.host} | DB: ${conn.connection.name}`
        );
    } catch (error) {
        console.error("MongoDB connection failed");
        console.error(error.message);
        process.exit(1);
    }
};

export default connectDB;

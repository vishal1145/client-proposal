import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const DBConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`database connected`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

 export default DBConnect;
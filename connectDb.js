import mongoose from "mongoose";
export const ConnectDb = async () => {
  try {
    const conn = await mongoose.connect("mongodb://0.0.0.0:27017/project");
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

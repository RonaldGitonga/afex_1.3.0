import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB!')
  } catch (error) {
    console.log('Error while connecting',error)
    throw new Error(error);
  }
};

import mongoose from "mongoose";

async function connectDB() {
  mongoose.connect();
  return mongoose.connection;
}

export default connectDB;

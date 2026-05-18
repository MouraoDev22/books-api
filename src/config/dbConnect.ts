import mongoose from "mongoose";

async function connectDB() {
  mongoose.connect(
    "mongodb+srv://admin:admin123@cluster0.azkz2xw.mongodb.net/bookstore?appName=Cluster0",
  );
  return mongoose.connection;
}

export default connectDB;

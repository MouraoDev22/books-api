import mongoose from "mongoose";

async function connectDB(): Promise<mongoose.Connection> {
  mongoose.connect(process.env.DB_CONNECTION_STRING as string);
  return mongoose.connection;
}

export default connectDB;

import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

// Define the Book schema
const bookSchema: mongoose.Schema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    author: authorSchema,
    publisher: { type: String, required: true },
    publishedDate: { type: Date, required: true },
    pages: { type: Number, required: true },
    genre: { type: Array, required: true },
    price: { type: Number, required: true },
  },
  { versionKey: false },
);

// Create the Book model based on the schema
const book: mongoose.Model<any> = mongoose.model("books", bookSchema);

export default book;

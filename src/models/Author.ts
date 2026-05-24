import mongoose from "mongoose";

// Define the Book schema
const authorSchema: mongoose.Schema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    birthDate: { type: Date, required: true },
    nationality: { type: String, required: true },
  },
  { versionKey: false },
);

// Create the Book model based on the schema
const author: mongoose.Model<any> = mongoose.model("authors", authorSchema);

export { author, authorSchema };

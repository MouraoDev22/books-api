// @ts-ignore: missing type declarations for express
import express from "express";
import book from "../models/Book.js";

class BookController {
  static async listBooks(req: express.Request, res: express.Response) {
    const books = await book.find({});
    res.status(200).json(books);
    return;
  }
}

export default BookController;

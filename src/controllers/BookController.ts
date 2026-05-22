// @ts-ignore: missing type declarations for express
import express from "express";
import book from "../models/Book.js";

// Define the BookController class with static methods for handling book-related operations
class BookController {
  // Static method to retrieve all books from the database and return them as JSON
  static async getBooks(req: express.Request, res: express.Response) {
    const books: any = await book.find({});
    res.status(200).json(books);
    return;
  }

  // Static method to register a new book in the database using the data from the request body
  static async registerBook(req: express.Request, res: express.Response) {
    try {
      const newBook: any = book.create(req.body);
      res
        .status(201)
        .json({ message: "Livro cadastrado com sucesso!", livro: newBook });
      return;
    } catch (error: unknown) {
      res.status(500).json({ message: `Erro ao cadastrar livro: ${error}` });
      return;
    }
  }
}

export default BookController;

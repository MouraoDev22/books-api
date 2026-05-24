// @ts-ignore: missing type declarations for express
import express from "express";
import book from "../models/Book.js";
import { author } from "../models/Author.js";

// Define the BookController class with static methods for handling book-related operations
class BookController {
  // Static method to retrieve all books from the database and return them as JSON
  static async getBooks(
    req: express.Request,
    res: express.Response,
  ): Promise<void> {
    try {
      const books: any = await book.find({});
      res.status(200).json(books);
    } catch (error: unknown) {
      const errorMessage: string =
        error instanceof Error ? error.message : "Erro desconhecido";
      res
        .status(500)
        .json({ message: `Erro ao obter livros: ${errorMessage}` });
    }
    return;
  }

  // Static method to retrieve a specific book by its ID from the database and return it as JSON
  static async getBookByID(
    req: express.Request,
    res: express.Response,
  ): Promise<void> {
    try {
      const id: string = req.params.id;
      const foundBook: any = await book.findById(id);
      res.status(200).json(foundBook);
    } catch (error: unknown) {
      const errorMessage: string =
        error instanceof Error ? error.message : "Erro desconhecido";
      res.status(500).json({ message: `Erro ao obter livro: ${errorMessage}` });
    }
    return;
  }

  // Static method to register a new book in the database using the data from the request body
  static async registerBook(
    req: express.Request,
    res: express.Response,
  ): Promise<void> {
    const newBook: any = req.body;
    try {
      const foundAuthor: any = await author.findById(newBook.author);
      const completedBook: any = {
        ...newBook,
        author: { ...foundAuthor._doc },
      };
      const createdBook: any = await book.create(completedBook);
      res
        .status(201)
        .json({ message: "Livro cadastrado com sucesso!", livro: createdBook });
    } catch (error: unknown) {
      const errorMessage: string =
        error instanceof Error ? error.message : "Erro desconhecido";
      res
        .status(500)
        .json({ message: `Erro ao cadastrar livro: ${errorMessage}` });
    }
    return;
  }

  // Static method to update an existing book in the database based on its ID using the data from the request body
  static async updateBook(
    req: express.Request,
    res: express.Response,
  ): Promise<void> {
    try {
      const id: string = req.params.id;
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro atualizado com sucesso!" });
    } catch (error: unknown) {
      const errorMessage: string =
        error instanceof Error ? error.message : "Erro desconhecido";
      res
        .status(500)
        .json({ message: `Erro ao atualizar livro: ${errorMessage}` });
    }
    return;
  }

  // Static method to delete a book from the database based on its ID
  static async deleteBook(
    req: express.Request,
    res: express.Response,
  ): Promise<void> {
    try {
      const id: string = req.params.id;
      await book.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro deletado com sucesso!" });
    } catch (error: unknown) {
      const errorMessage: string =
        error instanceof Error ? error.message : "Erro desconhecido";
      res
        .status(500)
        .json({ message: `Erro ao deletar livro: ${errorMessage}` });
    }
    return;
  }

  // Static method to retrieve books from the database based on the publisher specified in the query parameters and return them as JSON
  static async getBooksByPublisher(
    req: express.Request,
    res: express.Response,
  ): Promise<void> {
    const publisher: string = req.query.publisher;
    try {
      const booksByPublisher: any = await book.find({ publisher: publisher });
      res.status(200).json(booksByPublisher);
    } catch (error: unknown) {
      const errorMessage: string =
        error instanceof Error ? error.message : "Erro desconhecido";
      res
        .status(500)
        .json({ message: `Erro ao obter livros por editora: ${errorMessage}` });
    }
    return;
  }
}

export default BookController;

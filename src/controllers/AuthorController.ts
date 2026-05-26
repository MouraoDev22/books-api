// @ts-ignore: missing type declarations for express
import express from "express";
import { author } from "../models/Author.js";
import mongoose from "mongoose";

// Define the BookController class with static methods for handling author-related operations
class AuthorController {
  // Static method to retrieve all authors from the database and return them as JSON
  static async getAuthors(
    req: express.Request,
    res: express.Response,
  ): Promise<void> {
    try {
      const authors: any = await author.find({});
      res.status(200).json(authors);
    } catch (error: unknown) {
      const errorMessage: string =
        error instanceof Error ? error.message : "Erro desconhecido";
      res
        .status(500)
        .json({ message: `Erro ao obter autores: ${errorMessage}` });
    }
    return;
  }

  // Static method to retrieve a specific author by its ID from the database and return it as JSON
  static async getAuthorByID(
    req: express.Request,
    res: express.Response,
  ): Promise<void> {
    try {
      const id: string = req.params.id;
      const foundAuthor: any = await author.findById(id);

      if (!foundAuthor) {
        res.status(404).json({ message: "Autor não encontrado" });
        return;
      }
      res.status(200).json(foundAuthor);
    } catch (error: unknown) {
      const errorMessage: string =
        error instanceof Error
          ? error.message
          : error instanceof mongoose.Error.CastError
            ? "Um ou mais IDs fornecidos são inválidos"
            : "Erro desconhecido";
      res.status(500).json({ message: `Erro ao obter autor: ${errorMessage}` });
    }
    return;
  }

  // Static method to register a new author in the database using the data from the request body
  static async registerAuthor(
    req: express.Request,
    res: express.Response,
  ): Promise<void> {
    try {
      const newAuthor: any = await author.create(req.body);
      res
        .status(201)
        .json({ message: "Autor cadastrado com sucesso!", livro: newAuthor });
    } catch (error: unknown) {
      const errorMessage: string =
        error instanceof Error ? error.message : "Erro desconhecido";
      res
        .status(500)
        .json({ message: `Erro ao cadastrar autor: ${errorMessage}` });
    }
    return;
  }

  // Static method to update an existing author in the database based on its ID using the data from the request body
  static async updateAuthor(
    req: express.Request,
    res: express.Response,
  ): Promise<void> {
    try {
      const id: string = req.params.id;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor atualizado com sucesso!" });
    } catch (error: unknown) {
      const errorMessage: string =
        error instanceof Error ? error.message : "Erro desconhecido";
      res
        .status(500)
        .json({ message: `Erro ao atualizar autor: ${errorMessage}` });
    }
    return;
  }

  // Static method to delete a author from the database based on its ID
  static async deleteAuthor(
    req: express.Request,
    res: express.Response,
  ): Promise<void> {
    try {
      const id: string = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor deletado com sucesso!" });
    } catch (error: unknown) {
      const errorMessage: string =
        error instanceof Error ? error.message : "Erro desconhecido";
      res
        .status(500)
        .json({ message: `Erro ao deletar autor: ${errorMessage}` });
    }
    return;
  }
}

export default AuthorController;

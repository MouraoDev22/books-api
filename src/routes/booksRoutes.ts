// @ts-ignore: missing type declarations for express
import express from "express";
import BookController from "../controllers/BookController.js";

// Create a new Express router instance to define the routes for book-related operations
const routes: express.Router = express.Router();
routes.get("/livros", BookController.getBooks);
routes.get("/livros/:id", BookController.getBookByID);
routes.post("/livros", BookController.updateBook);
routes.delete("/livros/:id", BookController.deleteBook);

export default routes;

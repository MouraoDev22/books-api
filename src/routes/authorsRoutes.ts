// @ts-ignore: missing type declarations for express
import express from "express";
import AuthorController from "../controllers/AuthorController.js";

// Create a new Express router instance to define the routes for author-related operations
const routes: express.Router = express.Router();
routes.get("/autores", AuthorController.getAuthors);
routes.get("/autores/:id", AuthorController.getAuthorByID);
routes.post("/autores", AuthorController.registerAuthor);
routes.put("/autores/:id", AuthorController.updateAuthor);
routes.delete("/autores/:id", AuthorController.deleteAuthor);

export default routes;

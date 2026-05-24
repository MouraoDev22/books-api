// @ts-ignore: missing type declarations for express
import express from "express";
import livros from "./booksRoutes.js";
import autores from "./authorsRoutes.js";

// Define a function that takes an Express application instance as a parameter and sets up the routes for the application
const routes: (app: express.Application) => void = (
  app: express.Application,
): void => {
  app.route("/").get((req: express.Request, res: express.Response) => {
    res.status(200).send("Bem-vindo à API de livraria!");
  });

  app.use(express.json(), livros, autores);
};

export default routes;

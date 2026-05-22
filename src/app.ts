// @ts-ignore: missing type declarations for express
import express from "express";
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

import { connections } from "mongoose";

// Connect to the MongoDB database using the connectDB function and store the connection in a variable 
const connection: any = await connectDB();
connection.on("error", (err: Error) => console.error("Erro de conexão: ", err)); // Log an error message to the console if there is an error during the connection process
connection.once("open", () => console.log("Conexão com o banco de dados estabelecida.")); // Log a message to the console when the connection is successfully established

const app: express.Application = express(); // Create an instance of the Express application
routes(app); // Call the routes function and pass the Express application instance to set up the routes for the application

// // Define a route handler for the "/livros/:id" URL that returns a specific book based on its ID
// app.get("/livros/:id", (req: express.Request, res: express.Response): void => {
//   const index: Number = searchBooks(req.params.id);
//   res.status(200).json(books[index as number]);
// });

// Define a route handler for the "/livros" URL that allows adding a new book to the list
// app.post("/livros", (req: express.Request, res: express.Response): void => {
//   books.push(req.body);
//   res.status(201).send("Livro adicionado com sucesso!");
// });

// Define a route handler for the "/livros/:id" URL that allows updating an existing book based on its ID
// app.put("/livros/:id", (req: express.Request, res: express.Response): void => {
//   const index: Number = searchBooks(req.params.id);
//   books[index as number].title = req.body.title;
//   res.status(200).send("Livro atualizado com sucesso!");
// });

// Define a route handler for the "/livros/:id" URL that allows deleting a book based on its ID
// app.delete(
//   "/livros/:id",
//   (req: express.Request, res: express.Response): void => {
//     const index: Number = searchBooks(req.params.id);
//     books.splice(index as number, 1);
//     res.status(200).send("Livro deletado com sucesso!");
//   },
// );

export default app;

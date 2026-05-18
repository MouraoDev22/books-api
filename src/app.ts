// @ts-ignore: missing type declarations for express
import express from "express";
import connectDB from "./config/dbConnect.js";

// Connect to the MongoDB database using the connectDB function and store the connection in a variable 
const conexion: any = await connectDB();
conexion.on("error", (err: Error) => console.error("Erro de conexão: ", err)); // Log an error message to the console if there is an error during the connection process
conexion.once("open", () => console.log("Conexão com o banco de dados estabelecida.")); // Log a message to the console when the connection is successfully established

// Create an instance of the Express application and configure it to parse JSON request bodies
const app: express.Application = express();
app.use(express.json());

// Sample data: an array of book objects
const books: any[] = [
  {
    id: 1,
    title: "O Senhor dos Anéis",
  },
  {
    id: 2,
    title: "Harry Potter e a Pedra Filosofal",
  },
];

// Define a route handler for the root URL ("/")
app.get("/", (req: express.Request, res: express.Response): void => {
  res.status(200).send("Bem-vindo à API de Livros!");
});

// Define a route handler for the "/livros" URL that returns the list of books as JSON
app.get("/livros", (req: express.Request, res: express.Response): void => {
  res.status(200).json(books);
});

// Define a route handler for the "/livros/:id" URL that returns a specific book based on its ID
app.get("/livros/:id", (req: express.Request, res: express.Response): void => {
  const index: Number = searchBooks(req.params.id);
  res.status(200).json(books[index as number]);
});

// Define a route handler for the "/livros" URL that allows adding a new book to the list
app.post("/livros", (req: express.Request, res: express.Response): void => {
  books.push(req.body);
  res.status(201).send("Livro adicionado com sucesso!");
});

// Define a route handler for the "/livros/:id" URL that allows updating an existing book based on its ID
app.put("/livros/:id", (req: express.Request, res: express.Response): void => {
  const index: Number = searchBooks(req.params.id);
  books[index as number].title = req.body.title;
  res.status(200).send("Livro atualizado com sucesso!");
});

// Define a route handler for the "/livros/:id" URL that allows deleting a book based on its ID
app.delete(
  "/livros/:id",
  (req: express.Request, res: express.Response): void => {
    const index: Number = searchBooks(req.params.id);
    books.splice(index as number, 1);
    res.status(200).send("Livro deletado com sucesso!");
  },
);

// Helper function to search for a book by its ID and return its index in the array
function searchBooks(id: string): Number {
  return books.findIndex((b) => {
    return b.id === Number(id);
  });
}

export default app;

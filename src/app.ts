// @ts-ignore: missing type declarations for express
import express from "express";
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

// Connect to the MongoDB database using the connectDB function and store the connection in a variable
const connection: any = await connectDB();
connection.on("error", (err: Error) => console.error("Erro de conexão: ", err));
connection.once("open", () =>
  console.log("Conexão com o banco de dados estabelecida."),
);

// Create an Express application and set up the routes using the routes function
const app: express.Application = express();
routes(app);

export default app;

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

export default app;

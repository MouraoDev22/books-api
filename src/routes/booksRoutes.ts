// @ts-ignore: missing type declarations for express
import express from "express";
import BookController from '../controllers/BookController.js';

const router: express.Router = express.Router();

router.get("/livros", BookController.listBooks);

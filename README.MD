# BOOKS API REST

## Description

This project is a simple REST API for managing a collection of books. It allows users to perform CRUD (Create, Read, Update, Delete) operations on the book resources. The API is built using TypeScript, Node.js and Express framework. The data is stored in a MongoDB database, and the API is designed to be scalable and easy to maintain. It includes error handling for invalid requests and provides clear responses for each operation.

## Features

- Create a new book
- Retrieve a list of all books
- Retrieve a specific book by ID
- Update an existing book
- Delete a book
- Error handling for invalid requests

## Tech Stack

- TypeScript
- Node.js
- Express.js
- MongoDB

## Installation

. Clone the repository:

```bash
git clone https://github.com/MouraoDev22/books-api.git
```

. Navigate to the project directory:

```bash
cd book-api
```

. Install the dependencies:

```bash
npm install
```

. Compile the TypeScript code:

```bash
npm run build
```

. Start the server:

```bash
npm run start
```

The server will run on `http://localhost:3000`.

## API Endpoints

- `POST /livros`: Create a new book
- `GET /livros`: Retrieve a list of all books
- `GET /livros/:id`: Retrieve a specific book by ID
- `PUT /livros/:id`: Update an existing book
- `DELETE /livros/:id`: Delete a book

## Example Request Using Postman

To create a new book:

```bash
POST http://localhost:3000/livros
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedDate": "1925-04-10",
  "isbn": "978-0743273565"
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

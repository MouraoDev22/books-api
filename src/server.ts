// import http from "http";
import app from "./app.js";

// Define the port number for the server to listen on
const PORT: number = 3000;

// * -- Not necessary to use http.createServer when using Express, as it abstracts away the underlying HTTP server creation and handling. -- *

// const routes: { [key: string]: string } = {
  // "/": "Curso de Node.js",
  // "/sobre": "Sobre o curso",
  // "/contato": "Contato do curso",
// };

// const server: http.Server = http.createServer((req, res) => {
  // res.writeHead(200, { "Content-Type": "text/plain" });
  // res.end(routes[req.url as string] || "404 - Página não encontrada");
// });

// Start the server and listen on the specified port, logging a message to the console when it's running
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

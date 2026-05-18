import "dotenv/config";
import app from "./src/app.js";

// Define the port number for the server to listen on
const PORT: number = 3000;

// Start the server and listen on the specified port, logging a message to the console when it's running
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

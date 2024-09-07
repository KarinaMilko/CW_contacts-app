const http = require("node:http");
const app = require("./app");

const PORT = process.env.PORT ?? 5000;

const server = http.createServer(app);

server.listen(PORT, () =>
  console.log(`Sever is listening http://localhost:${PORT}`)
);

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 3000;
const app = new express();

const users = ["Homer", "Marge", "Bart", "Lisa", "Maggie", "Ned", "Maude", "Rod", "Todd"];

app.use(cors());

app.use((request, response, next) => {
  let datetime = new Date().toLocaleString();
  console.log(`[${datetime}] ${request.method} ${request.originalUrl}`);
  next();
});

app.get("/v1/message", (request, response) => {
  const message = process.env.MESSAGE || "Hello, World!";

  return response.json({
    message,
  });
});

app.get("/v1/users", (_, response) => {
  return response.json({
    users,
  });
});

app.get("/v1/users/:name", (request, response) => {
  const { name } = request.params;
  const user = users.find(user => user.toLowerCase() === name);

  return response.json({
    user,
  });
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});

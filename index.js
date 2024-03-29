const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT
const app = new express();

app.use(cors());

app.get("/v1/message", (request, response) => {
  const { message } = request.query;

  return response.json({
    message,
  });
});

app.get("/v1/users", (_, response) => {
  return response.json({
    users: ["Homer", "Marge", "Bart", "Lisa", "Maggy"],
  });
});

app.listen(port, () => {
console.log(`Express app listening on port ${port}`);
});

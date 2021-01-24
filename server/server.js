const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const api = require("./routes/api");
const app = express();

app.use(bodyParser.json());

app.use("/api", api);

app.get("/", (req, res) => {
  res.send("Hello World from Mahmoud");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}..`);
});

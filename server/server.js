const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;
// const verifyToken = require("./middleware/verifyToken");
const api = require("./routes/api");
const app = express();
app.use(cors());
// app.use(verifyToken);

app.use(bodyParser.json());

app.use("/api", api);

app.get("/", (req, res) => {
  res.send("Hello World from Mahmoud");
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}..`);
});

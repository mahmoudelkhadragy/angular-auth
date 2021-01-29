const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized request");
  }
  const token = req.headers.authorization.split(" ")[1];
  console.log(token);
  if (token === "null") {
    return res.status(401).send("Unauthorized request");
  }
  try {
    let payload = jwt.verify(token, "secretKey");
    req.userId = payload.subject;
    next();
  } catch (err) {
    return res.status(401).send("Unauthorized request");
  }
}

module.exports = verifyToken;

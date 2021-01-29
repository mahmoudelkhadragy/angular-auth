const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/user");
const Event = require("../models//events");
const verifyToken = require("../middleware/verifyToken");

const mongoose = require("mongoose");

const db = "mongodb://localhost:27017/angularAuth";
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

console.log("connected to mongodb");

router.get("/", (req, res) => {
  res.send("From API route");
});

router.post("/register", (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((error, registeredUser) => {
    if (error) {
      console.log(error);
    } else {
      let payload = { subject: registeredUser._id };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token });
    }
  });
});

router.post("/login", (req, res) => {
  // get user data from request body
  const userData = req.body;
  // check if email exist in database
  User.findOne({ email: userData.email }, (error, user) => {
    // if error in db
    if (error) {
      console.log(error);
    } else {
      if (!user) {
        res.status(401).send("Invalid email");
      } else {
        if (user.password !== userData.password) {
          res.status(401).send("Invalid Password");
        } else {
          let payload = { subject: user._id };
          let token = jwt.sign(payload, "secretKey");
          res.status(200).send({ token });
        }
      }
    }
  });
});

router.get("/events", (req, res) => {
  Event.find({}, (error, events) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(events);
    }
  });
});

router.get("/special", verifyToken, (req, res) => {
  Event.find({}, (error, events) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(events);
    }
  });
});

module.exports = router;

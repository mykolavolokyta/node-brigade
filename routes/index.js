var express = require("express");
var router = express.Router();
const path = require("path");

const UserController = require("../controllers/userController");

// home route
router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../views/index.html"));
});

// vlad route
router.get("/vlad", UserController.vladController);

// kolya route
router.get("/kolya", UserController.kolyaController);

// ruslan route
router.get("/ruslan", UserController.ruslanController);

// max route
router.get("/max", UserController.maxController);

module.exports = router;

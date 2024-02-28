var express = require("express");
var router = express.Router();
const path = require("path");

// home route
router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../views/index.html"));
});

router.get("/product", function (req, res, next) {
  res.render("../views/product");
});

module.exports = router;

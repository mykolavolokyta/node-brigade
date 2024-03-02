var express = require("express");
var router = express.Router();
const path = require("path");
const CategoryController = require("../controllers/categoryController");
const ProductController = require("../controllers/productConstroller");

// home route
router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../views/index.html"));
  CategoryController.getCategories();
  ProductController.getAllProductsByCategory("1");
});

router.get("/login", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../views/login.html"));
});

router.get("/category", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../views/index.html"));
});

router.get("/product", function (req, res, next) {
  res.render("../views/product");
  ProductController.getProductById("2");
});

module.exports = router;

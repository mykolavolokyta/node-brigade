var express = require("express");
var router = express.Router();
const path = require("path");
const CategoryController = require("../controllers/categoryController");
const ProductController = require("../controllers/productConstroller");

// home route
router.get("/", async function (req, res, next) {
  try {
    await CategoryController.getCategories();
    await ProductController.getAllProducts();
    res.render("../views/index", {
      categories: CategoryController.data,
      CategoryController,
      categoryName: "New products",
      products: ProductController.newProducts,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/login", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../views/login.html"));
});

router.get("/category/:categoryId", async function (req, res, next) {
  try {
    await CategoryController.getCategories();
    await CategoryController.getCategoryById(req.params.categoryId);
    await ProductController.getAllProductsByCategory(req.params.categoryId);
    console.log("Data in Route:", ProductController.allProducts);
    res.render("../views/index", {
      categories: CategoryController.data,
      CategoryController,
      categoryName: CategoryController.category.category,
      products: ProductController.allProducts,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/product/:productId", async function (req, res, next) {
  try {
    await CategoryController.getCategories();
    await ProductController.getProductById(req.params.productId);
    console.log(ProductController.product);
    res.render("../views/product", {
      categories: CategoryController.data,
      CategoryController,
      product: ProductController.product,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

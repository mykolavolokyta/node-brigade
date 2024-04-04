var express = require("express");
var router = express.Router();
const path = require("path");
const CategoryController = require("../controllers/categoryController");
const ProductController = require("../controllers/productConstroller");
const AdminController = require("../controllers/adminController");

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

function isAuthenticated(req, res, next) {
  if (req.signedCookies.user) {
    return next();
  }
  res.redirect("/login");
}

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const result = await AdminController.loginAdmin(username, password);

  if (result.length >= 1) {
    res.cookie("user", username, { signed: true });
    res.redirect("/admin");
  } else {
    res.send("Invalid username or password");
  }
});

router.get("/login", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/../views/login.html"));
});

router.get("/logout", (req, res) => {
  res.clearCookie("user");
  res.redirect("/login");
});

router.get("/category/:categoryId", async function (req, res, next) {
  try {
    await CategoryController.getCategories();
    await CategoryController.getCategoryById(req.params.categoryId);
    await ProductController.getAllProductsByCategory(req.params.categoryId);
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

router.get("/admin", isAuthenticated, async function (req, res, next) {
  try {
    await CategoryController.getCategories();
    await ProductController.getAllProducts();
    res.render("../views/admin", {
      categories: CategoryController.data,
      CategoryController,
      products: ProductController.newProducts,
      AdminController,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.delete(
  "/admin/deleteProduct/:productId",
  async function (req, res, next) {
    const productId = req.params.productId;
    try {
      await AdminController.deleteProduct(productId);
      res.status(200).send("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).send("Internal Server Error");
    }
  }
);
router.delete(
  "/admin/deleteCategory/:categoryId",
  async function (req, res, next) {
    const categoryId = req.params.categoryId;
    try {
      await AdminController.deleteCategory(categoryId);
      res.status(200).send("Category deleted successfully");
    } catch (error) {
      console.error("Error deleting category:", error);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.post("/admin/addCategory", async function (req, res, next) {
  const newCategory = {
    category: req.body.category,
    parentCategoryId: req.body.parentCategory,
  };
  try {
    await AdminController.createCategory(newCategory);
    res.redirect("/admin");
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/admin/addProduct", async function (req, res, next) {
  const newProduct = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    categoryId: req.body.categoryId,
    imageUrl: req.body.imageUrl,
  };
  try {
    await AdminController.createProduct(newProduct);
    res.redirect("/admin");
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).send("Internal Server Error");
  }
});

// router.put("/admin/editProduct/:productId", async function (req, res, next) {
//   const productId = req.params.productId;
//   const updatedProduct = {
//     title: req.body.title,
//     description: req.body.description,
//     price: req.body.price,
//     quantity: req.body.quantity,
//     categoryId: req.body.categoryId,
//     imageUrl: req.body.imageUrl,
//   };
//   try {
//     await AdminController.updatedProduct(productId, updatedProduct);
//     res.redirect("/admin");
//   } catch (error) {
//     console.error("Error updating product:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

module.exports = router;

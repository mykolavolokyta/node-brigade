var express = require("express");
var router = express.Router();
const path = require("path");
const CategoryController = require("../controllers/categoryController");
const ProductController = require("../controllers/productConstroller");
const AdminController = require("../controllers/adminController");
const multer = require("multer");

// home route
router.get("/", async function (req, res, next) {
  try {
    const categorie = await CategoryController.getCategories();
    await ProductController.getAllProducts();
    res.render("../views/index", {
      categories: categorie,
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

  if (result) {
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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = file.originalname.split(".").pop();
    const filename = `image${uniqueSuffix}.${extension}`;
    cb(null, filename);
  },
});

const types = ["image/jpeg", "image/jpg", "image/png"];

const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, fileFilter });

//uploads
router.post("/upload", upload.single("image"), (req, res) => {
  try {
    if (req.file) {
      res.send(req.file.filename);
    } else {
      return res.status(404).json({
        message: "File not found. Try again.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "File uploading failed. Try again.",
    });
  }
});

router.get("/category/:categoryId", async function (req, res, next) {
  try {
    const category = await CategoryController.getCategories();
    await CategoryController.getCategoryById(req.params.categoryId);
    await ProductController.getAllProductsByCategory(req.params.categoryId);
    res.render("../views/index", {
      categories: category,
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
    const category = await CategoryController.getCategories();
    await ProductController.getProductById(req.params.productId);
    res.render("../views/product", {
      categories: category,
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
      ProductController,
      editProduct: ProductController.product,
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
    await CategoryController.getCategories();
    res.redirect("/admin");
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/getProductById/:productId", async function (req, res, next) {
  const productId = req.params.productId;
  try {
    const result = await ProductController.getProductById(productId);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error getting product:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post(
  "/admin/addProduct",
  upload.single("image"),
  async function (req, res, next) {
    try {
      if (req.file) {
        const baseUrl = "http://localhost:3000";
        const imageUrl = baseUrl + "/" + req.file.filename;
        const newProduct = {
          title: req.body.title,
          description: req.body.description,
          price: req.body.price,
          quantity: req.body.quantity,
          categoryID: req.body.categoryID,
          imageUrl,
        };
        await AdminController.createProduct(newProduct);
        res.redirect("/admin");
      } else {
        return res.status(404).json({
          message: "File not found. Try again.",
        });
      }
    } catch (error) {
      console.error("Error adding product:", error);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.post("/admin/editProduct/:productId", async function (req, res, next) {
  try {
    const productId = req.params.productId;
    console.log(req.body);

    const updatedProduct = {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
      categoryID: req.body.categoryId,
    };

    await AdminController.editProduct(productId, updatedProduct);

    res.redirect("/admin");
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

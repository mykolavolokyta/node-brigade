const Product = require("../db/models/Product");

class ProductController {
  static newProducts = [];
  static allProducts = [];
  static product;

  static async getAllProductsByCategory(categoryId) {
    try {
      this.allProducts = [];
      const products = await Product.findAll({
        where: { categoryID: categoryId },
      });
      products.forEach((item) => {
        this.allProducts.push(item.dataValues);
      });
    } catch (error) {
      console.error("Error getting products by category:", error);
      throw error;
    }
  }

  static async getAllProducts() {
    try {
      this.newProducts = [];
      const products = await Product.findAll();
      products.forEach((item) => {
        this.newProducts.push(item.dataValues);
      });
    } catch (error) {
      console.error("Error getting all products:", error);
      throw error;
    }
  }

  static async getProductById(productId) {
    try {
      this.product = null;
      const product = await Product.findByPk(productId);
      this.product = product.dataValues;
      return product.dataValues;
    } catch (error) {
      console.error("Error getting product by ID:", error);
      throw error;
    }
  }
}

module.exports = ProductController;

const Admin = require("../db/models/Admin");
const Category = require("../db/models/Category");
const Product = require("../db/models/Product");

class AdminController {
  static async loginAdmin(username, password) {
    try {
      const admin = await Admin.findOne({
        where: { email: username, password: password },
      });
      if (admin) {
        return true;
      } else return false;
    } catch (error) {
      console.error("Error logging in admin:", error);
      throw error;
    }
  }

  static async createCategory(newCategory) {
    try {
      await Category.create(newCategory);
    } catch (error) {
      console.error("Error creating category:", error);
      throw error;
    }
  }

  static async deleteCategory(categoryId) {
    try {
      await Category.destroy({ where: { id: categoryId } });
    } catch (error) {
      console.error("Error deleting category:", error);
      throw error;
    }
  }

  static async createProduct(newProduct) {
    try {
      await Product.create(newProduct);
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  }

  static async editProduct(productId, updatedProduct) {
    try {
      const product = await Product.findByPk(productId);
      if (!product) {
        throw new Error("Product not found");
      }
      await product.update(updatedProduct);
    } catch (error) {
      console.error("Error editing product:", error);
      throw error;
    }
  }

  static async deleteProduct(productId) {
    try {
      await Product.destroy({ where: { id: productId } });
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  }
}

module.exports = AdminController;

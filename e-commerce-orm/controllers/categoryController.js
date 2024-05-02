const Category = require("../db/models/Category");

class CategoryController {
  static data = [];
  static category = {};

  static isParentCategory(categoryId) {
    if (categoryId < 7) {
      return CategoryController.data.some(
        (category) =>
          category.parentCategoryId === categoryId && category.id !== categoryId
      );
    } else return null;
  }

  static async getCategories() {
    try {
      this.data = [];
      const result = await Category.findAll();
      const data = [];
      result.forEach((item) => {
        this.data.push(item.dataValues);
        data.push(item.dataValues);
      });
      return data;
    } catch (error) {
      console.error("Error getting categories:", error);
      throw error;
    }
  }

  static async getCategoryById(categoryId) {
    try {
      this.category = {};
      const result = await Category.findOne({
        where: { id: categoryId },
      });
      this.category = result.dataValues;
    } catch (error) {
      console.error("Error getting category by ID:", error);
      throw error;
    }
  }
}

module.exports = CategoryController;

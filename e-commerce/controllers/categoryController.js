const fs = require("fs");
const csv = require("csv-parser");

class CategoryController {
  static data = [];
  static category = {};

  static isParentCategory(categoryId) {
    if (categoryId < 7) {
      return CategoryController.data.some(
        (category) =>
          category.parentCategoryID === categoryId && category.id !== categoryId
      );
    } else return null;
  }

  static getCategories = () => {
    return new Promise((resolve, reject) => {
      const categories = [];

      fs.createReadStream("category.csv")
        .pipe(csv())
        .on("data", (row) => {
          categories.push(row);
        })
        .on("end", () => {
          console.log("CSV Data:", categories);
          CategoryController.data = categories;
          resolve(categories);
        })
        .on("error", (error) => {
          reject(error);
        });
    });
  };

  static getCategoryById = (categoryId) => {
    return new Promise((resolve, reject) => {
      fs.createReadStream("category.csv")
        .pipe(csv())
        .on("data", (row) => {
          if (row.id === categoryId) {
            this.category = row;
          }
        })
        .on("end", () => {
          resolve(this.category);
        })
        .on("error", (error) => {
          reject(error);
        });
    });
  };
}

module.exports = CategoryController;

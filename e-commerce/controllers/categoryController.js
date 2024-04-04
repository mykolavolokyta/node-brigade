const fs = require("fs");
const csv = require("csv-parser");
const db_pool = require("../db/database");

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

  static getCategories = async () => {
    // return new Promise((resolve, reject) => {
    //   const categories = [];

    //   fs.createReadStream("category.csv")
    //     .pipe(csv())
    //     .on("data", (row) => {
    //       categories.push(row);
    //     })
    //     .on("end", () => {
    //       console.log("CSV Data:", categories);
    //       CategoryController.data = categories;
    //       resolve(categories);
    //     })
    //     .on("error", (error) => {
    //       reject(error);
    //     });
    // });
    const [rows] = await db_pool.query("select * from category;");
    this.data = rows;
  };

  static getCategoryById = async (categoryId) => {
    // return new Promise((resolve, reject) => {
    //   fs.createReadStream("category.csv")
    //     .pipe(csv())
    //     .on("data", (row) => {
    //       if (row.id === categoryId) {
    //         this.category = row;
    //       }
    //     })
    //     .on("end", () => {
    //       resolve(this.category);
    //     })
    //     .on("error", (error) => {
    //       reject(error);
    //     });
    // });
    const [row] = await db_pool.query(
      `select * from category where id = ${categoryId};`
    );
    this.category = row[0];
  };
}

module.exports = CategoryController;

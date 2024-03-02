const fs = require("fs");
const csv = require("csv-parser");

class CategoryController {
  static data = [];
  static getCategories = () => {
    fs.createReadStream("category.csv")
      .pipe(csv())
      .on("data", (row) => {
        CategoryController.data.push(row);
      })
      .on("end", () => {
        console.log(CategoryController.data);
      });
  };
}

module.exports = CategoryController;

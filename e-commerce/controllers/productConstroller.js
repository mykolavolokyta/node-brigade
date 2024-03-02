const fs = require("fs");
const csv = require("csv-parser");

class ProductController {
  static allProducts = [];
  static product;
  static getAllProductsByCategory = (categoryId) => {
    fs.createReadStream("product.csv")
      .pipe(csv())
      .on("data", (row) => {
        if (row.categoryID === categoryId) {
          this.allProducts.push(row);
        }
      })
      .on("end", () => {
        console.log(this.allProducts);
      });
  };
  static getProductById = (productId) => {
    fs.createReadStream("product.csv")
      .pipe(csv())
      .on("data", (row) => {
        if (row.id === productId) {
          this.product = row;
        }
      })
      .on("end", () => {
        console.log(this.product);
      });
  };
}

module.exports = ProductController;

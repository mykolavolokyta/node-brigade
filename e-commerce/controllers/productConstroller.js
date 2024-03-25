const fs = require("fs");
const csv = require("csv-parser");

class ProductController {
  static newProducts = [];
  static allProducts = [];
  static product;

  static getAllProductsByCategory = (categoryId) => {
    this.allProducts = [];
    return new Promise((resolve, reject) => {
      fs.createReadStream("product.csv")
        .pipe(csv())
        .on("data", (row) => {
          if (row.categoryID === categoryId) {
            this.allProducts.push(row);
          }
        })
        .on("end", () => {
          console.log(this.allProducts);
          resolve(this.allProducts);
        })
        .on("error", (error) => {
          reject(error);
        });
    });
  };

  static getAllProducts = () => {
    this.newProducts = [];
    return new Promise((resolve, reject) => {
      fs.createReadStream("product.csv")
        .pipe(csv())
        .on("data", (row) => {
          this.newProducts.push(row);
        })
        .on("end", () => {
          console.log(this.newProducts);
          resolve(this.newProducts);
        })
        .on("error", (error) => {
          reject(error);
        });
    });
  };

  static getProductById = (productId) => {
    return new Promise((resolve, reject) => {
      fs.createReadStream("product.csv")
        .pipe(csv())
        .on("data", (row) => {
          if (row.id === productId) {
            this.product = row;
          }
        })
        .on("end", () => {
          console.log(this.product);
          resolve(this.product);
        })
        .on("error", (error) => {
          reject(error);
        });
    });
  };
}

module.exports = ProductController;

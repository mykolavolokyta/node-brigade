const fs = require("fs");
const csv = require("csv-parser");
const db_pool = require("../db/database");

class ProductController {
  static newProducts = [];
  static allProducts = [];
  static product;

  static getAllProductsByCategory = async (categoryId) => {
    // this.allProducts = [];
    // return new Promise((resolve, reject) => {
    //   fs.createReadStream("product.csv")
    //     .pipe(csv())
    //     .on("data", (row) => {
    //       if (row.categoryID === categoryId) {
    //         this.allProducts.push(row);
    //       }
    //     })
    //     .on("end", () => {
    //       console.log(this.allProducts);
    //       resolve(this.allProducts);
    //     })
    //     .on("error", (error) => {
    //       reject(error);
    //     });
    // });
    const [rows] = await db_pool.query(
      `select * from product where categoryID = ${categoryId};`
    );
    this.allProducts = rows;
  };

  static getAllProducts = async () => {
    // this.newProducts = [];
    // return new Promise((resolve, reject) => {
    //   fs.createReadStream("product.csv")
    //     .pipe(csv())
    //     .on("data", (row) => {
    //       this.newProducts.push(row);
    //     })
    //     .on("end", () => {
    //       console.log(this.newProducts);
    //       resolve(this.newProducts);
    //     })
    //     .on("error", (error) => {
    //       reject(error);
    //     });
    // });
    const [rows] = await db_pool.query(`select * from product;`);
    this.newProducts = rows;
  };

  static getProductById = async (productId) => {
    // return new Promise((resolve, reject) => {
    //   fs.createReadStream("product.csv")
    //     .pipe(csv())
    //     .on("data", (row) => {
    //       if (row.id === productId) {
    //         this.product = row;
    //       }
    //     })
    //     .on("end", () => {
    //       console.log(this.product);
    //       resolve(this.product);
    //     })
    //     .on("error", (error) => {
    //       reject(error);
    //     });
    // });
    const [rows] = await db_pool.query(
      `select * from product where id = ${productId};`
    );
    this.product = rows[0];
  };
}

module.exports = ProductController;

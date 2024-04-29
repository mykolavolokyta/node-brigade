const db_pool = require("../db/database");

class AdminController {
  //login admin
  static loginAdmin = async (username, password) => {
    const [rows] = await db_pool.query(
      `select * from admin where email = '${username}' AND password = '${password}';`
    );
    return rows;
  };
  // add category
  static createCategory = async (newCategory) => {
    if (newCategory.parentCategoryId === "null") {
      await db_pool.query(
        `insert into category (category, parentCategoryId) values ('${newCategory.category}', null);`
      );
    } else {
      await db_pool.query(
        `insert into category (category, parentCategoryId) values ('${newCategory.category}', ${newCategory.parentCategoryId});`
      );
    }
  };
  // delete categoty by id
  static deleteCategory = async (categoryId) => {
    await db_pool.query(`delete from category where id = ${categoryId};`);
  };

  // add product
  static createProduct = async (newProduct) => {
    await db_pool.query(
      `insert into product (categoryID, title, description, price, quantity, imageUrl) values (
        ${newProduct.categoryId}, 
        '${newProduct.title}', 
        '${newProduct.description}',
        ${newProduct.price},
        ${newProduct.quantity},
        '${newProduct.imageUrl}'
        );`
    );
  };
  //update product by id
  static editProduct = async (productId, updatedProduct) => {
    await db_pool.query(
      `UPDATE product SET
      title = '${updatedProduct.title}',
      description = '${updatedProduct.description}',
      price = ${updatedProduct.price},
      quantity = ${updatedProduct.quantity},
      categoryID = ${updatedProduct.categoryId}
      WHERE id = ${productId};`
    );
  };
  // delete product by id
  static deleteProduct = async (productId) => {
    await db_pool.query(`delete from product where id = ${productId};`);
  };
}

module.exports = AdminController;

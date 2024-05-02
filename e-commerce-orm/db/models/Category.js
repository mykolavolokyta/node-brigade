const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    parentCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Category",
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    tableName: "category",
  }
);

module.exports = Category;

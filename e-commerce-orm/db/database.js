const dotenv = require("dotenv");
const Sequelize = require("sequelize");

dotenv.config();

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.MYSQL_HOSTSS,
  }
);

module.exports = sequelize;

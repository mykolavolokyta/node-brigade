const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

const db_pool = mysql.createPool({
  host: process.env.MYSQL_HOSTSS,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
  password: process.env.MYSQL_PASSWORD,
});

module.exports = db_pool;

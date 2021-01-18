const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "anhtien2408",
  database: "myblog",
});

module.exports = db;
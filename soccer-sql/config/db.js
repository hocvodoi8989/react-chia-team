
const mysql = require('mysql2');

// Create the MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: "root",
  password: "Hoc123456@",
  database: 'football'
});

module.exports = {db}


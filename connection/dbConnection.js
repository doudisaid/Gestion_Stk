const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb',
});

// Test MySQL connection
// db.connect(err => {
//   if (err) throw err;
//   console.log('MySQL Connected!');
// });

module.exports = db;

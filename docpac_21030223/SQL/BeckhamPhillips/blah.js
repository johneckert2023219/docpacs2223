var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.db');
 
db.all("SELECT * FROM users LEFT JOIN posts ON users.uid=posts.user_uid WHERE user_name = 'Susy'", function(err, rows) {
  console.log(rows);
});
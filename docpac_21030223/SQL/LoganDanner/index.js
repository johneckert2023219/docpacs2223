const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./SQlTest.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQLTest database.');
});

// You will need a JOIN for the two tables in the SQL query
db.all("SELECT * FROM users LEFT JOIN post ON users.uid=post.user_uid WHERE user_name = 'Susy'", function(err, rows) {
  console.log(rows);
});

 
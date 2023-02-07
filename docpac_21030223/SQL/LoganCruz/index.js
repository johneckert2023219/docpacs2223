const sql = require('sqlite3').verbose()

var db = new sql.Database('./Database.db',sql.OPEN_READONLY, (err) => {
    if (err) throw err

})
db.all(`SELECT * FROM posts LEFT JOIN users ON users.uid = posts.user_uid WHERE user_name = 'Susy'`,  function(err, rows) {
    if (err) throw err
    console.log(rows);
  })
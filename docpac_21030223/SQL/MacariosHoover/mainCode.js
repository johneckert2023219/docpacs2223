const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./database.db', sqlite3.OPEN_READONLY, (err) => {
    if (err) {
        return console.error(err.message);
    }
    db.all("SELECT text FROM users LEFT JOIN posts ON users.uid = posts.user_uid WHERE user_name = 'Susy'", function (err, rows) { console.log(rows); });

});

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});
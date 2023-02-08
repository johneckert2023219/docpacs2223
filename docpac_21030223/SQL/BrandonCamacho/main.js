// Imports the sqlite3 Module
const sqlite3 = require('sqlite3').verbose();

// Opens and Connects to the Database
let db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
});

// Joins both tables and selects all text from posts from the user Susy.
db.all("SELECT text FROM users LEFT JOIN posts ON users.uid = posts.user_uid WHERE user_name = 'Susy'", function (err, rows) { console.log(rows); });

// Closes the Database Connection
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});
const sqlite3 = require('sqlite3').verbose();

// connect to database
let db = new sqlite3.Database('./Database.db', (err) => {
    if (err) {
        return console.error(err.message);
    } else {
        console.log('Connected to SQLite3 database.')
    }

    db.all('SELECT user_name FROM users WHERE user_name = "Susy"', (error, user) => {
        if (error) {
            throw error;
        }
        if (user) {
            console.log(user)
        }
        db.all('SELECT text FROM posts WHERE user_uid = 2', (error, text) => {
            if (error) {
                throw error;
            }
            if (text) {
                console.log(text)
            }
        });
    });
});

// close database
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Closing the database connection')
})

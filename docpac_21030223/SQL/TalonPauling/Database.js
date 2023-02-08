const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE);
db.get('SELECT * FROM users WHERE user_name="Susy"', (error, user) => {
    if (error) {
        throw (error)
    }
    if (user) {
        db.all('SELECT * FROM posts WHERE user_uid=' + user.uid, (error, post) => {
            if (error) {
                throw (error)
            }
            if (post) {
                console.log(post);
            }
        })
    }
})


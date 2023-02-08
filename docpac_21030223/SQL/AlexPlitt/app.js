const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./database.db", (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log("Connected to the database.");
});

var sql = `
    SELECT *
    FROM posts
    LEFT JOIN users
        ON posts.user_uid = users.uid
    WHERE user_name = "Susy";
`


db.all(sql, (err, user) => {
    if (err) {
        throw err;
    }
    for (let i = 0; i < user.length; i++) {
        console.log(user[i].text);
    };
});
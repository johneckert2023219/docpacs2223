const sqlite3 = require('sqlite3').verbose()
const database = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE)
database.get('SELECT * FROM users WHERE user_name="Susy"', (error, user) => {
	if (error) throw error
	if (user) {
		database.all('SELECT * FROM posts WHERE user_uid=' + user.uid, (error, post) => {
			if (error) throw error
			if (post)
				console.log(post)
		})
	}
})
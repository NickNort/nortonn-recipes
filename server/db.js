// import sqlite
import sqlite3 from 'sqlite3';
// create database connection
const db = await new Promise((resolve, reject) => {
	const db = new sqlite3.Database('../db/project348.sqlite', (err) => {
		if (err) {
			reject(err);
		} else {
			console.log('Connected to the database.');
			resolve(db);
		}
	});
});

export const run = (sql, params) => {
	return new Promise((resolve, reject) => {
		db.run(sql, params, function(err) {
			if (err) {
				console.log('Error running sql ' + sql);
				console.log(err);
				reject(err);
			} else {
				resolve({ id: this.lastID });
			}
		});
	});
}

console.log('db in db.js:', db);

export default db;

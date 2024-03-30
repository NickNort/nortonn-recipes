// const express = require("express");
// const cors = require("cors");
// const app = express();

// const options = {
//     origin: 'http://localhost:3000'
// }

// app.use(cors(options));

// require("dotenv").config({ path: "./config.env" });
// const port = process.env.PORT || 8000;
// app.use(cors());
// app.use(express.json());

// const recipeRouter = require("./routes/recipe_route.js");
// app.use(recipeRouter);

// // const allowedOrigins = ["http://localhost:3000"];

// // import sqlite
// const sqlite3 = require('sqlite3').verbose();
// // create database connection
// let db = new sqlite3.Database('../db/project348.sqlite', (err) => {
// 	if (err) {
// 		return console.error(err.message);
//   	}
// 	console.log('Connected to the database.');
// });

// // get driver connection
// // const dbo = require("./db/conn");
// app.listen(port, () => {
//   // perform a database connection when server starts
// //   dbo.connectToServer(function (err) {
// //     if (err) console.error(err);
// //    });
//   console.log(`Server is running on port: ${port}`);
// });



// // sqlitetutorial.net suggests closing the db but like... why? it should close automatically when the server shuts down anyways and this is weird to implement
// // process.on('SIGINT', () => {
// // 	// close the database
// // 	db.close((err) => {
// // 		if (err) {
// // 		return console.error(err.message);
// // 		}
// // 		console.log('Db connection closed.');
// // 	});
// // });


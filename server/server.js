import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Router } from 'express';
import recipeRouter from "./routes/recipe_route.js";

const app = express();

const options = {
	origin: 'http://localhost:3000'
}

app.use(cors(options));


// // import sqlite
// import sqlite3 from 'sqlite3';
// // create database connection
// const db = await new Promise((resolve, reject) => {
// 	const db = new sqlite3.Database('../db/project348.sqlite', (err) => {
// 		if (err) {
// 			reject(err);
// 		} else {
// 			console.log('Connected to the database.');
// 			resolve(db);
// 		}
// 	});
// });
// console.log('db: ', db);

// db.run('INSERT INTO recipes (name, estimated_time, ingredients, instructions) VALUES (\'test\', 2, \'blah\', \'blah\')');


dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());


// const createRecipe = (req, res) => {
// 	try {
// 		console.log(req.body);

// 		console.log("db: ", db);

// 		db.run('INSERT INTO recipes (name, estimated_time, ingredients, instructions) VALUES (?, ?, ?, ?)', [req.body.name, req.body.estimatedTime, req.body.ingredients, req.body.instructions]);

// 		return res.send('Recipe created!');
// 	} catch (error) {
// 		console.log(error);
// 		return res.send("An error occurred. Please try again.");
// 	}
// };
// const recipeRouter = Router();
// recipeRouter.post(`recipes/create`, createRecipe);

app.use(recipeRouter);


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


// export default { app, db };

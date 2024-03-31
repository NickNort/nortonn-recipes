import * as db from '../db.js';

export const createRecipe = (req, res) => {
	console.log("\n===createRecipe===\n");
	try {
		// DEBUGGING:
		console.log(req.body);
		console.log("db in createRecipe: ", db);

		db.run('INSERT INTO recipes (name, estimated_time, ingredients, instructions) VALUES (?, ?, ?, ?)', [req.body.name, req.body.estimatedTime, req.body.ingredients, req.body.instructions]);

		return res.send('Recipe created!');
	} catch (error) {
		console.log(error);
		return res.send("An error occurred. Please try again.");
	}
};

// export const getRecipes = (req, res) => {
// 	console.log("===getRecipes===");
// 	try {
// 		db.all('SELECT * FROM recipes', (error, rows) => {
// 			if (error) {
// 				console.log(error);
// 				return res.send("An error occurred. Please try again.");
// 			}

// 			console.log("rows: " + rows);
// 			return res.json(rows);
// 		});
// 	} catch (error) {
// 		console.log(error);
// 		return res.send("An error occurred. Please try again.");
// 	}
// };

export const getRecipes = (req, res) => {
	console.log("===getRecipes===");
	try {
		db.all('SELECT * FROM recipes').then((rows) => {
			return res.json(rows);
		});
	} catch (error) {
		console.log(error);
		return res.send("An error occurred. Please try again.");
	}
};
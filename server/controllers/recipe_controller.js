import * as db from '../db.js';

export const createRecipe = (req, res) => {
	try {
		console.log(req.body);

		console.log("db: ", db);

		db.run('INSERT INTO recipes (name, estimated_time, ingredients, instructions) VALUES (?, ?, ?, ?)', [req.body.name, req.body.estimatedTime, req.body.ingredients, req.body.instructions]);

		return res.send('Recipe created!');
	} catch (error) {
		console.log(error);
		return res.send("An error occurred. Please try again.");
	}
};
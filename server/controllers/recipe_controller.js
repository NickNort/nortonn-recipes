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

export const getRecipe = (req, res) => {
	console.log("===getRecipe===");
	try {
		db.all('SELECT * FROM recipes WHERE id = ?', [req.query.recipe_id]).then((rows) => {
			return res.json(rows);
		});
	} catch (error) {
		console.log(error);
		return res.send("An error occurred. Please try again.");
	}
}

export const deleteRecipe = (req, res) => {
	console.log("===deleteRecipe===");
	try {
		db.run('DELETE FROM recipes WHERE id = ?', [req.query.recipe_id]);
		return res.send('Recipe deleted!');
	} catch (error) {
		console.log(error);
		return res.send("An error occurred. Please try again.");
	}
};

export const updateRecipe = (req, res) => {
	console.log("===updateRecipe===");
	try {
		db.run('UPDATE recipes SET name = ?, estimated_time = ?, ingredients = ?, instructions = ? WHERE id = ?', [req.body.name, req.body.estimatedTime, req.body.ingredients, req.body.instructions, req.body.id]);
		return res.send('Recipe updated!');
	} catch (error) {
		console.log(error);
		return res.send("An error occurred. Please try again.");
	}
}
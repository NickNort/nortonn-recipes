import * as db from '../db.js';
import sequelize from '../orm.js';
import Recipe from '../models/recipe.js';

export const createRecipe = async (req, res) => {
	console.log("\n===createRecipe===\n");
	const t = await sequelize.transaction();
	try {
		// DEBUGGING:
		console.log(req.body);
		console.log("db in createRecipe: ", sequelize);

		await Recipe.create({
			name: req.body.name,
			estimated_time: req.body.estimatedTime,
			ingredients: req.body.ingredients,
			instructions: req.body.instructions
		}, { transaction: t });

		await t.commit();

		return res.send('Recipe created!');
	} catch (error) {
		console.log(error);
		await t.rollback();
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

export const updateRecipe = async (req, res) => {
	console.log("===updateRecipe===");
	const t = await sequelize.transaction();
	try {
		console.log(req.body);
		await Recipe.update({
			name: req.body.name,
			estimated_time: req.body.estimatedTime,
			ingredients: req.body.ingredients,
			instructions: req.body.instructions
		}, {
			where: { id: req.query.recipe_id },
			transaction: t
		});

		await t.commit();

		return res.send('Recipe updated!');
	} catch (error) {
		console.log(error);
		await t.rollback();
		return res.send("An error occurred. Please try again.");
	}
}
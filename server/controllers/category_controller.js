import * as db from '../db.js';
import sequelize from '../orm.js';
import Category from '../models/category.js';

export const createCategory = async (req, res) => {
	console.log("\n===createCategory===\n");
	const t = await sequelize.transaction();
	try {
		// DEBUGGING:
		console.log(req.body);
		// console.log("db in createCategory: ", sequelize);

		await Category.create({
			name: req.body.name
		}, { transaction: t });

		await t.commit();

		return res.send('Category created!');
	} catch (error) {
		console.log(error);
		await t.rollback();
		return res.send("An error occurred. Please try again.");
	}
};

export const getCategories = (req, res) => {
	console.log("===getCategories===");
	try {
		db.all('SELECT * FROM categories').then((rows) => {
			return res.json(rows);
		});
	} catch (error) {
		console.log(error);
		return res.send("An error occurred. Please try again.");
	}
};

export const getCategory = (req, res) => {
	console.log("===getCategory===");
	try {
		db.all('SELECT * FROM categories WHERE id = ?', [req.query.category_id]).then((rows) => {
			return res.json(rows);
		});
	} catch (error) {
		console.log(error);
		return res.send("An error occurred. Please try again.");
	}
}

export const deleteCategory = (req, res) => {
	console.log("===deleteCategory===");
	try {
		db.run('DELETE FROM categories WHERE id = ?', [req.query.category_id]);
		return res.send('Category deleted!');
	} catch (error) {
		console.log(error);
		return res.send("An error occurred. Please try again.");
	}
};

export const updateCategory = async (req, res) => {
	console.log("===updateCategory===");
	const t = await sequelize.transaction();
	try {
		console.log(req.body);
		await Category.update({
			name: req.body.name
		}, {
			where: { id: req.query.category_id },
			transaction: t
		});

		await t.commit();

		return res.send('Category updated!');
	} catch (error) {
		console.log(error);
		await t.rollback();
		return res.send("An error occurred. Please try again.");
	}
}

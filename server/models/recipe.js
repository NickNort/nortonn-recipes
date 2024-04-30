import { DataTypes } from 'sequelize';
import sequelize from '../orm.js';

const Recipe = sequelize.define('Recipe', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	creator_id: {
		type: DataTypes.INTEGER,
		allowNull: true,
		references: {
			model: 'User',
			key: 'id'
		}
	},
	category: {
		type: DataTypes.INTEGER,
		allowNull: true,
		references: {
			model: 'Category',
			key: 'id'
		}
	},
	recipeName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	estimated_time: {
		type: DataTypes.INTEGER,
		allowNull: true
	},
	ingredients: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	instructions: {
		type: DataTypes.TEXT,
		allowNull: false
	}
}, {
	timestamps: false
});

export default Recipe;
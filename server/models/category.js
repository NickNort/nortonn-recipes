import { DataTypes } from 'sequelize';
import sequelize from '../orm.js';

const Category = sequelize.define('Category', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.TEXT,
		allowNull: false
	}
}, {
	timestamps: false // Disable timestamps
});

export default Category;

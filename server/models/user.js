import { DataTypes } from 'sequelize';
import sequelize from '../orm.js';

const User = sequelize.define('User', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	username: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	password: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	email: {
		type: DataTypes.TEXT,
		allowNull: false
	}
}, {
	timestamps: false // Disable timestamps
});

export default User;

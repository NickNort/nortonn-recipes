import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
	  dialect: 'sqlite',
	  storage: '../db/project348.sqlite'
});

try {
	await sequelize.authenticate();
	console.log('ORM connected');
} catch (error) {
	console.error('Unable to connect to the database:', error);
}

export default sequelize;
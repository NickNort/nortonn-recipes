-- CREATE TABLE example(
-- 	id SERIAL NOT NULL,
-- 	some_text TEXT,
-- 	PRIMARY KEY (id)
-- );

-- INSERT INTO example
-- 	VALUES
-- 	(0, 'Hello!'),
-- 	(1, 'Goodbye!');

CREATE TABLE recipes(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	creator_id INTEGER,
	category INTEGER,
	name TEXT NOT NULL,
	estimated_time INTEGER,
	ingredients TEXT NOT NULL,
	instructions TEXT NOT NULL,
	FOREIGN KEY (creator_id) REFERENCES Users(id),
	FOREIGN KEY (category) REFERENCES Categories(id)
);

CREATE TABLE categories(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL
);

INSERT INTO categories(name)
	VALUES
	('Appetizer'),
	('Breakfast'),
	('Dessert'),
	('Dinner'),
	('Drink'),
	('Lunch'),
	('Salad'),
	('Sandwich'),
	('Side'),
	('Snack'),
	('Soup');

CREATE TABLE users(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	username TEXT NOT NULL,
	password TEXT NOT NULL,
	email TEXT NOT NULL
);

CREATE TABLE ratings(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	recipe_id INTEGER,
	user_id INTEGER,
	rating INTEGER,
	FOREIGN KEY (recipe_id) REFERENCES Recipes(id),
	FOREIGN KEY (user_id) REFERENCES Users(id)
);
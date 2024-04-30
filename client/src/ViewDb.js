import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import './ViewDb.css';

const ViewDb = () => {
	const [recipes, setRecipes] = useState([]);
	const [categories, setCategories] = useState([]);
  	const [selectedCategory, setSelectedCategory] = useState('');

	useEffect(() => {
		axios.get('http://localhost:8080/categories')
		.then(response => {
			setCategories(response.data);
		})
		.catch(error => {
			console.log(error);
		});
	}, []);

	useEffect(() => {
		if (selectedCategory === '') {
			axios.get('http://localhost:8080/recipes')
				.then(response => {
					setRecipes(response.data);
				})
				.catch(error => {
					console.log(error);
				});
		} else {
			axios.get(`http://localhost:8080/recipes/getByCategory?category=${selectedCategory}`)
				.then(response => {
					setRecipes(response.data);
				})
				.catch(error => {
					console.log(error);
				});
		}
	}, [selectedCategory]);

	console.log("recipes:" + recipes);

	return (
		<>
		<Header />
			<div className='recipes-title'>Recipes:</div>
			<div className='category-selector'>
				<select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
					<option value=''>All Categories</option>
					{categories.map((category) => (
						<option key={category.id} value={category.categoryName}>
							{category.categoryName}
						</option>
					))}
				</select>
			</div>
			<div className='table-container'>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Estimated Time</th>
						<th>Category</th>
						<th>Ingredients</th>
						<th>Instructions</th>
					</tr>
				</thead>
				<tbody>
					{recipes.map((recipe) => (
						<tr key={recipe.id}>
							<td>{recipe.id}</td>
							<td>{recipe.recipeName}</td>
							<td>{recipe.estimated_time}</td>
							<td>{recipe.category}</td>
							<td>{recipe.ingredients}</td>
							<td>{recipe.instructions}</td>
						</tr>
					))}
				</tbody>
			</table>
			</div>
		</>
	);
};

export default ViewDb;
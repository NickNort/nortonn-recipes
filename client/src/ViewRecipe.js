import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import Header from './Components/Header';

const ViewRecipe = () => {
	const [recipe, setRecipe] = useState(null);
	const [searchParams, setSearchParams] = useSearchParams();

	const recipeId = searchParams.get('recipe_id');

	useEffect(() => {
		axios.get(`http://localhost:8080/recipes/getRecipe?recipe_id=${recipeId}`)
		.then(response => {
			console.log(response);
			setRecipe(response.data[0]);
		}).catch(error => {
			console.log(error);
		});
	}, []);

	if (!recipe) {
		return <div>Loading...</div>;
	}

	return (
		<>
		<Header />
		<div style={{ marginTop: '85px' }}>
			<h1>Recipe Details</h1>
			<p>ID: {recipe.id}</p>
			<p>Name: {recipe.recipeName}</p>
			<p>Estimated Time: {recipe.estimated_time}</p>
			<p>Category: {recipe.category}</p>
			<p>Ingredients: {recipe.ingredients}</p>
			<p>Instructions: {recipe.instructions}</p>
		</div>
		</>
	);
};

export default ViewRecipe;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import './ViewDb.css';

// export async function getRecipes() {
// 	await axios.get('http://localhost:8080/recipes')
// 	.then(response => {
// 	//   console.log(response.data);
// 	  return response.data;
// 	})
// 	.catch(error => {
// 	  console.log(error);
// 	});
// }


// const ViewDb = () => {
// 	const [recipes, setRecipes] = useState([]);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const response = await axios.get('http://localhost:8080/recipes');
// 				setRecipes(response.data);
// 			} catch (error) {
// 				console.error('Error fetching data:', error);
// 			}
// 		};

// 		fetchData();
// 	}, []);

// 	// axios.get('http://localhost:8080/recipes')
// 	// 	.then(response => {
// 	// 		console.log(response.data);
// 	// 		setRecipes(response.data);
// 	// 	})
// 	// 	.catch(error => {
// 	// 		console.log(error);
// 	// 	});

// 	return (
// 		<>
// 		<Header />
// 			<div className='recipes-title'>
// 				Recipes:
// 			<ul>
// 				{recipes.map((recipe) => (
// 					<li key={recipe.id}>{recipe.name}</li>
// 				))}
// 			</ul>
// 			</div>
// 		</>
// 	);
// };

// const ViewDb = () => {
// 	var recipes = [];

// 	axios.get('http://localhost:8080/recipes')
// 		.then(response => {
// 			console.log(response.data);
// 			recipes = response.data;
// 		})
// 		.catch(error => {
// 			console.log(error);
// 		});

// 	return (
// 		<>
// 		<Header />
// 			<div className='recipes-title'>
// 				Recipes:
// 			<ul>
// 				{recipes.map((recipe) => (
// 					<li key={recipe.id}>{recipe.name}</li>
// 				))}
// 			</ul>
// 			</div>
// 		</>
// 	);
// };

const ViewDb = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:8080/recipes')
		.then(response => {
			console.log(response.data);
			setRecipes(response.data);
		})
		.catch(error => {
			console.log(error);
		});
	}, []);

	console.log("recipes:" + recipes);

	return (
		<>
		<Header />
			<div className='recipes-title'>Recipes:</div>
			<div className='table-container'>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Estimated Time</th>
						<th>Category</th>
						<th>Creator ID</th>
						<th>Ingredients</th>
						<th>Instructions</th>
					</tr>
				</thead>
				<tbody>
					{recipes.map((recipe) => (
						<tr key={recipe.id}>
							<td>{recipe.id}</td>
							<td>{recipe.name}</td>
							<td>{recipe.estimated_time}</td>
							<td>{recipe.category}</td>
							<td>{recipe.creator_id}</td>
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
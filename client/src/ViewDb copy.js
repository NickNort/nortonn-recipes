// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

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

// 	return (
// 		<div>
// 			<h1>Recipes</h1>
// 			<ul>
// 				{recipes.map((recipe) => (
// 					<li key={recipe.id}>{recipe.name}</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// };

// export default ViewDb;
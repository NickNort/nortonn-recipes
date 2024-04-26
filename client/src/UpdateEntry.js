import React, { useState } from 'react';
import Header from './Components/Header';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import './UpdateEntry.css';
// import UpdateEntryID from './UpdateEntryID';
import { useNavigate } from 'react-router-dom';

function UpdateEntry() {
	const [recipeId, setRecipeId] = useState('');
	const [response, setResponse] = useState(null);

	const navigate = useNavigate();

	const handleInputChange = (event) => {
		setRecipeId(event.target.value);
	};

	const handleSubmit = () => {
		axios.get(`http://localhost:8080/recipes/getRecipe?recipe_id=${recipeId}`)
		.then(response => {
			setResponse(response);
			console.log(response.data[0]);
			localStorage.setItem('recipeId', recipeId);
			localStorage.setItem('recipeName', response.data[0].name);
			localStorage.setItem('recipeTime', response.data[0].estimated_time);
			localStorage.setItem('recipeIngredients', response.data[0].ingredients);
			localStorage.setItem('recipeInstructions', response.data[0].instructions);
			
			navigate('/update-entry-id');
		}).catch(error => {
			console.log(error);
		});
	};

	// Prompt the user for new values
	const promptForNewValues = () => {
		// Implement your logic here to prompt the user for new values
		navigate('/update-entry-id');
	};

	return (
		<>
		<Header />
		<div className='update-recipe'>
				<label>
				Enter the ID of the Recipe to Update:
					<input type="text" value={recipeId} onChange={handleInputChange} />
				</label>
				<button className='subButton' onClick={() => {
					handleSubmit();
				}}>Submit</button>
		</div>
		</>
	);
}

export default UpdateEntry;
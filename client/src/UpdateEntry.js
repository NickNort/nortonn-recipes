import React, { useState } from 'react';
import Header from './Components/Header';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './UpdateEntry.css';

function UpdateEntry() {
	const [recipeId, setRecipeId] = useState('');
	const [response, setResponse] = useState(null);

	const handleInputChange = (event) => {
		setRecipeId(event.target.value);
	};

	const handleSubmit = () => {
		axios.get(`http://localhost:8080/recipes/getRecipe?recipe_id=${recipeId}`)
		.then(response => {
			setResponse(response);
			history.pushState('/update-entry-id', { recipeId: recipeId });
		}).catch(error => {
			console.log(error);
		});
	};

	// Prompt the user for new values
	const promptForNewValues = () => {
		// Implement your logic here to prompt the user for new values
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
					promptForNewValues(); // Call the promptForNewValues function after handleSubmit
				}}>Submit</button>
		</div>
		</>
	);
}

export default UpdateEntry;
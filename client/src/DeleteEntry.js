import React, { useState } from 'react';
import Header from './Components/Header';
import axios from 'axios';
import './DeleteEntry.css';

function DeleteEntry() {
	const [recipeId, setRecipeId] = useState('');

	const handleInputChange = (event) => {
		setRecipeId(event.target.value);
	};

	const handleSubmit = () => {
		axios.delete(`http://localhost:8080/recipes?recipe_id=${recipeId}`)
		.then(response => {
			console.log(response);
		}).catch(error => {
			console.log(error);
		});
	};

	return (
		<>
		<Header />
		<div className='delete-recipe'>
				<label>
				Enter the ID of the Recipe to Delete:
					<input type="text" value={recipeId} onChange={handleInputChange} />
				</label>
				<button className='subButton' onClick={() => {
					handleSubmit();
				}}>Submit</button>
		</div>
		</>
	);
}

export default DeleteEntry;
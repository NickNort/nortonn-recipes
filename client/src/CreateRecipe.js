import React, { useState } from 'react';
import './CreateRecipe.css';
import axios from 'axios';

function CreateRecipe() {
  const [name, setName] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Here you would handle the form submission, e.g. send data to your server
  //   console.log(name, estimatedTime, ingredients, instructions);
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  
  //   const recipe = { name, estimatedTime, ingredients, instructions };
  
  //   try {
  //     const response = await axios.post('/api/recipes', recipe);
  
  //     console.log('Recipe saved successfully:', response.data);
  //   } catch (error) {
  //     console.error('Error saving recipe:', error.response.statusText);
  //   }
  // };

const handleSubmit = () => {
  axios.post('http://localhost:8080/recipes/create', {
    name: name,
    estimatedTime: estimatedTime,
    ingredients: ingredients,
    instructions: instructions
  }).then(response => {
    console.log(response);
  }).catch(error => {
    console.log(error);
  });
};


  return (
    <div className="create-recipe">
      <form>
        <label>
          Recipe Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Estimated Time (in minutes):
          <input type="text" value={estimatedTime} onChange={e => setEstimatedTime(e.target.value)} />
        </label>
        <label>
          Ingredients:
          <textarea value={ingredients} onChange={e => setIngredients(e.target.value)} />
        </label>
        <label>
          Instructions:
          <textarea value={instructions} onChange={e => setInstructions(e.target.value)} />
        </label>
        <input type="button" value="Submit" onClick={handleSubmit}/>
      </form>
    </div>
  );
}

export default CreateRecipe;
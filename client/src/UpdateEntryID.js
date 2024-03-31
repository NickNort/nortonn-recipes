import React, { useState } from 'react';
import Header from "./Components/Header.js";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './UpdateEntryID.css';

function UpdateEntryID() {
  const [name, setName] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const history = useHistory();
  const idToUpdate = history.location.state.recipeId;

const handleSubmit = () => {
  axios.post(`http://localhost:8080/recipes?recipe_id=${idToUpdate}`, {
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
    <>
    <Header />
    <div className="update-recipe-id">
      {/* <form> */}
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
        <input className="subButton" type="button" value="Submit" onClick={handleSubmit}/>
      {/* </form> */}
    </div>
    </>
  );
}

export default UpdateEntryID;
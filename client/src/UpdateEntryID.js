import React, { useState, useEffect } from 'react';
import Header from "./Components/Header.js";
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import './UpdateEntryID.css';

function UpdateEntryID() {
  const [name, setName] = useState(localStorage.getItem('recipeName'));
  const [estimatedTime, setEstimatedTime] = useState(localStorage.getItem('recipeTime'));
  const [ingredients, setIngredients] = useState(localStorage.getItem('recipeIngredients'));
  const [instructions, setInstructions] = useState(localStorage.getItem('recipeInstructions'));
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(localStorage.getItem('recipeCategory'));

  // const history = useHistory();
  // const idToUpdate = history.location.state.recipeId;
  const idToUpdate = localStorage.getItem('recipeId');

  useEffect(() => {
    axios.get('http://localhost:8080/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

const handleSubmit = () => {
  axios.put(`http://localhost:8080/recipes?recipe_id=${idToUpdate}`, {
    name: name,
    category: selectedCategory,
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
    <label>
          Recipe Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
        Category:
        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
          <option value="">Select a category</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.categoryName}</option>
          ))}
        </select>
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
    </div>
    </>
  );
}

export default UpdateEntryID;
import React, { useState, useEffect } from 'react';
import Header from "./Components/Header.js";
import axios from 'axios';
import './CreateRecipe.css';

function CreateRecipe() {
  const [name, setName] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
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
    recipeName: name,
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
    <div className="create-recipe">
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

export default CreateRecipe;
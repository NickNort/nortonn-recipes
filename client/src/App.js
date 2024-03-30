import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateRecipe from './CreateRecipe';

function MainPage() {
  return (
    <header className="App-header">
      nortonn's CS348 Project
      <Link to="/create-recipe">
        <button>Create Recipe</button>
      </Link>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
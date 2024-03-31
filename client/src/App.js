import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateRecipe from './CreateRecipe';
import Header from './Components/Header';
import { useNavigate } from 'react-router-dom';

// function MainPage() {
//   return (
//     <>
//       <Header />
//       <header className="App-header">
//         {/* nortonn's CS348 Project */}
//         <Link to="/create-recipe">
//           <button style={{ backgroundColor: '#afafaf', height: '40px' }}>Create Recipe</button>
//         </Link>
//       </header>
//     </>
//   );
// }

function MainPage2() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className='buttons-container'>
        <button className='create-recipe-button' onClick={() => {navigate('/create-recipe');}}>
          Create Recipe
        </button>
        <button className='view-db-button' onClick={() => {navigate('/view-db');}}>
          View Data
        </button>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage2 />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
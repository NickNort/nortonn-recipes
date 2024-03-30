import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateRecipe from './CreateRecipe';

// function CreateRecipe() {
//   return <h2>Here you can insert data into the recipes table</h2>;
// }

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          nortonn's CS348 Project
          <Link to="/create-recipe">
            <button>Create Recipe</button>
          </Link>
        </header>
        <Routes>
          <Route path="/create-recipe" element={<CreateRecipe />} />
        </Routes>
      </div>
    </Router>
  );
}

// export default App;

// import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// function CreateRecipe() {
//   return <h2>Here you can insert data into the recipes table</h2>;
// }

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           nortonn's CS348 Project
//           <Link to="/create-recipe">
//             <button>Create Recipe</button>
//           </Link>
//         </header>
//         <Route path="/create-recipe" component={CreateRecipe} />
//       </div>
//     </Router>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//           nortonn's CS348 Project
//       </header>
//     </div>
//   );
// }

export default App;

/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */

/* import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import EditRecipePage from "./pages/EditRecipePage";

export default function App() {
  return (
    <div className="app-container" style={{ padding: 20 }}>
      <header>
        <h1>Recipe Sharing App</h1>
        <nav style={{ marginBottom: 12 }}>
          <Link to="/" style={{ marginRight: 8 }}>
            Home
          </Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
          <Route path="/recipe/:id/edit" element={<EditRecipePage />} />
        </Routes>
      </main>
    </div>
  );
} */

import React from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;

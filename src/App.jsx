import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import SearchBar from "./components/searchBar";
import Result from "./components/result";
import RecipeDetails from "./components/recipeDetails";

function App() {
  const [recipes, setRecipe] = useState([])
  const [hasSearched, setHasSearched] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchRecipes = async (query) => {
    if (!query.trim())
      return;
    setHasSearched(true)
    setLoading(true)
    const res = await fetch
      (`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    const data = await res.json();
    setRecipe(data.meals || [])
    setLoading(false)
  }

  return (
    <Router>
      <div className="App text-center">
        <Link to="/" className="text-decoration-none text-warning fw-bold mt-4 fs-1">Recipe Finder 🍲</Link>
        <Routes>
          <Route path="/" element={
            <>
              <SearchBar onSearch={fetchRecipes} />
              <Result recipes={recipes} hasSearched={hasSearched} loading={loading} />
            </>
          } />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
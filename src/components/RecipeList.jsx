/* import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";

export default function RecipeList() {
  // use the getter to get filtered recipes
  const filtered = useRecipeStore((state) => state.getFilteredRecipes());
  const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  if (!filtered.length) return <div>No recipes found.</div>;

  return (
    <div>
      {filtered.map((recipe) => (
        <div
          key={recipe.id}
          style={{ border: "1px solid #ddd", padding: 12, marginBottom: 10 }}
        >
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <div>
            <button onClick={() => toggleFavorite(recipe.id)}>
              {favorites.includes(recipe.id) ? "★ Unfavorite" : "☆ Favorite"}
            </button>
            <Link to={`/recipe/${recipe.id}/edit`} style={{ marginLeft: 8 }}>
              Edit
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
} */

/*import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList; */

import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.length === 0 && <p>No recipes added yet!</p>}
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

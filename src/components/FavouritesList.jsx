import React from "react";
import { useRecipeStore } from "../store/recipeStore";
import { Link } from "react-router-dom";

export default function FavoritesList() {
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);
  const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);

  const favoriteRecipes = favorites
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);

  return (
    <div style={{ marginBottom: 20 }}>
      <h3>Favorites</h3>
      {favoriteRecipes.length === 0 ? (
        <div>No favorites yet</div>
      ) : (
        favoriteRecipes.map((r) => (
          <div key={r.id} style={{ marginBottom: 8 }}>
            <Link to={`/recipe/${r.id}`}>{r.title}</Link>
            <button
              onClick={() => toggleFavorite(r.id)}
              style={{ marginLeft: 8 }}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

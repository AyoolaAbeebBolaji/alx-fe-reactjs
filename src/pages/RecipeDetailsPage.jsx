import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";

export default function RecipeDetailsPage() {
  const { id } = useParams();
  const recipeId = +id;
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  if (!recipe) return <div>Recipe not found.</div>;

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/");
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <p>Prep time: {recipe.prepTime} mins</p>
      <h4>Ingredients</h4>
      <ul>
        {(recipe.ingredients || []).map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
      <div style={{ marginTop: 12 }}>
        <Link to={`/recipe/${recipeId}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete} style={{ marginLeft: 8 }}>
          Delete
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";

export default function EditRecipePage() {
  const { id } = useParams();
  const recipeId = +id;
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState(recipe?.title || "");
  const [description, setDescription] = useState(recipe?.description || "");
  const [ingredients, setIngredients] = useState(
    (recipe?.ingredients || []).join(", ")
  );
  const [prepTime, setPrepTime] = useState(recipe?.prepTime || "");

  if (!recipe) return <div>Recipe not found.</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({
      id: recipeId,
      title: title.trim(),
      description: description.trim(),
      ingredients: ingredients
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      prepTime: parseInt(prepTime || "0", 10),
    });
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <input
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

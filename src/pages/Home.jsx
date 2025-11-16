import React, { useEffect } from "react";
import AddRecipeForm from "../components/AddRecipeForm";
import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";
import FavoritesList from "../components/FavoritesList";
import RecommendationsList from "../components/RecommendationsList";
import { useRecipeStore } from "../store/recipeStore";

export default function Home() {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  // seed with example recipes on first load (for beginner demo)
  useEffect(() => {
    setRecipes([
      {
        id: 1,
        title: "Jollof Rice",
        description: "Spicy tomato rice",
        ingredients: ["rice", "tomato"],
        prepTime: 60,
        tags: ["african", "rice"],
      },
      {
        id: 2,
        title: "Pancakes",
        description: "Fluffy pancakes",
        ingredients: ["flour", "milk", "egg"],
        prepTime: 20,
        tags: ["breakfast", "sweet"],
      },
    ]);
  }, [setRecipes]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20 }}>
      <section>
        <SearchBar />
        <AddRecipeForm />
        <RecipeList />
      </section>

      <aside>
        <FavoritesList />
        <RecommendationsList />
      </aside>
    </div>
  );
}

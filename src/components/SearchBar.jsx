import React from "react";
import { useRecipeStore } from "../store/recipeStore";

export default function SearchBar() {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  return (
    <div style={{ marginBottom: 12 }}>
      <input
        placeholder="Search recipes by title, description or ingredient..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "100%", marginBottom: 8 }}
      />
      <div>
        <button onClick={generateRecommendations}>
          Generate Recommendations
        </button>
      </div>
    </div>
  );
}

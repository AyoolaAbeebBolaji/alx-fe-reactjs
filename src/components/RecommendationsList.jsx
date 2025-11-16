import React from "react";
import { useRecipeStore } from "../store/recipeStore";
import { Link } from "react-router-dom";

export default function RecommendationsList() {
  const recommendations = useRecipeStore((state) => state.recommendations);

  if (!recommendations || recommendations.length === 0)
    return <div>No recommendations yet.</div>;

  return (
    <div>
      <h3>Recommended</h3>
      {recommendations.map((r) => (
        <div key={r.id}>
          <Link to={`/recipe/${r.id}`}>{r.title}</Link>
        </div>
      ))}
    </div>
  );
}

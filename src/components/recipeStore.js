/* // src/store/recipeStore.js
import create from "zustand";

export const useRecipeStore = create((set, get) => ({
  // Data
  recipes: [], // array of recipe objects { id, title, description, ingredients:[], prepTime, tags:[] }
  searchTerm: "", // current search text
  favorites: [], // array of recipe ids
  recommendations: [], // computed recommendations (cache)

  // Actions
  setRecipes: (recipes) => set({ recipes }),

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      favorites: state.favorites.filter((fid) => fid !== id),
    })),

  setSearchTerm: (term) => set({ searchTerm: term }),

  // computed getter - returns filtered recipes based on current searchTerm
  getFilteredRecipes: () => {
    const { recipes, searchTerm } = get();
    if (!searchTerm) return recipes;
    const lower = searchTerm.toLowerCase();
    return recipes.filter(
      (r) =>
        r.title.toLowerCase().includes(lower) ||
        r.description.toLowerCase().includes(lower) ||
        (r.ingredients || []).some((i) => i.toLowerCase().includes(lower))
    );
  },

  // favorites management
  toggleFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites.filter((id) => id !== recipeId)
        : [...state.favorites, recipeId],
    })),

  // simple recommendation generator (example: recommends recipes that share a tag with favorites)
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const favRecipes = recipes.filter((r) => favorites.includes(r.id));
    const favTags = new Set(favRecipes.flatMap((r) => r.tags || []));
    // recommend recipes that share at least one tag with favorites but are not already favorited
    const recommended = recipes.filter(
      (r) =>
        !favorites.includes(r.id) && (r.tags || []).some((t) => favTags.has(t))
    );
    set({ recommendations: recommended });
  },

  // clear recommendations
  clearRecommendations: () => set({ recommendations: [] }),
})); */

import create from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));

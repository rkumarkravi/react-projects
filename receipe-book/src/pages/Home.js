import React from 'react'
import RecipeSection from '../components/RecipeSection';

function Home() {
  const breakfastRecipes = [
    { id: 1, name: "Scrambled Eggs", description: "Delicious scrambled eggs with veggies." },
    // Add more breakfast recipes
  ];

  const lunchRecipes = [
    { id: 1, name: "Chicken Salad", description: "Healthy chicken salad with fresh greens." },
    // Add more lunch recipes
  ];

  const dinnerRecipes = [
    { id: 1, name: "Spaghetti Bolognese", description: "Classic spaghetti with meat sauce." },
    // Add more dinner recipes
  ];

  return (
    <div className="p-8">
      <h1 className="text-5xl text-yellow-500 font-bold mb-8">Welcome to the Recipe Book</h1>

      <RecipeSection title="Breakfast Recipes" recipes={breakfastRecipes} />
      <RecipeSection title="Lunch Recipes" recipes={lunchRecipes} />
      <RecipeSection title="Dinner Recipes" recipes={dinnerRecipes} />
    </div>
  )
}

export default Home
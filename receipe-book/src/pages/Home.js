import React, { useEffect, useState } from 'react'
import RecipeSection from '../components/RecipeSection';

function Home() {
  const [breakfastRecipes, setBreakfastRecipes] = useState(
    [
      // { id: 1, name: "Scrambled Eggs", description: "Delicious scrambled eggs with veggies." },
      // { id: 2, name: "Pancakes", description: "Fluffy pancakes served with maple syrup." },
      // { id: 3, name: "Avocado Toast", description: "Sliced avocado on whole-grain toast." },
      // { id: 4, name: "Smoothie Bowl", description: "A nutritious bowl of blended fruits topped with granola." },
      // { id: 5, name: "Omelette", description: "Classic omelette with cheese and herbs." },
    ]
  );

  const [lunchRecipes, setLunchRecipes] = useState([
    // { id: 1, name: "Chicken Salad", description: "Healthy chicken salad with fresh greens." },
    // { id: 2, name: "Vegetarian Wrap", description: "A tasty wrap filled with assorted veggies." },
    // { id: 3, name: "Quinoa Bowl", description: "Quinoa bowl with avocado, black beans, and corn." },
    // { id: 4, name: "Caprese Sandwich", description: "Classic Caprese sandwich with tomatoes and mozzarella." },
    // // Add more lunch recipes
  ]);

  const [dinnerRecipes, setDinnerRecipes] = useState([
    // { id: 1, name: "Spaghetti Bolognese", description: "Classic spaghetti with meat sauce." },
    // { id: 2, name: "Grilled Salmon", description: "Grilled salmon with lemon and herbs." },
    // { id: 3, name: "Vegetarian Stir-Fry", description: "Colorful vegetable stir-fry with tofu." },
    // { id: 4, name: "Beef Stroganoff", description: "Creamy beef stroganoff with mushrooms." },


    // // Add more dinner recipes
  ]);

  const processReceipes = (recipes) => {
    // recipes.forEach(recipe => {
    //   console.log(recipe)
    // });
    if (!recipes) {
      return;
    }
    let newBreakFastRecipes = recipes.filter(x => x.body.find(y => y.data.mealType === 'BREAKFAST'))
      .map(x => {
        return {
          id: x.recipeId,
          name: x.body.find(y => y.id === 'basicInfo').data.receipeName,
          description: x.body.find(y => y.id === "addInfo").data.additionalInfo,
        }
      })
    setBreakfastRecipes((prevState) => {
      return [...prevState, ...newBreakFastRecipes]
    });

    let newLunchRecipes = recipes.filter(x => x.body.find(y => y.data.mealType === 'LUNCH'))
      .map(x => {
        return {
          id: x.recipeId,
          name: x.body.find(y => y.id === 'basicInfo').data.receipeName,
          description: x.body.find(y => y.id === "addInfo").data.additionalInfo,
        }
      })
    setLunchRecipes((prevState) => {
      return [...prevState, ...newLunchRecipes]
    });

    let newDinnerRecipes = recipes.filter(x => x.body.find(y => y.data.mealType === 'DINNER'))
      .map(x => {
        return {
          id: x.recipeId,
          name: x.body.find(y => y.id === 'basicInfo').data.receipeName,
          description: x.body.find(y => y.id === "addInfo").data.additionalInfo,
        }
      })
    setDinnerRecipes((prevState) => {
      return [...prevState, ...newDinnerRecipes]
    });
  }

  useEffect(() => {
    // Fetch recipes from the Express server
    fetch(window.location.hostname === 'localhost' ? '/recipes/random/10' : "/recipes")
      .then((response) => response.json())
      .then((data) => processReceipes(data))
      .catch((error) => console.error('Error fetching recipes:', error));

    //for auto fetch of recipes in some interval
    // setInterval(() => {
    //   fetch(window.location.hostname === 'localhost' ? '/recipes/random/10' : "/recipes")
    //     .then((response) => response.json())
    //     .then((data) => processReceipes(data))
    //     .catch((error) => console.error('Error fetching recipes:', error));
    // }, 60000)
  }, []);

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
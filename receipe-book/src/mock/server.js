const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

// In-memory data store
const recipes = [];

// Get all recipes
app.get('/recipes', (req, res) => {
  res.json(recipes);
});

// Get a specific recipe by ID
app.get('/recipes/:recipeId', (req, res) => {
  const recipeId = parseInt(req.params.recipeId);
  const recipe = recipes.find((r) => r.recipeId === recipeId);

  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).json({ error: 'Recipe not found' });
  }
});

// Create a new recipe
app.post('/recipes', (req, res) => {
  const newRecipe = req.body;
  newRecipe.recipeId = Date.now(); // Assign a unique ID
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});

// Modify a recipe by ID
app.put('/recipes/:recipeId', (req, res) => {
  const recipeId = parseInt(req.params.recipeId);
  const updatedRecipe = req.body;

  const index = recipes.findIndex((r) => r.recipeId === recipeId);

  if (index !== -1) {
    recipes[index] = { ...recipes[index], ...updatedRecipe };
    res.json(recipes[index]);
  } else {
    res.status(404).json({ error: 'Recipe not found' });
  }
});

// Delete a recipe by ID
app.delete('/recipes/:recipeId', (req, res) => {
  const recipeId = parseInt(req.params.recipeId);

  const index = recipes.findIndex((r) => r.recipeId === recipeId);

  if (index !== -1) {
    const deletedRecipe = recipes.splice(index, 1);
    res.json(deletedRecipe[0]);
  } else {
    res.status(404).json({ error: 'Recipe not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

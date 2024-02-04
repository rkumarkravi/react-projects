const express = require('express');
const bodyParser = require('body-parser');
const { generateRecipesData } = require('./randomRecipe');

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

app.post('/recipes/create/id',(req,res)=>{
  res.status(200).send(Date.now());
})
// Create a new recipe
app.post('/recipes', (req, res) => {
  console.log(req.body)
  const newRecipe = {"body":req.body};
  newRecipe.recipeId = Date.now(); // Assign a unique ID
  newRecipe.createdDateTime = Date.now();
  recipes.push(newRecipe);
  let response={ rs: "S", rd: "Submitted Successfully", payload: { shareableLink: "https://google.com", addInfo: [{ name: "share", value: "https://google.com" }] } }
  response.payload.shareableLink+=`/${newRecipe.recipeId}`;
  res.status(201).json(response);
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

app.get('/recipes/random/:count',(req,res)=>{
  const data=generateRecipesData(parseInt(req.params.count));
  recipes.push(...data);
  res.json(data);
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

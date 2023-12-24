// recipesData.js

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const generateRandomRecipe = (recipeId) => {
  const mealTypes = ['BREAKFAST', 'LUNCH', 'DINNER', 'SNACKS'];
  const randomMealType = mealTypes[generateRandomNumber(0, mealTypes.length - 1)];

  return {
    body: [
      {
        no: 1,
        name: 'Basic Information',
        id: 'basicInfo',
        data: {
          receipeName: `Recipe ${recipeId}`,
          time: {
            hour: String(generateRandomNumber(1, 3)),
            min: String(generateRandomNumber(0, 59)),
          },
          level: 'beginner',
          mealType: randomMealType,
        },
      },
      {
        no: 2,
        name: 'Recipe Ingredients',
        id: 'recipeIng',
        data: [
          {
            id: 1,
            name: 'ingredient',
            quantity: String(generateRandomNumber(1, 5)),
            unit: 'Piece',
          },
        ],
      },
      {
        no: 3,
        name: 'Steps to Prepare',
        id: 'stepsToPrepare',
        data: [
          {
            id: 1,
            stepNumber: 1,
            description: 'Step description goes here.',
          },
        ],
      },
      {
        no: 4,
        name: 'Image Upload',
        id: 'imageUpload',
        data: [{}],
      },
      {
        no: 5,
        name: 'Additional Info',
        id: 'addInfo',
        data: {
          tags: 'tag1,tag2,tag3',
          additionalInfo: 'Additional info goes here.',
        },
      },
    ],
    recipeId: recipeId,
    createdDateTime :Date.now()
  };
};

const generateRecipesData = (count) => {
  const recipesData = [];
  for (let i = 1; i <= count; i++) {
    const recipe = generateRandomRecipe(i+new Date().getTime());
    recipesData.push(recipe);
  }
  console.log("generated records >>",recipesData.length);
  return recipesData;
};

module.exports = {
  generateRecipesData,
};

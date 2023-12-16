/* eslint-disable no-unreachable */
import React, { useState } from 'react'
import Button from '../components/Button';
import TimeSelector from '../components/TimeSelector';
import UnitSelector from '../components/UnitSelector';

function CreateRecipe() {
  const stepsList = [
    {
      "no": 1,
      "name": "Basic Information",
      data: {}
    }, {
      "no": 2,
      "name": "Recipe Ingredients",
      data: {}
    }, {
      "no": 3,
      "name": "Steps to Prepare",
      data: {}
    }, {
      "no": 4,
      "name": "Image Upload",
      data: {}
    }, {
      "no": 5,
      "name": "Additional Info",
      data: {}
    },
  ];
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = (e) => {
    console.log(e);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  function getAllSetps() {
    return stepsList.map(x => {
      return <div key={x.no} className='mb-2 p-3 bg-black text-white rounded-md shadow-md cursor-pointer' onClick={() => { setCurrentStep(x.no) }}>{x.name}</div>;
    });
  }

  return (
    <div className='flex flex-row'>
      <div className='forms w-11/12'>
        <div className="mx-auto mt-8 p-3 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Step {currentStep}  {`: ${stepsList.length > 0 && stepsList.find(x => x.no === currentStep).name}`}</h2>

          {currentStep === 1 && (
            <StepOneContent onNextStep={handleNextStep} />
          )}

          {currentStep === 2 && (
            <StepTwoContent onPrevStep={handlePrevStep} onNextStep={handleNextStep} />
          )}

          {currentStep === 3 && (
            <StepThreeContent onPrevStep={handlePrevStep} />
          )}

          {/* Add more steps as needed */}

        </div>
      </div>
      <div className='steps w-8/12'>
        <div className="mx-auto mt-8 ml-3 p-3 bg-gray-800 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-white">Step {currentStep}</h2>
          {getAllSetps()}
          <Button text="Submit Your Recipe" disabled={currentStep !== 5} />
        </div>
      </div>
    </div>
  );



}

const StepOneContent = ({ onNextStep }) => {
  const [formData, setFormData] = useState({ receipeName: "", time: "", level: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle the submission of the recipe data (e.g., send it to a server)
    console.log("Recipe Submitted:", formData);

    // Clear form fields after submission
    setFormData({});
  };

  const handleLevelSelectChange = (e) => {
    setFormData(x => { return { ...x, level: e.target.value }; });
  };

  const handleTimeChange = (e) => {
    setFormData(x => { return { ...x, time: e }; });
    console.log(e);
  };


  return (<div className="mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
    <h2 className="text-2xl font-bold mb-4">Create Your Recipe</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="recipeName" className="block text-sm font-medium text-gray-600">
          Recipe Name
        </label>
        <input
          type="text"
          id="recipeName"
          name="recipeName"
          value={formData.receipeName}
          onChange={(e) => setFormData((x) => { return { ...x, receipeName: e.target.value } })}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          required
        />
      </div>

      <div className="mb-4">
        <TimeSelector label="Prepration Time" onChangeTime={handleTimeChange} />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">Select Your Level</label>
        <select
          value={formData.level}
          onChange={handleLevelSelectChange}
          className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="" disabled>Select an option</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        {/* Display the selected option */}
        {formData.level && (
          <p className="mt-4">You selected: {formData.level}</p>
        )}
      </div>
    </form>
    <button onClick={() => onNextStep(formData)} className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-blue-700">
      Next
    </button>
  </div>);
};

const StepTwoContent = ({ onPrevStep, onNextStep }) => {
  const [ingredients, setIngredients] = useState([
    { id: 1, name: '', quantity: '', unit: '' }
  ]);

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][field] = value;
    setIngredients(updatedIngredients);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { id: ingredients.length + 1, name: '', quantity: '', unit: '' }]);
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  };

  return (
    <div>
      <form >
        {ingredients.map((ingredient, index) => (
          <div key={ingredient.id} className="mb-4">
            <label htmlFor={`ingredientName${index}`} className="block text-sm font-medium text-gray-600">
              Ingredient Name
            </label>
            <input
              type="text"
              id={`ingredientName${index}`}
              value={ingredient.name}
              onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />

            <label htmlFor={`ingredientQuantity${index}`} className="block text-sm font-medium text-gray-600 mt-2">
              Quantity
            </label>
            <div className='flex justify-start items-baseline'>
              <input
                type="text"
                id={`ingredientQuantity${index}`}
                value={ingredient.quantity}
                onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md "
                required
              />
              <UnitSelector
                hint="Select unit"
                onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
                className='ml-1'
              />
            </div>
            {index > 0 && (
              <button type="button" onClick={() => handleRemoveIngredient(index)} className="text-red-500 mt-2">
                Remove Ingredient
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={handleAddIngredient} className="bg-black text-white px-4 py-2 mb-4 rounded-md mt-4">
          Add Ingredient
        </button>
      </form>
      <button onClick={onPrevStep} className="mr-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700">
        Previous
      </button>
      <button onClick={() => onNextStep(ingredients)} className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-blue-700">
        Next
      </button>
    </div>
  );
};

const StepThreeContent = ({ onPrevStep }) => {
  return (
    <div>
      {/* Step Three Content */}
      <p>This is the content for Step Three.</p>

      {/* Previous button */}
      <button onClick={onPrevStep} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700">
        Previous
      </button>
    </div>
  );
};

export default CreateRecipe;
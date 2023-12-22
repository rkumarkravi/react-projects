import React, { useEffect, useState } from 'react'
import UnitSelector from '../../../components/UnitSelector';

const StepTwoContent = ({ onFormSubmit, stepId, stepsList }) => {
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
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      onFormSubmit({ stepId: stepId, data: ingredients });
  
      // Clear form fields after submission
      // setIngredients([{ id: 1, name: '', quantity: '', unit: '' }]);
    };
  
    useEffect(() => {
      const state = stepsList.find(x => x.id === stepId);
      console.log(state)
      if (state && state.data) {
        setIngredients(state.data);
      }
    }, []);
  
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
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
                  value={ingredient.unit}
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
          <button type="submit" className="bg-yellow-500 text-black px-4 py-2 mb-4 rounded-md mt-4 ml-2">
            Submit
          </button>
        </form>
      </div>
    );
  };

export default StepTwoContent
import React, { useEffect, useState } from 'react'
import TimeSelector from '../../../components/TimeSelector';

const StepOneContent = ({ onFormSubmit, stepId, stepsList }) => {
    const [formData, setFormData] = useState({ receipeName: "", time: "", level: "",mealType: "" });
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Handle the submission of the recipe data (e.g., send it to a server)
      // console.log("Recipe Submitted:", formData);
      onFormSubmit({ stepId: stepId, data: formData });
  
      // Clear form fields after submission
      // setFormData({ receipeName: "", time: "", level: "" });
    };
  
    const handleFormDataChange = (field, value) => {
      const updateFormData = { ...formData };
      updateFormData[field] = value;
      setFormData(updateFormData);
    }
  
    useEffect(() => {
      const state = stepsList.find(x => x.id === stepId);
      console.log(state)
      if (state && state.data) {
        setFormData(state.data);
      }
    }, []);
  
    return (<div >
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
            onChange={(e) => handleFormDataChange('receipeName', e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
  
        <div className="mb-4">
          <TimeSelector label="Prepration Time" value={formData.time} onChangeTime={(e) => handleFormDataChange('time', e)} />
        </div>
  
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">Select Your Level</label>
          <select
            value={formData.level}
            onChange={(e) => handleFormDataChange('level', e.target.value)}
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
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">Select Meal Type</label>
          <select
            value={formData.mealType}
            onChange={(e) => handleFormDataChange('mealType', e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="" disabled>Select meal type</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Snacks">Snacks</option>
            <option value="Dinner">Dinner</option>
          </select>
  
          {/* Display the selected option */}
          {formData.level && (
            <p className="mt-4">You selected: {formData.mealType}</p>
          )}
        </div>
        <button type="submit" className="bg-yellow-500 text-black px-4 py-2 mb-4 rounded-md mt-2">
          Submit
        </button>
      </form>
    </div>);
  };

export default StepOneContent
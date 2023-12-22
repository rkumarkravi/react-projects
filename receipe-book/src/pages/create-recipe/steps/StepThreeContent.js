import React, { useEffect, useState } from 'react'

const StepThreeContent = ({ onFormSubmit, stepId, stepsList }) => {
    const [steps, setSteps] = useState([{ id: 1, stepNumber: 1, description: '' }]);
  
    const handleStepChange = (index, field, value) => {
      const updatedSteps = [...steps];
      updatedSteps[index][field] = value;
      setSteps(updatedSteps);
    };
  
    const handleAddStep = () => {
      setSteps([...steps, { id: steps.length + 1, stepNumber: steps.length + 1, description: '' }]);
    };
  
    const handleRemoveStep = (index) => {
      const updatedSteps = steps.filter((_, i) => i !== index);
      setSteps(updatedSteps);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onFormSubmit({ stepId: stepId, data: steps });
      // setSteps([{ id: 1, stepNumber: 1, description: '' }]);
    };
  
    useEffect(() => {
      const state = stepsList.find(x => x.id === stepId);
      console.log(state)
      if (state && state.data) {
        setSteps(state.data)
      }
    }, []);
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          {/* <h2>Steps to Prepare</h2> */}
          {steps.map((step, index) => (
            <div key={step.id} className="mb-4">
              <label htmlFor={`stepDescription${index}`} className="block text-sm font-medium text-gray-600">
                Step {step.stepNumber}
              </label>
              <textarea
                id={`stepDescription${index}`}
                value={step.description}
                onChange={(e) => handleStepChange(index, 'description', e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
  
              {index > 0 && (
                <button type="button" onClick={() => handleRemoveStep(index)} className="text-red-500 mt-2">
                  Remove Step
                </button>
              )}
            </div>
          ))}
  
          <button type="button" onClick={handleAddStep} className="bg-black text-white px-4 py-2 rounded-md mt-4 mb-2">
            Add Step
          </button>
          <button type="submit" className="bg-yellow-500 text-black px-4 py-2 mb-4 rounded-md mt-4 ml-2">
            Submit
          </button>
        </form>
      </div>
    );
  };

export default StepThreeContent
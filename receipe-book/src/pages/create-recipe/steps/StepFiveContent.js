import React, { useEffect, useState } from 'react'

const StepFiveContent = ({ onFormSubmit, stepId, stepsList }) => {
    const [tags, setTags] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onFormSubmit({ stepId: stepId, data: { tags: tags, additionalInfo: additionalInfo } });
      // setTags('');
      // setAdditionalInfo('');
    };
  
    useEffect(() => {
      const state = stepsList.find(x => x.id === stepId);
      console.log(state)
      if (state && state.data) {
        setTags(state.data.tags);
        setAdditionalInfo(state.data.additionalInfo);
      }
    }, []);
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="tags" className="block text-sm font-medium text-gray-600">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-600">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <button type="submit" className="bg-yellow-500 text-black px-4 py-2 mb-4 rounded-md mt-1">
            Submit
          </button>
        </form>
      </div>
    );
  };

export default StepFiveContent
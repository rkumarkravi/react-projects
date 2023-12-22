import React from 'react'

const HocWrapper = ({ ChildComponent, handlePrevStep, handleNextStep, stepList, currentStep }) => {
    return (
      <div>
        {ChildComponent}
        <div className='flex flex-row justify-end'>
          {1 !== currentStep && <button onClick={handlePrevStep} className="mr-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700">
            Previous
          </button>}
          {stepList.length !== currentStep && <button onClick={handleNextStep} className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-700 hover:text-white">
            Next
          </button>}
        </div>
      </div>
  
    );
  };

export default HocWrapper
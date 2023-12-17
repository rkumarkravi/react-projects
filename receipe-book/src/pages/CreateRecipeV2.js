/* eslint-disable no-unreachable */
import React, { useEffect, useState } from 'react'
import Button from '../components/Button';
import TimeSelector from '../components/TimeSelector';
import UnitSelector from '../components/UnitSelector';
import { MdArrowForwardIos } from "react-icons/md";
function CreateRecipe() {
  const [stepsList,setStepsList] = useState([
    {
      "no": 1,
      "name": "Basic Information",
      "id": "basicInfo",
      data: null
    }, {
      "no": 2,
      "name": "Recipe Ingredients",
      "id": "recipeIng",
      data: null
    }, {
      "no": 3,
      "name": "Steps to Prepare",
      "id": "stepsToPrepare",
      data: null
    }, {
      "no": 4,
      "name": "Image Upload",
      "id": "imageUpload",
      data: null
    }, {
      "no": 5,
      "name": "Additional Info",
      "id": "addInfo",
      data: null
    },
  ]);
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = (e) => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  function getAllSetps() {
    return stepsList.map(x => {
      return (<div key={x.no} className={`mb-2 p-3 rounded-md shadow-md cursor-pointer ${currentStep===x.no?'bg-yellow-500 text-black':'bg-black text-white'}`} onClick={() => { setCurrentStep(x.no) }}>
        <div className="flex flex-row items-center">{currentStep===x.no && <MdArrowForwardIos/>}
        <span className="ml-1">{x.name}</span></div>
        </div>);
    });
  }

  const onFormSubmit = (e) => {
    console.log(e);
    stepsList.find(x=>x.id===e.stepId).data=e.data;
    // console.log(stepsList)
    setStepsList(stepsList)
  }

  return (
    <div className='flex flex-row'>
      <div className='forms w-11/12'>
        <div className="mx-auto mt-8 p-3 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Step {currentStep}  {`: ${stepsList.length > 0 && stepsList.find(x => x.no === currentStep).name}`}</h2>

          {currentStep === 1 && (
            // <StepOneContent onNextStep={handleNextStep} />
            <HocWrapper ChildComponent={<StepOneContent onFormSubmit={onFormSubmit} stepsList={stepsList} stepId="basicInfo" />} handlePrevStep={handlePrevStep} handleNextStep={handleNextStep} stepList={stepsList} currentStep={currentStep} />
          )}

          {currentStep === 2 && (
            // <StepTwoContent onPrevStep={handlePrevStep} onNextStep={handleNextStep} />
            <HocWrapper ChildComponent={<StepTwoContent onFormSubmit={onFormSubmit} stepsList={stepsList} stepId="recipeIng" />} handlePrevStep={handlePrevStep} handleNextStep={handleNextStep} stepList={stepsList} currentStep={currentStep} />
          )}

          {currentStep === 3 && (
            // <StepThreeContent onPrevStep={handlePrevStep} onNextStep={handleNextStep} />
            <HocWrapper ChildComponent={<StepThreeContent onFormSubmit={onFormSubmit} stepsList={stepsList} stepId="stepsToPrepare" />} handlePrevStep={handlePrevStep} handleNextStep={handleNextStep} stepList={stepsList} currentStep={currentStep} />
          )}

          {currentStep === 4 && (
            // <StepFourContent onPrevStep={handlePrevStep} onNextStep={handleNextStep} />
            <HocWrapper ChildComponent={<StepFourContent onFormSubmit={onFormSubmit} stepsList={stepsList} stepId="imageUpload" />} handlePrevStep={handlePrevStep} handleNextStep={handleNextStep} stepList={stepsList} currentStep={currentStep} />
          )}

          {currentStep === 5 && (
            // <StepFiveContent onPrevStep={handlePrevStep} onNextStep={handleNextStep} />
            <HocWrapper ChildComponent={<StepFiveContent onFormSubmit={onFormSubmit} stepsList={stepsList} stepId="addInfo" />} handlePrevStep={handlePrevStep} handleNextStep={handleNextStep} stepList={stepsList} currentStep={currentStep} />
          )}
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

const StepOneContent = ({ onFormSubmit, stepId, stepsList }) => {
  const [formData, setFormData] = useState({ receipeName: "", time: "", level: "" });

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

  useEffect(()=>{
    const state=stepsList.find(x=>x.id===stepId);
    console.log(state)
    if(state && state.data){
      setFormData(state.data);
    }
  },[]);

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
      <button type="submit" className="bg-yellow-500 text-black px-4 py-2 mb-4 rounded-md mt-2">
        Submit
      </button>
    </form>
  </div>);
};

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

  useEffect(()=>{
    const state=stepsList.find(x=>x.id===stepId);
    console.log(state)
    if(state && state.data){
      setIngredients(state.data);
    }
  },[]);


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

  useEffect(()=>{
    const state=stepsList.find(x=>x.id===stepId);
    console.log(state)
    if(state && state.data){
      setSteps(state.data)
    }
  },[]);

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

const StepFourContent = ({ onFormSubmit, stepId, stepsList }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    const selectedImagesArray = Array.from(files).map((file) => URL.createObjectURL(file));

    setSelectedImages([...selectedImages, ...selectedImagesArray]);
    setImageFiles([...imageFiles, ...files]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...selectedImages];
    const updatedFiles = [...imageFiles];

    updatedImages.splice(index, 1);
    updatedFiles.splice(index, 1);

    setSelectedImages(updatedImages);
    setImageFiles(updatedFiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ stepId: stepId, data: imageFiles });
    // setImageFiles([]);
    // setSelectedImages([]);
  };

  useEffect(()=>{
    const state=stepsList.find(x=>x.id===stepId);
    console.log(state)
    if(state && state.data){
      setImageFiles(state.data);
      setSelectedImages(state.data);
    }
  },[]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Food Image Upload</h2>

        <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-600 mb-2">Select Images</label>
        <input
          type="file"
          id="imageUpload"
          onChange={handleImageChange}
          multiple
          accept="image/*"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />

        {/* Display selected images */}
        {selectedImages.length > 0 && (
          <div className="mt-4">
            <h3>Selected Images:</h3>
            <ul>
              {selectedImages.map((imageUrl, index) => (
                <li key={index} className="flex items-center mt-2">
                  <img src={imageUrl} alt={`food-${index}`} className="w-16 h-16 object-cover rounded mr-2" />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="text-red-500 border border-red-500 px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button type="submit" className="bg-yellow-500 text-black px-4 py-2 rounded-md mt-2 mb-2">
          Submit Images
        </button>
      </form>
    </div>
  );
};

const StepFiveContent = ({ onFormSubmit, stepId, stepsList }) => {
  const [tags, setTags] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ stepId: stepId, data: { tags: tags, additionalInfo: additionalInfo } });
    // setTags('');
    // setAdditionalInfo('');
  };

  useEffect(()=>{
    const state=stepsList.find(x=>x.id===stepId);
    console.log(state)
    if(state && state.data){
      setTags(state.data.tags);
      setAdditionalInfo(state.data.additionalInfo);
    }
  },[]);

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

export default CreateRecipe;
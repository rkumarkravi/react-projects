/* eslint-disable no-unreachable */
import React, { useState } from 'react'
import Button from '../../components/Button';
import { MdArrowForwardIos } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import { toast } from 'react-toastify';
import HocWrapper from './steps/HocWrapper';
import StepOneContent from './steps/StepOneContent';
import StepTwoContent from './steps/StepTwoContent';
import StepThreeContent from './steps/StepThreeContent';
import StepFourContent from './steps/StepFourContent';
import StepFiveContent from './steps/StepFiveContent';
import StepFinalContent from './steps/StepFinalContent';

function CreateRecipeV3() {
  const [stepsList, setStepsList] = useState([
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
    }
  ]);
  const [currentStep, setCurrentStep] = useState(1);
  const [submitStatus, setSubmitStatus] = useState(false);
  const [finalRespData, setFinalRespData] = useState({});

  const handleNextStep = (e) => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  function getAllSetps() {
    return stepsList.map(x => {
      return (
        <div key={x.no}
          className={`mb-2 p-3 rounded-md shadow-md cursor-pointer 
          ${currentStep === x.no ? 'bg-yellow-500 text-black' : `${x.data != null ? 'bg-green-500 text-black' : 'bg-black text-white'}`}
          `}
          onClick={() => { setCurrentStep(x.no) }}>
          <div className="flex flex-row items-center">
            {(currentStep === x.no && x.data == null) && <MdArrowForwardIos />}
            {x.data != null && <TiTickOutline />}
            <span className="ml-1">{x.name}</span>
          </div>
        </div>
      );
    });
  }

  const onFormSubmit = (e) => {
    console.log(e);
    stepsList.find(x => x.id === e.stepId).data = e.data;
    // console.log(stepsList)
    setStepsList(stepsList)
  }

  function isFinalSubmitAllowed() {
    return stepsList.every(z => z.data != null);
  }

  const onFinalSubmit = () => {
    if (!isFinalSubmitAllowed()) {
      toast.error('Steps not completed!');
      return;
    }
    setCurrentStep(-1);
    setFinalRespData({});
    setSubmitStatus(true);
    console.log("dsfsd 1")
    // setTimeout(() => {
      // stepsList.forEach(x => console.log("Final Data of ", x.id, " data is:", x.data));
      setSubmitStatus(false);
      fetch('/recipes', { method: "POST", body: JSON.stringify(stepsList),headers: {"Content-type": "application/json; charset=UTF-8"}})
        .then((response) => response.json())
        .then((data) => setFinalRespData(data))
        .catch((error) => { console.error('Error fetching recipes:', error); toast.error('Steps not completed!'); });
      // setFinalRespData({ rs: "S", rd: "Submitted Successfully", payload: { shareLink: "https://google.com", addInfo: [{ name: "share", value: "https://google.com" }] } });
    // }, 10000);
    console.log("dsfsd 2")
  };

  return (
    <div className='flex flex-row'>
      <div className='forms w-11/12'>
        <div className="mx-auto mt-8 p-3 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Step {currentStep === -1 ? stepsList.length + 1 : currentStep}  {`: ${(stepsList.length > 0 && currentStep !== -1) ? stepsList.find(x => x.no === currentStep).name : "Final"}`}</h2>

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

          {currentStep === -1 && (
            <StepFinalContent submitStatus={submitStatus} data={finalRespData} />
          )}
        </div>
      </div>
      <div className='steps w-8/12'>
        <div className="mx-auto mt-8 ml-3 p-3 bg-gray-800 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-white">Step {currentStep}</h2>
          {getAllSetps()}
          <div className='flex justify-start items-center'>
            <Button text="Submit Your Recipe" onClick={onFinalSubmit} disabled={currentStep !== stepsList.length || submitStatus} />
            {
              submitStatus && <><svg className="animate-spin ml-1 mr-3 h-8 w-8 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg> <span className='text-white'>Processing... </span></>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateRecipeV3;
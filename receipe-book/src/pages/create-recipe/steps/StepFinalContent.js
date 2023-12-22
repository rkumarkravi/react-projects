import React from 'react'
import cookingImage from "../../../assets/7795595_3753983.svg";

const StepFinalContent = ({ submitStatus, data }) => {
    return (
      <div className="mb-4 relative">
        {submitStatus &&
          <div>
            <div className='animate-bounce text-center text-black font-mono'>{submitStatus ? "Submitting..." : ""}</div>
            <img src={cookingImage} className="animate-pulse " alt='cookingImage' />
          </div>
        }
        {
          (!submitStatus && data.rs && data.rs === 'S') &&
          <div>
            <h1 className='font-bold text-yellow-600'>{data.rd}</h1>
            <a href={data.payload.shareableLink}>{data.payload.shareableLink}</a>
            <div>
              <h2 className='font-bold'>Additional Infos:</h2>
              <ul>
                {data.payload.addInfo && data.payload.addInfo.map(x => <li><span className='font-bold'>{x.name}</span>:{x.value}</li>)}
              </ul>
            </div>
          </div>
        }
        {
          (!submitStatus && data.rs && data.rs === 'F') &&
          <div>{data.rd} 🥺</div>
        }
      </div>);
  };

export default StepFinalContent
import React, { useEffect, useState } from 'react'
import { IoCloseCircle } from 'react-icons/io5';

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
  
    useEffect(() => {
      const state = stepsList.find(x => x.id === stepId);
      console.log(state)
      if (state && state.data) {
        setImageFiles(state.data);
        setSelectedImages(state.data);
      }
    }, []);
  
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
              <div>
                {selectedImages.map((imageUrl, index) => (
                  <div key={index} className="flex items-center mt-2 relative">
                    <img src={imageUrl} alt={`food-${index}`} className="w-16 h-16 object-cover rounded mr-2" />
                    {/* <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="text-red-500 border border-red-500 px-2 py-1 rounded"
                    >
                      Remove
                    </button> */}
                    <span className='absolute top-0 right-0' onClick={() => handleRemoveImage(index)}><IoCloseCircle className='hover:text-red-500' /></span>
                  </div>
                ))}
              </div>
            </div>
          )}
  
          <button type="submit" className="bg-yellow-500 text-black px-4 py-2 rounded-md mt-2 mb-2">
            Submit Images
          </button>
        </form>
      </div>
    );
  };

export default StepFourContent
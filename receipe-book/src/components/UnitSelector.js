import React, { useEffect, useState } from 'react';

const UnitSelector = ({value="",label,hint="Select value",onChange,className=""}) => {
  // const [selectedUnit, setSelectedUnit] = useState(value);

  const handleUnitChange = (e) => {
    // setSelectedUnit(e.target.value);
    onChange(e);
  };

  // useEffect(()=>{
  //   if(value===""){
  //     setSelectedUnit("");
  //   }
  // },[value]);

  const volumeUnits = [
    'Teaspoon (tsp)',
    'Tablespoon (tbsp)',
    'Fluid Ounce (fl oz)',
    'Cup (c)',
    'Pint (pt)',
    'Quart (qt)',
    'Gallon (gal)',
    'Milliliter (ml)',
    'Liter (l)',
  ];

  const weightUnits = [
    'Ounce (oz)',
    'Pound (lb)',
    'Gram (g)',
    'Kilogram (kg)',
  ];

  const countUnits = [
    'Each',
    'Piece',
    'Slice',
    'Clove (garlic)',
  ];

  const otherUnits = [
    'Pinch',
    'Dash',
    'Drop',
    'Sprig',
    'Handful',
    'Slice',
    'Whole',
  ];

  return (
    <div>
      {(label && <label htmlFor="unitSelect" className="block text-sm font-medium text-gray-600 mb-2">{label}</label>)}
      <select
        id="unitSelect"
        value={value}
        onChange={handleUnitChange}
        className={`${className} p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500`}
        required
      >
        <option value="" disabled>{hint}</option>
        
        {/* Volume Units */}
        <optgroup label="Volume Units">
          {volumeUnits.map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </optgroup>

        {/* Weight Units */}
        <optgroup label="Weight Units">
          {weightUnits.map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </optgroup>

        {/* Count Units */}
        <optgroup label="Count Units">
          {countUnits.map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </optgroup>

        {/* Other Units */}
        <optgroup label="Other Units">
          {otherUnits.map((unit) => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </optgroup>
      </select>

      {/* {selectedUnit && (
        <p className="mt-4">Selected Unit: {selectedUnit}</p>
      )} */}
    </div>
  );
};

export default UnitSelector;

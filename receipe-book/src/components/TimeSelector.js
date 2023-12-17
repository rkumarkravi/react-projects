import React, {  useEffect, useState } from 'react';

const TimeSelector = ({value={hour:"0",min:"0"},label,onChangeTime}) => {
  const [selectedHour, setSelectedHour] = useState('');
  const [selectedMinute, setSelectedMinute] = useState('');
  const [time, setTime] = useState(value);

  const handleHourChange = (e) => {
    setSelectedHour(e.target.value);
    let updatedTime=time;
    updatedTime['hour']=e.target.value
    setTime(updatedTime);
    onChangeTime(time);
  };

  const handleMinuteChange = (e) => {
    setSelectedMinute(e.target.value);
    let updatedTime=time;
    updatedTime['min']=e.target.value
    setTime(updatedTime);
    onChangeTime(time);
  };
  

  useEffect(()=>{
    if(value===""){
      setTime({hour:"0",min:"0"});
      setSelectedHour("");
      setSelectedMinute("");
    }
  },[value]);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-2">{label}</label>

      {/* Hours selector */}
      <div className="flex mb-4">
        <select
          value={selectedHour}
          onChange={handleHourChange}
          className="w-1/2 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
        >
          <option value="" disabled>Select hour</option>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
            <option key={hour} value={hour}>{hour}</option>
          ))}
        </select>

        {/* Minutes selector */}
        <select
          value={selectedMinute}
          onChange={handleMinuteChange}
          className="w-1/2 p-2 border border-gray-300 rounded-r-md focus:outline-none focus:border-blue-500"
        >
          <option value="" disabled>Select minute</option>
          {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
            <option key={minute} value={minute}>{minute < 10 ? `0${minute}` : minute}</option>
          ))}
        </select>
      </div>

      {/* Display the selected time */}
      {selectedHour && selectedMinute && (
        <p className="mt-4">You selected: {selectedHour} Hrs and {selectedMinute} Mins</p>
      )}
    </div>
  );
};

export default TimeSelector;

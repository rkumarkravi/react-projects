import React, {  useState } from 'react';

const TimeSelector = ({label,onChangeTime}) => {
  const [selectedHour, setSelectedHour] = useState('');
  const [selectedMinute, setSelectedMinute] = useState('');
  const [time, setTime] = useState({hour:"0",min:"0"});

  const handleHourChange = (e) => {
    setSelectedHour(e.target.value);
    setTime(x=>{return {...x,hour:e.target.value}});
    onChangeTime(time);
  };

  const handleMinuteChange = (e) => {
    setSelectedMinute(e.target.value);
    setTime(x=>{return {...x,minute:e.target.value}});
    onChangeTime(time);
  };
  

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

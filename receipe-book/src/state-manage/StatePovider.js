
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const StateProvider = ({ children }) => {
  const [data, setData] = useState({});

  const updateData = (key, value) => {
    setData(prevData => ({ ...prevData, [key]: value }));
  };

  return (
    <MyContext.Provider value={{ data, updateData }}>
      {children}
    </MyContext.Provider>
  );
};

export const useStateProvider = () => {
  return useContext(MyContext);
};

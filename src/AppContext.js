// AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [appData, setAppData] = useState({
    // Define your context data here
    // For example:
    isLoggedIn: false,
    username: '',
  });

  const updateContextData = newData => {
    setAppData(prevData => ({ ...prevData, ...newData }));
  };

  return (
    <AppContext.Provider value={{ appData, updateContextData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

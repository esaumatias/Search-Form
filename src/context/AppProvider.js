import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [answer , setAnswer ] = useState([]);

  useEffect(() => {
  
  }, []);


  return (
    <AppContext.Provider
      value={ {
        answer,
        setAnswer,
      } }
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

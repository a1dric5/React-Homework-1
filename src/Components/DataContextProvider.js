import React, { createContext } from 'react';

export const DataContext = createContext();

function DataContextProvider({ children }) {
 
  const employees = [
    { id: '1', name: 'John Mathis', yearOfWork: 2010 },
    { id: '2', name: 'Cory Linguine', yearOfWork: 2015 },
    { id: '3', name: 'Charlie Saturn', yearOfWork: 2016 },
  ];

  return <DataContext.Provider value={{ employees }}>{children}</DataContext.Provider>;
}

export default DataContextProvider;

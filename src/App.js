import React from 'react';
import NavBar from './components/NavBar';
import Router from './components/Router';
import { EmployeeContextProvider } from './context/EmployeeContext';

const App = () => {
  return (
    <EmployeeContextProvider>
      <NavBar />
      <Router />
    </EmployeeContextProvider>
  );
};

export default App;


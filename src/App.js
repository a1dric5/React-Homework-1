import React from 'react';
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import EmployeeList from './Components/EmployeeList';
import EmployeeDetails from './Components/EmployeeDetails';
import DataContextProvider from './Components/DataContextProvider';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          { <DataContextProvider/> }
            <Route path="/employees" element={<EmployeeList/>} />
            <Route path="/employees/:id" element={<EmployeeDetails/>} />
          { <DataContextProvider/> }
      
       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


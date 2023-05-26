import React, { useContext } from 'react';
import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';
import { EmployeeContext } from '../context/EmployeeContext';

const Dashboard = () => {
  const { employees, addEmployee } = useContext(EmployeeContext);

  return (
    <div>
      <h1>Employee Admin Dashboard</h1>
      <EmployeeList />
      <EmployeeForm addEmployee={addEmployee} />
    </div>
  );
};

export default Dashboard;

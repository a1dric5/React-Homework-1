import React from 'react';

const EmployeeCard = ({ employee }) => {
  return (
    <div>
      <h3>{employee.name}</h3>
      <p>{employee.position}</p>
      <p>{employee.department}</p>
    </div>
  );
};

export default EmployeeCard;

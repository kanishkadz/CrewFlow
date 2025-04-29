import React from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeList = ({ employees }) => {
  return (
    <div className="space-y-4">
      {employees.map((employee) => (
        <EmployeeCard 
          key={employee.id}
          employee={employee}
        />
      ))}
    </div>  
  );
};

export default EmployeeList;
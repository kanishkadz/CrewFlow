import React from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeList = ({ employees, onDelete }) => {
  return (
    <div className="space-y-4">
      {employees.map((employee) => (
        <EmployeeCard 
          key={employee.id}
          employee={employee}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
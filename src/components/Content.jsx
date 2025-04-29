import React, { useState } from 'react';
import EmployeeList from './EmployeeList';

const Content = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Employee 1', department: 'Frontend Developer' },
    { id: 2, name: 'Employee 2', department: 'Backend Developer' },
    { id: 3, name: 'Employee 3', department: 'Management' },
    { id: 4, name: 'Employee 4', department: 'Marketing' },
    { id: 5, name: 'Employee 5', department: 'Analytics' },
  ]);

  return (
    <div className="flex-1 bg-[##fbfff1] p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-15 mt-10">Employees under you</h1>
        <div className="bg-[#f2f2f2] p-6 rounded-lg">
          <EmployeeList employees={employees} />
          <p className='text-right mt-5'>Page 1 of 1</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
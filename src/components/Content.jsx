import React, { useState } from 'react';
import EmployeeList from './EmployeeList';

const Content = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Employee 1', department: 'Frontend Developer' },
    { id: 2, name: 'Employee 2', department: 'Backend Developer' },
    { id: 3, name: 'Employee 3', department: 'Management' },
    { id: 4, name: 'Employee 4', department: 'Marketing' },
    { id: 5, name: 'Employee 5', department: 'Analytics' },
  ]);

  return (
    <div className="flex-1 bg-[#f8faed] p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Employees under you</h1>
        
        <div className="bg-gray-100 p-6 rounded-lg">
          <EmployeeList employees={employees} />
        </div>
      </div>
    </div>
  );
};

export default Content;
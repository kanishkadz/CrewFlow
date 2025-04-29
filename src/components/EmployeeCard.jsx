import React from 'react';
import { Trash2 } from 'lucide-react';

const EmployeeCard = ({ employee }) => {
  return (
    <div className="bg-white rounded-lg p-4 flex justify-between items-center transition-all hover:shadow-md">
      <div className="w-1/2 pl-4">
        <h3 className="text-lg font-medium">{employee.name}</h3>
      </div>
      
      <div className="w-1/2 flex justify-between items-center">
        <span className="text-lg">{employee.department}</span>
          <button className="text-red-600 hover:text-red-800 transition-colors">
            <Trash2 size={20} />
          </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
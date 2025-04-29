import React from 'react';
import { CheckCircle2, Bookmark } from 'lucide-react';

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white rounded-lg p-4 flex justify-between items-center transition-all hover:shadow-md">
      <div className="w-1/2 pl-4">
        <h3 className="text-lg font-medium">{task.title}</h3> 
      </div>
      <div className="w-1/2 flex justify-between items-center">
        <span className="text-lg">{task.description}</span>  
        <div className="flex gap-2">
          <CheckCircle2 className="text-green-600" size={20} />
          <Bookmark className="text-yellow-500" size={20} />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

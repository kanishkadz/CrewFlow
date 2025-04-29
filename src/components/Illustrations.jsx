import React from 'react';
import { CheckCircle, CheckSquare } from 'lucide-react';

const Illustrations = () => {
  return (
    <div className="relative h-full w-full">
      {/* Person */}
      <div className="absolute bottom-0 left-0">
        <div className="relative">
          {/* Head */}
          <div className="w-16 h-16 bg-gray-800 rounded-full relative">
            <div className="absolute w-6 h-3 bg-gray-600 rounded-full top-8 left-5"></div>
          </div>
          
          {/* Body */}
          <div className="w-24 h-36 bg-indigo-500 rounded-md mt-2">
            <div className="w-full h-12 bg-indigo-400 absolute top-0 rounded-t-md"></div>
          </div>
          
          {/* Legs */}
          <div className="absolute -bottom-16 left-3">
            <div className="w-8 h-24 bg-gray-800 rounded-md"></div>
          </div>
          <div className="absolute -bottom-16 left-10">
            <div className="w-8 h-24 bg-gray-800 rounded-md"></div>
          </div>
          
          {/* Feet */}
          <div className="absolute -bottom-16 -left-1">
            <div className="w-11 h-3 bg-gray-700 rounded-md transform rotate-12 translate-y-24"></div>
          </div>
          <div className="absolute -bottom-16 left-8">
            <div className="w-11 h-3 bg-gray-700 rounded-md transform rotate-6 translate-y-24"></div>
          </div>
        </div>
      </div>
      
      {/* Task Cards */}
      <div className="absolute left-32 top-8 transform -rotate-6 transition-transform duration-300 hover:rotate-0 hover:scale-105">
        <div className="w-32 h-40 border border-indigo-300 bg-indigo-400 rounded-md p-2 shadow-md relative">
          <div className="w-full h-8 bg-indigo-300 rounded-sm mb-2"></div>
          <div className="w-full h-4 bg-indigo-300 rounded-sm mb-2"></div>
          <div className="w-full h-4 bg-indigo-300 rounded-sm mb-2"></div>
          <div className="w-full h-4 bg-indigo-300 rounded-sm mb-2"></div>
          <div className="absolute -right-2 -top-2 bg-white p-1 rounded-full border-2 border-indigo-300">
            <CheckCircle size={16} className="text-indigo-600" />
          </div>
        </div>
      </div>
      
      <div className="absolute right-16 top-0 transform rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105">
        <div className="w-32 h-40 border border-blue-700 bg-blue-600 rounded-md p-2 shadow-md relative">
          <div className="w-full h-4 bg-blue-500 rounded-sm mb-2"></div>
          <div className="w-full h-4 bg-blue-500 rounded-sm mb-2"></div>
          <div className="w-full h-4 bg-blue-500 rounded-sm mb-2"></div>
          <div className="w-full h-8 bg-blue-500 rounded-sm mb-2"></div>
          <div className="absolute -right-2 -top-2 bg-white p-1 rounded-full border-2 border-blue-700">
            <CheckSquare size={16} className="text-blue-600" />
          </div>
        </div>
      </div>
      
      <div className="absolute right-8 top-32 transform rotate-6 transition-transform duration-300 hover:rotate-0 hover:scale-105">
        <div className="w-32 h-40 border border-blue-700 bg-blue-600 rounded-md p-2 shadow-md relative">
          <div className="w-full h-8 bg-blue-500 rounded-sm mb-2"></div>
          <div className="w-full h-8 bg-blue-500 rounded-sm mb-2"></div>
          <div className="w-full h-4 bg-blue-500 rounded-sm mb-2"></div>
          <div className="w-full h-4 bg-blue-500 rounded-sm mb-2"></div>
          <div className="absolute -right-2 -top-2 bg-white p-1 rounded-full border-2 border-blue-700">
            <CheckSquare size={16} className="text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Illustrations;
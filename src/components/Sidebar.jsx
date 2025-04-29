import React from 'react';
import { LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-full max-w-[308px] bg-blue-200 p-8 flex flex-col">
      <div className="flex-grow">
        <h1 className="text-3xl font-bold mb-12">CrewFlow</h1>
        
        <div className="mt-12">
          <h2 className="text-5xl font-bold mb-2">Welcome</h2>
          <h2 className="text-5xl font-bold mb-6 flex items-center">
            Admin, <span className="ml-2">👋</span>
          </h2>
          
          <p className="text-base">
            You can assign task to different employees & even manage them easily.
          </p>
        </div>
      </div>
      
      <button className="flex items-center gap-2 text-red-600 font-bold mt-auto border-2 border-red-500 rounded-full py-2 px-6 hover:bg-red-50 transition-colors">
        <LogOut size={20} />
        <span>LogOut</span>
      </button>
    </div>
  );
};

export default Sidebar;
import React from 'react';
import { LogOut } from 'lucide-react';

const Sidebar = ({ userRole = 'user', userName = 'User' }) => {
  const isAdmin = userRole.toLowerCase() === 'admin';

  return (
    <div className="w-full max-w-[308px] bg-[#b4c5e4] p-8 flex flex-col">
      <div className="flex-grow">
        <h1 className="text-3xl font-bold mb-12">CrewFlow</h1>
        
        <div className="mt-12">
          <h2 className="text-5xl font-bold mb-2">Welcome</h2>
          <h2 className="text-5xl font-bold mb-6 flex items-center">
            {isAdmin ? 'Admin' : userName}, <span className="ml-2">👋</span>
          </h2>
          
          <p className="text-base">
            {isAdmin
              ? 'You can assign task to different employees & even manage them easily.'
              : 'You can view your tasks and manage your work efficiently.'}
          </p>
        </div>
      </div>
      
      <button className="flex items-center gap-2 bg-[#fbfff1] text-red-600 font-bold mt-auto border-2 border-red-500 rounded-full py-2 px-6 hover:bg-red-500 hover:text-[#fbfff1] transition-colors">
        <LogOut size={20} />
        <span>LogOut</span>
      </button>
    </div>
  );
};

export default Sidebar;

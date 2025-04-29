import React, { useState } from 'react'
import TaskList from './TaskList';

const ContentEmp = () => {
  const [tasks, setTasks] = useState([
      { id: 1, title: 'Title 1', description: 'Description ...' },
      { id: 2, title: 'Title 2', description: 'Description ...' },
      { id: 3, title: 'Title 3', description: 'Description ...' },
      { id: 4, title: 'Title 4', description: 'Description ...' },
      { id: 5, title: 'Title 5', description: 'Description ...' },
    ]);

  return (
    <div className="flex-1 bg-[#fbfff1] p-10">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-15">Tasks assigned to you</h1>
      
      <div className="bg-[#f2f2f2] p-6 rounded-lg">
        <TaskList tasks={tasks} />
        <p className='text-right mt-5'>Page 1 of 1</p>
      </div>
    </div>
  </div>
  )
}

export default ContentEmp
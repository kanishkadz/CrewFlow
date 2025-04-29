import React from 'react'
import Sidebar from '../components/Sidebar'
import TaskList from '../components/TaskList'
import ContentEmp from '../components/ContentEmp'

const Employee = () => {
  return (
    <div className='flex min-h-screen'>
        <Sidebar />
        <ContentEmp />
    </div>
  )
}

export default Employee
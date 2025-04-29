import React from 'react'
import Sidebar from '../components/Sidebar'
import TaskList from '../components/TaskList'
import ContentEmp from '../components/ContentEmp'
import { useLocation } from 'react-router-dom'

const Employee = () => {
  const location = useLocation();
  const { userRole, userName } = location.state || {};


  return (
    <div className='flex min-h-screen'>
        <Sidebar userRole="employee" userName="Employee" />
        <ContentEmp />
    </div>
  )
}

export default Employee
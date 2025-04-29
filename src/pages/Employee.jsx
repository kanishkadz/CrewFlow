import React from 'react'
import Sidebar from '../components/Sidebar'
import ContentEmp from '../components/ContentEmp'

const Employee = () => {
  return (
    <div className='flex min-h-screen'>
        <Sidebar userRole="employee" userName="Employee" />
        <ContentEmp />
    </div>
  )
}

export default Employee
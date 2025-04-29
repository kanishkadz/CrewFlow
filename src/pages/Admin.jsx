import React from 'react'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import { useLocation } from 'react-router-dom';

const EmpPage = () => {
  const location = useLocation();
  const { userRole, userName } = location.state || {};


  return (
    <div className='flex min-h-screen'>
        <Sidebar userRole="admin" userName="Admin" />
        <Content />
    </div>
  )
}

export default EmpPage
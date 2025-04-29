import React from 'react'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

const EmpPage = () => {
  return (
    <div className='flex min-h-screen'>
        <Sidebar />
        <Content />
    </div>
  )
}

export default EmpPage
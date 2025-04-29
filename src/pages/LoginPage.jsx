import React from 'react'
import WelcomeBanner from '../components/WelcomeBanner'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
        <WelcomeBanner />
        <LoginForm />
    </div>
  )
}

export default LoginPage
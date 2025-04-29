import React, { useState } from 'react'


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login details:', {email, password});
    }

    
  return (
    <div className='w-full md:w-3/5 bg-gray-50p-8 md:p-12 lg:p-24 flex items-center justify-center'>
        <div className='w-full max-w-md'>
            <h2 className='text-4xl font-bold mb-8 text-gray-900'>Login</h2>
            <div className='mb-8'>
                <h3 className='text-2xl font-semibold text-gray-900'>
                    Welcome Back!
                </h3>
                <p className='text-gray-600'>
                    New to CrewFlow? <a href="" className='text-blue-600 hover:text-blue-800 font-medium'>
                        Create a new account
                    </a>
                    in just 2 minutes.
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='space-y-4 mb-8'>
                    <div>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter you email ...' className='w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ting-blue-500 focus:border-transparent transition duration-200' required/>
                    </div>
                    <div>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password ...' className='w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus-ring-blue-500 focus:border-transparent transition duration-200' required />
                    </div>
                </div>
                <button type='submit' className='w-full bg-gray-800 text-white font-medium py-3 rounded-md hover:bg-gray-700 focus:ring-offset-2 transition duration-200 mb-4'>Login</button>
                <button type='button' className="w-full bg-white border border-gray-300 text-gray-800 font-medium py-3 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition duration-200 flex items-center justify-center">
                    <img src="" alt="" /> Login with Google
                </button>
                <div className='text-center mt-6'>
                    <a href="" className='text-gray-600 hover:text-blue-600 transition duration-200'>
                        Forgot Password? <span className='text-blue-600 font-medium'>Click here.</span>
                    </a>
                </div>
            </form>
        </div>    
    </div>
  )
}

export default LoginForm
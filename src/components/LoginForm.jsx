import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const adminCredentials = { email: 'admin@test.com', password: 'admin' };
        const employeeCredentials = { email: 'employee@test.com', password: 'employee' };
        if (email === adminCredentials.email && password === adminCredentials.password) {
            navigate('/admin', { state: { userRole: 'admin', userName: 'Admin' } });
        } else if (email === employeeCredentials.email && password === employeeCredentials.password) {
            navigate('/employee', { state: { userRole: 'employee', userName: 'User' } });
        } else {
            alert('Invalid credentials');
        }
    }

    return (
        <div className='w-full md:w-3/5 bg-gray-50 p-8 md:p-12 lg:p-24 flex items-center justify-center'>
            <div className='w-full max-w-md'>
                <h2 className='text-6xl font-bold mb-15 text-gray-900'>Login</h2>
                <div className='mb-8'>
                    <h3 className='text-4xl font-semibold text-gray-900'>
                        Welcome Back!
                    </h3>
                    <p className='text-gray-600 mt-1'>
                        New to CrewFlow? 
                        <a href="" className='text-blue-600 hover:text-blue-800 font-medium'> Create a new account </a>
                        in just 2 minutes.
                    </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='space-y-4 mb-8'>
                        <div>
                            <input 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder='Enter your email ...' 
                                className='w-full px-4 placeholder:font-bold py-3 rounded-md bg-[#dfe8f8] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200' 
                                required 
                            />
                        </div>
                        <div>
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder='Enter your password ...' 
                                className='w-full placeholder:font-bold px-4 py-3 rounded-md bg-[#dfe8f8] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200' 
                                required 
                            />
                        </div>
                    </div>
                    <button 
                        type='submit' 
                        className='w-full bg-[#333333] text-white font-medium py-3 rounded-md hover:bg-[#1a1919] focus:ring-offset-2 transition duration-200 mb-4'>
                        Login
                    </button>
                    <button 
                        type='button' 
                        className="w-full bg-white border border-gray-300 text-gray-800 font-medium py-3 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition duration-200 flex items-center justify-center">
                        <img src="https://www.citypng.com/public/uploads/preview/google-logo-icon-gsuite-hd-701751694791470gzbayltphh.png" alt="" className='h-6 w-6 mr-2' /> 
                        Login with Google
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

export default LoginForm;

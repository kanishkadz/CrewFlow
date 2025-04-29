import { CheckSquare, Users } from 'lucide-react'
import React from 'react'

const WelcomeBanner = () => {
    return (
        <div className='bg-blue-600 text-white p-8 flex flex-col justify-around w-full md:w-2/5 relative overflow-hidden'>
            <div className='z-10'>
                <div className='flex items-center mb-4'>
                    <Users size={28} className='mr-2' />
                    <CheckSquare size={24} />
                </div>
                <h1 className='text-4xl sm:text-5xl font-bold mt-12 mb-4'>
                    Welcome to, <br />
                    <span className='text-7xl sm:text-9xl font-bold'>CrewFlow</span>
                </h1>
                <p className='text-xl font-medium opacity-90'>
                    Managing People, Made Simple
                </p>
            </div>
            <div className="relative h-64 md:h-96 z-10 mt-8">
                <TaskIllustration />
            </div>

            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-tr-full"></div>
            <div className="absolute bottom-12 left-12 w-16 h-16 bg-white opacity-5 rounded-full"></div>
        </div>
    )
}

export default WelcomeBanner
import React from 'react'
import Illustrations from './Illustrations'

const WelcomeBanner = () => {
    return (
        <div className='bg-[#3066be] text-white p-8 flex flex-col justify-around w-full md:w-2/5 relative overflow-hidden'>
            <div className='z-10 ml-5'>
                <img src='Logo.png' className='h-30 w-30' />
                <h1 className='text-3xl sm:text-4xl font-bold mb-2'>
                    Welcome to, <br />
                    <span className='text-5xl sm:text-7xl font-extrabold'>CrewFlow</span>
                </h1>
                <p className='text-xl opacity-90'>
                    Managing People, Made Simple
                </p>
            </div>

            <img src='Illustrations.png' />

            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-tr-full"></div>
            <div className="absolute bottom-12 left-12 w-16 h-16 bg-white opacity-5 rounded-full"></div>
        </div>
    )
}

export default WelcomeBanner
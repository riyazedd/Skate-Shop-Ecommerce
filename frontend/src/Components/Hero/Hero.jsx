import React from 'react'
import home_banner from '../Assets/home_banner.png'
const Hero = () => {
    return (
        <div>
            <div className='relative h-[30rem]'>
                <img src={home_banner} alt="" className='w-full h-full' />
                <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 ...'></div>
                <div className='absolute inset-0 ml-20 p-10 w-[35%] flex flex-col justify-center items-start'>
                    <p className='text-7xl text-white font-semibold font-inter capitalize'>begin your next adventure on wheels</p>
                    <button className='text-white font-medium mt-10 p-2 px-5 bg-purple-600 border hover:shadow-xl hover:shadow-purple-500 hover:scale-105 transition-all rounded-full flex items-center gap-2'>Shop Now <span className='text-2xl'>&#8594;</span></button>
                </div>
            </div>
        </div>
    )
}

export default Hero

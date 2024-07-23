import React from 'react'
import logo from '../Assets/logo.png'
import insta_icon from '../Assets/instagram_icon.png'
import pin_icon from '../Assets/pintester_icon.png'
import whats_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='pt-10 my-5 flex flex-col items-center gap-5 border-t-2'>
            <div className='h-20 flex items-center gap-5'>
                <img src={logo} alt="" className='h-full' />
                <p className='text-4xl font-bold font-[Poppins]'>KickFlip Kingdom</p>
            </div>
            <ul className='flex justify-evenly w-1/3 hover:cursor-pointer'>
                <li>Company</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='flex gap-8 mt-3'>
                <div className='hover:cursor-pointer hover:scale-105 transition-all'>
                    <img src={insta_icon} alt="" />
                </div>
                <div className='hover:cursor-pointer hover:scale-105 transition-all'>
                    <img src={pin_icon} alt="" />
                </div>
                <div className='hover:cursor-pointer hover:scale-105 transition-all'>
                    <img src={whats_icon} alt="" />
                </div>
            </div>
            <div className='mt-5 w-full flex flex-col gap-5 items-center'>
                <hr className='w-[70%] h-[2px] bg-gray-500 rounded-full border-0'/>
                <p>Copyright &copy; 2024 - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer

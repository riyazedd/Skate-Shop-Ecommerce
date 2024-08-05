import React from 'react'
import logo from '../Assets/logo_white.png'
import profile from '../Assets/profile.jpg'

const Navbar = () => {
  return (
    <div className='flex items-center p-5 bg-gray-700 justify-between font-inter font-normal text-lg sticky top-0 z-10'>
      <div className='ml-10 h-10 flex items-center gap-3'>
        <img src={logo} alt="" className='h-full' />
        <p className='text-white font-semibold text-2xl font-[Poppins]'>KickFlip Kingdom</p>
      </div>
      <ul className='ml-10 h-10 flex items-center gap-5'>
        <li><img src={profile} alt="" className='w-14 rounded-full' /></li>
        <li><button className='border text-white py-2 px-3 rounded-md active:bg-purple-900'>Logout</button></li>
      </ul>
    </div>
  )
}

export default Navbar

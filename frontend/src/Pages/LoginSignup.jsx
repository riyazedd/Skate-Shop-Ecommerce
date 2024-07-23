import React from 'react'

const LoginSignup = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col items-center mb-5 mt-16'>
        <h1 className='text-4xl font-bold text-center flex flex-col items-center text-gray-700 uppercase'>sign up <hr className='w-60 mt-2 h-1 bg-gray-700 border-0 rounded-lg' /></h1>
        <div className='flex flex-col mt-5 gap-5 w-[350px]'>
          <input type="text" placeholder="Your Name" className='border-2 rounded-lg p-3 placeholder:text-lg w-full text-lg' />
          <input type="email" placeholder="Your Email Address" className='border-2 rounded-lg p-3 placeholder:text-lg w-full text-lg' />
          <input type="password" placeholder="Your Password" className='border-2 rounded-lg p-3 placeholder:text-lg w-full text-lg' />
        </div>
        <button className='mt-5 w-[350px] bg-purple-600 p-3 text-white text-2xl rounded-lg'>Continue</button>
        <p className='mt-3'>Already have an account? <span className='text-purple-600 font-semibold'>Login here</span></p>
        <div className='flex gap-2 mt-5'>
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup

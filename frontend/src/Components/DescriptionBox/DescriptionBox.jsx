import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='mx-[125px]'>
      <div className='flex'>
        <div className='p-5 border text-lg font-medium text-gray-600'><h1>Description</h1></div>
        <div className='p-5 border text-lg font-medium text-gray-600'><h1>Reviews</h1></div>
      </div>
      <div className='w-2/3 p-5 border'>
        <p className='text-justify'>
        This Element Skateboards Seal Black Complete Skateboard features the iconic Element logo and is made to endure!
        The Seal Complete measures 8" x 32" which is a perfect size for beginners who are interested in learning how to ollie,
        kickflip, and skate transition, as well as intermediate riders looking to improve their skill. Professionally designed
        for skating street, pool, park and vert, with a solid constructed that's built to last. It comes pre-assembled with trucks,
        wheels, bearings, hardware, and grip tape so it’s ready to skate right out of the box.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox

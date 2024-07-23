import React from 'react'
import offer_banner from '../Assets/offers_banner.png'
const Offers = () => {
  return (
    <div>
      <div>
            <div className='relative h-[30rem]'>
                <img src={offer_banner} alt="" className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 ...'></div>
                <div className='absolute inset-0 ml-20 p-10 w-[40%] flex flex-col justify-center items-start'>
                    <p className='text-7xl text-white font-semibold font-inter'>Exclusive Offers For You</p>
                    <p className='text-white uppercase font-medium mt-3'>only best sellers products</p>
                    <button className='text-white font-medium mt-10 p-2 px-5 bg-red-500 rounded-full'>Check Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offers

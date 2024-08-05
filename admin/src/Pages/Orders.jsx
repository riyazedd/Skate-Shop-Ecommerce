import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'

const Orders = () => {
  return (
    <div className='flex gap-5'>
        <Sidebar />
        <div className='p-5'>
            <h1 className='text-2xl font-bold font-inter text-gray-800'>Orders</h1>
        </div>
    </div>
  )
}

export default Orders

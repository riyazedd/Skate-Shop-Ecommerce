import React from 'react'

const DescriptionBox = (props) => {
  const {product} =props
  return (
    <div className='px-20 mt-10'>
      <div className='flex'>
        <div className='p-5 border text-lg font-medium text-gray-600'><h1>Description</h1></div>
      </div>
      <div className='w-2/3 p-5 border'>
        <p className='text-justify'>
        {product.description}
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox

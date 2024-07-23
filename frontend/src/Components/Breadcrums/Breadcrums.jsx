import React from 'react'

const Breadcrums = (props) => {
    const {product}=props;
  return (
    <div className='flex gap-1 p-8 font-semibold text-lg text-gray-600'>
      <p>HOME</p> &#62; <p>SHOP</p> &#62;<p className='uppercase'>{product.category}</p>&#62;<p className='capitalize'>{product.name}</p>
    </div>
  )
}

export default Breadcrums

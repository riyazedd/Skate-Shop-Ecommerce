import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext);
  return (
    <div>
      <h1 className='text-4xl font-bold text-center mt-16 flex flex-col items-center text-gray-700 uppercase'>{props.category}<hr className='w-60 mt-2 h-1 bg-gray-700 border-0 rounded-lg' /></h1>

      <div className='grid grid-cols-4 gap-8 my-16 px-7'>
      {all_product.map((item,i)=>{
        if(props.category===item.category){
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        }else{
          return null;
        }
      })}
      </div>
    </div>
  )
}

export default ShopCategory

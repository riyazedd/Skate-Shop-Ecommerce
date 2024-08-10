import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setQuantity(Number(e.target.value));
    };

    // useEffect(() => {
    //     console.log('Product ID:', product.id);
    //     console.log('Quantity:', quantity);
    // }, [product.id, quantity]);

    const handleAddToCart = () => {
        if (quantity > 0) {
            addToCart(product.id, quantity);
        } else {
            console.log('Quantity must be greater than 0');
        }
    };

    return (
        <div>
            <div className='p-8 flex gap-10'>
                <div className='w-14 flex flex-col gap-3'>
                    <img src={product.image} alt="" className='border p-1' />
                    <img src={product.image} alt="" className='border p-1' />
                    <img src={product.image} alt="" className='border p-1' />
                </div>
                <div className='w-[500px] border p-5'>
                    <img src={product.image} alt="" />
                </div>
                <div className='w-[60%] flex flex-col gap-10 items-start'>
                    <div className='flex flex-col gap-5'>
                        <p className='text-4xl font-bold'>{product.name}</p>
                        <p className='text-2xl font-medium text-red-700 mt-3'>
                            Rs.{product.new_price} 
                            <span className='line-through text-gray-500 ml-2'>
                                Rs.{product.old_price}
                            </span>
                        </p>
                    </div>
                    <div className='mt-5 flex gap-2 items-center'>
                        <p className='text-lg font-medium'>Qty</p>
                        <input 
                            type="number" 
                            className='border-2 p-1 w-20 rounded-md' 
                            value={quantity}
                            onChange={handleQuantityChange} 
                            min="1" 
                        />
                        <p className='text-lg font-medium text-gray-700 capitalize'>in stock</p>
                    </div>
                    <button 
                        onClick={handleAddToCart} 
                        className='transition-all p-3 w-1/3 text-lg text-white rounded-lg font-semibold bg-purple-600 hover:shadow-xl hover:scale-105 hover:shadow-purple-400 border-0'
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;

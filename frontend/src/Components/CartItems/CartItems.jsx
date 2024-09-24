import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const CartItems = () => {
    const { allProducts, cartItems, removeFromCart, getTotalAmount } = useContext(ShopContext); // Changed all_product to allProducts

    return (
        <div className='p-5 flex flex-col items-center'>
            <table className='w-3/4'>
                <thead>
                    <tr className='border-b-2 font-[Poppins]'>
                        <th className='p-5 text-left'>Products</th>
                        <th className='p-5 text-left'>Title</th>
                        <th className='p-5 text-left'>Price</th>
                        <th className='p-5 text-left'>Quantity</th>
                        <th className='p-5 text-left'>Total</th>
                        <th className='p-5 text-left'>Remove</th>
                    </tr>
                </thead>

                {allProducts.map((e, i) => {
                    // Make sure to use e._id instead of e.id
                    if (cartItems[e._id] > 0) {
                        return (
                            <tbody key={i}>
                                <tr className='border-b-2'>
                                    <td className='p-5'>
                                        <img src={e.image} alt="" className='w-10 h-10' />
                                    </td>
                                    <td className='p-5'>{e.name}</td>
                                    <td className='p-5'>Rs.{e.new_price}</td>
                                    <td className='p-5 text-center'>{cartItems[e._id]}</td>
                                    <td className='p-5'>Rs.{e.new_price * cartItems[e._id]}</td>
                                    <td className='p-5 text-center text-2xl text-red-600'>
                                        <i onClick={() => { removeFromCart(e._id) }} className='fa-solid fa-trash cursor-pointer'></i>
                                    </td>
                                </tr>
                            </tbody>
                        );
                    }
                    return null;
                })}
            </table>

            {/* Cart Total Section */}
            <div className='w-3/4 mt-10'>
                <h1 className='text-xl font-bold font-[Poppins]'>Cart Total</h1>
                <table className='w-1/2'>
                    <tbody>
                        <tr>
                            <td className='p-3 pl-0 text-left'>Subtotal</td>
                            <td className='p-3 pl-20 text-right'>Rs.{getTotalAmount()}</td>
                        </tr>
                        <tr className='border-b-4'>
                            <td className='p-3 pl-0 text-left'>Shipping Fee</td>
                            <td className='p-3 pl-20 text-right'>Free</td>
                        </tr>
                        <tr>
                            <th className='p-3 pl-0 text-left'>Total</th>
                            <td className='p-3 pl-20 text-right'>Rs.{getTotalAmount()}</td>
                        </tr>
                    </tbody>
                </table>
                <button className='bg-purple-700 px-5 py-3 text-xl mt-10 text-white font-medium rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-purple-500 transition-all'>
                    Proceed To Checkout
                </button>
            </div>
        </div>
    );
};

export default CartItems;

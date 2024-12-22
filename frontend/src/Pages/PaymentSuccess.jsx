import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import API from '../API';

const PaymentSuccess = () => {
    const { allProducts, cartItems, getTotalAmount, userId } = useContext(ShopContext);
    const amount = getTotalAmount();
    const tax = Math.round((amount * 0.1) * 100) / 100;
    const totalamount = Math.round((amount + tax) * 100) / 100;

     // Empty dependency array ensures this runs only once on component mount

    return (
        <div>
            <h1>Payment Success</h1>
        </div>
    );
}

export default PaymentSuccess;

import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import API from '../API';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProduct] = useState([]);

  // Fetch orders data from the backend
  useEffect(() => {
    API.get('/order').then(res => {
      setOrders(res.data);
    });

    API.get('/product').then(res => {
      setProduct(res.data);
    });
  }, []);

  const getProductName = (proId) => {
    const product = products.find((prod) => prod._id === proId);
    return product ? product.name : "unknown";
  };
  const getProductImage = (proId) => {
    const product = products.find((prod) => prod._id === proId);
    return product ? product.image : "unknown";
  };

  return (
    <div className='flex gap-5'>
      <Sidebar />
      <div className='p-5 w-full'>
        <h1 className='text-2xl font-bold font-inter text-gray-800'>Orders</h1>
        <div className="overflow-hidden mt-10 w-full">
          <table className="w-full rounded-xl">
            <thead>
              <tr className="bg-gray-50">
                <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl">Order No.</th>
                <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Image</th>
                <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Product</th>
                <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Quantity</th>
                <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Price</th>
                <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl">Ordered By</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {orders.map((order, i) => (
                <tr className="bg-white transition-all duration-500 hover:bg-gray-50" key={order._id}>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{order._id}</td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    <img src={getProductImage(order.productId)} className='w-12' alt="" />
                  </td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    {getProductName(order.productId)}
                  </td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    {order.quantity}
                  </td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    {order.price}
                  </td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                    {order.orderedBy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;

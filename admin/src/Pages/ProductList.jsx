import React, { useState, useEffect } from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import API from '../API'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const [products, setProduct] = useState([]);
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    API.get('/product').then(res => {
      setProduct(res.data)
    })

    API.get('/category').then(res => {
      setCategory(res.data);
    })


  }, [])

  const getCategoryName = (catId) => {
    const category = categories.find((cat) => cat._id === catId)
    return category ? category.cat_name : "unknown"
  }

  const remove = async (id) => {
    confirm("Do you want to delete this product?")
    try {
      await API.delete(`/product/${id}`);
      setProduct(products.filter(product => product._id !== id));
      alert('Product Deleted Successfully');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='flex gap-5'>
      <Sidebar />
      <div className='p-5 w-full'>
        <h1 className='text-2xl font-bold font-inter text-gray-800'>All Products</h1>
        <div className="overflow-hidden mt-10 w-full">
          <table className="w-full rounded-xl">
            <thead>
              <tr className="bg-gray-50">
                <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl">S.N</th>
                <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Image</th>
                <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Name</th>
                <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Category</th>
                <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Quantity</th>
                <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">New Price</th>
                <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Old Price</th>
                <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"> Actions </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300 ">
              {products && products.map((product, i) => (
                <tr className="bg-white transition-all duration-500 hover:bg-gray-50" key={i}>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">{++i}</td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> <img src={product.image} className='w-12' alt="" /> </td>
                  <td
                    className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 max-w-xs overflow-hidden text-ellipsis"
                    style={{ maxWidth: '200px' }}>
                    {product.name}
                  </td>

                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {getCategoryName(product.categoryId)}</td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {product.quantity}</td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {product.new_price}</td>
                  <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> {product.old_price}</td>
                  <td className=" p-5 ">
                    <div className="flex items-center gap-5">
                      <Link to={`/updateproduct/${product._id}`}><button><i className="fa-solid fa-pen-to-square text-blue-700"></i></button></Link>
                      <button onClick={() => remove(product._id)}><i className="fa-solid fa-trash text-red-600"></i></button>
                    </div>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProductList

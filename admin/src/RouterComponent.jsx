import React from 'react'
import {Routes,Route} from 'react-router-dom'
import ProductList from './Pages/ProductList'
import AddProduct from './Pages/AddProduct'
import Orders from './Pages/Orders'
import UpdateProduct from './Pages/UpdateProduct'


const RouterComponent = () => {
  return (
    <Routes>
        <Route path="/" element={<ProductList />}></Route>
        <Route path="/addproduct" element={<AddProduct />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/updateproduct/:id" element={<UpdateProduct/>}></Route>
    </Routes>
  )
}

export default RouterComponent

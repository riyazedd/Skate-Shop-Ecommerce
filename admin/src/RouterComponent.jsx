import React from 'react'
import {Routes,Route} from 'react-router-dom'
import ProductList from './Pages/ProductList'
import AddProduct from './Pages/AddProduct'
import Orders from './Pages/Orders'


const RouterComponent = () => {
  return (
    <Routes>
        <Route path="/" element={<ProductList />}></Route>
        <Route path="/addproduct" element={<AddProduct />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
    </Routes>
  )
}

export default RouterComponent

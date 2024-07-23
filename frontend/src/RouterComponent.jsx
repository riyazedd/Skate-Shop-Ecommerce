import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Home from "./Pages/Home"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"

const RouterComponent = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/decks' element={<ShopCategory category="decks" />} />
          <Route path='/boards' element={<ShopCategory category="boards" />} />
          <Route path='/wheels' element={<ShopCategory category="wheels" />} />
          <Route path='/trucks' element={<ShopCategory category="trucks" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
    </div>
  )
}

export default RouterComponent

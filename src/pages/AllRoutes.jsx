import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../cart/Cart'
import { CartC } from '../cart/CartC'
import Data from '../Data/Data'
import PaymentPage from '../payment/PaymentPage'

import Footer from '../footer/Footer'
import Check from '../checkPage/Check'
import Products from '../product/Products'
import ProductDetails from '../product/ProductDetails'


function AllRoutes() {
  return (
      <>
    
       <Routes>
      
       <Route path='/'  element={<Products/>} />
      <Route path="/:id" element={<ProductDetails/>}/>
       <Route path="/cart" element={<CartC/>}/>  
       <Route path="/products" element={<ProductDetails/>}/>  
       <Route path="/payment" element={<PaymentPage/>} />
      </Routes>
     
   </>
  )
}

export default AllRoutes
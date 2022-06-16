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
import AuthWrapper from '../Auth/AuthWrapper'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'


function AllRoutes() {
  return (
      <>
    
       <Routes>
      
       <Route path='/'  element={<Products/>} />
       <Route path="/:id" element={<AuthWrapper><ProductDetails/></AuthWrapper>}/>
       <Route path="/cart" element={<AuthWrapper><CartC/></AuthWrapper>}/>  
       <Route path="/signup" element={<SignUp/>}/>  
       <Route path="/payment" element={<AuthWrapper><PaymentPage/></AuthWrapper>} />
       <Route path="/login" element={<Login/>} />
      </Routes>
     
   </>
  )
}

export default AllRoutes
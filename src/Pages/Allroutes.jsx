import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Basket from '../Components/Basket/basket'
import PaymentResponse from '../Components/Basket/paymentResponse'
import PaymentSuccess from '../Components/Basket/PaymentSuccess'
import Shipping from '../Components/Basket/shipping'
import { InitialFocus } from '../Components/Basket/signIn'
import Kids from './Kids'
import Kproducts from './Kproducts'
import WishlistPage from './WishlistPage'
import Mens from './Mens'
import Mproducts from './Mproduct'
import Womens from './Womens'
import Wproducts from './Wproducts'
import HomePage from '../Components/HomePage/HomePage'
import SingleProduct from './SingleProduct'
import Products from './Products'
import Beauty from './Beauty'

const Allroutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>

        <Route path='/wishlistPage' element={<WishlistPage/>}></Route>
        <Route path='/product/:id' element={<SingleProduct/>}></Route>

        <Route path="/beauty" element={<Beauty></Beauty>}></Route>
        <Route path="/beauty/products" element={<Products></Products>}></Route>

        <Route path='/kidsproduct' element={<Kproducts/>}></Route>
        <Route path='/womensproduct' element={<Wproducts/>}></Route>
        <Route path='/mensproduct' element={<Mproducts/>}></Route>

        <Route path='/kids' element={<Kids/>}></Route>
        <Route path='/mens' element={<Mens/>}></Route>
        <Route path='/womens' element={<Womens/>}></Route>
        
        <Route path='/shipping' element={<Shipping></Shipping>}></Route>
        <Route path='/signIn' element={<InitialFocus></InitialFocus>}></Route>
        <Route path='/basket' element={<Basket></Basket>}></Route>
        <Route path='/paymentsuccess' element={<PaymentSuccess></PaymentSuccess>}></Route>
        <Route path='/paymentresponse/:title/:src' element={<PaymentResponse></PaymentResponse>}></Route>
    </Routes>
    </div>
  )
}

export default Allroutes
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Kids from './Kids'
import Kproducts from './Kproducts'
import Mens from './Mens'
import Mproducts from './Mproduct'
import Womens from './Womens'
import Wproducts from './Wproducts'
import HomePage from '../Components/HomePage/HomePage'
import SingleProduct from './SingleProduct'

const Allroutes = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<HomePage/>}></Route>
        <Route path='/womensproduct' element={<Wproducts/>}></Route>
        <Route path='/mensproduct' element={<Mproducts/>}></Route>
        <Route path='/kidsproduct' element={<Kproducts/>}></Route>
        <Route path='/womens' element={<Womens/>}></Route>
        <Route path='/mens' element={<Mens/>}></Route>
        <Route path='/kids' element={<Kids/>}></Route>
        <Route path='/product/:id' element={<SingleProduct/>}></Route>
    </Routes>
    </div>
  )
}

export default Allroutes
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mens from './Mens'
import Mproducts from './Mproduct'
import Womens from './Womens'
import Wproducts from './Wproducts'

const Allroutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/womensproduct' element={<Wproducts/>}></Route>
        <Route path='/mensproduct' element={<Mproducts/>}></Route>
        <Route path='/womens' element={<Womens/>}></Route>
        <Route path='/mens' element={<Mens/>}></Route>
        <Route path='/product/:id' element={<Mens/>}></Route>
    </Routes>
    </div>
  )
}

export default Allroutes
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Components/HomePage/HomePage'
import Womens from './Womens'
import Wproducts from './Wproducts'
const Allroutes = () => {
  return (
    <div>
    <Routes>
            <Route path='/womensproduct' element={<Wproducts/>}></Route>
        <Route path='/womens' element={<Womens/>}></Route>
        <Route path='/' element={<HomePage/>}></Route>
    </Routes>
    </div>
  )
}

export default Allroutes

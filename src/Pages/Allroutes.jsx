import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Womens from './Womens'
import Wproducts from './Wproducts'

const Allroutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/womensproduct' element={<Wproducts/>}></Route>
        <Route path='/womens' element={<Womens/>}></Route>
    </Routes>
    </div>
  )
}

export default Allroutes
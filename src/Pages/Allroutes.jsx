import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Shipping from '../Components/Basket/shipping''
import { InitialFocus } from '../Components/Basket/signIn'
import Womens from './Womens'
import Wproducts from './Wproducts'

const Allroutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/womensproduct' element={<Wproducts/>}></Route>
        <Route path='/womens' element={<Womens/>}></Route>
        <Route path='/shipping' element={<Shipping></Shipping>}></Route>
    </Routes>
    </div>
  )
}

export default Allroutes

import React from "react";
import { Route, Routes } from "react-router-dom";
import Womens from "./Womens";
import Wproducts from "./Wproducts";
import Beauty from "./Beauty";
import Products from "./Products";
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/womensproduct" element={<Wproducts />}></Route>
        <Route path="/womens" element={<Womens />}></Route>
        <Route path="/beauty" element={<Beauty />}></Route>
        <Route path="/beauty/Products" element={<Products />}></Route>
      </Routes>
    </div>
  );
};

export default Allroutes;

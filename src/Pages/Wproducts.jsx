import React from "react";
import "./Wproducts.css";
import Productcard from "./Productcard";
import Footer from "../Components/Footer/Footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { womensproduct } from "../redux/action";
import { useToast } from "@chakra-ui/react";
const Wproducts = () => {
  // const [price,setprice]=useState('')
  const [pfilter, setpfilter] = useState([]);
  console.log(pfilter);
  // console.log(price)
  const data = useSelector((store) => store.reducer.womens);
  const loading = useSelector((store) => store.loading);
  const dispatch = useDispatch();
  const toast=useToast()
  // console.log(store)

  const fetchdata=()=>{
    dispatch(womensproduct())
  }

  useEffect(() => {

    fetchdata()
   
  }, []);

  const handlechange = (e) => {
    let val = e.target.value;
    // setprice(val)
    if (val === "all") {
      setpfilter([]);
    } else {
      const pricefilter = data.filter((el) => Number(el.price) <= Number(val));
      setpfilter(pricefilter);
    }
  };

  return (
    <div>
      <div className="filters">
        <select name="price" onChange={handlechange}>
          <option value="">Select by price</option>
          <option value="all">All</option>
          <option value="500">below 500</option>
          <option value="1000">below 1000</option>
          <option value="2000">below 2000</option>
        </select>
      </div>
      <div className="filters">
        <select name="price" onChange={handlechange}>
          <option value="">Select by price</option>
          <option value="all">All</option>
          <option value="500">below 500</option>
          <option value="1000">below 1000</option>
          <option value="2000">below 2000</option>
        </select>
      </div>
      <div className="cards">
        {pfilter.length <= 0 &&
          data.map((el) => <Productcard key={el.id} item={el} />)}
        {pfilter.length > 0 &&
          pfilter.map((el) => <Productcard key={el.id} item={el} />)}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Wproducts;

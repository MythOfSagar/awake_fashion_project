import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSingleProduct } from "../redux/SingleProduct/action";
import { updateCart } from "../redux/SingleProduct/action";
import { json, useNavigate } from "react-router-dom";

const Eachproduct = ({ item, id, gender }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [btn, setBtn] = useState("btn");
  const handleClick = () => {
    localStorage.setItem("gender", JSON.stringify(gender));
    localStorage.setItem("data", JSON.stringify(item));
    //navigate("/SingleProduct");
  };
  const handlecart = () => {
    const arr = JSON.parse(localStorage.getItem("cart"));
    arr.push(item);
    localStorage.setItem("cart", JSON.stringify(arr));

    navigate("/cart");
  };
  if (id % 3 == 0) {
    return (
      <div>
        <div
          key={id}
          className="container"
          onMouseEnter={(e) => setBtn("btnshow")}
          onMouseLeave={(e) => setBtn("btn")}
        >
          <img onClick={() => handleClick()} src={item.img} alt="" />
          <div onClick={() => handleClick()} className="off">
            <div>{item.Soffer}</div>
            <div>{item.discount}</div>
          </div>
          <div onClick={() => handleClick()} className="price">
            <div>₹ {item.price + item.discount}</div>
            <s style={{ fontSize: "12px" }}>₹{item.price}</s>
          </div>
          <p onClick={() => handleClick()}>{item.productName}</p>
          <button className={btn} onClick={handlecart}>
            {" "}
            ADD TO BASKET
          </button>
        </div>
      </div>
    );
  }
};

export default Eachproduct;

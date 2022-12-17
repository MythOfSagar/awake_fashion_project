import React from 'react'
import { Link } from 'react-router-dom'
import { addtocart } from '../redux/action'
import './Productcard.css'
const Kidsproductcard = ({item}) => {
    const {img,price,id,brand}=item

  return (
    <div>
     <div className="container">
 
    <div className="card">

    <div className="imgbox">
    <Link to={`/product/${id}`}> <img src={img[0]}/></Link>
            <p><span>₹ {price}</span></p>
            <p>{brand}</p>
        </div>
        
        <div className="content">
            <button onClick={addtocart(item)}>ADD TO BASKET</button>
        </div>
    </div>
    </div>
</div>
  )
}

export default Kidsproductcard
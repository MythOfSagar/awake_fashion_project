import React from 'react'
import { Link } from 'react-router-dom'
import { addtocart } from '../redux/action'
import './Productcard.css'
const Productcard = ({item}) => {
    const {images,price,off_price,id,title}=item

  return (
    <div>
    <Link to={`/product/${id}`}><div className="container">
 
    <div className="card">

        <div className="imgbox">
            <img src={images[0]}/>
            <p><span>₹ {price}</span><span style={{color:'grey',opacity:'0.5'}}>  ₹ {off_price}</span></p>
            <p>{title}</p>
        </div>

        <div className="content">
            <button onClick={addtocart(item)}>ADD TO BASKET</button>
        </div>
    </div>
    </div></Link>
</div>
  )
}

export default Productcard
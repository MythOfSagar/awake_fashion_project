import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import './Productcard.css'
const Productcard = ({image,price,off,title}) => {
  return (
    <div>
    <Link to=''><div className="container">
 
    <div className="card">

        <div className="imgbox">
            <img src={image}/>
            <p><span>₹ {price}</span><span>₹ {off}</span></p>
            <p>{title}</p>
        </div>

        <div className="content">
            <button>ADD TO BASKET</button>
        </div>
    </div>
    </div></Link>
</div>
  )
}

export default Productcard
import React from 'react'
import { Link } from 'react-router-dom'
import { addtocart } from '../redux/action'
import './Productcard.css'
import { useToast } from '@chakra-ui/react'
const Productcard = ({item}) => {
    const {images,price,off_price,id,title}=item
  const toast=useToast()
  const handleaddtocart=()=>{
    addtocart(item)
    toast({
        title: "Add to Cart",
        description: "Successfully Added to Cart",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      })
  }

  return (
    <div>
    <div className="container">
 
    <div className="card">

        <div className="imgbox">
        <Link to={`/product/${id}`}><img src={images[0]}/></Link>
            {/* <p><span>₹ {price}</span><strike style={{color:'grey'}}>  ₹ {off_price}</strike></p> */}
            <div style={{display:"flex"}}><p>₹ {price}</p><p style={{color:'grey',fontSize:'12px'}}><strike >  ₹ {off_price}</strike></p></div>
            <p>{title}</p>
        </div>

        <div className="content">
            <button onClick={handleaddtocart}>ADD TO BASKET</button>
        </div>
    </div>
    </div>
</div>
  )
}

export default Productcard
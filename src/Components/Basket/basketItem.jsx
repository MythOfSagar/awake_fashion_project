import { Box, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'



const BasketItem = ({id,imgSrc,title,changedPrice,size,price,discPrice,colour}) => {


    const handleChange=(e)=>
    changedPrice({discPrice:discPrice,qty:+(e.target.value),id:id})
    
  return (
    <Box border="2px solid red">
        <Box>
            <Box display="flex">
                <Box><Image src={imgSrc} sizes={50}></Image></Box>
                <Spacer />
                <Box>
                    <Text>{title}</Text>
                    <Text>{price} {discPrice} {price-discPrice}</Text>
                    <Text>Colour:  {colour}</Text>
                    <Text><span style={{color:"red"}}>Size:</span>  {size}</Text>
                </Box>
            </Box>
            <Box display="flex">
                <Box>Delivery in 5-7 days</Box>
                <Spacer />
                <Box>
                    Qty: <select name="" id="" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select></Box>
            </Box>
        </Box>
        <Box display="flex">
            <Box>Remove</Box>
            <Spacer />
            <Box>Move to Favorites</Box>
        </Box>
    </Box>
  )
}

export default BasketItem
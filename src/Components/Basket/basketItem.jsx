import { Box, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'



const BasketItem = ({id,removeItem,imgSrc,title,changedPrice,size,price,discPrice,colour}) => {


    const handleChange=(e)=>
    changedPrice({price:price,qty:+(e.target.value),id:id})
    
  return (
    <Box
    width={{ base: "100%", md: "100%", lg: "80%" }}
    borderBottom={"1px solid orange"}
    marginBottom={{ base: '2', md: '5', lg: '56px' }}>
        <Box>
            <Box display="flex">
                <Box><Image 
                marginRight={{ base: '80px', md: '50px', lg: '20px' }}
                src={imgSrc} width={{ base: '100px', md: '140px', lg: '120px' }}></Image></Box>
              
                <Box>
                    <Text
                    
                    fontWeight={{ base: '600', md: '40px', lg: '56px' }}
                    fontSize={{ base: '16', md: '26', lg: '20' }}
                    >{title}</Text>
                    <Text
                    fontWeight={{ base: '550', md: '40px', lg: '56px' }}
                    fontSize={{ base: '16', md: '24', lg: '20' }}
                    >₹ {price}</Text>
                    <Text
                    fontSize={{ base: '14', md: '19', lg: '16' }}
                    ><span style={{color:"green"}}>Colour:</span>  {colour}</Text>
                    <Text
                    fontSize={{ base: '14', md: '19', lg: '16' }}
                    ><span style={{color:"green"}}>Size:</span>  {size}</Text>
                </Box>
            </Box>
            <Box display="flex">
                <Box
                fontSize={{ base: '14', md: '19', lg: '16' }}
                ><span style={{color:"green"}}>Delivery in</span> 5-7 days</Box>
                <Spacer />
                <Box fontSize={{ base: '16', md: '26', lg: '20' }}>
                    Qty: <select name="" id="" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select></Box>
            </Box>
        </Box>
        <Box textAlign={"center"}>
            <Box 
            fontWeight={{ base: '600', md: '40px', lg: '56px' }}
             fontSize={{ base: '16', md: '26', lg: '20' }}
            onClick={()=>removeItem(id)}><span style={{color:"orange"}}>Remove</span></Box>
        </Box>
    </Box>
  )
}

export default BasketItem
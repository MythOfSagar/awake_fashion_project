import { Box, Button, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"

const PriceCalculated = ({price}) => {
  return (
    <Box fontSize={20} position={"fixed"} marginLeft={"150px"} marginTop={"100px"} width={300}>
        <Box display={"flex"}><Text>Total MRP</Text><Spacer/><Text>{price+(0.3*price)}</Text></Box>
        <Box display={"flex"}><Text>Offer discount</Text><Spacer/><Text>{
        (-0.3*price).toFixed(2)
        }</Text></Box>
        <Box display={"flex"}><Text>Shipping charge</Text><Spacer/><Text>Free</Text></Box>
        <Box 
        borderTop={"1px solid green"}
        margin="15px"
        display={"flex"}><Text>TOTAL</Text><Spacer/><Text>{price}</Text></Box>
        <Box>
        <Link to="/shipping"><Button
        background={"orange.300"}
        color="whiteAlpha"
        width='100%'
        align="center"
        >CheckOut Now</Button></Link></Box>
    </Box>
  )
}

export default PriceCalculated
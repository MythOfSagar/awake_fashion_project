import { Button,Box,Text,Image } from '@chakra-ui/react'
import React from 'react'
import {useNavigate} from "react-router-dom"

const CashOnDelivery = () => {

  const navigate=useNavigate()

  return (
    <Box>
        <Box><Text
        align={"center"}
        fontWeight={500}
        >Pay at the time of delivery by cash or scan QR and pay through UPI.</Text></Box>
        <Box><Image src="https://i1.lmsin.net/website_images/in/checkout/cod-theme-icon.svg"></Image></Box>
        <Box><Button
        onClick={()=>navigate("/paymentsuccess")}
        background={"orange.300"}
        color="whiteAlpha"
        margin={5}
        align="center"
        >PLACE THE ORDER</Button></Box>
    </Box>
  )
}

export default CashOnDelivery
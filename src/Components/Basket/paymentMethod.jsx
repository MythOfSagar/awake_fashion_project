import { Image, Text,Box } from '@chakra-ui/react'
import React, { useState } from 'react'

const PaymentMethod = ({src,title,Pay,desc}) => {

    const [toggle,setToggle]=useState(true)

  return (
    <Box marginTop={6} >
        <Box onClick={()=>setToggle(!toggle)}>
            <Box display="flex"><Image src={src} width={{ base: '20px', md: '50px', lg: '50px' }}></Image><Text
            fontWeight={700}
            fontSize={{ base: '20px', md: '30px', lg: '35px' }}
            >{title}</Text></Box>
            <Box><Text 
            color={"teal"}
            fontSize={{ base: '12px', md: '18px', lg: '20px' }}
            width={"fit-content"}
            >{desc}</Text></Box>
        </Box>
        <Box display={toggle ? "none" : "bock"}>
           {Pay}
        </Box>
    </Box>
  )
}

export default PaymentMethod

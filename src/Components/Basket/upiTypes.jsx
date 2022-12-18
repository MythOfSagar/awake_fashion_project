import { Box,Button,Image,Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {Link} from "react-router-dom"

const UPI= ({title,src}) => {

    const [toggle,setToggle]=useState(true)

    return (
        <Box>
      <Box alignItems={"center"} display="flex" onClick={()=>setToggle(!toggle)}>
       <input type="radio" name={title} id="" />
       <Image margin={"10px"} width={"25px"} src={`https://i.ibb.co/${src}/upi.png`}/>
       <Text
        fontSize={{ base: '16', md: '26', lg: '30' }}
       >{title}</Text>
      </Box>
      <Box display={toggle ? "none" : "block"}>
            <input 
            type="text" placeholder={`Enter ${title} ID`} />
           <Link to={`/paymentresponse/${title}/${src}`}> <Button
           background={"orange.300"}
           color="whiteAlpha"
           align="center"
           >PAY NOW</Button></Link>
      </Box>
      </Box>
    )
  }
  const UPIdata=[
    {title:"Google Pay",src:"6F4QWqb"},
    {title:"Phone Pay",src:"bPNG6fL"},
    {title:"Paytm",src:"V3Gp4wc"},
    {title:"Bhim",src:"FntyyrV"},
    {title:"WhatsApp",src:"9Y5WHps"}
]

const UpiTypes = () => {
  return (
   <Box>
       {UPIdata.map((upi)=>
        <UPI
        title={upi.title}
        key={upi.title}
        src={upi.src}
        ></UPI>
       )}
   </Box>
     
  )
}

export default UpiTypes
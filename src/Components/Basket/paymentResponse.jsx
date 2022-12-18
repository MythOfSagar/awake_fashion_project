import { Box, Heading,Image,Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';


const PaymentResponse = () => {

const params=useParams()
const [time,setTime]=useState(59)
const navigate=useNavigate()


useEffect(()=>{
    setInterval(()=>setTime(prev=>prev-1),1000)

    setTimeout(()=>navigate("/paymentsuccess"),7000)
   
},[])

  
  return (<>
    <Box align="center" marginTop={{ base: '60px', md: '90px', lg: '56px' }}>
           <Image src={`https://i.ibb.co/${params.src}/upi.png`}></Image>
           <Heading>Open {params.title} mobile app</Heading>
           <Heading>and approve the payment</Heading>
           <Heading>within 4:{time} seconds</Heading>
    </Box>
    <Footer></Footer></>
  )
}

export default PaymentResponse
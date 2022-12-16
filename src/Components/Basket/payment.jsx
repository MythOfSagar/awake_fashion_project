import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import CashOnDelivery from './cashOnDelivery'
import PaymentMethod from './paymentMethod'
import UpiTypes from './upiTypes'

const paymentMethodsData=[
    {
        src:'https://i.ibb.co/1GS2j0c/upi.png',
        title:"UPI",
        desc:"Pay with your preferred UPI Id.",
        paymentOp:<UpiTypes></UpiTypes>
},
{
    src:'https://i.ibb.co/2PPDn05/upi.png',
    title:"Cash on Delivery",
    desc:"Pay after Delivery.",
    paymentOp:<CashOnDelivery></CashOnDelivery>
}]

const Payment = () => {
  return (
    <Box>
        <Box textAlign={"center"}><Text
         textAlign={"center"}
         borderBottom="1px solid green"
         fontWeight={700}
         fontSize={{ base: '16', md: '26', lg: '25' }}
        >Payment method</Text></Box>
        <Box>
            {paymentMethodsData.map((method)=>
            <PaymentMethod
            desc={method.desc}
            key={method.title}
            Pay={method.paymentOp}
            title={method.title}
            src={method.src}
            ></PaymentMethod>
            )}
        </Box>
    </Box>
  )
}

export default Payment
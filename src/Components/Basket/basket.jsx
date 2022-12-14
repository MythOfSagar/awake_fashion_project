import { Box,Text, Button, Heading} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import BasketItem from './basketItem'

const Basket = () => {
    const data=[{
        id:1,
        title:"GINGER Women Striped V Neck Sleeveless Playsuit",
        colour:"White",
        price:1799,
        discPrice:159,
        size:"XL",
        img:"https://lmsin.net/cdn-cgi/image/h=294,w=196,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011931210-White-OffWhite-1000011931210_01-2100.jpg"
    },
    {
        id:2,
        title:"GINGER Women Striped V Neck Sleeveless Playsuit",
        colour:"White",
        price:1799,
        discPrice:125,
        size:"XL",
        img:"https://lmsin.net/cdn-cgi/image/h=294,w=196,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011931210-White-OffWhite-1000011931210_01-2100.jpg"
    },
    {
        id:3,
        title:"GINGER Women Striped V Neck Sleeveless Playsuit",
        colour:"White",
        price:1799,
        discPrice:259,
        size:"XL",
        img:"https://lmsin.net/cdn-cgi/image/h=294,w=196,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011931210-White-OffWhite-1000011931210_01-2100.jpg"
    },
    {
        id:4,
        title:"GINGER Women Striped V Neck Sleeveless Playsuit",
        colour:"White",
        price:1799,
        discPrice:1259,
        size:"XL",
        img:"https://lmsin.net/cdn-cgi/image/h=294,w=196,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011931210-White-OffWhite-1000011931210_01-2100.jpg"
    }
]

const initialData=()=>data.map((el)=>{return {discPrice:el.discPrice,qty:1,id:el.id}})

const [quanityPrice,setquanityPrice]=useState(initialData())
const [totalPrice,setPrice]=useState(0)
const [numberOfProducts,setnumOfPoducts]=useState(data.length)

const changeTotal=(obb,arr)=>{
  arr=arr.map((el)=>{
  if(obb.id===el.id){return obb}
  else {return el}
})
setquanityPrice(arr)
}

const setSum = () => {
  let total=0
  let numP=0
  for(let v=0;v<data.length;v++){
     total=total+quanityPrice[v].discPrice*quanityPrice[v].qty
     numP=numP+quanityPrice[v].qty
  }
  setnumOfPoducts(numP)
  setPrice(total)
}
useEffect(()=>{
  setSum()
},[quanityPrice])



  return (
    <Box>
      <Box
      width="100%"
      position={"fixed"} 
      top="0"
      backgroundColor={"white"}>
        <Heading fontSize={30}>Your Shopping Basket</Heading>
        <Heading fontSize={20}>{numberOfProducts} Products</Heading>
      </Box>
    <Box marginTop="80px">
      {data.map((item)=>
      <BasketItem
      key={item.id}
      id={item.id}
      changedPrice={(obb)=>changeTotal(obb,quanityPrice)}
      title={item.title}
      colour={item.colour}
      size={item.size}
      discPrice={item.discPrice}
      price={item.price}
      imgSrc={item.img}
      ></BasketItem>)}
    </Box>
    <Box
    display={"flex"}
    width="100%"
    position={"fixed"} 
    bottom="0"
    backgroundColor={"white"}>
      <Box>
        <Text>Total</Text>
        <Heading>₹ {totalPrice}</Heading>
        <Text>Inclusive of all Taxes</Text>
      </Box>
      <Box><Button>PROCEED</Button></Box>
    </Box>
    </Box>
  )
}

export default Basket
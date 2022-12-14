import { Box, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Shipping = () => {

    const [shippingData,setData]=useState({
        fullname:"",
        mobile:"",
        pincode:"",
        city:"",
        state:"",
        street:""
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setData({...shippingData,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(shippingData)
    }

   const getPincodeData=async(e)=>{
    if(e.target.value.length===6){
     
        const resp=await fetch(`https://api.postalpincode.in/pincode/${e.target.value}`)
        const pinData=await resp.json()

        if(pinData[0].Status==="Success"){
        setData({...shippingData,
            state:pinData[0].PostOffice[0].State,
            city:pinData[0].PostOffice[0].District,
            pincode:e.target.value
        })
    }
    else if(pinData[0].Status!=="Success"){
        alert("Enter Correct PinCode")
        setData({...shippingData,
            state:"",
            city:"",
            pincode:""
        })
    }
    }

}

  return (
    <Box>
        <Box><Text>Shipping method</Text></Box>
        <Box>
            <Text>Home Delivery</Text>
            <Text>Get your product delivered to your Home</Text>
        </Box>
        <Box>
            <Text>Add new address</Text>
            <form onSubmit={handleSubmit}>
                 <Box>
                    <Box>
                    <label>Full Name</label><br/>
                    <input placeholder='Enter Your Name' onChange={handleChange} value={shippingData.fullname} name='fullname' type="text" required/>
                    </Box>
                    <Box>
                    <label>Mobile Number</label><br/>
                    <input placeholder='Enter mobile Number' value={shippingData.mobile} onChange={handleChange} name='mobile' type="number" required/>
                    </Box>
                 </Box>
                 <Box>
                    <Box>
                    <label>Pincode</label><br/>
                    <input placeholder='Enter Your Pincode' name='pincode' disabled={false} onChange={getPincodeData} type="number" required/>
                    </Box>
                    <Box>
                    <label>City</label><br/>
                    <input type="text" disabled={true} name='city' readOnly value={shippingData.city} placeholder='Getting City from Pincode' required/>
                    </Box>
                 </Box>
                 <Box>
                    <Box>
                    <label>State</label><br/>
                    <input type="text" disabled={true} name='state' readOnly value={shippingData.state} placeholder='Getting State from Pincode' required/>
                    </Box>
                    <Box>
                    <label>Street name or number</label><br/>
                    <input type="text" name='street' onChange={handleChange} value={shippingData.street} placeholder='Enter your Street Details'/>
                    </Box>
                 </Box>
                 <Box>
                    <input type="submit" value="ADD ADDRESS & CONTINUE" onSubmit={handleSubmit}/>
                 </Box>
            </form>
        </Box>
    </Box>
  )
}

export default Shipping
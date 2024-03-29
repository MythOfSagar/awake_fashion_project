import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Payment from './payment'


const Shipping = () => {

    const [shippingData, setData] = useState({
        fullname: "",
        mobile: "",
        pincode: "",
        city: "",
        state: "",
        street: ""
    })

    const [toggle, setToggle] = useState(true)

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...shippingData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(shippingData)
        setToggle(!toggle)
    }

    const getPincodeData = async (e) => {
        if (e.target.value.length === 6) {

            const resp = await fetch(`https://api.postalpincode.in/pincode/${e.target.value}`)
            const pinData = await resp.json()

            if (pinData[0].Status === "Success") {
                setData({
                    ...shippingData,
                    state: pinData[0].PostOffice[0].State,
                    city: pinData[0].PostOffice[0].District,
                    pincode: e.target.value
                })
            }
            else if (pinData[0].Status !== "Success") {
                alert("Enter Correct PinCode")
                setData({
                    ...shippingData,
                    state: "",
                    city: "",
                    pincode: ""
                })
            }
        }

    }

    return (<>
        
        <Box padding={"15px"}
        
            marginTop={{ base: '60px', md: '90px', lg: '56px' }}
        >
            
            <Box >
                <Heading
                    fontSize={{ base: '22px', md: '40px', lg: '30px' }}
                >{toggle ? "Shipping" : "Payment"}</Heading>
                <Text
                    borderBottom="1px solid green"
                    width="fit-content"
                    fontSize={{ base: '22px', md: '40px', lg: '30px' }}
                    fontWeight={{ base: '600', md: '40px', lg: '56px' }}
                    onClick={handleSubmit}>{toggle ? "Address" : "Edit"}</Text>
            </Box>
            <Box
                fontWeight={{ base: '600', md: '40px', lg: '56px' }}
                fontSize={{ base: '16', md: '26', lg: '26px' }}
            >
                <Text>{toggle ? "Home Delivery" :
                    `${shippingData.fullname},${shippingData.street} ${shippingData.city},${shippingData.state},${shippingData.pincode}`}</Text>
                <Text>{toggle ? "Get your product delivered to your Home" :
                    `Mobile Number: +91${shippingData.mobile}`
                }</Text>
            </Box>
            <Box display={{ base: 'block', md: 'flex', lg: 'flex' }}
             width={"95%"} justifyContent={"space-between"} margin={"auto"}>
            {toggle ?
                <Box width={{ base: '95%', md: '50%', lg: '60%' }}>
                    <Text
                        textAlign={"center"}
                        fontSize={{ base: '16', md: '26', lg: '25' }}
                        borderBottom="1px solid green"
                        fontWeight={700}
                    >Add new address</Text>
                    <form onSubmit={handleSubmit}>
                        <Box>
                            <Box>
                                <label>Full Name</label><br />
                                <Box border={"1px solid green"}>
                                    <input
                                        style={{ width: "100%" }}
                                        placeholder='Enter Your Name' onChange={handleChange} value={shippingData.fullname} name='fullname' type="text" required />
                                </Box>
                            </Box>
                            <Box>
                                <label>Mobile Number</label><br />
                                <Box border={"1px solid green"}>
                                    <input
                                        style={{ width: "100%" }}
                                        placeholder='Enter mobile Number' value={shippingData.mobile} onChange={handleChange} name='mobile' type="number" required />
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <label>Pincode</label><br />
                                <Box border={"1px solid green"}>
                                    <input
                                        style={{ width: "100%" }}
                                        placeholder='Enter Your Pincode' name='pincode' disabled={false} onChange={getPincodeData} type="number" required />
                                </Box>
                            </Box>
                            <Box>
                                <label>City</label><br />
                                <Box border={"1px solid green"}>
                                    <input type="text" disabled={true} name='city' readOnly value={shippingData.city} placeholder='waiting for Pincode' required />
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <label>State</label><br />
                                <Box border={"1px solid green"}>
                                    <input
                                        style={{ width: "100%" }}
                                        type="text" disabled={true} name='state' readOnly value={shippingData.state} placeholder='waiting for Pincode' required />
                                </Box>
                            </Box>
                            <Box>
                                <label>Street name or number</label><br />
                                <Box border={"1px solid green"}>
                                    <input
                                        style={{ width: "100%" }}
                                        type="text" name='street' onChange={handleChange} value={shippingData.street} placeholder='Enter your Street Details' />
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <input
                                style={{
                                    backgroundColor: "#F6AD55",
                                    color: "black",
                                    padding: "11px",
                                    borderRadius: "10px",
                                    fontWeight: 600,
                                    marginTop: 10
                                }}
                                type="submit" value="ADD ADDRESS & CONTINUE" />
                        </Box>
                    </form>
                </Box>
                : <Payment></Payment>}
                <Box 
            padding={4}
            borderRadius="15px"
            width={"fit-content"}
            height={"fit-content"}
            marginTop={7}
            textAlign={"center"}
            backgroundColor={"lightblue"}>
            <Text fontSize={25} textAlign={"center"}  margin={"auto"} >HAVE YOUR SAY</Text>
            <Text fontSize={15} textAlign={"center"}  margin={"auto"} marginTop={3} marginBottom={3}>Take our two minute survey and tell us what you think:</Text>
            <a href="https://github.com/Sagar1079/awake_fashion_project"><Button
            width={"50%"} margin={"auto"}
            backgroundColor={"white"}
            ><h3>LET'S GO</h3></Button></a>
        </Box>
                </Box>
        </Box>
        <Footer></Footer></>
    )
}

export default Shipping
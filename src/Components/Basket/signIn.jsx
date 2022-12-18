import { Box, Button, FormControl, FormLabel, Heading, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signIn } from "../../redux/basket_Items/basket.action"

export function InitialFocus() {
 
    const [toggle,setToggle]=useState(true)
    const [mobile,setMobile]=useState("")
    const [userName,setName]=useState("")
    const navigate=useNavigate()
    const dispatch=useDispatch()
   
    const { isOpen, onOpen, onClose } = useDisclosure()
    const OTP="555666"

    useEffect(()=>onOpen(),[])

    const handleChange=(e)=>{
          if(e.target.name==="userName"){
            setName(e.target.value)
          }
          if(e.target.name!=="userName"){
            setMobile(e.target.value)
          }
          if(toggle===false){
        if(e.target.value===OTP){
            alert("Sign In SuccessFull")
            dispatch(signIn(userName))
            onClose()
            setToggle(true)
            if(userName==="Admin555"){navigate("/basket")}
            else{navigate("/")}
            
        }
        if(e.target.value.length===OTP.length &&e.target.value!==OTP){
            alert("Enter correct OTP")
        }
}    }

    const handleClick=()=>{
        setToggle(!toggle)
        setMobile("")
        alert(`OTP is ${OTP}`)
    }
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <Box marginTop={200}>
       
   
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}

        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader><Heading
            fontSize={{ base: '26px', md: '35px', lg: '35px' }}
            >SIGN UP OR SIGN IN</Heading></ModalHeader>
            
            <ModalBody pb={6} >
              <FormControl>
                <Text color={"teal.400"}>Enjoy the convenience of a single account across all participating brands</Text>
                <FormLabel>{toggle ? "Mobile Number" : "Verify with OTP"}</FormLabel>
                <Input ref={initialRef} 
                onChange={handleChange}
                value={mobile}
                placeholder= {toggle ? 'Enter your Mobile Number' : "Enter the OTP"}
                />
                {toggle ? <><Text>Name</Text>
                <Input ref={initialRef} 
                onChange={handleChange}
                value={userName}
                name="userName"
                placeholder= 'Enter your Name'
                />
                <Text>Email</Text>
                <Input ref={initialRef} 
                placeholder= 'Enter your Email'
                /></> : <></>}
              </FormControl>
  
              <FormControl mt={4}>
                
              </FormControl>
            </ModalBody>
  
            <ModalFooter display={toggle ? "block" :"none"}>
              <Button background={"orange.300"}
      color="whiteAlpha"
      width={{ base: '150px', md: '300px', lg: '200px' }}
      align="center" mr={3}
      onClick={handleClick}
      >
                Continue
              </Button>
              <Button onClick={()=>navigate("/")}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    )
  }
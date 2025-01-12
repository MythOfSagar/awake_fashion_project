import { Box, Button, FormControl,useToast ,FormLabel, Heading, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import axios from "axios"
import React, { useEffect, useState } from "react"


import { useNavigate } from "react-router-dom"
import { getRegistration, verifyOtp } from "../../redux/Authorize/action"
import { getLocalData } from "../../redux/Authorize/Local"
import { signIn,signOut } from "../../redux/basket_Items/basket.action"
import { useDispatch, useSelector } from "react-redux";

const API_URL = 'https://fashion-hunter.onrender.com'

export function InitialFocus() {

  const [toggle, setToggle] = useState(true)
  const [load,setLoad]=useState(false)
  const [email, setEmail] = useState("")
  const [userName, setName] = useState("")
  const [pass, setPass] = useState("")
  const [otp, setOtp] = useState("")

  const isAuth = useSelector((store) => store.basketreducer.isAuth);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const toast = useToast()

  const { isOpen, onOpen, onClose } = useDisclosure()
 

  useEffect(() => onOpen(), [])

  const handleChange = (e) => {
    console.log(e.target.value)
    if (e.target.name === "userName") {
      setName(e.target.value)
    }
    if (e.target.name === "pass") {
      setPass(e.target.value)
    }
    if (e.target.name === "email") {
      setEmail(e.target.value)
    }
    if (e.target.name === "otp") {
      setOtp(e.target.value)
    }
  }

  const handleClick = () => {
    if(isAuth){
      onClose()
      dispatch(signOut())
      navigate("/")
    }
    else{
    setLoad(true)
    if (toggle) {
          
      axios.post(`${API_URL}/user/login`, {
        "name": userName,
        "email": email,
        "password": pass,
        "dateOfBirth": "1674892842741"
      })
        .then((res) => {
               if(res.data.message==="Password doesnot match."){
                setLoad(false)
                toast({
                  title: `Enter Correct Password`,
                  position: 'top',
                  status: 'error',
                  duration: 1500,
                  isClosable: true,
              })
               }
          else if (res.data.status === "SUCCESS") {

            dispatch(signIn(userName))
            setToggle(!toggle)
            setLoad(false)
            toast({
              title: `Sign IN Successfully`,
              position: 'top',
              status: 'success',
              duration: 1500,
              isClosable: true,
          })

            onClose()
            navigate("/")
          }
          else{
            setLoad(false)
            toast({
              title: `OTP sent to your Email Address`,
              position: 'top',
              status: 'success',
              duration: 1500,
              isClosable: true,
          })
          setToggle(!toggle)
            dispatch(getRegistration({
              name:userName,
              email: email,
              password: pass,
              dateOfBirth: Date.now()
            }))
          }
        })
 
       
      
    }
    else {
      axios.post(`${API_URL}/user/verifyotp`, {
        userID: getLocalData("userID"),
        otp: otp
      })
        .then((res) => {
          console.log(res.data.status)
          if (res.data.status === "VERIFIED") {

            dispatch(signIn(userName))
            setLoad(false)

            toast({
              title: `Successfully Registered`,
              position: 'top',
              status: 'success',
              duration: 1500,
              isClosable: true,
          })

            onClose()
            setToggle(!toggle)
            navigate("/")
          }
          else{
            setLoad(false)
            toast({
              title: `Please Enter correct OTP`,
              position: 'top',
              status: 'error',
              duration: 1500,
              isClosable: true,
          })
          }
        })
    }
  }
  }

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <Box marginTop={200}>


      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={()=>navigate("/")}

      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><Heading
            fontSize={{ base: '26px', md: '35px', lg: '35px' }}
          >{isAuth ? "SIGN OUT" : "SIGN UP OR SIGN IN"}</Heading></ModalHeader>
           
           {!isAuth ?  
          <ModalBody pb={6} >
            <FormControl>
              <Text color={"teal.400"}>Enjoy the convenience of a single account across all participating brands</Text>
              <FormLabel>{toggle ? "Email Address" : "Verify with OTP"}</FormLabel>
              <Input ref={initialRef}
                 type={toggle ? "email" : "number"}
                onChange={handleChange}
                value={toggle ? email : otp}
                name={toggle ? "email" : "otp"}
                placeholder={toggle ? 'Enter your Email Address' : "Enter the OTP"}
              />
              {toggle ? <><Text>Name</Text>
                <Input ref={initialRef}
                  onChange={handleChange}
                  value={userName}
                  name="userName"
                  placeholder='Enter your Name'
                />
                <Text>Password</Text>
                <Input ref={initialRef}
                  placeholder='Must contain upper/lowerCase char, number, special char'
                  onChange={handleChange}
                  type="password"
                  value={pass}
                  name="pass"
                /></> : <></>}
            </FormControl>

            <FormControl mt={4}>

            </FormControl>
          </ModalBody>
          : <></> }

          <ModalFooter display={toggle ? "block" : "block"}>
            <Button background={"orange.300"}
            isLoading={load}
            loadingText={toggle ? 'Processing' : "Verifying OTP"}
              color="whiteAlpha"
              width={{ base: '150px', md: '300px', lg: '200px' }}
              align="center" mr={3}
              onClick={handleClick}
            >
              {isAuth ? "Sign Out" : "Continue"}
            </Button>
            <Button onClick={() => navigate("/")}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
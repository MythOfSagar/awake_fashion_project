import { Box, Heading, Text, Input, Button, Image } from "@chakra-ui/react";
import React from "react";
import { BsApple, BsTelephoneFill } from "react-icons/bs";
import { FaGooglePlay, FaFacebookF } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import logo from "../../Assets/logo.png";

const Footer = () => {
  return (
    <>
      <Box
        borderTop={"1px solid rgb(236, 237, 235);"}
        w={"100%"}
        marginTop={"10rem"}
        marginBottom={"1rem"}
      >
        <Box
          w={{ base: "90%", md: "80%" }}
          margin={"auto"}
          marginTop={{ base: "30px", md: "50px" }}
        >
          <Box
            w={"100%"}
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(1,1fr)",
              lg: "repeat(2,1fr)",
            }}
            gridTemplateRows={"auto"}
            gap={{ base: "2rem", md: "6rem" }}
          >
            <Box>
              <Box marginBottom={"20px"}>
                <Heading as={"h1"} fontFamily={"sans-serif"} fontSize={"25px"}>
                  Subscribe to our awesome emails.
                </Heading>
                <Text color={"gray.500"}>
                  Get our latest offers and news straight in your inbox.
                </Text>
              </Box>
              <Box display={"flex"}>
                <Input
                  type="text"
                  placeholder="Please Enter Your E-Mail Address"
                  size={"md"}
                  py={"25px"}
                />
                <Button
                  colorScheme={"black"}
                  py={"25px"}
                  px={"40px"}
                  bgColor={"black"}
                  color={"white"}
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
            <Box>
              <Box marginBottom={"20px"}>
                <Heading as={"h1"} fontFamily={"sans-serif"} fontSize={"25px"}>
                  Download our apps
                </Heading>
                <Text color={"gray.500"}>
                  Shop our products and offers on-the-go.
                </Text>
              </Box>
              <Box display={"flex"} gap={"20px"}>
                <a
                  href="https://apps.apple.com/in/app/id1180884618?ls=1"
                  target={"_blank"}
                >
                  <Button
                    colorScheme={"black"}
                    bgColor={"black"}
                    color={"white"}
                    py={"25px"}
                    px={"15px"}
                    display={"flex"}
                    gap={"10px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Box>
                      <BsApple size={25} />
                    </Box>
                    <Box textAlign={"left"}>
                      <Text fontSize={"10px"}>Download on the</Text>
                      <Text fontSize={"18px"}>App Store</Text>
                    </Box>
                  </Button>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.applications.lifestyle"
                  target={"_blank"}
                >
                  <Button
                    colorScheme={"black"}
                    bgColor={"black"}
                    color={"white"}
                    py={"25px"}
                    px={"15px"}
                    display={"flex"}
                    gap={"10px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Box>
                      <FaGooglePlay size={25} />
                    </Box>
                    <Box textAlign={"left"}>
                      <Text fontSize={"10px"}>Download on the</Text>
                      <Text fontSize={"18px"}>Google Play</Text>
                    </Box>
                  </Button>
                </a>
              </Box>
            </Box>
          </Box>

          <Box
            w={"100%"}
            marginTop={{ base: "30px", md: "50px" }}
            borderTop={"1px solid rgb(236, 237, 235)"}
            borderBottom={"1px solid rgb(236, 237, 235)"}
            py={{ base: "25px", md: "40px" }}
          >
            <Box
              w={"100%"}
              display={"grid"}
              gridTemplateColumns={{
                base: "repeat(2,1fr)",
                md: "repeat(4,1fr)",
                lg: "repeat(5,1fr)",
              }}
              gridTemplateRows={"auto"}
              gap={{ base: "20px", md: "40px" }}
              textAlign={"left"}
            >
              <Box>
                <Heading
                  as={"h1"}
                  fontSize={"16px"}
                  fontFamily={"sans-serif"}
                  marginBottom={"8px"}
                  cursor={"pointer"}
                >
                  Women
                </Heading>
                <Box display={"flex"} flexDirection={"column"}>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Tops
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Ethnicwear
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Bottoms
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Dresses & Jumpsuits
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Winterwear
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Lingerie
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Ethnicwear
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Nightwear
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Sportswear
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Beauty
                  </Text>
                  <Text fontSize={"14px"} cursor={"pointer"}>
                    Watches & Sunglasses
                  </Text>
                </Box>
              </Box>

              <Box>
                <Heading
                  as={"h1"}
                  fontSize={"16px"}
                  fontFamily={"sans-serif"}
                  marginBottom={"8px"}
                  cursor={"pointer"}
                >
                  Men
                </Heading>
                <Box display={"flex"} flexDirection={"column"}>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Tops
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Bottoms
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Ethnicwear
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Winterwear
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Sportswear
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Innerwear
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Grooming
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Watches
                  </Text>
                  <Text fontSize={"14px"} cursor={"pointer"}>
                    Sunglasses
                  </Text>
                </Box>
              </Box>

              <Box>
                <Heading
                  as={"h1"}
                  fontSize={"16px"}
                  fontFamily={"sans-serif"}
                  marginBottom={"8px"}
                  cursor={"pointer"}
                >
                  Kids
                </Heading>
                <Box display={"flex"} flexDirection={"column"}>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Girls Clothing
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Boys Clothing
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Infants Girls
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Infants Boys
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Winterwear
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Adds ons
                  </Text>
                  <Text fontSize={"14px"} cursor={"pointer"}>
                    The Teen Shop
                  </Text>
                </Box>
              </Box>

              <Box>
                <Heading
                  as={"h1"}
                  fontSize={"16px"}
                  fontFamily={"sans-serif"}
                  marginBottom={"8px"}
                  cursor={"pointer"}
                >
                  Shoes & Bags
                </Heading>
                <Box display={"flex"} flexDirection={"column"}>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Women
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Men
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Boys
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Girls
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Women Accessories
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Men Accessories
                  </Text>
                  <Text fontSize={"14px"} cursor={"pointer"}>
                    Essential
                  </Text>
                </Box>
              </Box>

              <Box>
                <Heading
                  as={"h1"}
                  fontSize={"16px"}
                  fontFamily={"sans-serif"}
                  marginBottom={"8px"}
                  cursor={"pointer"}
                >
                  Beauty
                </Heading>
                <Box display={"flex"} flexDirection={"column"}>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Makeup Eyes
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Makeup Face
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Makeup Lips
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Makeup Nails
                  </Text>
                  <Text fontSize={"14px"} cursor={"pointer"}>
                    Perfumes
                  </Text>
                </Box>
              </Box>

              <Box>
                <Heading
                  as={"h1"}
                  fontSize={"16px"}
                  fontFamily={"sans-serif"}
                  marginBottom={"8px"}
                  cursor={"pointer"}
                >
                  Explore
                </Heading>
                <Box display={"flex"} flexDirection={"column"}>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Online Offers
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Store offers
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Online Gift Card
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Store Gift Card
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Stores Nearby
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    EDGE Membership
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Shop on WhatsApp
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Fashion VLOG
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Join CIRCLEMAG
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    SBI Offers
                  </Text>
                  <Text fontSize={"14px"} cursor={"pointer"}>
                    Homecentre
                  </Text>
                </Box>
              </Box>

              <Box>
                <Heading
                  as={"h1"}
                  fontSize={"16px"}
                  fontFamily={"sans-serif"}
                  marginBottom={"8px"}
                  cursor={"pointer"}
                >
                  About
                </Heading>
                <Box display={"flex"} flexDirection={"column"}>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    About Us
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Careers
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Take a Tour
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Blog
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Store Locator
                  </Text>
                  <Text fontSize={"14px"} cursor={"pointer"}>
                    Landmark Cares
                  </Text>
                </Box>
              </Box>

              <Box>
                <Heading
                  as={"h1"}
                  fontSize={"16px"}
                  fontFamily={"sans-serif"}
                  marginBottom={"8px"}
                  cursor={"pointer"}
                >
                  Help
                </Heading>
                <Box display={"flex"} flexDirection={"column"}>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Contact Us
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Shopping
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Returns Process
                  </Text>
                  <Text
                    fontSize={"14px"}
                    cursor={"pointer"}
                    marginBottom={"4px"}
                  >
                    Return Policy
                  </Text>
                  <Text fontSize={"14px"} cursor={"pointer"}>
                    Help Centre
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            width={"100%"}
            py={{ base: "15px", md: "25px" }}
            borderBottom={"1px solid rgb(236, 237, 235)"}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box
                display={"flex"}
                flexDirection={{ base: "column", lg: "row" }}
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={{ base: "20px", md: "50px" }}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  gap={"10px"}
                  cursor={"pointer"}
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    padding={"15px"}
                    border={"1px solid rgb(236, 237, 235)"}
                    borderRadius={"50%"}
                  >
                    <BsTelephoneFill size={20} />
                  </Box>
                  <Box>
                    <Text color={"gray.500"}>Talk to us</Text>
                    <Text>1800-123-1555</Text>
                  </Box>
                </Box>

                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  gap={"10px"}
                  cursor={"pointer"}
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    padding={"15px"}
                    border={"1px solid rgb(236, 237, 235)"}
                    borderRadius={"50%"}
                  >
                    <MdHelpCenter size={20} />
                  </Box>
                  <Box>
                    <Text color={"gray.500"}>Helpcentre</Text>
                    <Text>help.lifestylestores.com</Text>
                  </Box>
                </Box>

                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  gap={"10px"}
                  cursor={"pointer"}
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    padding={"15px"}
                    border={"1px solid rgb(236, 237, 235)"}
                    borderRadius={"50%"}
                  >
                    <HiOutlineMail size={20} />
                  </Box>
                  <Box>
                    <Text color={"gray.500"}>Write to us</Text>
                    <Text>help@lifestylestores.com</Text>
                  </Box>
                </Box>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"20px"}
              >
                <a
                  href="https://www.facebook.com/lifestylestores"
                  target={"_blank"}
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://www.twitter.com/Lifestyle_Store"
                  target={"_blank"}
                >
                  <AiOutlineTwitter size={25} />
                </a>
                <a
                  href="https://www.instagram.com/lifestylestores"
                  target={"_blank"}
                >
                  <AiOutlineInstagram size={25} />
                </a>
              </Box>
            </Box>
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            marginTop={{ base: "20px", md: "30px" }}
            gap={{ base: "20px", md: "40px" }}
          >
            <Box>
              <Image
                src={logo}
                w={{ base: 150, md: 200 }}
                h={"auto"}
                cursor={"pointer"}
              />
            </Box>
            <Box>
              <Text
                fontSize={13}
                color={"gray"}
                cursor={"pointer"}
                _hover={{ color: "orange" }}
              >
                © 2022 RNA Intellectual Property Limited.
              </Text>
              <Text
                fontSize={13}
                color={"gray"}
                cursor={"pointer"}
                _hover={{ color: "orange" }}
              >
                Terms & Conditions - Privacy Policy
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;

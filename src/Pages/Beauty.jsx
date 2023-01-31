import React from "react";
import { Box, Button, Grid, Heading, Stack } from "@chakra-ui/react";
import styles from "../Pages/beauty.css";
import { Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Components/Footer/Footer";
import { Link } from 'react-router-dom'

const Beauty = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows:true,
    // accessibility:true,
    // adaptiveHeight:true,
    nextArrow: <MdArrowForwardIos color="black" />,
    prevArrow: <MdArrowBackIos color="black" />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
    <div>
      {/* <Navbar/> */}
      {/* Yellow Part */}
      <Box p={1} color={"#ffffff"} bg={"#FAA619"}>
        <h2 className={styles.heading}>Lakme - Min 30% off</h2>
      </Box>
      <div className='winterwear'>
            <h3>Beauty Products</h3>
            <div>
                <div>
                <Link to='/BeautyProduct'><div>
                        <img src="https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010143997-1000010143996_01-2100.jpg" alt="" />
                    </div>
                    <p>from ₹99</p></Link>
                </div>

                <div>
                <Link to='/BeautyProduct'><div>
                        <img src="https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/b/dbeb4e88904330900424_1.jpg" alt="" />
                    </div>
                    <p>from ₹129</p></Link>
                </div>
                <div>
                <Link to='/BeautyProduct'><div>
                        <img src="https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/4/f4aa71c6946537005757_1.jpg" alt="" />
                    </div>
                    <p>from ₹299</p></Link>
                </div>
                <div>
                <Link to='/BeautyProduct'><div>
                        <img src="https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/3/1359f328904245710668_1a.jpg" alt="" />
                    </div>
                    <p>from ₹499</p></Link>
                </div>
                <div>
                <Link to='/BeautyProduct'><div>
                        <img src="https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/c/1c25c07816652022679.jpg" alt="" />
                    </div>
                    <p>from ₹299</p></Link>
                </div>
                <div>
                <Link to='/BeautyProduct'><div>
                        <img src="https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/2/12bba208906027070991_1.jpg" alt="" />
                    </div>
                    <p>from ₹189</p></Link>
                </div>
            </div>
        </div>
      {/* Slider */}
      <Box p={"32px 0 0 0 "} w={"80%"} m={"auto"} h={50}>
        <Slider {...settings}>
          <Box
            textDecoration={"none"}

            href="#"
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Beauty_Desktop-1-10Nov2022.jpg"
              alt=""
            />
          </Box>
          <Box
            textDecoration={"none"}

            href="#"
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Beauty_Desktop-3-10Oct2022.jpg"
              alt=""
            />
          </Box>
          <Box
            textDecoration={"none"}

            href="#"
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Beauty_Desktop-2-07Nov2022.jpg"
              alt=""
            />
          </Box>
          <Box
            textDecoration={"none"}

            href="#"
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Beauty_Desktop-4-10Nov2022.jpg"
              alt=""
            />
          </Box>
          <Box
            textDecoration={"none"}

            href="#"
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner6-desktop-Beauty-19Oct2022.jpg"
              alt=""
            />
          </Box>
          <Box
            textDecoration={"none"}

            href="#"
            style={{
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner5-desktop-Beauty-10Nov2022.jpg"
              alt=""
            />
          </Box>
        </Slider>
      </Box>

      {/* Big Boxes - 1 */}
      <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        mt={"500px"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box
          textDecoration={"none"}

          href="#"
          p={"0 0 26px 0"}
        >
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-5modblock-oneBytwo1-C-beauty-07Oct2022.jpg"
            alt=""
          />
        </Box>
      </Stack>

      {/* Big Boxes - 1 */}
      <Stack m={"auto"} w={"80%"} pt={"40px"}>
        <Box
          textDecoration={"none"}

          href="#"
          p={"0 0 56px 0"}
          borderBottom={"1px solid #ecedeb"}
        >
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-10modblock-oneBythree-A-Beauty-11Nov2022.jpg"
            alt=""
          />
        </Box>
      </Stack>

      {/* Big Boxes - 1 */}
      <Stack m={"auto"} w={"80%"} pt={"40px"}>
        <Box
          textDecoration={"none"}

          href="#"
          p={"0 0 56px 0"}
          borderBottom={"1px solid #ecedeb"}
        >
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modularblock-oneBytwo1A-Beauty-18Oct2022.jpg"
            alt=""
          />
        </Box>
      </Stack>

      {/* Colors Fest By Faces Canada - 6 */}
      <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box mb={"-15px"}>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Colors Fest By Faces Canada
          </Heading>
        </Box>
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(6, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-4-Beauty-Desktop-29Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Beauty-Desktop-11April2022.jpg"
                alt=""
              />
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-2-Beauty-Desktop-16March2022.jpg"
                alt=""
              />
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-3-Beauty-Desktop-16March2022.jpg"
                alt=""
              />
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-5-Beauty-Desktop-13Sep2022.jpg"
                alt=""
              />
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-6-Beauty-Desktop-16March2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      {/* value Picks - 6 text */}
      <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box mb={"-15px"}>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Shop By Category
          </Heading>
        </Box>
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(6, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-1-Desktop-Beauty-13Sept2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹199
              </Heading>
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-2-Desktop-Beauty-13Sept2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹99
              </Heading>
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-3-Desktop-Beauty-13Sept2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹75
              </Heading>
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-4-Desktop-Beauty-13Sept2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹99
              </Heading>
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-5-Desktop-Beauty-13Sept2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹99
              </Heading>
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-6-Desktop-Beauty-12Oct2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                From ₹600
              </Heading>
            </Box>
          </Grid>
        </Box>
      </Stack>

      {/* Lipstick bestsellers - 6 text */}
      <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box mb={"-15px"}>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Lipstick bestsellers
          </Heading>
        </Box>
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(6, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-1-Beauty-Desktop-09Sep2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                Up To 15% Off
              </Heading>
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-2-Beauty-Desktop-09Sep2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                Up To 30% Off
              </Heading>
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-3-Desktop-Beauty-13Sept2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                Up To 30% Off
              </Heading>
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-4-Beauty-Desktop-09Sep2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                Up To 15% Off
              </Heading>
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-5-Beauty-Desktop-09Sep2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                Up To 15% Off
              </Heading>
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={200}
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-6-Beauty-Desktop-09Sep2022.jpg"
                alt=""
              />
              <Heading
                as={"h3"}
                color={"#000000"}
                fontWeight={"600"}
                fontSize={"16px"}
              >
                Up To 20% Off
              </Heading>
            </Box>
          </Grid>
        </Box>
      </Stack>

      {/* Big Boxes - 1 */}
      <Stack m={"auto"} w={"80%"} pt={"57px"}>
        <Box
          textDecoration={"none"}

          href="#"
          p={"0 0 56px 0"}
          borderBottom={"1px solid #ecedeb"}
        >
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Beauty-modularblock1-A-02Aug2022.jpg"
            alt=""
          />
        </Box>
      </Stack>

      {/* Skin Essentials- 3 */}
      <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box mb={"-15px"}>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Skin Essentials
          </Heading>
        </Box>
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-8modblock-oneBythree-A-Beauty-12April2022.jpg"
                alt=""
              />
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-8modblock-oneBythree-B-Beauty-17March2022.jpg"
                alt=""
              />
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-8modblock-oneBythree-C-Beauty-17March2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      {/* Beauty Essentials- 3 */}
      <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box mb={"-15px"}>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Beauty Essentials
          </Heading>
        </Box>
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Beauty-modblock-oneBythree-D-12April2022.jpg"
                alt=""
              />
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Beauty-modblock-oneBythree-E-16March2022.jpg"
                alt=""
              />
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Beauty-modblock-oneBythree-F-16March2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      {/* Budget Corner - 3 */}
      <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box mb={"-15px"}>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Budget Corner
          </Heading>
        </Box>
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-A-Beauty-12April2022.jpg"
                alt=""
              />
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-B-Beauty-16March2022.jpg"
                alt=""
              />
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-C-Beauty-16March2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      {/* Budget Corner - 3 */}
      <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box mb={"-15px"}>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Top picks of the season
          </Heading>
        </Box>
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Beauty-modularblock-oneBythree-A-16March2022.jpg"
                alt=""
              />
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Beauty-modularblock-oneBythree-B-31March2022.jpg"
                alt=""
              />
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Beauty-modularblock-oneBythree-C-16March2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>

      {/* Budget Corner - 3 */}
      <Stack
        pb={"30px"}
        w={"80%"}
        m={"auto"}
        borderBottom={"1px solid #ecedeb"}
      >
        <Box mb={"-15px"}>
          <Heading
            textAlign={"left"}
            fontWeight={"normal"}
            color={"#000000"}
            fontSize={"36px"}
            as={"h2"}
          >
            Luxury Collection
          </Heading>
        </Box>
        <Box pb={"30px"} w={"1276px"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            justifyContent={"space-evenly"}
          >
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-6modblk-oneBythree-A-Beauty-13May2022.jpg"
                alt=""
              />
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-6modblk-oneBythree-B-Beauty-17March2022.jpg"
                alt=""
              />
            </Box>
            <Box
              textDecoration={"none"}

              href="#"
              pl={"8px"}
              pr={"8px"}
            >
              <Image
                w={"100%"}
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-6modblk-oneBythree-C-Beauty-17March2022.jpg"
                alt=""
              />
            </Box>
          </Grid>
        </Box>
      </Stack>
    </div>
    <Footer></Footer></>
  );
};

export default Beauty;

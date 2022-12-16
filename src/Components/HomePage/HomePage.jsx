import {
  Box,
  Button,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SliderShow1 from "./SlideShow/SliderShow1";
import SlideShow2 from "./SlideShow/SlideShow2";

const HomePage = () => {
  return (
    <>
      {/* homepage */}
      <Box w={{ base: "90%", md: "80%" }} margin={"auto"} marginTop={"4.4rem"}>
        {/* Section 1 SlideShow */}

        <Box w={"100%"}>
          <SliderShow1 />
        </Box>

        <Box width={"100%"} marginTop={{ base: "15px", md: "20px" }}>
          <Image
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip2-15Dec2022.gif"
            width={"100%"}
            height={"auto"}
            cursor={"pointer"}
          />
        </Box>

        {/* Section 2 Our Benefits*/}

        <Box width={"100%"}>
          <Heading
            as={"h2"}
            fontWeight={600}
            fontFamily={"sans-serif"}
            fontSize={"24px"}
            marginTop={{ base: "25px", md: "35px" }}
          >
            Our Benefits
            <Text
              width={"48px"}
              pt={"4px"}
              borderBottom={"4px solid #faa619"}
            ></Text>
          </Heading>
          <Box
            display={"grid"}
            gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
            gap={"10px"}
            marginTop={{ base: "15px", md: "20px" }}
          >
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit1-02Dec2022.jpg"
              width={"100%"}
              height={"auto"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit2-13Oct2022.jpg"
              width={"100%"}
              height={"auto"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=410,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-DesktopUberHP-OurBenefit3-13Oct2022.jpg"
              width={"100%"}
              height={"auto"}
            />
          </Box>
        </Box>

        {/* Section 3 Unmissable Offers */}

        <Box width={"100%"}>
          <Heading
            as={"h2"}
            fontWeight={600}
            fontFamily={"sans-serif"}
            fontSize={"24px"}
            marginTop={{ base: "25px", md: "35px" }}
          >
            Unmissable Offers
            <Text
              width={"48px"}
              pt={"4px"}
              borderBottom={"4px solid #faa619"}
            ></Text>
          </Heading>

          <Box marginTop={{ base: "25px", md: "35px" }}>
            <SlideShow2 />
          </Box>

          <Box width={"100%"} marginTop={{ base: "15px", md: "20px" }}>
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip3-15Dec2022.gif"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
          </Box>
        </Box>

        {/* Section 4 Winterwear Store */}

        <Box width={"100%"}>
          <Heading
            as={"h2"}
            fontWeight={600}
            fontFamily={"sans-serif"}
            fontSize={"24px"}
            marginTop={{ base: "25px", md: "35px" }}
          >
            Winterwear Store
            <Text
              width={"48px"}
              pt={"4px"}
              borderBottom={"4px solid #faa619"}
            ></Text>
          </Heading>

          <Box
            display={"grid"}
            gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }}
            gap={"10px"}
            marginTop={{ base: "15px", md: "20px" }}
          >
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Desk-Banner1-29Nov22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Desk-Banner2-29Nov22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Desk-Banner3-29Nov22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Desk-Banner4-29Nov22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
          </Box>
        </Box>

        {/* Section 5 Trending Offers */}

        <Box width={"100%"}>
          <Heading
            as={"h2"}
            fontWeight={600}
            fontFamily={"sans-serif"}
            fontSize={"24px"}
            marginTop={{ base: "25px", md: "35px" }}
          >
            Trending Offers
            <Text
              width={"48px"}
              pt={"4px"}
              borderBottom={"4px solid #faa619"}
            ></Text>
          </Heading>

          <Box
            display={"grid"}
            gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }}
            gap={"10px"}
            marginTop={{ base: "15px", md: "20px" }}
          >
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner1-29Nov22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner2-29Nov22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner3-29Nov22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner4-29Nov22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner5-29Nov22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner6-16Dec22A.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner7-29Nov22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner8-29Nov22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
          </Box>
        </Box>

        {/* Section 6 Watches */}

        <Box width={"100%"}>
          <Heading
            as={"h2"}
            fontWeight={600}
            fontFamily={"sans-serif"}
            fontSize={"24px"}
            marginTop={{ base: "25px", md: "35px" }}
          >
            Watches
            <Text
              width={"48px"}
              pt={"4px"}
              borderBottom={"4px solid #faa619"}
            ></Text>
          </Heading>

          <Box width={"100%"} marginTop={{ base: "15px", md: "20px" }}>
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-UBERHP-GiftCard-13modblock-oneBythree-A-15Dec2022.gif"
              width={"100%"}
              height={"auto"}
              borderRadius={"10px"}
              cursor={"pointer"}
            />
          </Box>
        </Box>

        {/* Section 7 Season's Hottest Deals */}

        <Box width={"100%"}>
          <Heading
            as={"h2"}
            fontWeight={600}
            fontFamily={"sans-serif"}
            fontSize={"24px"}
            marginTop={{ base: "25px", md: "35px" }}
          >
            Season's Hottest Deals
            <Text
              width={"48px"}
              pt={"4px"}
              borderBottom={"4px solid #faa619"}
            ></Text>
          </Heading>

          <Box
            display={"grid"}
            gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }}
            gap={"10px"}
            marginTop={{ base: "15px", md: "20px" }}
          >
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner1-14Dec22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner2-15Dec22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner3-15Dec22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner4-14Dec22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner5-15Dec22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner6-15Dec22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner7-15Dec22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner8-15Dec22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
          </Box>
        </Box>

        {/* Section 8 The Premium Edit */}

        <Box width={"100%"}>
          <Heading
            as={"h2"}
            fontWeight={600}
            fontFamily={"sans-serif"}
            fontSize={"24px"}
            marginTop={{ base: "25px", md: "35px" }}
          >
            The Premium Edit
            <Text
              width={"48px"}
              pt={"4px"}
              borderBottom={"4px solid #faa619"}
            ></Text>
          </Heading>

          <Box
            display={"grid"}
            gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }}
            gap={"10px"}
            marginTop={{ base: "15px", md: "20px" }}
          >
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget22-Desk-Banner1-14Dec22.jpg"
              width={"100%"}
              height={"auto"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget22-Desk-Banner2-14Dec22.jpg"
              width={"100%"}
              height={"auto"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget22-Desk-Banner3-14Dec22.jpg"
              width={"100%"}
              height={"auto"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget22-Desk-Banner4-14Dec22.jpg"
              width={"100%"}
              height={"auto"}
            />
          </Box>
        </Box>

        {/* Section 9 Top Deals In */}

        <Box width={"100%"}>
          <Heading
            as={"h2"}
            fontWeight={600}
            fontFamily={"sans-serif"}
            fontSize={"24px"}
            marginTop={{ base: "25px", md: "35px" }}
          >
            The Premium Edit
            <Text
              width={"48px"}
              pt={"4px"}
              borderBottom={"4px solid #faa619"}
            ></Text>
          </Heading>

          <Tabs
            variant="soft-rounded"
            colorScheme="gray"
            marginTop={{ base: "15px", md: "20px" }}
          >
            <TabList>
              <Tab>Women</Tab>
              <Tab>Men</Tab>
              <Tab>Kids</Tab>
              <Tab>Shoes & Bags</Tab>
              <Tab>Beauty</Tab>
            </TabList>

            <TabPanels>
              <TabPanel
                display={"grid"}
                gridTemplateColumns={"repeat(2,1fr)"}
                gridTemplateRows={"auto"}
                gap={"15px"}
              >
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner1-14Dec22.jpg"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner2-14Dec22.jpg"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner3-14Dec22.jpg"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner4-14Dec22.jpg"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
              </TabPanel>

              <TabPanel
                display={"grid"}
                gridTemplateColumns={"repeat(2,1fr)"}
                gridTemplateRows={"auto"}
                gap={"15px"}
              >
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner1-14Dec22.jpg"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner2-14Dec22.jpg"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner3-14Dec22.jpg"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner4-14Dec22.jpg"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
              </TabPanel>

              <TabPanel
                display={"grid"}
                gridTemplateColumns={"repeat(2,1fr)"}
                gridTemplateRows={"auto"}
                gap={"15px"}
              >
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner3-14Dec22.jpg"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner1-14Dec22.jpg"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner2-14Dec22.jpg"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner4-14Dec22.jpg"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
              </TabPanel>

              <TabPanel
                display={"grid"}
                gridTemplateColumns={"repeat(2,1fr)"}
                gridTemplateRows={"auto"}
                gap={"15px"}
              >
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-S&B-Banner3-16Dec22.jpg"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-S&B-Banner1-16Dec22.jpg"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-S&B-Banner2-16Dec22.jpg"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-S&B-Banner4-16Dec22.jpg"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
              </TabPanel>

              <TabPanel
                display={"grid"}
                gridTemplateColumns={"repeat(2,1fr)"}
                gridTemplateRows={"auto"}
                gap={"15px"}
              >
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Beauty-Banner1-14Dec22.jpg"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Beauty-Banner2-14Dec22.jpg"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Beauty-Banner3-14Dec22.jpg"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
                <Image
                  src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Beauty-Banner4-14Dec22.jpg"
                  width={"100%"}
                  height={"auto"}
                  cursor={"pointer"}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        {/* Section 10 Big Brands Big Discounts */}

        <Box width={"100%"}>
          <Heading
            as={"h2"}
            fontWeight={600}
            fontFamily={"sans-serif"}
            fontSize={"24px"}
            marginTop={{ base: "25px", md: "35px" }}
          >
            The Premium Edit
            <Text
              width={"48px"}
              pt={"4px"}
              borderBottom={"4px solid #faa619"}
            ></Text>
          </Heading>

          <Box
            display={"grid"}
            gridTemplateColumns={{ base: "repeat(3,1fr)", md: "repeat(6,1fr)" }}
            gap={"10px"}
            marginTop={{ base: "15px", md: "20px" }}
          >
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner1-14Dec2022.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner5-14Dec2022.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner9-14Dec2022.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner2-14Dec2022.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner6-14Dec2022.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner10-14Dec2022.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner3-14Dec2022.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner7-14Dec2022.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner8-16Dec2022.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner11-16Dec2022.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner12-14Dec2022.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner4-14Dec2022.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
          </Box>
        </Box>

        {/* Section 11 Brands We Love*/}

        <Box width={"100%"}>
          <Heading
            as={"h2"}
            fontWeight={600}
            fontFamily={"sans-serif"}
            fontSize={"24px"}
            marginTop={{ base: "25px", md: "35px" }}
          >
            Brands We Love
            <Text
              width={"48px"}
              pt={"4px"}
              borderBottom={"4px solid #faa619"}
            ></Text>
          </Heading>

          <Box
            display={"grid"}
            gridTemplateColumns={{ base: "repeat(3,1fr)", md: "repeat(6,1fr)" }}
            gap={"10px"}
            marginTop={{ base: "15px", md: "20px" }}
          >
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner1-29Nov22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner2-29Nov22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner3-29Nov22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner4-15Dec22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner5-29Nov22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner6-29Nov22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner7-15Dec22A.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner8-16Dec22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner9-29Nov22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner10-15Dec22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner11-15Dec22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget19-Banner12-29Nov22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
          </Box>
        </Box>

        {/* Section 12 Value Picks */}

        <Box width={"100%"}>
          <Heading
            as={"h2"}
            fontWeight={600}
            fontFamily={"sans-serif"}
            fontSize={"24px"}
            marginTop={{ base: "25px", md: "35px" }}
          >
            Value Picks
            <Text
              width={"48px"}
              pt={"4px"}
              borderBottom={"4px solid #faa619"}
            ></Text>
          </Heading>

          <Box
            display={"grid"}
            gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }}
            gap={"10px"}
            marginTop={{ base: "15px", md: "20px" }}
          >
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner1-03Dec22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner2-03Dec22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner3-03Dec22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner4-03Dec22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner5-03Dec22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner6-03Dec22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner7-03Dec22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
            <Image
              src="https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner8-03Dec22.jpg"
              width={"100%"}
              height={"auto"}
              cursor={"pointer"}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;

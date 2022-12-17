import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position={"fixed"}  top={0} left={0} w={"100%"} zIndex={100}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link to={"/"}>
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              color={"black"}
              fontWeight={600}
              fontSize={{ base: "16.5px", md: "2xl" }}
              borderRadius={"5px"}
              px={{ base: 1, md: 2 }}
              bgGradient="linear-gradient(21deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mr={{ base: "6px", md: "0px" }}
            >
              Awake Fashion
            </Text>
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
          <Box display={{ base: "none", md: "flex" }} ml={5}>
            <Input
              variant="filled"
              placeholder="What Are You Looking For?"
              _placeholder={{ color: "gray.700" }}
              w={240}
            />
          </Box>
        </Flex>

        <Stack
          direction={"row"}
          spacing={{ base: 1, md: 6 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link to={"/"}>
            <Button
              fontSize={"18px"}
              fontWeight={600}
              variant={"link"}
              color={"black"}
            >
              Login
            </Button>
          </Link>
          <Link to={"/"}>
            <FiHeart size={24} color={"black"} />
          </Link>
          <Link to={"/basket"}>
            <AiOutlineShoppingCart size={24} color={"black"} />
          </Link>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link to={navItem.href}>
                <Text
                  p={2}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Text>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href }) => {
  return (
    <Link
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} to={child.href}>
                <Text py={0.5}>{child.label}</Text>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Women",
    children: [
      {
        label: "Ethnic & Fusion Wear",
        href: "/",
      },
      {
        label: "Western Wear",
        href: "/",
      },
      {
        label: "Lingerie/Sleepwear",
        href: "/",
      },
      {
        label: "SportsWear",
        href: "/",
      },
      {
        label: "Top Brands",
        href: "/",
      },
      {
        label: "Winter wear",
        href: "/",
      },
    ],
  },
  {
    label: "Men",
    children: [
      {
        label: "Topwear",
        href: "/",
      },
      {
        label: "Activewear",
        href: "/",
      },
      {
        label: "Innerwear",
        href: "/",
      },
      {
        label: "Bottomwear",
        href: "/",
      },
      {
        label: "Watches",
        href: "/",
      },
      {
        label: "Shoes",
        href: "/",
      },
      {
        label: "Activewear",
        href: "/",
      },
    ],
  },
  {
    label: "Kids",
    href: "/",
  },
  {
    label: "Shoes And Bags",
    href: "/",
  },
];

export default Navbar;

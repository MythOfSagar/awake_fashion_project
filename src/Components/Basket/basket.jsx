import { Box, Text, Button, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getbasketData,
  remove_BasketItem,
} from "../../redux/basket_Items/basket.action";
import BasketItem from "./basketItem";
import PriceCalculated from "./PriceCalculated";
import { useToast } from "@chakra-ui/react";

const Basket = () => {
  const isAuth = useSelector((store) => store.basketreducer.isAuth);
  const data = useSelector((store) => store.basketreducer.basket);

  const [basketData, setData] = useState([]);

  const navigate = useNavigate();

  const [quanityPrice, setquanityPrice] = useState(
    basketData.map((el) => {
      return { price: el.price, qty: 1, id: el.id };
    })
  );
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 0) {
      dispatch(getbasketData());
    }
    if (data.length === 0 || quanityPrice.length === 0) {
      setCount((prev) => prev + 1);
    }

    setData(data);

    setquanityPrice(
      basketData.map((el) => ({ price: el.price, qty: 1, id: el.id }))
    );

    console.log(basketData, quanityPrice);
    setSum(quanityPrice);
  }, [count]);

  const [totalPrice, setPrice] = useState(0);
  const [numberOfProducts, setnumOfPoducts] = useState(basketData.length);

  const changeTotal = (obb, arr) => {
    setquanityPrice(
      arr.map((el) => {
        if (obb.id === el.id) {
          return obb;
        } else {
          return el;
        }
      })
    );
    console.log(78, quanityPrice);
    let total = 0;
    let numP = 0;
    for (
      let v = 0;
      v <
      arr.map((el) => {
        if (obb.id === el.id) {
          return obb;
        } else {
          return el;
        }
      }).length;
      v++
    ) {
      total =
        total +
        arr.map((el) => {
          if (obb.id === el.id) {
            return obb;
          } else {
            return el;
          }
        })[v].price *
          arr.map((el) => {
            if (obb.id === el.id) {
              return obb;
            } else {
              return el;
            }
          })[v].qty;
      numP =
        numP +
        arr.map((el) => {
          if (obb.id === el.id) {
            return obb;
          } else {
            return el;
          }
        })[v].qty;
    }
    setnumOfPoducts(numP);
    setPrice(total);
  };
  const toast = useToast();
  const removeItem = (id) => {
    const bData = basketData.filter((item) => item.id !== id);
    toast({
      title: "Product Remove Successfully.",
      description: "Product Remove from Cart Successfully.",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
    dispatch(remove_BasketItem(bData, id));
    setData(bData);

    setSum(bData.map((el) => ({ price: el.price, qty: 1, id: el.id })));
    setquanityPrice(
      bData.map((el) => ({ price: el.price, qty: 1, id: el.id }))
    );
    console.log(quanityPrice);
  };

  const setSum = (arr) => {
    let total = 0;
    let numP = 0;
    for (let v = 0; v < arr.length; v++) {
      total = total + arr[v].price * arr[v].qty;
      numP = numP + arr[v].qty;
    }
    setnumOfPoducts(numP);
    setPrice(total);
  };

  if (isAuth === false) {
    navigate("/");
  }

  return (
    <>
      <Box padding={{ base: "15px", md: "30px", lg: "56px" }}>
        <Box
          width="100%"
          position={"fixed"}
          marginTop={{ base: "60px", md: "90px", lg: "56px" }}
          top="0"
          backgroundColor={"white"}
        >
          <Heading fontSize={{ base: "22px", md: "30px", lg: "30px" }}>
            Your Shopping Basket
          </Heading>
          <Heading fontSize={{ base: "20px", md: "27px", lg: "27px" }}>
            {numberOfProducts} Products
          </Heading>
        </Box>
        <Box display="flex">
          <Box
            width={{ lg: "55%" }}
            marginTop={{ base: "110px", md: "150px", lg: "80px" }}
            marginBottom={{ base: "90px", md: "90px", lg: "56px" }}
          >
            {basketData.map((item) => (
              <BasketItem
                key={item.id}
                removeItem={(id) => removeItem(id)}
                id={item.id}
                changedPrice={(obb) => changeTotal(obb, quanityPrice)}
                title={item.title}
                colour={item.color}
                size={item.size}
                price={item.price}
                imgSrc={item.images ? item.images[0] : item.img[0]}
              ></BasketItem>
            ))}
          </Box>
          <Box display={{ base: "none", md: "none", lg: "block" }}>
            <PriceCalculated price={totalPrice}></PriceCalculated>
          </Box>
        </Box>
        <Box
          display={{ base: "flex", md: "flex", lg: "none" }}
          width="100%"
          gap={{ base: "5", md: "10", lg: "56px" }}
          position={"fixed"}
          bottom="0"
          backgroundColor={"white"}
        >
          <Box textAlign={"center"}>
            <Text fontSize={{ base: "14", md: "19", lg: "56px" }}>Total</Text>
            <Heading>₹ {totalPrice}</Heading>
            <Text fontSize={{ base: "14", md: "19", lg: "56px" }}>
              Inclusive of all Taxes
            </Text>
          </Box>
          <Box height={"fit-content"}>
            <Link to="/shipping">
              <Button
                background={"orange.300"}
                color="whiteAlpha"
                width={{ base: "150px", md: "300px", lg: "56px" }}
                marginTop={{ base: "5", md: "7", lg: "56px" }}
                align="center"
                disabled={numberOfProducts === 0}
              >
                PROCEED
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Basket;

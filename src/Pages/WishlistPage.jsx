import React, { useState, useEffect, useRef } from "react";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";
import "./WishlistPage.css";
import img1 from "../Assets/AwakeFashionLogo.png";
import {
  FormControl,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalFooter,
  ModalContent,
  FormLabel,
  Input,
  Center,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteWishlist } from "../redux/Wishlist/Wishlist.actions";
import { addBasket } from "../redux/Basket/Basket.actions";
import axios from "axios";
import Footer from "../Components/Footer/Footer";

const getData = () => {
  return axios.get(`https://fashion-database-api.vercel.app/wishlist`);
};
const init = {
  pic: "",
  brand: "",
  category: "",
  price: 0,
  discount: 0,
};

const WishlistPage = () => {
  const [product, setProduct] = useState(init);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [token, setToken] = useState("");
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [wishlist, setWishlist] = useState([]);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    getData().then((res) => setWishlist(res.data));
  }, [wishlist]);

  const handleRemoveWishlist = (id) => {
    dispatch(deleteWishlist(id));
    toast({
      title: "Delete Success",
      description: "Your Product is removed from the Wishlist",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };
  const handleAddbasket = (item) => {
    dispatch(addBasket(item));
    toast({
      title: "Add to Cart Successfully",
      description: "Product added successfully",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  const handleChangeproduct = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };
  console.log(product);

  const handleSubmitproduct = () => {
    axios({
      method: "POST",
      url: "https://fashion-database-api.vercel.app/AdminSide",
      data: product,
    });
  };

  const handleLogin = () => {
    axios({
      method: "POST",
      url: `https://reqres.in/api/login`,
      data: loginDetails,
    })
      .then((res) => {
        setToken(res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const { email, password } = loginDetails;
  console.log(token);

  return (
    <div style={{ marginTop: "50px" }}>
      <div className="bar-top">
        <div>
          <ArrowBackIosNewTwoToneIcon></ArrowBackIosNewTwoToneIcon>
          <a href="\">My Account</a>
        </div>
        <div>
          {token === "" ? (
            <div>
              <Button
                onClick={onOpen}
                style={{
                  color: "white",
                  textDecoration: "none",
                  backgroundColor: "white",
                  color: "#051D40",
                  fontSize: "18px",
                  borderRadius: "25px",
                  marginTop: "1px",
                  marginLeft: "0px",
                  marginRight: "20px",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                  paddingTop: "5px",
                  paddingBottom: "0px",
                }}
              >
                {token === "" ? "Admin SignIn" : "Welcome Admin"}
              </Button>

              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay
                  bg="blackAlpha.300"
                  backdropFilter="blur(10px) hue-rotate(90deg)"
                />
                <ModalContent
                  style={{
                    width: "50%",
                    margin: "auto",
                    backgroundColor: "white",
                    marginTop: "70px",
                    padding: "5px 5px",
                  }}
                >
                  <ModalCloseButton
                    style={{
                      marginLeft: "450px",
                      border: "none",
                      backgroundColor: "white",
                    }}
                  />
                  <img
                    style={{
                      borderRadius: "25px",
                      marginLeft: "20px",
                      marginBottom: "-70px",
                    }}
                    src={img1}
                    alt="picasa"
                    width="150px"
                  />
                  <br></br>
                  <ModalHeader
                    style={{
                      fontSize: "30px",
                      lineHeight: "35px",
                      fontWeight: "600",
                      paddingRight: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    Sign in to Admin panel of Awake Fashion
                  </ModalHeader>

                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel
                        style={{
                          fontSize: "20px",
                          color: "#051D40",
                          marginTop: "1px",
                          marginLeft: "10px",
                        }}
                      >
                        Email Address
                      </FormLabel>
                      <Input
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                        style={{
                          padding: "5px 55px",
                          borderRadius: "25px",
                          fontSize: "20px",
                          marginTop: "10px",
                        }}
                      ></Input>
                    </FormControl>
                    <FormControl>
                      <FormLabel
                        style={{
                          fontSize: "20px",
                          color: "#051D40",
                          marginTop: "15px",
                          marginLeft: "10px",
                        }}
                      >
                        Password
                      </FormLabel>
                      <Input
                        style={{
                          padding: "5px 55px",
                          borderRadius: "25px",
                          fontSize: "20px",
                          marginTop: "10px",
                          marginLeft: "0px",
                        }}
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleChange}
                      ></Input>
                    </FormControl>
                    <Center>
                      <Button
                        style={{
                          color: "white",
                          backgroundColor: "#051D40",
                          padding: "5px 35px",
                          marginTop: "35px",
                          borderRadius: "25px",
                          fontSize: "18px",
                        }}
                        onClick={handleLogin}
                      >
                        LOGIN
                      </Button>
                    </Center>
                  </ModalBody>

                  <ModalFooter>
                    <Center>
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "12px",
                          marginTop: "0px",
                          marginRight: "80px",
                        }}
                      >
                        Welcome to the Admin panel
                        <br></br>
                        This page will redirect you to admin portal
                      </p>
                    </Center>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          ) : (
            <div>
              <Button
                onClick={onOpen}
                style={{
                  color: "white",
                  textDecoration: "none",
                  backgroundColor: "white",
                  color: "#051D40",
                  fontSize: "18px",
                  borderRadius: "25px",
                  marginTop: "15px",
                  marginLeft: "80px",
                  marginRight: "20px",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                {token === "" ? "Admin SignIn" : "Welcome Admin"}
              </Button>

              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay
                  bg="blackAlpha.300"
                  backdropFilter="blur(10px) hue-rotate(90deg)"
                />
                <ModalContent
                  style={{
                    width: "30%",
                    margin: "auto",
                    backgroundColor: "white",
                    marginTop: "50px",
                    padding: "25px 35px",
                  }}
                >
                  <ModalCloseButton
                    style={{
                      marginLeft: "450px",
                      border: "none",
                      backgroundColor: "white",
                    }}
                  />
                  <img
                    style={{ borderRadius: "25px", marginLeft: "0px" }}
                    src={img1}
                    alt="picasa"
                    width="150px"
                  />
                  <br></br>
                  <ModalHeader
                    style={{
                      fontSize: "30px",
                      lineHeight: "35px",
                      fontWeight: "600",
                      marginTop: "-70px",
                    }}
                  >
                    Admin Login Token : {token}
                  </ModalHeader>

                  <ModalBody pb={6}>
                    <br></br>
                    <br></br>

                    <Input
                      style={{
                        fontsize: "25px",
                        padding: "0px 65px",
                        borderRadius: "25px",
                        textAlign: "left",
                        marginTop: "-50px",
                      }}
                      placeholder="image source"
                      onChange={handleChangeproduct}
                      type="text"
                      name="pic"
                      value={product.pic}
                    />

                    <br></br>
                    <br></br>

                    <Input
                      style={{
                        fontsize: "25px",
                        padding: "0px 65px",
                        borderRadius: "25px",
                        textAlign: "left",
                        marginTop: "-100px",
                      }}
                      type="text"
                      placeholder="Brand"
                      onChange={handleChangeproduct}
                      name="brand"
                      value={product.brand}
                    />

                    <Input
                      style={{
                        fontsize: "25px",
                        padding: "0px 65px",
                        borderRadius: "25px",
                        textAlign: "left",
                        marginTop: "10px",
                      }}
                      type="text"
                      placeholder="Category"
                      onChange={handleChangeproduct}
                      name="category"
                      value={product.category}
                    />

                    <Input
                      style={{
                        fontsize: "25px",
                        padding: "0px 65px",
                        borderRadius: "25px",
                        textAlign: "left",
                        marginTop: "10px",
                      }}
                      type="number"
                      placeholder="Price"
                      onChange={handleChangeproduct}
                      name="price"
                      value={product.price}
                    />

                    <Input
                      style={{
                        fontsize: "25px",
                        padding: "0px 65px",
                        borderRadius: "25px",
                        textAlign: "left",
                        marginTop: "10px",
                      }}
                      type="number"
                      placeholder="Discount"
                      onChange={handleChangeproduct}
                      name="discount"
                      value={product.discount}
                    />

                    <br></br>
                    <br></br>
                    <Button
                      style={{
                        backgroundColor: "#051D40",
                        color: "white",
                        padding: "10px 45px",
                        borderRadius: "25px",
                        marginLeft: "80px",
                      }}
                      colorScheme="teal"
                      mr={3}
                      onClick={function () {
                        handleSubmitproduct();
                        onClose();
                      }}
                    >
                      Add Product
                    </Button>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </div>
          )}
        </div>
      </div>
      <div className="main-top">
        <div>
          <h1>Favourites</h1>
          <p>View your most wanted products.</p>
        </div>
        <div>
          <FavoriteTwoToneIcon
            style={{ fontSize: "100px", color: "white" }}
          ></FavoriteTwoToneIcon>
        </div>
      </div>
      <div className="main-wishlist">
        <p className="remove-btn">All Favourite Items</p>
        <div className="wishlist-in1">
          {wishlist.map((item) => (
            <div key={item.id} className="inner-list">
              <div>
                <img src={item.images[0]} width="80px" />
              </div>
              <div className="div2">
                <p
                  style={{
                    padding: "0px 50px 0px 0px",
                    textAlign: "left",
                    marginLeft: "50px",
                    color: "silver",
                    fontSize: "16px",
                    lineHeight: "5px",
                  }}
                >
                  {item.brand}
                </p>
                <p
                  style={{
                    padding: "0px 50px 0px 0px",
                    textAlign: "left",
                    marginLeft: "50px",
                    fontSize: "16px",
                  }}
                >
                  {item.title}
                </p>
                <button onClick={() => handleRemoveWishlist(item.id)}>
                  Remove
                </button>
              </div>
              <div className="div3">
                <p>
                  <strike>&#8377; {item.off_price}</strike> &#8377; {item.price}
                </p>
                <button onClick={() => handleAddbasket(item)}>
                  Add To Basket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bottom-main">
        <p>
          Manage your account across all participating brands from one place.
        </p>
        <div className="bottom">
          <img
            src="https://i1.lmsin.net/website_images/in/logos/logo-lifestyle.svg"
            width={100}
          />
          <img
            src="https://i1.lmsin.net/website_images/in/logos/logo-max.svg"
            width={80}
          />
          <img
            src="https://i1.lmsin.net/website_images/in/logos/logo-homecentre.svg"
            width={250}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WishlistPage;

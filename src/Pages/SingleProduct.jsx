import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShareIcon from "@mui/icons-material/Share";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import "./SingleProduct.css";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import axios from "axios";
import { addBasket } from "../redux/Basket/Basket.actions";
import { addWishlist } from "../redux/Wishlist/Wishlist.actions";

const getData = (id) => {
  if (id < 24) {
    return axios.get(`https://fashion-database-api.vercel.app/Mens/${id}`);
  } else if (25 < id < 64) {
    return axios.get(`https://fashion-database-api.vercel.app/Women/${id}`);
  }
};

const SingleProduct = () => {
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const [data, setData] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    getData(id).then((res) => setData(res.data));
  }, []);

  const handleAddBasket = (data) => {
    dispatch(addBasket(data));
    toast({
      title: "Add to Cart",
      description: "Successfully Added to Cart",
      status: "success",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
  };

  const handleAddFav = (data) => {
    console.log("add to fav");
    dispatch(addWishlist(data));
    toast({
      title: "Add to Favourite",
      description: "Successfully Added to Favourite",
      status: "success",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
  };

  console.log("data", typeof data);
  console.log("img", data);
  const {
    title,
    price,
    gender,
    description,
    category,
    color,
    off_price,
    discount,
    images,
    ratings,
    brand,
  } = data;

  return (
    <div style={{ marginTop: "80px" }}>
      <Navbar />
      <div>
        <p
          style={{
            alignText: "left",
            fontSize: "20px",
            marginLeft: "7%",
            fontWeight: "500",
          }}
        >
          {title}
        </p>

        <div className="top-main">
          <div>
            <div className="images">
              <div>
                <img
                  className="img1"
                  src={
                    (images && images[0]) ||
                    "https://media.tenor.com/Tu0MCmJ4TJUAAAAC/load-loading.gif"
                  }
                  alt="image1"
                  width="420px"
                />
              </div>
              <div>
                <img
                  className="img2"
                  src={
                    (images && images[1]) ||
                    "https://media.tenor.com/Tu0MCmJ4TJUAAAAC/load-loading.gif"
                  }
                  alt="image2"
                  width="420px"
                />
              </div>
              <div>
                {" "}
                <img
                  className="img3"
                  src={
                    (images && images[2]) ||
                    "https://media.tenor.com/Tu0MCmJ4TJUAAAAC/load-loading.gif"
                  }
                  alt="image3"
                  width="420px"
                />
              </div>
              <div>
                <img
                  className="img4"
                  src={
                    (images && images[3]) ||
                    "https://media.tenor.com/Tu0MCmJ4TJUAAAAC/load-loading.gif"
                  }
                  alt="image4"
                  width="420px"
                />
              </div>
            </div>
          </div>
          <div>
            <div style={{ lineHeight: "1.2em", marginLeft: "0px" }}>
              <h1
                style={{
                  color: "#F25139",
                  textAlign: "left",
                  paddingLeft: "15px",
                }}
              >
                <sup
                  style={{
                    color: "#F25139",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  &#8377;
                </sup>
                {price}
                <span
                  style={{ color: "grey", fontSize: "15px", fontWeight: "400" }}
                >
                  {" "}
                  Inclusive of all taxes
                </span>
              </h1>
              <p>
                <strike style={{ color: "grey" }}>&#8377; {off_price}</strike>{" "}
                save &#8377;{off_price - price} ({discount}%)
              </p>
              <p style={{ color: "orange" }}>
                <u>Free shipping on all orders</u>
              </p>
              <img
                className="color-img"
                src={images && images[1]}
                alt="image1"
                style={{
                  border: "2px solid orange",
                  margin: "10px 150px 10px 20px",
                }}
                width="40px"
                height="50px"
                align="left"
              />
              <p
                style={{
                  color: "grey",
                  fontSize: "15px",
                  fontWeight: "400",
                  marginTop: "100px",
                }}
              >
                Color :{" "}
                <span
                  style={{
                    color: "black",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  {color}
                </span>
              </p>

              <div className="size-main">
                <div>
                  <p>Size : </p>
                  <>
                    <p onClick={onOpen}>
                      <u style={{ cursor: "pointer" }}>Size Guide</u>
                    </p>

                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <div
                          style={{
                            position: "absolute",
                            top: "00px",
                            left: "-130px",
                            width: "1500px",
                          }}
                        >
                          <img
                            onClick={onClose}
                            src="https://thesocietypages.org/socimages/files/2012/03/15.png"
                          />
                        </div>
                      </ModalContent>
                    </Modal>
                  </>
                </div>
                <div id="size">
                  <input
                    className="radioinput"
                    type="radio"
                    id="xs"
                    value="Extra Small"
                    name="size"
                    placeholder="XS"
                    onChange={(e) => setSize(e.target.value)}
                  />
                  <label className="radiolabel" onclick="xs()" for="xs">
                    XS
                  </label>
                  <input
                    className="radioinput"
                    type="radio"
                    id="s"
                    value="Small"
                    name="size"
                    placeholder="S"
                    onChange={(e) => setSize(e.target.value)}
                  />
                  <label className="radiolabel" onclick="s()" for="s">
                    S
                  </label>
                  <input
                    className="radioinput"
                    type="radio"
                    id="m"
                    value="Medium"
                    name="size"
                    placeholder="M"
                    onChange={(e) => setSize(e.target.value)}
                  />
                  <label className="radiolabel" onclick="m()" for="m">
                    M
                  </label>
                  <input
                    className="radioinput"
                    type="radio"
                    id="l"
                    value="Lage"
                    name="size"
                    placeholder="L"
                    onChange={(e) => setSize(e.target.value)}
                  />
                  <label className="radiolabel" onclick="l()" for="l">
                    L
                  </label>
                  <input
                    className="radioinput"
                    type="radio"
                    id="xl"
                    value="Extra Large"
                    name="size"
                    placeholder="XL"
                    onChange={(e) => setSize(e.target.value)}
                  />
                  <label className="radiolabel" onclick="xl()" for="xl">
                    XL
                  </label>
                </div>
              </div>
              <button
                className="addtobasket"
                onClick={() => handleAddBasket(data)}
              >
                ADD TO BASKET
              </button>
            </div>
            <div className="fav-section">
              <div onClick={() => handleAddFav(data)}>
                <LoyaltyIcon></LoyaltyIcon>
                <p>Add to Favourites</p>
              </div>
              <div>
                <ShareIcon></ShareIcon>
                <p>Share</p>
              </div>
            </div>
            <hr></hr>

            <div className="delivery-section">
              <button
                style={{
                  color: "#EF5350",
                  backgroundColor: "#FFF4F4",
                  fontSize: "12px",
                  padding: "10px 30px",
                  border: "none",
                }}
              >
                PROMOTION OFFER
              </button>
              <p
                style={{
                  marginTop: "10px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                }}
              >
                Shop for Rs. 2,999 & Get 12% Off. Code - SAVE12 | Shop for Rs.
                2,499 & Get 10% Off. Code - BF10 | Shop for Rs. 1,999 & Get 8%
                Off. Code - SAVE8 Browse promotion
              </p>
              <hr></hr>
              <div style={{ paddingTop: "1em" }}>
                <h4>
                  <StorefrontIcon></StorefrontIcon>&nbsp;Click & Collect
                </h4>
                <p>
                  Order this product now and collect it from a store of your
                  choice.{" "}
                  <span style={{ color: "orange" }}>
                    <u>Learn more</u>{" "}
                  </span>{" "}
                </p>
              </div>
              <div>
                <h4>
                  <ReplyAllIcon></ReplyAllIcon>&nbsp;10 days easy return policy
                </h4>
              </div>
              <div>
                <h4>
                  <CalendarMonthIcon></CalendarMonthIcon>&nbsp;Pay in
                  installments
                </h4>
                <p>
                  Pay in easy installments on orders of ₹ 3,000 or more.
                  Available for select banks.
                  <span style={{ color: "orange" }}>
                    <u>Learn more</u>{" "}
                  </span>{" "}
                </p>
              </div>
              <div style={{ marginBottom: "40px" }}>
                <h4>
                  <LocalShippingIcon></LocalShippingIcon>&nbsp;When will I
                  receive my order?
                </h4>
                <input
                  style={{
                    fontSize: "14px",
                    padding: "9px 55px",
                    border: "1px solid silver",
                    marginRight: "10px",
                  }}
                  type="number"
                  placeholder="Enter your Pincode"
                />

                <button
                  style={{
                    backgroundColor: "orange",
                    color: "white",
                    fontSize: "16px",
                    border: "1px solid orange",
                    padding: "8px 15px",
                  }}
                  onClick={() => alert("DELIVERY AVAILABLE IN YOUR CITY")}
                >
                  Check
                </button>
              </div>
              <hr></hr>
            </div>
            <div className="product-overview">
              <h4>
                <b>Overview</b>
              </h4>
              <p style={{ lineHeight: "1.2em" }}>{description}</p>
              <ul>
                <li>Brand : {brand}</li>
                <li>Categories : {category}</li>
                <li>Color : {color}</li>
                <li>Gender : {gender}</li>
                <li>Fabric : Cotton</li>
                <li>Closure : Pullover</li>
                <li>Fit : Regular</li>
                <li>Care Instructions : Hand Wash</li>
                <li>Hemline : Straight</li>
                <li>Occasion : Casual</li>
                <li>
                  Manufactured By : Lifestyle International Pvt Ltd, 77 Degree
                  Town Centre, Building No. 3, West Wing ,Off HAL Airport Road,
                  Yamlur, Bangalore-560037
                </li>
                <li>
                  For Consumer Complaints Contact : Manager Commercial,
                  Lifestyle International Pvt. Ltd. 1800-123-1555
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="may-like-parent">
          <h1>You may also like</h1>
          <div className="may-like">
            <div class="box">
              <img src="https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000011483687-Red-TeaRose-1000011483687_01-1200.jpg" />
              <LoyaltyIcon
                class="btn"
                onClick={() => handleAddFav(data)}
              ></LoyaltyIcon>
              <p>
                &#8377; 699{" "}
                <span>
                  &#8377; <strike>999</strike>
                </span>
              </p>
              <p>FAME FOREVER Men Printed Crew Neck Regular Fit Sweatshirt</p>
            </div>
            <div class="box">
              <img src="https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000011581522-Yellow-Yellow-1000011581522_01-1200.jpg" />
              <LoyaltyIcon
                class="btn"
                onClick={() => handleAddFav(data)}
              ></LoyaltyIcon>
              <p>
                &#8377; 1049{" "}
                <span>
                  &#8377; <strike>1499</strike>
                </span>
              </p>
              <p>
                SmileyWorld Men Graphic Printed Regular Fit Hooded Sweatshirt
              </p>
            </div>
            <div class="box">
              <img src="https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010673895-Green-Mint-1000010673895_01-2100.jpg" />
              <LoyaltyIcon
                class="btn"
                onClick={() => handleAddFav(data)}
              ></LoyaltyIcon>
              <p>
                &#8377; 734{" "}
                <span>
                  &#8377; <strike>1049</strike>
                </span>
              </p>
              <p>SmileyWorld Women Printed Crew Neck Cropped Sweatshirt</p>
            </div>
            <div class="box">
              <img src="https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012114200-Red-Red-1000012114200_01-2100.jpg" />
              <LoyaltyIcon
                class="btn"
                onClick={() => handleAddFav(data)}
              ></LoyaltyIcon>
              <p>
                &#8377; 4899{" "}
                <span>
                  &#8377; <strike>7999</strike>
                </span>
              </p>
              <p>SKECHERS Men Textured Goodyear Sole Lace-Up Shoes</p>
            </div>
          </div>
        </div>
        <div className="may-like-parent">
          <h1>Customers Also Viewed</h1>
          <div className="may-like">
            <div class="box">
              <img src="https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000009854981-Var10-Red-Wine-1000009854981-Var10_01-1200.jpg" />
              <LoyaltyIcon
                class="btn"
                onClick={() => handleAddFav(data)}
              ></LoyaltyIcon>
              <p>
                &#8377; 2099{" "}
                <span>
                  &#8377; <strike>2999</strike>
                </span>
              </p>
              <p>FORCA Men Solid Denim Jacket</p>
            </div>
            <div class="box">
              <img src="https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000011721938-Black-Black-1000011721938_01-1200.jpg" />
              <LoyaltyIcon
                class="btn"
                onClick={() => handleAddFav(data)}
              ></LoyaltyIcon>
              <p>
                &#8377; 999{" "}
                <span>
                  &#8377; <strike>1299</strike>
                </span>
              </p>
              <p>CODE Women Solid Knee-Length Shrug</p>
            </div>
            <div class="box">
              <img src="https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000011721951-Green-Olive-1000011721951_01-1200.jpg" />
              <LoyaltyIcon
                class="btn"
                onClick={() => handleAddFav(data)}
              ></LoyaltyIcon>
              <p>
                &#8377; 1483{" "}
                <span>
                  &#8377; <strike>1599</strike>
                </span>
              </p>
              <p>CODE Women Textured Longline Shrug</p>
            </div>
            <div class="box">
              <img src="https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000011474011-Beige-Khaki-1000011474011_01-1200.jpg" />
              <LoyaltyIcon
                class="btn"
                onClick={() => handleAddFav(data)}
              ></LoyaltyIcon>
              <p>
                &#8377; 2309{" "}
                <span>
                  &#8377; <strike>3399</strike>
                </span>
              </p>
              <p>DENIMIZE Men Solid Full Sleeves Casual Jacket</p>
            </div>
          </div>
        </div>
        <div className="review-box">
          <h1>Reviews</h1>
          <div className="review-tab">
            <div className="review-tab1">
              <RateReviewOutlinedIcon
                style={{
                  fontSize: "50px",
                  fontWeight: "100",
                }}
              ></RateReviewOutlinedIcon>
            </div>
            <div style={{ marginTop: "10px" }}>
              <span>&nbsp;What do you think about this product ?</span>
            </div>
            <div style={{ marginLeft: "50px" }}>
              <button
                style={{
                  color: "orange",
                  border: "1px solid orange",
                  backgroundColor: "#ECEDEB",
                  padding: "15px 50px",
                  fontSize: "18px",
                }}
              >
                WRITE A REVIEW
              </button>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;

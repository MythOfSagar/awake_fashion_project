import React, { useState, useEffect } from "react";
import "./Products.css";
// import arrow from "../Womens/wpassert/arrow.png";
import Eachproduct from "./Eachproduct";
import axios from "axios";
import Footer from "../Components/Footer/Footer";

const Products = () => {
  const [url, setUrl] = useState(
    "https://lifestylestore-api-.up.railway.app/beauty/?page=1&limit=48"
  );
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}`)
      .then((res) => {
        const val = res.data.beauty;
        setProducts(val);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [url]);
  const category = [
    {
      image:
        "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/beauty-bath&body1.jpg",
      title: "Bath & Body",
    },
    {
      image:
        "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/beauty-essentials.jpg",
      title: "Essentials",
    },
    {
      title: "Eyes",
    },
    {
      image:
        "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/beauty-face.jpg",
      title: "Face",
    },
    {
      image:
        "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/beauty-fragrance.jpg",
      title: "Fragrances",
    },
    {
      image:
        "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/beauty-lips.jpg",
      title: "Lips",
    },
    {
      title: "Make-Up Face",
    },
    {
      title: "Make-Up Kit",
    },
    {
      image:
        "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/beauty-menfragrance.jpg",
      title: "Men Frangrance",
    },
    {
      image:
        "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/beauty-mengrooming.jpg",
      title: "Men Grooming",
    },
    {
      title: "Nails",
    },
    {
      image:
        "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/beauty-skincare.jpg",
      title: "Skin Care",
    },
    {
      image:
        "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS_SubCatimg/beauty-toolsandaccessories.jpg",
      title: "Tools Accessories",
    },
  ];
  // const [btn,setBtn] = useState("btn")
  // const products=[
  //   {
  //     image:"https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000007601619-1000007601634_01-2100.jpg",
  //     price:1049,
  //     Dprice:734,
  //     product:"FAME FOREVER Men Polo T-shirt",
  //     Discount:"30% OFF",
  //     Soffer:"2 AT 50% OFF",
  //     Sdiscount:50
  //   },
  //   {
  //       image:"https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011309233-1000011309232_01-2100.jpg",
  //       price:1049,
  //     Dprice:734,
  //     product:"BOSSINI Women Striped Knit Top",
  //     Discount:"30% OFF",
  //     Soffer:"2 AT 50% OFF",
  //     Sdiscount:50
  //   },
  //   {
  //       image:"https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000007091961-1000007091960_01-2100.jpg",
  //       price:1049,
  //     Dprice:734,
  //     product:"BOSSINI Women Striped Knit Top",
  //     Discount:"30% OFF",
  //     Soffer:"2 AT 50% OFF",
  //     Sdiscount:50
  //   },
  //   {
  //       image:"https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000004411315-1000004411314_01-2100.jpg",
  //       price:1049,
  //     Dprice:734,
  //     product:"BOSSINI Women Striped Knit Top",
  //     Discount:"30% OFF",
  //     Soffer:"2 AT 50% OFF",
  //     Sdiscount:50
  //   }
  // ]
  return (
    <>
    <div className="wp" style={{marginTop:"40px"}}>
      {/* <Navbar/> */}
      <div className="head">
        <div>
          <div className="navroute">
            <li>
              <a href="">Home</a>
            </li>
            <li>{/* <img src={arrow} className="arrow" alt="" /> */}</li>
            <li>
              <a href="">Beauty</a>
            </li>
          </div>
          <h1 className="section">Beauty</h1>
          <div className="category">
            {category.map((item, index) => {
              if (index === 2 || index === 6 || index === 7 || index === 10) {
                return (
                  <div className="singlebox">
                    <a href="">
                      <span>
                        <div className="ct" style={{ padding: "12px" }}>
                          {item.title}
                        </div>
                      </span>
                    </a>
                  </div>
                );
              } else {
                return (
                  <div className="singlebox">
                    <a href="">
                      <span>
                        <div className="cimg">
                          <img className="ci" src={item.image} alt="" />
                        </div>
                        <div className="ct">{item.title}</div>
                      </span>
                    </a>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>

      <div className="products">
        {products.map((item, index) => (
          <Eachproduct item={item} id={index} />
        ))}
      </div>
      {/* <Footer/> */}
    </div>
    <Footer></Footer></>
  );
};

export default Products;

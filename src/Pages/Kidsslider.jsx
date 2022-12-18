import React, { Component } from "react";
import Slider from "react-slick";
import './Crousel.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Kidsslider extends Component {
    render() {
      var settings = {

      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 1000,
      pauseOnHover: true,

      // ===========================================

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // infinite: true,
                // dots: true
              }
            },
            {
              breakpoint: 870,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // initialSlide: 2
              }
            },
            {
              breakpoint: 560,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      return (
        <div className="main">
          <Slider {...settings}>
            <div><img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Common_Desktop-1-14Dec2022.gif" alt="" /></div>
            <div><img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner2-desktop-Kids-14Dec2022.jpg" alt="" /></div>
            <div><img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner3-desktop-Kids-14Dec2022.jpg" alt="" /></div>
            <div><img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner4-desktop-Kids-14Dec2022.jpg" alt="" /></div>
            <div><img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner5-desktop-Kids-14Dec2022.jpg" alt="" /></div>
            <div><img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner6-desktop-Kids-14Dec2022.jpg" alt="" /></div>
          </Slider>
        </div>
      );
    }
  }





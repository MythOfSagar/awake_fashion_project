import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Image } from "@chakra-ui/react";

export default function SliderShow1() {
  return (
    <Box maxWidth="100%" margin="auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            alt="1"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner1-14Dec2022.gif"
            width={"100%"}
            height={"auto"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="2"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner6-14Dec2022.gif"
            width={"100%"}
            height={"auto"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="3"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner2-14Dec2022.jpg"
            width={"100%"}
            height={"auto"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="4"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner4-14Dec2022.jpg"
            width={"100%"}
            height={"auto"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="4"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner3-14Dec2022.jpg"
            width={"100%"}
            height={"auto"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="4"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner3-14Dec2022.jpg"
            width={"100%"}
            height={"auto"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="4"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner5-14Dec2022.jpg"
            width={"100%"}
            height={"auto"}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

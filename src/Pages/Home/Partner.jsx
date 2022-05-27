import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/images/logo1.png";
import image2 from "../../assets/images/logo2.png";
import image3 from "../../assets/images/logo3.png";
import image4 from "../../assets/images/logo4.png";
import image5 from "../../assets/images/logo5.png";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
const Partner = () => {
  return (
    <div className="lg:px-16 mx-auto md:px-12 sm:px-8 px-4">
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 320px
          100: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          769: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          900: {
            slidesPerView: 5,
            spaceBetween: 70,
          },
        }}
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        // pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="my-10">
            <img src={image1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="my-10">
            <img src={image2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="my-10">
            <img src={image3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="my-10">
            <img src={image4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="my-10">
            <img src={image5} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partner;

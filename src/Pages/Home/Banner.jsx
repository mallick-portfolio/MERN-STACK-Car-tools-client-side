import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Autoplay, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Commonbtn from "../Shared/Commonbtn.jsx";
import { Link } from "react-router-dom";

const Banner = () => {
  const items = [
    {
      _id: 1,
      subtitle: "Discount Up To 40% Off",
      headtitle: "Best Quality",
      headsubtitle: "Gardening Tools",
      btntext: "Shop Now",
      img: "https://prestashop.mahardhi.com/MT07/greensgarden/01/modules/mt_homeslider/images/banner-1.jpg",
    },
    {
      _id: 2,
      subtitle: "Shipping & Cash On Delivery Available",
      headtitle: "Latest Garden",
      headsubtitle: "Gardening Tools",
      btntext: "Shop Now",
      img: "https://prestashop.mahardhi.com/MT07/greensgarden/01/modules/mt_homeslider/images/banner-2.jpg",
    },
    {
      _id: 3,
      subtitle: "Discount Up To 40% Off",
      headtitle: "Best Quality",
      headsubtitle: "Gardening Tools",
      btntext: "Shop Now",
      img: "https://prestashop.mahardhi.com/MT07/greensgarden/01/modules/mt_homeslider/images/banner-1.jpg",
    },
    {
      _id: 4,
      subtitle: "Shipping & Cash On Delivery Available",
      headtitle: "Latest Garden",
      headsubtitle: "Gardening Tools",
      btntext: "Shop Now",
      img: "https://prestashop.mahardhi.com/MT07/greensgarden/01/modules/mt_homeslider/images/banner-2.jpg",
    },
    {
      _id: 5,
      subtitle: "Discount Up To 40% Off",
      headtitle: "Best Quality",
      headsubtitle: "Gardening Tools",
      btntext: "Shop Now",
      img: "https://prestashop.mahardhi.com/MT07/greensgarden/01/modules/mt_homeslider/images/banner-1.jpg",
    },
  ];
  return (
    <div>
      <Swiper
        autoplay={{ delay: 5000 }}
        
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        
      >
        {items.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="relative">
              <div>
                <img src={item.img} alt="" />
              </div>
              <div class="absolute top-1/2 -translate-y-1/2 l-0 w-1/2 lg:pl-16 md:pl-8 sm:pl-4 pl-2">
                <h2 className="text-3xl">{item.subtitle}</h2>
                <h1 className="text-5xl my-5">
                  {item.headtitle}
                  <br />
                  {item.headsubtitle}
                </h1>
                <Link to={"/login"}><Commonbtn>{item.btntext}</Commonbtn></Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

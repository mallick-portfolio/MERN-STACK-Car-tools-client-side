import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Commonbtn from "../Shared/Commonbtn.jsx";
import { Link } from "react-router-dom";
/* 
https://i.ibb.co/qdpvqqy/slider-1.webp
https://i.ibb.co/6B35QM1/slider-2.webp
*/
const Banner = () => {
  const items = [
    {
      _id: 1,
      subtitle: "Discount Up To 40% Off",
      headtitle: "WHEELS & TIRES ",
      headsubtitle: "COLLECTIONS",
      btntext: "Shop Now",
      img: "https://i.ibb.co/qdpvqqy/slider-1.webp",
    },
    {
      _id: 2,
      subtitle: "NEW TECHNOLOGY & BUILD",
      headtitle: "WHEELS & TIRES",
      headsubtitle: "COLLECTIONS",
      btntext: "Shop Now",
      img: "https://i.ibb.co/6B35QM1/slider-2.webp",
    },
    {
      _id: 3,
      subtitle: "Discount Up To 40% Off",
      headtitle: "WHEELS & TIRES ",
      headsubtitle: "COLLECTIONS",
      btntext: "Shop Now",
      img: "https://i.ibb.co/qdpvqqy/slider-1.webp",
    },
    {
      _id: 4,
      subtitle: "NEW TECHNOLOGY & BUILD",
      headtitle: "WHEELS & TIRES",
      headsubtitle: "COLLECTIONS",
      btntext: "Shop Now",
      img: "https://i.ibb.co/6B35QM1/slider-2.webp",
    },
    {
      _id: 5,
      subtitle: "Discount Up To 40% Off",
      headtitle: "WHEELS & TIRES ",
      headsubtitle: "COLLECTIONS",
      btntext: "Shop Now",
      img: "https://i.ibb.co/qdpvqqy/slider-1.webp",
    },
  ];
  return (
    <div className="relative" >
      <Swiper
        autoplay={{ delay: 5000 }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        loop={true}
        pagination={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="relative text-white">
              <div>
                <img src={item.img} alt="" />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 l-0 w-1/2 lg:pl-24 md:pl-24 sm:pl-16 pl-2">
                <h2 className="text-sm sm:text-xl md:text-2xl lg:text-3xl">
                  {item.subtitle}
                </h2>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl sm:my-1 md:my-2 lg:my-4 ">
                  {item.headtitle}
                  <br />
                  {item.headsubtitle}
                </h1>
                <Link to={"/shop"}>
                  <Commonbtn>{item.btntext}</Commonbtn>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="prev hidden sm:block text-center text-neutral leading-relaxed sm:leading-10 text-xl sm:text-2xl absolute top-1/2 left-4 -translate-y-1/2 z-10 rounded-full w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-2 border-neutral cursor-pointer hover:ring hover:ring-offset-2 duration-500 ring-neutral">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="next  hidden sm:block text-center text-neutral leading-relaxed sm:leading-10 text-xl sm:text-2xl absolute top-1/2 right-4 -translate-y-1/2 z-10 rounded-full w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-2 border-neutral cursor-pointer hover:ring hover:ring-offset-2 duration-500 ring-neutral">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;

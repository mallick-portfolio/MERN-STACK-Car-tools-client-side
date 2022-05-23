import React from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import ReviewCard from "./ReviewCard.jsx";
import SectionTitle from "../Shared/SectionTitle.jsx";

const Reviews = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      rating: 4,
      des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      rating: 4.4,
      des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      rating: 5,
      des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
    },
    {
      _id: 4,
      name: "Winson Herry",
      rating: 2.5,
      des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
    },
    {
      _id: 5,
      name: "Winson Herry",
      rating: 5,
      des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
    },
    {
      _id: 6,
      name: "Winson Herry",
      rating: 4.2,
      des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
    },
  ];
  return (
    <section className="container lg:py-20">
      <SectionTitle title={"Our User Reviews"} />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 320px
          100: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          769: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 70,
          },
        }}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;

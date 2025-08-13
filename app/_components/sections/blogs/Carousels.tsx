"use client";

import React from "react";
import BlogCard from "../../cards/BlogCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BlogType } from "./type";

const Carousel = ({ data }: { data: BlogType[] | null }) => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={20}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="!w-full mySwiper"
      >
        {data?.length &&
          data?.length > 0 &&
          data?.map((post, index) => (
            <SwiperSlide key={index} className="lg:!w-[23.5%] !w-[90%]">
              <BlogCard key={index} {...post} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Carousel;

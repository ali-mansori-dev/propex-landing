"use client";

import React from "react";
import { ChallengesType } from "./type";
import PlanCard from "../../cards/PlanCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const RenderContent = ({ data }: { data: ChallengesType[] | undefined }) => {
  return (
    <div>
      <div className="w-full">
        <Swiper
          modules={[Navigation]}
          slidesPerView={"auto"}
          spaceBetween={12}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="!w-full mySwiper !select-none"
        >
          {data?.map((plan: ChallengesType, index: number) => (
            <SwiperSlide key={index} className="lg:!w-[24.1%] !w-[90%]">
              <PlanCard index={index} {...plan} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RenderContent;

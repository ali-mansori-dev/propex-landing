"use client";

import React from "react";
import { ChallengesType } from "./type";
import PlanCard from "../../cards/planCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft } from "lucide-react";

const RenderContent = ({ data }: { data: ChallengesType[] | undefined }) => {
  return (
    <div>
      <div className="w-full">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={12}
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 slide on small screens
            },
            1024: {
              slidesPerView: 4, // 3 slides on large screens
            },
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="!w-full mySwiper !select-none"
        >
          {data?.map((plan: ChallengesType, index: number) => (
            <SwiperSlide key={index} className="w-full">
              <PlanCard index={index} {...plan} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="lg:hidden w-full flex justify-center items-center gap-3 mt-4">
        <button
          className="custom-prev border border-white/60 hover:bg-white/20 p-2 rounded-xl shadow transition"
          aria-label="previous"
        >
          <ChevronLeft className="w-6 h-6  rotate-180" />
        </button>
        <button
          className="custom-next border border-white/60 hover:bg-white/20 p-2 rounded-xl shadow transition"
          aria-label="next"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default RenderContent;

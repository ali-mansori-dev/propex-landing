"use client";

import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft } from "lucide-react";
import dynamic from "next/dynamic";

const SelfiePlayer = dynamic(() => import("./selfiePlayer"), { ssr: false });

const videos = [
  "https://static.propex.fund/company/clients/1.MP4",
  "https://static.propex.fund/company/clients/2.MP4",
  "https://static.propex.fund/company/clients/1.MP4",
  "https://static.propex.fund/company/clients/2.MP4",
  "https://static.propex.fund/company/clients/1.MP4",
  "https://static.propex.fund/company/clients/2.MP4",
  "https://static.propex.fund/company/clients/1.MP4",
  "https://static.propex.fund/company/clients/2.MP4",
  "https://static.propex.fund/company/clients/1.MP4",
  "https://static.propex.fund/company/clients/2.MP4",
];

export default function VideoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

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
        loop={true}
        onSlideChange={(swiper) => {
          // وقتی تغییر اسلاید اتفاق می‌افته
          setActiveIndex(swiper.realIndex);
        }}
        onSwiper={(swiper) => {
          setActiveIndex(swiper.realIndex); // مقدار اولیه
        }}
        centeredSlides={true} // اسلاید وسطی رو مرکز قرار می‌ده
        className="!w-full mySwiper  flex items-center justify-center !select-none"
        style={{ padding: "90px 0" }}
      >
        {videos.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`${
              index === activeIndex ? "!z-30" : "opacity-25"
            } !w-max`}
          >
            <div
              className={`w-[70vw] lg:w-[270px] h-[480px] ${
                index === activeIndex ? "scale-110" : ""
              }`}
            >
              <SelfiePlayer src={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full flex justify-center items-center gap-3 mt-4">
        <button
          className="custom-prev border border-white/60 hover:bg-white/20 p-2 rounded-full shadow transition"
          aria-label="previus"
        >
          <ChevronLeft className="w-6 h-6  rotate-180" />
        </button>
        <button
          className="custom-next border border-white/60 hover:bg-white/20 p-2 rounded-full shadow transition"
          aria-label="next"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}

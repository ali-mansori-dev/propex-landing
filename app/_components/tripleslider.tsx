"use client";

import Container from "@/components/shared/container";
import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const items = [
  "/banners/accessibility-testing-webinar.webp",
  "/banners/Live-session-banner-Apr-2nd.png",
  "/banners/accessibility-testing-webinar.webp",
  "/banners/Live-session-banner-Apr-2nd.png",
  "/banners/accessibility-testing-webinar.webp",
  "/banners/Live-session-banner-Apr-2nd.png",
];

const Tripleslider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Container>
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2000 }}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          onSlideChange={(swiper) => {
            // وقتی تغییر اسلاید اتفاق می‌افته
            setActiveIndex(swiper.realIndex);
          }}
          onSwiper={(swiper) => {
            setActiveIndex(swiper.realIndex); // مقدار اولیه
          }}
          centeredSlides={true} // اسلاید وسطی رو مرکز قرار می‌ده
          className="!w-full mySwiper !py-[80px] lg:!py-[130px] flex items-center justify-center !select-none"
        >
          {items.map((item, index) => (
            <SwiperSlide
              key={index}
              className={`${index === activeIndex ? "!z-30" : "opacity-25"}`}
            >
              <img
                className={`rounded-sm text-center transition-all duration-300
                ${
                  index === activeIndex
                    ? "text-white scale-[3] lg:scale-200 z-20 shadow-lg"
                    : "z-0 text-black shadow"
                }`}
                src={item}
                alt="d"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <Container>
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
      </Container>
    </>
  );
};

export default Tripleslider;

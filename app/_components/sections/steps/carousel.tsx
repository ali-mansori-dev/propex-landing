import React from "react";
import Money from "@/public/images/money.png";
import Review from "@/public/images/reveiw.png";
import Recipt from "@/public/images/recipt.png";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export const Carousel = () => {
  const t = useTranslations("steps");

  const images = [Review, Money, Recipt];
  const steps = t.raw("items") as {
    title: string;
    description: string;
  }[];

  return (
    <>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 slide on small screens
          },
          1024: {
            slidesPerView: 3, // 3 slides on large screens
          },
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="!w-full mySwiper !select-none !py-6"
      >
        {steps?.map((value, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center gap-2 border-2 border-teal-500 rounded-xl p-4 py-8 hover:bg-gray-100/5 transition duration-300 relative hover:-translate-y-1 hover:shadow-lg shadow-teal-500/30">
              <span className="bg-teal-600/10 text-teal-600 rounded-full px-3 py-1 mb-2 text-sm font-yekan-bold absolute top-4 right-4">
                {t("step")} {index + 1}
              </span>
              <Image
                src={images[index]}
                alt={value?.title}
                className="w-[160px] h-[160px] object-contain mb-4"
              />
              <h1 className="text-xl font-yekan-bold mb-4">{value?.title}</h1>
              <p className="text-sm text-gray-400">{value?.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="lg:hidden w-full flex justify-center items-center gap-3 mb-4">
        <button
          className="custom-prev border border-white/60 hover:bg-white/20 p-2 rounded-xl shadow transition"
          aria-label="previus"
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
    </>
  );
};

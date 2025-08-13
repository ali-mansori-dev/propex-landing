import React from "react";
import Money from "@/public/images/money.png";
import Review from "@/public/images/reveiw.png";
import Recipt from "@/public/images/recipt.png";
import Image from "next/image";
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
        slidesPerView={"auto"}
        spaceBetween={20}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="!w-full mySwiper !select-none !py-6"
      >
        {steps?.map((value, index) => (
          <SwiperSlide key={index} className="lg:!w-[32%] !w-[90%]">
            <div className="flex flex-col items-center justify-center h-[303px] gap-2 border-2 border-teal-500 rounded-xl p-4 py-8 hover:bg-gray-100/5 transition duration-300 relative hover:-translate-y-1 hover:shadow-lg shadow-teal-500/30">
              <span className="bg-teal-600/10 text-teal-600 rounded-full px-3 py-1 mb-2 text-sm font-yekan-bold absolute top-4 right-4">
                {t("step")} {index + 1}
              </span>
              <Image
                src={images[index]}
                alt={value?.title}
                className="w-[160px] h-[160px] object-contain mb-4"
              />
              <h1 className="text-xl font-yekan-bold mb-4">{value?.title}</h1>
              <p className="text-sm text-gray-400 text-center">{value?.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

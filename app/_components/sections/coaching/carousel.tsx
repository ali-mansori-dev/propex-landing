"use client";

import React from "react";
import fainacialmanage from "@/public/images/fainacialmanage.png";
import technical from "@/public/images/technical.png";
import basics from "@/public/images/basics.png";
import psycology from "@/public/images/psycology.png";
import CoachingCard from "../../cards/coachingCard";
import { useTranslations } from "next-intl";
import { ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Carousel = () => {
  const t = useTranslations("coaching");

  const steps = [
    {
      type: "card",
      step: 1,
      title: t("benefits.basic_start_account"),
      description: t("benefits.basic_start_account_description"),
      image: basics,
    },
    {
      type: "card",
      step: 2,
      title: t("benefits.psychology"),
      description: t("benefits.psychology_description"),
      image: psycology,
    },
    {
      type: "card",
      step: 3,
      title: t("benefits.capital_management"),
      description: t("benefits.capital_management_description"),
      image: fainacialmanage,
    },
    {
      type: "card",
      step: 4,
      title: t("benefits.analyse_tecknical"),
      description: t("benefits.analyse_tecknical_description"),
      image: technical,
    },
  ];
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={20}
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
        className="mySwiper !py-[50px] !select-none"
      >
        {steps.map((step, index) => (
          <SwiperSlide key={index}>
            <CoachingCard
              title={step.title!}
              description={step.description!}
              image={step.image!}
              imageclass=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="lg:hidden w-full flex justify-center items-center gap-3 mt-4">
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
    </div>
  );
};

export default Carousel;

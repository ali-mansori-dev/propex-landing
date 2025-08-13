"use client";

import React from "react";
import fainacialmanage from "@/public/images/fainacialmanage.png";
import technical from "@/public/images/technical.png";
import basics from "@/public/images/basics.png";
import psycology from "@/public/images/psycology.png";
import CoachingCard from "../../cards/CoachingCards";
import { useTranslations } from "next-intl";
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
        slidesPerView={"auto"}
        spaceBetween={20}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="mySwiper !py-[50px] !select-none"
      >
        {steps.map((step, index) => (
          <SwiperSlide key={index} className="lg:!w-[23%] !w-[85%]">
            <CoachingCard
              title={step.title!}
              description={step.description!}
              image={step.image!}
              imageclass=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

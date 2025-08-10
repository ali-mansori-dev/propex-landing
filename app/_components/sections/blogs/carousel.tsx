"use client";

import React from "react";
import blogimage from "@/public/blog.png";
import BlogCard from "../../cards/blogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft } from "lucide-react";

const Carousel = () => {
  const blogPosts = [
    {
      title: "5 اشتباه رایج در تحلیل تکنیکال",
      date: "10 خرداد 1404",
      description:
        "در این مقاله به بررسی 5 اشتباه مهمی می‌پردازیم که بسیاری از تریدرها هنگام استفاده از تحلیل تکنیکال مرتکب می‌شوند و راهکارهایی برای جلوگیری از آن‌ها ارائه می‌دهیم.",
      imageUrl: blogimage,
    },
    {
      title: "روانشناسی ترید: چطور احساسات را کنترل کنیم؟",
      date: "12 خرداد 1404",
      description:
        "روانشناسی بازار یکی از کلیدی‌ترین مباحث برای موفقیت در ترید است. در این مقاله یاد می‌گیریم چگونه ترس، طمع و استرس را در معاملات کنترل کنیم.",
      imageUrl: blogimage,
    },
    {
      title: "آموزش استراتژی پرایس اکشن برای معامله‌گران روزانه",
      date: "15 خرداد 1404",
      description:
        "پرایس اکشن یکی از محبوب‌ترین روش‌های تحلیل بازار است. در این آموزش کاربردی یاد می‌گیریم چگونه با استفاده از رفتار قیمت تصمیم‌گیری کنیم.",
      imageUrl: blogimage,
    },
    {
      title: "آموزش استراتژی پرایس اکشن برای معامله‌گران روزانه",
      date: "15 خرداد 1404",
      description:
        "پرایس اکشن یکی از محبوب‌ترین روش‌های تحلیل بازار است. در این آموزش کاربردی یاد می‌گیریم چگونه با استفاده از رفتار قیمت تصمیم‌گیری کنیم.",
      imageUrl: blogimage,
    },
  ];
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
            slidesPerView: 4, // 3 slides on large screens
          },
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="!w-full mySwiper"
      >
        {blogPosts?.map((post, index) => (
          <SwiperSlide key={index}>
            <BlogCard
              key={index}
              title={post.title}
              date={post.date}
              description={post.description}
              imageUrl={post.imageUrl}
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
    </>
  );
};

export default Carousel;

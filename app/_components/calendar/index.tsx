"use client";

import React, { useState } from "react";
import DayEvent from "./day-event";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState(10);

  interface Event {
    id: number;
    title: string;
  }

  interface Day {
    day: string;
    date: number;
    month: string;
    events: Event[];
  }

  const days: Day[] = [
    {
      day: "شنبه",
      date: 10,
      month: "تیر",
      events: [{ id: 12, title: "وبینار مدیریت سرمایه" },{ id: 12, title: "وبینار مدیریت سرمایه" }],
    },
    { day: "یکشنبه", date: 11, month: "تیر", events: [] },
    {
      day: "دوشنبه",
      date: 12,
      month: "تیر",
      events: [{ id: 12, title: "وبینار مدیریت سرمایه" }],
    },
    {
      day: "سه شنبه",
      date: 13,
      month: "تیر",
      events: [{ id: 12, title: "وبینار مدیریت سرمایه" }],
    },
    {
      day: "چهارشنبه",
      date: 14,
      month: "تیر",
      events: [{ id: 12, title: "وبینار مدیریت سرمایه" }],
    },
    { day: "پنجشنبه", date: 15, month: "تیر", events: [] },
    { day: "جمعه", date: 16, month: "تیر", events: [] },
  ];

  return (
    <section className="w-full flex flex-col gap-4">
      <div className="w-full bg-white p-4 rounded-lg">
        <Swiper
          modules={[Navigation]}
          autoplay={{ delay: 2000 }}
          slidesPerView={3}
          spaceBetween={10}
          dir="rtl"
          breakpoints={{
            640: {
              slidesPerView: 3, // 1 slide on small screens
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 3, // 2 slides on medium screens
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 7, // 3 slides on large screens
              spaceBetween: 14,
            },
          }}
          navigation
          className="!w-full mySwiper"
        >
          {days.map((item, index) => (
            <SwiperSlide key={index} onClick={() => setSelectedDay(item.date)}>
              <div className={`w-full flex flex-col border ${selectedDay === item.date?`border-teal-500 border-[2px]`:`border-gray-300`} rounded-lg transition-all duration-300`}>
                <div
                  className={`w-full bg-gray-100 border-b border-gray-300 cursor-pointer rounded-t-lg ${
                    selectedDay === item.date
                      ? `text-teal-500`
                      : `text-gray-500`
                  }  flex flex-col gap-2 items-center justify-center p-4`}
                >
                  <span className="text-sm">{item.day}</span>
                  <span className="text-3xl font-yekan-bold">{item.date}</span>
                  <span className="text-sm">{item.month}</span>
                </div>
                <div className="p-3 min-h-[250px] flex flex-col gap-2">
                  {item?.events?.map((event, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full bg-teal-100 text-teal-600 p-2 border-r-4 border-teal-600"
                      >
                        <p className="text-sm mb-2 font-yekan-bold line-clamp-1">{event?.title}</p>
                        <p className="text-xs text-teal-500">18:00 تا 20:00</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <DayEvent />
      <DayEvent />
    </section>
  );
};

export default Calendar;

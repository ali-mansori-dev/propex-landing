import Container from "@/components/shared/container";
import React from "react";
import grid from "@/public/CircleGroups.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Benefits from "../_components/sections/benefits";
import { Metadata } from "next";
import UserCard from "../_components/cards/UserCards";
// import PropexSlogan from "../_components/sections/PropexSlogan";

export const metadata: Metadata = {
  title: "پراپکس | درباره ما",
  description: "پراپکس شرکت پیشرو در جذب سرمایه و",
};

const AboutUs = () => {
  const t = useTranslations("about_us");

  const clients = [
    {
      name: "محمد امینی",
      title: "مدرس پراپکس",
      description: "مدرس پراپکس در حوزه مدیریت سرمایه و معاملات سودده",
      image: "/client-2.png", // مسیر صحیح عکس را جایگزین کنید
    },
    {
      name: "محمد امینی",
      title: "مدرس پراپکس",
      description: "مدرس پراپکس در حوزه مدیریت سرمایه و معاملات سودده",
      image: "/client-2.png",
    },
    {
      name: "محمد امینی",
      title: "مدرس پراپکس",
      description: "مدرس پراپکس در حوزه مدیریت سرمایه و معاملات سودده",
      image: "/client-2.png",
    },
  ];

  return (
    <section className="w-full bg-gray-900">
      <Container className="py-8 flex !flex-col items-center">
        <div className="h-14"></div>
        <section className="w-full h-[60vh] min-h-[600px] max-h-[800px] relative">
          <Container className="py-8 h-full flex flex-col items-center">
            <div className="w-full h-full flex flex-col items-center justify-center text-center">
              <h1 className="text-2xl lg:text-5xl font-bold mb-8 font-yekan-black">
                {t("title")}{" "}
                <span className="text-teal-500">{t("primary_title")}</span>
              </h1>
              <h6 className="text-lg lg:text-2xl font-yekan-bold text-gray-300 mb-12">
                {t("subtitle")}
              </h6>
              <p className="text-base lg:w-2/3 leading-loose mx-auto text-gray-400">
                {t("desc")}
              </p>
            </div>
          </Container>
          <Image
            src={grid}
            alt="PatternTop"
            className="absolute top-0 left-0 right-0 z-0 w-full h-full object-cover opacity-55"
          />
          <div className="bgCustomer top-[-1%] end-1/2 -translate-x-1/2 z-0 opacity-70"></div>
        </section>
        <div className="h-36"></div>
        <div className="text-center text-3xl mb-4 font-yekan-bold">
          چرا <span className="text-teal-500">پراپکس</span>؟
        </div>
        <div className="h-6"></div>
        <Benefits />
        <div className="h-36"></div>
        <div className="w-full text-start text-4xl mb-4 font-yekan-bold">
          تیم ما
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 justify-around items-center mt-12">
          {clients.map((client, index) => (
            <UserCard key={index} {...client} />
          ))}
        </div>
        <div className="h-36"></div>
        <div className="text-center text-4xl mb-4 font-yekan-bold">
          ماموریت ما
        </div>
        <p className="text-center mt-2 leading-loose text-base text-gray-300">
          مأموریت پراپکس فراهم‌کردن بستری امن، شفاف و حرفه‌ای برای رشد و حمایت
          از معامله‌گران توانمند است؛ با سرمایه‌گذاری بر توانایی‌ها و پشتیبانی
          در مسیر توسعه فردی و حرفه‌ای آن‌ها.
        </p>
        <div className="h-36"></div>
        <div className="text-center text-4xl mb-4 font-yekan-bold">
          چشم انداز ما
        </div>
        <p className="text-center mt-2 leading-loose text-base text-gray-300">
          ما در پراپکس به دنبال ساخت آینده‌ای هستیم که در آن، هر فرد مستعد بدون
          محدودیت سرمایه یا منابع، بتواند در بازارهای جهانی بدرخشد. هدف ما
          تبدیل‌شدن به بزرگ‌ترین اکوسیستم حمایت از تریدرهای حرفه‌ای در سطح منطقه
          است.
        </p>
        <div className="h-36"></div>
      </Container>
    </section>
  );
};

export default AboutUs;

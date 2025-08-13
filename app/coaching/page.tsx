import React from "react";
import Container from "@/components/shared/container";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Calendar, MoveLeft } from "lucide-react";
import grid from "@/public/GridFlatPattern.svg";
import { AnimationButton } from "@/components/animation-button";
import EventCalendar from "../_components/calendar";
import TitleBadge from "../_components/titleBadge";
import Tripleslider from "../_components/tripleslider";
import { Metadata } from "next";
import { RequestSection } from "./request_section";
import coaching from "@/public/coaching/coaching.png";
import management from "@/public/coaching/management.png";
import psychology from "@/public/coaching/psychology.png";
import review from "@/public/coaching/review.png";
import { SampleVideo } from "./sample_video";
import UserCard from "../_components/cards/UserCards";

export const metadata: Metadata = {
  title: "پراپکس | کوچینگ",
  description: "پراپکس شرکت پیشرو در جذب سرمایه و",
};

const Page = () => {
  const t = useTranslations("coaching");

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
  ];

  return (
    <section className="w-full bg-gray-900">
      <Container className="py-8 flex !flex-col items-center pt-[65px] lg:pt-[85px] overflow-hidden relative">
        <section className="w-full h-[60vh] min-h-[600px] max-h-[800px] relative">
          <div className="w-full h-full flex flex-col items-center justify-center text-center relative z-20">
            <h1 className="text-2xl lg:text-4xl font-bold mb-6 lg:mb-10 font-yekan-black">
              {t("subtitle")}
            </h1>
            <h6 className="text-lg lg:text-2xl font-yekan-bold mb-6 lg:mb-16">
              {t("our_teacher")}{" "}
              <span className="text-teal-500">{t("propex")}</span>
              {t("teacher_description")}
            </h6>
            <p className="mb-4 text-gray-400 text-sm lg:text-lg">
              {t("description")}
            </p>
            <p className="text-gray-400 text-sm lg:text-lg">
              {t("second_description")}
            </p>
          </div>
          <Image
            src={grid}
            alt="PatternTop"
            className="absolute top-0 left-0 right-0 z-0 w-full h-full object-cover !opacity-[15%]"
          />
          <Image
            src={coaching}
            alt="coaching_image"
            className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] absolute top-[10%] start-[10%] float-animation"
          />
          <Image
            src={management}
            alt="management_image"
            className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] absolute top-[10%] end-[10%] float-animation"
          />
          <Image
            src={psychology}
            alt="management_image"
            className="w-[50px] h-[70px] lg:w-[100px] lg:h-[120px] absolute bottom-[10%] start-[10%] float-animation"
          />
          <Image
            src={review}
            alt="management_image"
            className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] absolute bottom-[10%] end-[10%] float-animation"
          />
        </section>
        <h5 className="mx-auto font-2xl lg:text-3xl font-yekan-bold mb-6">
          وبینار های آموزشی
        </h5>
        <Tripleslider />
        <h5 className="w-full text-center text-3xl font-yekan-bold mb-8 mt-36 leading-loose">
          {t("our_teacher")}{" "}
          <span className="text-teal-500">{t("propex")}</span>
        </h5>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 justify-around items-center">
          {clients.map((client, index) => (
            <UserCard key={index} {...client} />
          ))}
        </div>
        <p className="text-sm lg:text-base leading-loose text-gray-200 text-center lg:mx-24 mt-8 mb-8">
          {t("desc")}
        </p>
        <AnimationButton className="">
          عضویت کاملا رایگان <MoveLeft />
        </AnimationButton>
        <div className="h-[150px]"></div>
        <RequestSection />
        <div className="h-[150px]"></div>
        <div className="py-12">
          <TitleBadge
            title="تقویم محتوایی کوچینگ"
            icon={<Calendar size={24} />}
          />
        </div>
        <EventCalendar />
        <div className="h-[120px]"></div>
        <div className="mt-20 mb-12">
          <h3 className="text-lg lg:text-2xl font-yekan-bold">
            {t("weibnar_example")}
          </h3>
        </div>
        <SampleVideo />
        <div className="h-[120px]"></div>
      </Container>
    </section>
  );
};

export default Page;

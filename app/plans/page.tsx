import React from "react";
import Plans from "../_components/sections/challenges";
import Currency1 from "@/public/currency/1221.png";
import Currency2 from "@/public/currency/1232.png";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "پراپکس | چالش ها",
  description: "پراپکس شرکت پیشرو در جذب سرمایه و",
};

const Index = () => {
  return (
    <section className="w-full relative">
      <div className="h-36"></div>
      <Plans />
      <div className="h-40"></div>
      <Image
        src={Currency1}
        alt="coaching_image"
        className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] absolute top-[8%] lg:top-[15%] start-[10%] lg:start-[20%] float-animation"
      />{" "}
      <Image
        src={Currency2}
        alt="coaching_image"
        className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] absolute top-[8%] lg:top-[15%] end-[10%] lg:end-[20%] float-animation"
      />
    </section>
  );
};

export default Index;

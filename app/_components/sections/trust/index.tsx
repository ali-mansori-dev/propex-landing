"use client";

import PlanetScene from "@/components/PlanetScene";
import Container from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { MoveUpLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Trust = () => {
  return (
    <Container className="">
      <div className="relative w-full bg-gradient-to-l from-teal-700 to-cyan-600 p-8 inline-flex flex-col lg:flex-row gap-y-5 items-center justify-between rounded-3xl">
        <div className="absolute top-0 left-0 bottom-0 right-0 inset-0 z-0">
          <PlanetScene />
        </div>
        <div className="flex flex-col gap-2 z-10">
          <h3 className="text-2xl text-center lg:text-start font-yekan-bold mb-4">
            چرا باید به <span className="text-teal-300">پراپکس</span> اعتماد کرد
            ؟
          </h3>
          <p className="text-sm text-center lg:text-start">
            پراپکس با تکیه بر شفافیت، تجربه تخصصی و رضایت صدها کاربر، به عنوان
            یک پلتفرم مطمئن در مسیر رشد و توسعه شخصی شما ایستاده است. ...
          </p>
        </div>
        <Link href={"about_us"} className="z-30">
          <div className="w-max h-max relative rounded-2xl overflow-hidden p-0.5 bg-[#0DE4D6]">
            <div className="button-motion" />
            <Button className="rounded-xl w-max py-6 lg:py-6 px-6 lg:px-8 text-sm lg:text-lg text-white dark:text-[#070F25] font-yekan-bold bg-[#0de4d679] hover:bg-[#0de4d679] z-20 relative  backdrop-blur backdrop-saturate">
              ادامه مطلب
              <span className="">
                <MoveUpLeft size={58} />
              </span>
            </Button>
          </div>
        </Link>
      </div>
    </Container>
  );
};
export default Trust;

"use client";

import Container from "@/components/shared/container";
import { useTranslations } from "next-intl";
import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveLeftIcon } from "lucide-react";
import { Carousel } from "./carousel";

const Steps = () => {
  const t = useTranslations("steps");

  return (
    <section className={`w-full py-8 relative`}>
      <Container className="flex !flex-col items-center justify-center gap-4">
        <h1 className="text-2xl lg:text-4xl font-yekan-bold mb-16 text-center">
          {t("title")}
        </h1>
        <Carousel />
        <Link href={"/coaching"}>
          <div className="w-max h-max relative rounded-2xl overflow-hidden p-0.5 bg-[#0DE4D6]">
            <div className="button-motion" />
            <Button className="rounded-xl w-max py-6 lg:py-8 px-6 lg:px-10 text-lg lg:text-xl text-white dark:text-[#070F25] font-yekan-bold bg-[#0de4d679] hover:bg-[#0de4d679] z-20 relative  backdrop-blur backdrop-saturate">
              {t("cta_text")}
              <span className="">
                <MoveLeftIcon size={58} />
              </span>
            </Button>
          </div>
        </Link>
      </Container>
    </section>
  );
};

export default Steps;

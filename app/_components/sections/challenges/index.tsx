import Container from "@/components/shared/container";
import { useTranslations } from "next-intl";
import React, { Suspense } from "react";
import { Contents } from "./contents";
import CircleGroups from "@/public/CircleGroups.svg";
import Image from "next/image";
import PlanetScence from "../../planetScence";
import { Particles } from "@/components/ui/Particles";

const Plans = () => {
  const t = useTranslations("challenges");

  return (
    <section className="w-full py-12 relative rounded-3xl">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        refresh
      />
      <Container className="!flex-col relative !overflow-visible z-10">
        <div className="text-2xl text-center lg:text-5xl mb-8 font-yekan-bold  text-gray-800 dark:text-white">
          {t("title")}
          <span className="text-teal-500"> {t("propex")}</span>
        </div>
        <div className="text-base text-center lg:text-xl text-gray-800 dark:text-white mb-16">
          {t("subtitle")}
        </div>
        <Suspense fallback={<>Loading...</>}>
          <Contents />
        </Suspense>
        <div className="bgCustomer-blue-dark start-1/2 translate-x-1/2 top-[-5%]"></div>
        <div className="bgCustomer-dark start-[-50%] top-[35%]"></div>
        <div className="bgCustomer-amber-dark end-[-50%] bottom-[-5%]"></div>
        <Image
          src={CircleGroups}
          alt="groupcircle"
          className="start-1/2 end-1/2 top-[-20%] lg:top-[10%] absolute lg:!w-[200%] h-[90%] object-contain translate-x-1/2 z-[3]"
        />
      </Container>
      <PlanetScence />
    </section>
  );
};

export default Plans;

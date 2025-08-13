"use client";

import { MoveUpLeftIcon } from "lucide-react";
import Container from "@/components/shared/container";
import { useTranslations } from "next-intl";
import VerticalInfiniteSlider from "./benefitsnaviagation";
import PlanetScene from "@/components/PlanetScene";
import AnimationBG from "./animationBG";
import TrustPilot from "./trustPilot";
import { AnimationButton } from "@/components/animation-button";
import InvestorCard from "./investorCard";
import Link from "next/link";
import { ScrollProgress } from "@/components/ui/ScrollAnimation";
import { Meteors } from "@/components/ui/Metors";
import { options } from "./options";

const Herosection = () => {
  const t = useTranslations();

  const panel_base_api = "https://panel.propex.fund/";

 

  return (
    <section
      dir="rtl"
      className="w-full flex flex-col bg-[#070F25] relative overflow-hidden h-[99vh] min-h-[650px] max-h-[800px] lg:min-h-[800px] lg:max-h-[850px] 3xl:h-[85vh]"
    >
      <div className="ltr">
        <Meteors number={4} />
      </div>

      <ScrollProgress />
      <div className="absolute top-0 left-0 bottom-0 right-0 inset-0 z-[5]">
        <PlanetScene />
        <AnimationBG />
      </div>
      <Container className="!flex-row justify-between items-center h-full gap-x-20 z-10 !overflow-visible overflow-y-hidden relative pt-[65px] lg:pt-[85px]">
        <div className="w-full h-full lg:w-[65%] flex flex-col justify-center">
          <p className="flex w-max border-b border-gray-700/40 border-opacity-10 mb-2 lg:mb-2 font-bold">
            {t("hero_section.our_risk")}،{" "}
            <span className="text-[#0DE4D6] ms-2">
              {t("hero_section.your_profit")}
            </span>
          </p>
          <h2 className="w-full lg:w-[80%] gap-2 text-3xl lg:text-[2.45rem] xl:mb-7 font-bold font-yekan-black leading-relaxed lg:leading-[4.2rem] mb-4 lg:mb-5 text-white">
            <span>{t("hero_section.ambitions_desc")}</span>{" "}
            <span className="bg-gradient-text bg-clip-text text-transparen  text-[#0DE4D6]">
              {t("hero_section.ambitions_desc_highlith")}
            </span>{" "}
            {t("hero_section.and")}{" "}
            <span className="bg-gradient-text bg-clip-text text-transparen text-[#0DE4D6]">
              {t("hero_section.ambitions_desc_highlith2")}
            </span>
          </h2>
          <h6 className="text-lg lg:text-xl mb-8 lg:mb-14 text-white">
            {t("hero_section.industry_leading")}
          </h6>
          <div className="w-full flex gap-4 flex-wrap mb-12">
            <div className="w-full grid grid-cols-4 lg:flex flex-row gap-2 lg:gap-10 flex-wrap ">
              {options?.map((item, index) => (
                <div key={index} className="flex flex-col gap-1">
                  {item?.icon}
                  <span className="text-sm lg:text-base font-yekan-bold mt-4 lg:mt-6 text-white">
                    {item?.title}
                  </span>
                  <span className="w-full text-xs lg:text-sm text-gray-400">
                    {item?.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col gap-3 lg:gap-4 justify-center lg:justify-start">
            <Link href={`${panel_base_api}`} target="_blank">
              <AnimationButton>
                {t("navbar.get_start")}
                <span className="">
                  <MoveUpLeftIcon strokeWidth={2} size={58} />
                </span>
              </AnimationButton>
            </Link>

            <TrustPilot />
          </div>
        </div>
        <div className="hidden lg:flex w-[45%] flex-row-reverse gap-5 items-center float-animation relative">
          <div className="flex flex-col gap-5">
            <InvestorCard
              name={"احمد احمدی"}
              amount={36000}
              challengeBalance={3000}
              country={"Spain"}
              accountType={
                <span className="text-yellow-700 font-yekan-bold">بلوغ</span>
              }
            />
            <InvestorCard
              name={"علی توازنی"}
              amount={16000}
              challengeBalance={5000}
              country={"English"}
              accountType={
                <span className="font-yekan-bold" style={{ color: "silver" }}>
                  جوانه
                </span>
              }
            />
          </div>
          <InvestorCard
            name={"میلاد احمدی"}
            amount={10000}
            challengeBalance={10000}
            country={"Netherland"}
            accountType={
              <span className="text-yellow-700 font-yekan-bold">بلوغ</span>
            }
          />
        </div>
        <div className="bgCustomer top-[-40%] end-0"></div>
        <div className="bgCustomer bottom-[-40%] start-0"></div>
        <div className="bgCustomer-white top-0 start-[-18%] -translate-x-9/12 -translate-y-1/2 w-[60px] h-[120px] rotate-45"></div>
      </Container>
      <VerticalInfiniteSlider />
    </section>
  );
};
export default Herosection;

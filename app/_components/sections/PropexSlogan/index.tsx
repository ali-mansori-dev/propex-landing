import React from "react";
import BgCustome from "@/public/bg-customer.svg";
import BgCustomeLight from "@/public/bg-customer-light.svg";
import Container from "@/components/shared/container";
import Image from "next/image";
import { useTranslations } from "next-intl";

const PropexSlogan = () => {
    const t = useTranslations("slogan");

  return (
    <section className={`w-full py-8 relative`}>
      <Container className="relative overflow-hidden w-full h-[150px] lg:h-[250px]">
        <Image
          src={BgCustome}
          alt=""
          className="absolute invisible dark:visible w-[200vh] right-1/2 translate-x-1/2 top-[60%] z-[5]"
        />
        <Image
          src={BgCustomeLight}
          alt=""
          className="absolute visible dark:invisible w-[200vh] right-1/2 translate-x-1/2 top-[60%] z-[5]"
        />
        <div className="bgCustomer-dark top-[5%] lg:top-[-5%] !w-[80%] lg:!w-[60%] !h-[190%] right-1/2 translate-x-1/2 bottom-0 z-[1]"></div>
        <p className="absolute right-1/2 translate-x-1/2 w-full top-[5%] z-[6] text-xl lg:text-4xl text-center leading-loose font-yekan-bold">
          <span className="text-teal-500"> {t("title")} </span>
          {t("subtitle")}
        </p>
      </Container>
    </section>
  );
};

export default PropexSlogan;

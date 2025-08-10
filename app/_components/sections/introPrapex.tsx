import Container from "@/components/shared/container";
import { VideoIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import TitleBadge from "../titleBadge";
import PatternTop from "@/public/Pattern-1.svg";
import PatternBottom from "@/public/Pattern.svg";
import Image from "next/image";
import { IntroVideo } from "./introVideo";

const IntroPrapex = () => {
  const t = useTranslations("introduction");
  return (
    <section className="w-full py-20 relative">
      <Container className="!flex-col min-h-[800px] lg:h-[80vh] relative items-center justify-center gap-8 !overflow-visible z-10">
        <TitleBadge title={t("title")} icon={<VideoIcon />} />
        <div className="h-4 g:h-6"></div>
        <IntroVideo />
      </Container>
      <Image
        src={PatternTop}
        alt="PatternTop"
        className="absolute top-0 left-0 right-0 z-0 w-full h-[30%] object-cover"
      />
      <Image
        src={PatternBottom}
        alt="PatternTop"
        className="absolute bottom-0 left-0 right-0 z-0 w-full h-[30%] object-cover"
      />
    </section>
  );
};

export default IntroPrapex;

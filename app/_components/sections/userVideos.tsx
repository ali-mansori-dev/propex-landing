import Container from "@/components/shared/container";
import { UsersIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import VideoCarousel from "../videoCarusel";
import TitleBadge from "../titleBadge";

const UserVideos = () => {
  const t = useTranslations("user_videos");

  return (
    <section className="w-full py-20">
      <Container className="!flex-col">
        <TitleBadge title={t("title")} icon={<UsersIcon />} />
        <div className="h-8"></div>
        <div className="text-xl lg:text-2xl mb-4 font-yekan-bold text-gray-800 dark:text-white">
          {t("subtitle")}
        </div>
        <div className="text-sm mb-12 text-gray-500 text-center leading-loose lg:max-w-[50vw]">
          {t("desc")}
        </div>
        <VideoCarousel />
      </Container>
    </section>
  );
};

export default UserVideos;

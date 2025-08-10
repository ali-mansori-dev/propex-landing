import { GraduationCapIcon, MoveUpLeftIcon } from "lucide-react";
import Container from "@/components/shared/container";
import { useTranslations } from "next-intl";
import TitleBadge from "../../titleBadge";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Carousel from "./carousel";

const Coching = () => {
  const t = useTranslations("coaching");

  return (
    <section className="w-full py-20">
      <Container className="!flex-col relative py-10">
        <TitleBadge title={t("title")} icon={<GraduationCapIcon />} />
        <div className="h-8"></div>
        <div className="text-xl lg:text-2xl mb-4 font-yekan-bold text-gray-800 dark:text-white">
          {t("subtitle")}
        </div>
        <div className="text-sm mb-12 text-gray-500 dark:text-gray-400 text-center leading-loose lg:max-w-[50vw]">
          {t("desc")}
        </div>

        <Carousel />
        <Link href={"/coaching"}>
          <div className="w-max h-max relative rounded-2xl overflow-hidden p-0.5 bg-[#0DE4D6] mt-10">
            <div className="button-motion" />
            <Button className="rounded-xl w-max py-6 lg:py-8 px-6 lg:px-10 text-lg lg:text-xl text-white dark:text-[#070F25] font-yekan-bold bg-[#0de4d679] hover:bg-[#0de4d679] z-20 relative  backdrop-blur backdrop-saturate">
              ورود به کوچینگ
              <span className="">
                <MoveUpLeftIcon size={58} />
              </span>
            </Button>
          </div>
        </Link>

        <div className="bgCustomer-blue-dark top-[-0%] w-[90%] lg:w-[50%] !h-[30%] end-1/2 -translate-x-1/2"></div>
      </Container>
    </section>
  );
};

export default Coching;

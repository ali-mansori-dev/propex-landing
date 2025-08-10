"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import logo from "@/public/logo/mobile-logo.png"
import Image from "next/image";

export default function VerticalInfiniteSlider() {

  const t = useTranslations("features");

  const feature = [
    "use_floating_risk",
    "use_80_percent_rule",
    "use_fixed_score_rule",
    "minimum_trading_days_required",
  ];

  const repeatedContent = [
    ...feature,
    ...feature,
    ...feature,
    ...feature,
    ...feature,
    ...feature,
    ...feature,
    ...feature,
    ...feature,
    ...feature,
    ...feature,
    ...feature,
    ...feature,
  ];

  const duration = 50;

  return (
    <div className="w-full overflow-hidden items-center text-white py-2 bg-gradient-to-r from-[#0891b233] to-[#0890b214] border-t border-teal-500/30 z-[4]">
      <motion.div
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration,
          ease: "linear",
        }}
        className="whitespace-nowrap text-xl px-6"
      >
        <div className="flex flex-row h-[60px] justify-center items-center gap-16 lg:gap-20">
          {repeatedContent?.map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center lg:gap-2 gap-4 text-white text-base lg:text-lg"
            >
              <Image src={logo} alt="" width={40} height={40} />
              {t(item)}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

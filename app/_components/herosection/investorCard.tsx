"use client";

import CountUp from "react-countup";
import { useTranslations } from "next-intl";
import React from "react";
import client from "@/public/client-1.jpeg";
import Image from "next/image";

const Content = ({
  title,
  value,
}: {
  title: string;
  value: string | React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <h6 className="text-sm text-start text-gray-500">{title}</h6>
      <span className="text-xl">{value}</span>
    </div>
  );
};

export default function InvestorCard({
  name,
  amount,
  challengeBalance,
  accountType,
}: {
  name: string;
  challengeBalance: number;
  amount: number;
  country: string;
  accountType: React.ReactNode;
}) {
  const t = useTranslations("investor_card");

  return (
    <div className="bg-gradient-to-bl from-teal-400/15 to-transparent border border-teal-500/40 backdrop-blur backdrop-saturate  shadow-xl rounded-xl text-center w-[260px] max-w-sm">
      <div className="w-full  flex flex-row justify-start items-center py-6 px-5 gap-3">
        <Image src={client} alt="" className="w-[42px] h-[42px] rounded-full" />
        <div className="flex flex-col justify-center items-start">
          <span className="text-base font-semibold text-gray-700 dark:text-white">
            {name}
          </span>
        </div>
      </div>
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-teal-500/80 to-transparent"></div>
      <div className="text-xl flex flex-row font-bold text-gray-900 dark:text-white mb-1 py-6 px-5">
        <div className="flex flex-col items-start gap-6 w-1/2">
          <Content title={t("account_type")} value={accountType} />
          <Content title={t("equity_growth")} value="15%" />
        </div>
        <div className="flex flex-col items-start gap-6 w-1/2">
          <Content title={t("starting_balance")} value={`${challengeBalance} $`} />
          <Content
            title={t("payout")}
            value={
              <span className="text-teal-500 font-bold font-yekan-bold">
                <CountUp start={0} end={amount} redraw duration={50} />
                {" $"}
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
}

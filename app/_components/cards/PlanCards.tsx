import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InfinityIcon, MoveUpLeftIcon } from "lucide-react";
import React from "react";
import { ChallengesType } from "../sections/challenges/type";
import { formatAmount } from "@/utils/amount";
import Link from "next/link";
import { BorderBeam } from "@/components/ui/BorderBeam";

interface PlanCardProps extends ChallengesType {
  index: number;
}

const PlanCard = ({
  price,
  index,
  attributes,
  description,
  price_with_discount,
  balance,
}: PlanCardProps) => {
  const panel_base_api = "https://panel.propex.fund/";

  const colors = [
    "from-[#082f2c] via-[#2dd4bf] to-[#115e59]", // teal-950, teal-400, teal-900
    "from-[#3730a3] via-[#818cf8] to-[#312e81]", // indigo-800, indigo-400, indigo-900
    "from-[#1e40af] via-[#60a5fa] to-[#1e3a8a]", // blue-800, blue-400, blue-900
    "from-[#854d0e] via-[#facc15] to-[#713f12]", // yellow-800, yellow-400, yellow-900
  ];
  const borders = [
    "from-[#00000000] via-[#5eead4] to-[#00000000]", // transparent, teal-300, transparent
    "from-[#00000000] via-[#a5b4fc] to-[#00000000]", // transparent, indigo-300, transparent
    "from-[#00000000] via-[#93c5fd] to-[#00000000]", // transparent, blue-300, transparent
    "from-[#00000000] via-[#fde68a] to-[#00000000]", // transparent, yellow-300, transparent
  ];
  const ballColors = [
    "from-[#5eead4] to-[#99f6e4]", // teal-300 to teal-200
    "from-[#a5b4fc] to-[#c7d2fe]", // indigo-300 to indigo-200
    "from-[#93c5fd] to-[#bfdbfe]", // blue-300 to blue-200
    "from-[#fde68a] to-[#fef08a]", // yellow-300 to yellow-200
  ];

  const color = colors[index] ?? colors[0];
  const border = borders[index] ?? borders[0];
  const ballColor = ballColors[index] ?? ballColors[0];

  return (
    <div className={`w-full h-max p-1 rounded-2xl relative overflow-hidden`}>
      <BorderBeam duration={8} size={150} className={border} borderWidth={2} />
      <BorderBeam
        duration={8}
        delay={4}
        size={150}
        className={border}
        borderWidth={2}
      />
      <Card
        className={`w-full h-full bg-gradient-to-tr ${color} relative border-0 z-10`}
      >
        <span
          className={`w-[40px] h-[40px] bg-gradient-to-t ${ballColor} opacity-70 blur-xs animate-move-ball rounded-full absolute top-4 end-4`}
        ></span>
        <CardHeader className="flex flex-col items-start justify-start gap-3 mt-5 mb-4">
          <CardTitle className="text-4xl mx-auto text-center font-extrabold font-yekan-bold">
            {formatAmount(balance.toString())} $
          </CardTitle>
          <p className="text-xs text-center text-white mx-auto my-2 leading-relaxed">
            {description}
          </p>
          <div className="inline-flex justify-end items-end gap-3 text-3xl text-center mx-auto">
            {price_with_discount && price_with_discount !== null ? (
              <>
                <span className="text-2xl opacity-60 skew-line">
                  {formatAmount(price.toString())}$
                </span>
                {formatAmount(price_with_discount.toString())}$
              </>
            ) : (
              <>{formatAmount(price.toString())}$</>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <Link href={`${panel_base_api}`} target="_blank">
            <Button
              size={"lg"}
              className="w-full py-6 mb-6 text-white bg-gray-900 hover:bg-gray-800 transition-all"
            >
              خرید چالش <MoveUpLeftIcon />
            </Button>
          </Link>
          {attributes?.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between items-center text-gray-500 py-3"
            >
              <span className="text-sm text-gray-100">{item?.name}</span>
              <span className="text-base text-amber-200">
                {item?.value === "نامحدود" ? (
                  <InfinityIcon size={24} />
                ) : (
                  item?.value
                )}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default PlanCard;

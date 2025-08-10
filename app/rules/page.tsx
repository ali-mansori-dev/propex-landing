import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Container from "@/components/shared/container";
import PatternTop from "@/public/Pattern-1.svg";
import PatternBottom from "@/public/Pattern.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from "next";
import psychology from "@/public/rules.png";
import review from "@/public/قوانین.png";

export const metadata: Metadata = {
  title: "پراپکس | قوانین چالش ها",
  description: "پراپکس شرکت پیشرو در جذب سرمایه و",
};

// نوع داده اصلی
type RuleEntry = {
  title: string;
  body?: string;
  rules?: string[];
  notes?: string[];
  points?: string[];
  daily?: {
    title: string;
    points?: string[];
  };
  total?: {
    title: string;
    points?: string[];
  };
};

// تابع کمکی برای لیست‌ها
const renderList = (items?: string[], icon?: string) =>
  items?.map((item, idx) => (
    <li key={idx} className="text-sm leading-loose list-none mb-2 last:mb-0">
      {icon && <span className="me-2">{icon}</span>}
      {item}
    </li>
  ));

// یک آیتم از قوانین
const RuleItem = ({
  rule,
  index,
  keyName,
}: {
  rule: RuleEntry;
  index: number;
  keyName: string;
}) => {
  const value = `item-${keyName}`;

  return (
    <AccordionItem value={value} key={value}>
      <AccordionTrigger>
        <div className="inline-flex text-start items-center gap-6">
          <span className="text-lg font-yekan-bold text-teal-500 border-e border-gray-700 pe-6">
            {index + 1}
          </span>
          {rule.title}
        </div>
      </AccordionTrigger>
      <AccordionContent>
        {rule.body && <p className="mt-4 text-sm">{rule.body}</p>}
        {renderList(rule.rules, "✅")}
        {renderList(rule.notes, "📢")}
        {renderList(rule.points)}

        {keyName === "drawdown_rules" && (
          <>
            <h2 className="text-lg font-bold mt-6 mb-2">{rule.daily?.title}</h2>
            {renderList(rule.daily?.points, "✅")}
            <h2 className="text-lg font-bold mt-6 mb-2">{rule.total?.title}</h2>
            {renderList(rule.total?.points, "✅")}
          </>
        )}
      </AccordionContent>
    </AccordionItem>
  );
};

const Rules = () => {
  const t = useTranslations("rules");
  const rules = t.raw("sections") as Record<string, RuleEntry>;

  return (
    <section className="w-full h-full relative bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="w-full h-max min-h-[600px] max-h-[800px] relative">
        <Image
          src={PatternTop}
          alt="PatternTop"
          className="absolute top-0 left-0 right-0 z-0 w-full h-[30%] object-cover"
        />
        <Image
          src={PatternBottom}
          alt="PatternBottom"
          className="absolute bottom-0 left-0 right-0 z-0 w-full h-[30%] object-cover"
        />
        <div
          className="bgCustomer top-[-1%] end-1/2 -translate-x-1/2 z-0
          "
        ></div>
        <Container className="py-6 flex flex-col items-center">
          <div className="w-full h-max lg:min-h-[700px] max-h-[800px] my-auto flex flex-col justify-center text-center pt-[150px] lg:pt-[85px]">
            <h6 className="text-2xl lg:text-4xl font-bold font-yekan-black leading-loose mb-7">
              {t("intro")}
            </h6>
            <h2 className="text-xl lg:text-2xl text-gray-300 mb-9 font-yekan-bold">
              {t("section_cooperation.title")}
            </h2>
            <p className="text-sm lg:text-base leading-loose text-gray-400 max-w-2xl mx-auto">
              {t("section_cooperation.body")}
            </p>
            <Image
              src={review}
              alt="coaching_image"
              className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] absolute top-[21%] lg:top-[50%] -translate-y-1/2 start-[10%] float-animation"
            />
            <Image
              src={psychology}
              alt="coaching_image"
              className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] absolute top-[21%] lg:top-[50%] -translate-y-1/2 end-[10%] float-animation"
            />
          </div>
        </Container>
      </section>

      {/* Accordion Section */}
      <Container className="w-full flex-col justify-stretch my-14 z-40">
        <Accordion type="single" className="w-full" defaultValue="item-phase1">
          {Object.entries(rules).map(([key, rule], idx) => (
            <RuleItem rule={rule} index={idx} keyName={key} key={key} />
          ))}
        </Accordion>
        <div className="h-[100px]" />
      </Container>
    </section>
  );
};

export default Rules;

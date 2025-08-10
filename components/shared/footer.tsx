"use client"

import Container from "./container";
import LogoDark from "@/public/logo/logo-dark.png";
import LogoLight from "@/public/logo/logo-light.png";
import Image from "next/image";
import { InstagramIcon } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import PlanetScene from "../PlanetScene";

const Footer = () => {
  const t = useTranslations("about_us");

  const contents = [
    {
      title: "ارتباط با ما",
      items: [
        { title: "واتساپ", link: "#" },
        {
          title: "کانال تلگرامی",
          link: "#",
        },
        {
          title: "بلاگ",
          link: "#",
        },
      ],
    },
    {
      title: "کوچینگ",
      items: [
        {
          title: "از مبتدی تا سودده پایدار",
          link: "#",
        },
        { title: "کوچینگ جامع تحلیل تکنیکال و پرایس اکشن", link: "#" },
        {
          title: "ساخت سیستم معاملاتی شخصی",
          link: "#",
        },
      ],
    },
    {
      title: "مقاله ها",
      items: [
        { title: "پراپ فرم چیست؟", link: "#" },
        { title: "پرایس اکشن چیست؟", link: "#" },
        { title: "ورود به دنیای کریپتو", link: "#" },
      ],
    },
    {
      title: "مدل‌های درآمدی",
      items: [
        { title: "کسب درآمد مستقیم از ترید بر روی حساب‌ها", link: "#" },
        { title: "صندوق درآمد ثابت ماهانه", link: "#" },
        {
          title: "سهامداری پراپکس",
          link: "#",
        },
        {
          title: "سفیران پراپکس",
          link: "#",
        },
      ],
    },
  ];
  return (
    <footer
      dir={"rtl"}
      className="py-20 relative overflow-hidden bg-gradient-to-tr from-[#070F25] to-[#070F25] border-t border-teal-800"
    >
      <div className="absolute top-0 left-0 bottom-0 right-0 inset-0">
        <PlanetScene />
      </div>
      <Container className="flex-col lg:flex-row z-10">
        <div className="w-full z-10">
          <div className="flex flex-col lg:flex-row gap-x-36 gap-y-20">
            <div className="w-full lg:w-1/5 flex flex-col">
              <div className="hidden lg:inline-block relative w-[180px] h-[102px]">
                <Image
                  src={LogoLight}
                  alt=""
                  className="h-[82px] visible dark:invisible absolute start-0 top-0"
                />
                <Image
                  src={LogoDark}
                  alt=""
                  className="w-[102px] h-[102px] invisible dark:visible absolute start-0 top-0"
                />
              </div>
              <div className="w-full flex gap-10 items-center my-8">
                <span className="hover:text-teal-500/70">
                  <InstagramIcon />
                </span>
                <span className="hover:text-teal-500/70">
                  <InstagramIcon />
                </span>
                <span className="hover:text-teal-500/70">
                  <InstagramIcon />
                </span>
                <span className="hover:text-teal-500/70">
                  <InstagramIcon />
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-loose">
                {t("subtitle")}
              </p>
            </div>
            <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-12">
              {contents?.map((item, i) => (
                <div key={i} className="w-max flex flex-col gap-4">
                  <h6 className="font-bold text-lg">{item?.title}</h6>
                  {item?.items?.map((child, cidx) => (
                    <Link
                      key={cidx}
                      href={child.link}
                      className="text-sm text-gray-400 hover:text-teal-500/70"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-500 to-transparent my-12"></div>
          <div className="">
            <p className="text-sm text-center leading-loose text-gray-400">
              {t("desc")}
            </p>
          </div>
        </div>
      </Container>
      <div className="bgCustomer top-[-50%] start-[-10%] z-0"></div>
      {/* <div className="bgCustomer bottom-[-50%] end-[-10%] z-0"></div> */}
    </footer>
  );
};

export default Footer;

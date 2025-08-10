"use client";

import { MoveRightIcon } from "lucide-react";
import { Button } from "../../ui/button";
import Container from "../container";
import LogoLight from "@/public/logo/logo-light.png";
import LogoDark from "@/public/logo/logo-dark.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
// import { ThemeToggle } from "./toggleTheme";
import Menus from "../menus";
import HamburgerMenu from "@/app/_components/mobileMenu";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const t = useTranslations();
  const { scrollY } = useScroll();
  const [showNavbar, setShowNavbar] = useState(true);

  const panel_base_api = "https://panel.propex.fund/";

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      setShowNavbar(false); // scrolling down
    } else {
      setShowNavbar(true); // scrolling up
    }
  });

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 w-screen flex flex-row items-center ${
        showNavbar ? "" : ""
      }`}
      dir={"rtl"}
    >
      <Container
        className={`w-full z-50 ${
          showNavbar
            ? "mt-3"
            : "bg-gray-950/5 mt-2 py-2 px-4 border rounded-2xl border-teal-200/10 backdrop-blur backdrop-saturate"
        }`}
      >
        <div className="flex items-center justify-center gap-3">
          <span className="lg:hidden text-teal-700">
            <HamburgerMenu />
          </span>
          <Link
            href={"/"}
            className="hidden lg:inline-block relative w-[80px] h-[70px]"
          >
            <Image
              src={LogoLight}
              alt=""
              className="w-[80px] h-[70px] visible dark:invisible absolute start-0 top-0"
            />
            <Image
              src={LogoDark}
              alt=""
              className="w-[80px] h-[70px] invisible dark:visible absolute start-0 top-0"
            />
          </Link>
          <div className="inline-block lg:hidden">
            <Image src={LogoDark} alt="" className="h-[42px] w-[42px]" />
          </div>
        </div>
        <Menus />
        <div className="flex gap-2 items-center">
          <Link href={`${panel_base_api}`} target="_blank">
            <Button
              size={"default"}
              className=" rounded-xl px-4 text-[#070F25] lg:!py-5 font-bold bg-[#0DE4D6] hover:bg-[#0de4d6da]"
            >
              {t("navbar.get_start")}
              <span className="rtl:rotate-180">
                <MoveRightIcon />
              </span>
            </Button>
          </Link>
          <Link href={`${panel_base_api}sign-in`} target="_blank">
            <Button
              size={"default"}
              variant={"outline"}
              className="hidden lg:flex rounded-xl lg:!py-5 border-2 border-teal-600 dark:bg-gray-800"
            >
              {t("navbar.signin")}
            </Button>
          </Link>
          {/* <ThemeToggle /> */}
        </div>
      </Container>
    </nav>
  );
};

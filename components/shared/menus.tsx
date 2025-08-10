import { useTranslations } from "next-intl";
import React from "react";
import NavLink from "./navbar/NavLink";

interface NavItem {
  link: string;
  label: string;
  external?: boolean;
}
interface MenusProps {
  className?: string;
  style?: React.CSSProperties;
}

const Menus = ({ className }: MenusProps) => {
  const t = useTranslations("navigations");

  const panel_url = `https://propex.fund/blog/fa/`;

  const navItems: NavItem[] = [
    {
      link: `/`,
      label: t("home_page"),
    },
    {
      link: `/coaching`,
      label: t("coching"),
    },
    {
      link: `/plans`,
      label: t("prices"),
    },
    {
      link: `/rules`,
      label: t("rules"),
    },
    {
      link: `${panel_url}`,
      label: t("blog"),
      external: true,
    },
    {
      link: `/about_us`,
      label: t("about"),
    },
  ];

  return (
    <ul
      className={
        "hidden lg:flex flex-row items-center gap-x-5 gap-y-5 flex-wrap" +
        (className ? ` ${className}` : "")
      }
      style={{ listStyle: "none" }}
    >
      {navItems?.map((value, index) => (
        <NavLink
          href={value.link}
          key={index}
          external={value?.external}
          activeClassName="bg-teal-400/25 dark:bg-teal-900/70 text-teal-500"
          className="hover:text-teal-500 dark:hover:bg-teal-900 w-full lg:w-max text-center px-4 py-4 lg:py-2 rounded-lg text-xs xl:text-sm cursor-pointer"
        >
          {value.label}
        </NavLink>
      ))}
    </ul>
  );
};

export default Menus;

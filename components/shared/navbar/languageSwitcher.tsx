// components/LanguageSwitcher.tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckIcon, GlobeIcon } from "lucide-react";

type Props = {
  currentLocale: "fa" | "en";
  pathname: string; // مسیر فعلی شامل /[locale]
};

export default function LanguageSwitcher({ currentLocale, pathname }: Props) {
  const generatePath = (locale: "fa" | "en") => {
    return pathname.replace(`/${currentLocale}`, `/${locale}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="p-2 rounded-full cursor-pointer hover:dark:bg-zinc-700"
        >
          <GlobeIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        defaultValue={currentLocale}
        defaultChecked
        align="end"
      >
        <DropdownMenuItem asChild>
          <Link href={generatePath("fa")}>🇮🇷 فارسی {currentLocale === "fa" && <CheckIcon />}</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={generatePath("en")}>🇬🇧 English {currentLocale === "en" && <CheckIcon />}</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

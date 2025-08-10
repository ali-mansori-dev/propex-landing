// components/HamburgerMenu.tsx
"use client";

import Menus from "@/components/shared/menus";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function HamburgerMenu() {
  return (
    <Sheet>
      <SheetTrigger className="p-0">
        <Menu className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent side="right" className="w-64 h-auto fixed top-4 right-4 bottom-4 rounded-2xl border border-teal-300">
        <SheetHeader>
          <SheetTitle className="text-end">
          </SheetTitle>
        </SheetHeader>
        {/* اینجا منوهای شما */}
        <nav className="flex flex-col h-full p-3 justify-between ">
          <Menus className="!flex !flex-col" />
        </nav>
      </SheetContent>
    </Sheet>
  );
}

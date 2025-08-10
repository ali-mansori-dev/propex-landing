import React, { ReactNode } from "react";
import { Button } from "./ui/button";

export const AnimationButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`w-max h-max relative ${className} rounded-2xl overflow-hidden p-0.5 bg-[#0DE4D6]`}
    >
      <div className="button-motion transition-all transition-300" />
      <Button className="rounded-3xl w-max py-6 lg:py-9 px-8 lg:!p-[32px] text-lg lg:text-xl text-white dark:text-[#070F25] font-yekan-bold bg-[#0de4d643] hover:bg-[#0de4d643] z-10 relative">
        {children}
      </Button>
    </div>
  );
};

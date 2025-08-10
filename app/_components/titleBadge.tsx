import React from "react";

interface TitleBadgeProps {
  title: string;
  icon?: React.ReactNode;
  className?: string;
}

const TitleBadge = ({ title, icon }: TitleBadgeProps) => {
  return (
    <div className="flex w-max gap-3 bg-blue-50 dark:bg-gray-700 bg-opacity-15 py-2 px-5 text-sm lg:text-base border text-teal-500 dark:text-teal-300 border-teal-300 rounded-full mx-auto">
      <span className="">{icon}</span>
      {title}
    </div>
  );
};

export default TitleBadge;

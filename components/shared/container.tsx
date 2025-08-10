import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactElement | React.ReactElement[] | string;
  className?: string;
}) => {
  return (
    <div
      className={`box-border overflow-x-hidden container md:max-w-[1200px] lg:max-w-[1300px] xl:max-w-[1450px] px-4 md:px-12 lg:px-16 mx-auto flex flex-row justify-between items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;

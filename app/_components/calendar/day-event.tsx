import React from "react";
import { Event } from "./event";

const DayEvent = () => {
  return (
    <div className="bg-white flex flex-col gap-4 justify-start text-gray-800 rounded-2xl p-4">
      <div className="w-max text-gray-500 flex gap-4 items-center justify-center py-3 px-4 rounded-xl">
        <div className="flex flex-col items-center gap-1 pe-6 border-e border-gray-300">
          <span className="text-2xl lg:text-4xl font-yekan-bold">10</span>
          <span className="text-sm">تیر</span>
        </div>
        <span className="text-lg lg:text-xl ms-4 font-yekan-bold text-teal-600">شنبه</span>
      </div>
      <div className="flex flex-col gap-6">
        <Event />
      </div>
    </div>
  );
};

export default DayEvent;

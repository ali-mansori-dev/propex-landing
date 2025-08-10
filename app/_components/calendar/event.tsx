import { Button } from "@/components/ui/button";
import React from "react";

export const Event = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 border rounded-2xl bg-gray-100/60 border-gray-300 p-4">
      <div className="flex flex-row gap-4 lg:gap-6">
        <img
          className="w-[60px] h-[60px] lg:w-[150px] lg:h-[150px] object-cover rounded-lg"
          src="https://s3.eseminar.tv/upload/webinar/thumb/1745076858_70.jpg"
          alt="dd"
        />
        <div className="w-full flex flex-col gap-3">
          <h4 className="text-lg lg:text-xl font-yekan-bold">
            وبینار مدیریت سرمایه
          </h4>
          <p className="text-xs lg:text-sm text-gray-600 mb-2">
            04 تیر - ساعت 18:00 تا 20:00
          </p>
          <div className="h-full"></div>
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-y-4">
            <div className="w-full justify-start flex flex-row items-center gap-2">
              <img
                className="w-[40px] h-[40px] rounded-full object-cover"
                src="https://s3.eseminar.tv/upload/teacher/thumb/1735033049-photo_2024-12-16_14-35-08.jpg"
                alt="سید محمد امین هاشمی"
              />
              <p className="text-sm">سید محمد امین هاشمی</p>
            </div>
            <div className="w-full inline-flex justify-end">
              <Button
                size={"lg"}
                className="bg-teal-200 hover:bg-teal-300 text-teal-800 rounded-xl font-yekan-bold"
              >
                شرکت در وبینار
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

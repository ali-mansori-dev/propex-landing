import React from "react";
import { ChallengesResponseType, ResponseType } from "./type";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import RenderContent from "./renderContent";

async function getFooterData(): Promise<ResponseType<ChallengesResponseType> | null> {
  try {
    const res = await fetch(
      `https://prop-core.samdeployment.ir/api/client/v1/plan/challenges?plan_type=cloud`
    );
    return await res.json();
  } catch (error) {
    console.error("Error fetching footer data:", error);
    return null;
  }
}

export const Contents = async () => {
  const data = await getFooterData();

  if (!data?.data) return <p>خطا در بارگیری اطلاعات</p>;

  return (
    <div className="w-full flex flex-col gap-2">
      <Tabs defaultValue="sprout" className="w-full p-0 z-20" dir="rtl">
        <TabsList className="relative mx-auto flex !bg-teal-700/15 backdrop-blur backdrop-saturate gap-2 justify-center items-center mb-10 border border-teal-400 p-[6px] rounded-full h-max">
          <TabsTrigger value="sprout">{data?.data?.at(0)?.label}</TabsTrigger>
          <TabsTrigger value="maturity">{data?.data?.at(1)?.label}</TabsTrigger>
        </TabsList>
        <TabsContent value="sprout" className="w-full">
          <RenderContent data={data?.data?.at(0)?.plans} />
        </TabsContent>
        <TabsContent value="maturity" className="w-full">
          <RenderContent data={data?.data?.at(1)?.plans} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

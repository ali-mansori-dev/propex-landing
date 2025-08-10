"use client";

import PlanetScene from '@/components/PlanetScene';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SendHorizonalIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react'

export const RequestSection = () => {
    const t = useTranslations("coaching");

  return (
    <div className="relative w-full bg-gradient-to-l from-teal-700 to-cyan-600 p-8 inline-flex flex-col lg:flex-row gap-y-5 items-center justify-between rounded-3xl">
        <div className="absolute top-0 left-0 bottom-0 right-0 inset-0 z-0">
          <PlanetScene />
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-y-7 justify-between items-center z-20">
          <p className="text-xl font-yekan-bold text-white">{t("request_title")}</p>
          <div className="w-full lg:w-1/2 flex flex-row gap-2 items-center">
            <Input placeholder="شماره حساب متاتریدر" className="!bg-white !text-lg p-6 text-gray-950" />
            <Button className='p-6'>
              <SendHorizonalIcon className="rotate-180"  />
            </Button>
          </div>
        </div>
      </div>
  )
}

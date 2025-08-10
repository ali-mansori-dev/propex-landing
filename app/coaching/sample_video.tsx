"use client";

import dynamic from "next/dynamic";
import React from "react";

const VideoPlayer = dynamic(() => import("../_components/plyrplayer"), {
  ssr: false,
});

export const SampleVideo = () => {
  return (
    <div className="w-[90vw] h-full lg:w-[60vw]">
      <VideoPlayer src="https://caspian15.asset.aparat.com/aparat-video/2a9a794f15b0f637616990d2f4979dff58996525-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImFmZjNlMzdiYWVkMDg5YmEyMzZkNzRhNzc1ODJlMWE2IiwiZXhwIjoxNzUxMDMxMjg3LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.6XGTYS708pXUrpPzc2TeZPGlbQrf36ED-umJ6hLpfbI" />
    </div>
  );
};

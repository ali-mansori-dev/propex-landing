"use client";

import dynamic from "next/dynamic";
import React from "react";

const VideoPlayer = dynamic(() => import("../plyrplayer"), { ssr: false });

export const IntroVideo = () => {
  return (
    <div className="w-[90vw] lg:w-[60vw] h-[60vh]">
      <VideoPlayer src="/vidoes/intro.mp4" />
    </div>
  );
};

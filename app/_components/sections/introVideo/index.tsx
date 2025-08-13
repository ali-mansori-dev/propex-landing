"use client";

import dynamic from "next/dynamic";
import React from "react";

const VideoPlayer = dynamic(() => import("../../plyrplayer"), { ssr: false });

export const IntroVideo = () => {
  return (
    <div className="w-[90vw] lg:w-[60vw] h-max">
      <VideoPlayer src="https://v.ftcdn.net/05/01/97/70/700_F_501977097_zBiDldY0C7HXiEPXXfOpVYkFhq8Wgl9D_ST.mp4" />
    </div>
  );
};

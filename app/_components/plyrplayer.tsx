"use client";

import { PlyrProps, default as PlyrReact } from "plyr-react";
import "plyr-react/plyr.css";

export default function VideoPlayer({ src }: { src: string; className?:string }) {
  const videoOptions: PlyrProps["source"] = {
    type: "video",
    sources: [
      {
        src,
        type: "video/mp4",
      },
    ],
  };

  return (
    <div className="w-full mx-auto rounded-lg overflow-hidden">
      <PlyrReact
        source={videoOptions}
        width={200}
        height={400}
        options={{
          controls: [
            "play-large",
            "restart",
            "play",
            "progress",
            "current-time",
            "mute",
            "volume",
            "settings",
            "fullscreen",
          ],
          ratio: "16:9",
        }}
      />
    </div>
  );
}

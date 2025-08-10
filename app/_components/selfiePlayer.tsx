import Plyr, { PlyrProps } from "plyr-react";
import "plyr-react/plyr.css";
import React from "react";

const SelfiePlayer = ({ src }: { src: string }) => {
  const videoOptions: PlyrProps["source"] = {
    type: "video",
    sources: [
      {
        src,
        type: "video/mp4",
        size: 36,
      },
    ],
    poster: "/videos/thumb.png",
  };
  return (
    <Plyr
      source={videoOptions}
      options={{
        controls: [
          "play-large",
          "restart",
          "play",
          "progress",
          "current-time",
          "fullscreen",
        ],
        ratio: "9:16",
      }}
      style={{ maxHeight: "80vh", maxWidth: "90%" }}
    />
  );
};
export default SelfiePlayer;

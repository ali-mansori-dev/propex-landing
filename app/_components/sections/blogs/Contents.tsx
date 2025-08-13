import React from "react";
import Carousel from "./Carousels";
import { blogs } from "./data";

// async function getFooterData(): Promise<BlogType[] | null> {
//   try {
//     const res = await fetch(`data.json`);
//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching footer data:", error);
//     return null;
//   }
// }

export const Contents = async () => {
  return <Carousel data={blogs} />;
};

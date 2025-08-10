"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function AnimatedTabContent({
  children,
  x = "100%",
}: {
  x?: string | number;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0.5, y:x }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 1050 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

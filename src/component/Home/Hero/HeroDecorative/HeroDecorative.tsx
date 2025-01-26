"use client";

import { motion } from "framer-motion";

const HeroDecorative = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.2, 0.5, 0.2] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute top-0 right-0 w-1/2 h-full  blur-3xl"
    />
  );
};

export default HeroDecorative;

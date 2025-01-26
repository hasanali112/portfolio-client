"use client";

import { motion } from "framer-motion";

const HeroImage = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative flex justify-center items-center"
    >
      {children}
    </motion.div>
  );
};

export default HeroImage;

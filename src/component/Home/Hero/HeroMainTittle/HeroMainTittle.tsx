"use client";

import { motion } from "framer-motion";

const HeroMainTittle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 text-white relative z-[999]"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default HeroMainTittle;

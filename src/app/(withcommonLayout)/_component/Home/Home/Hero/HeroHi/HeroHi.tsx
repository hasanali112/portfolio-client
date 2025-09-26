"use client";

import Image from "next/image";
import hiLogo from "@/assets/HI.png";
import { motion } from "framer-motion";

const HeroHi = () => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 1.1 }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "reverse",
      }}
      className="absolute top-[20%] left-[30%]  rounded-full "
    >
      <div className="absolute inset-0 max-w-[400px] md:max-w-[500px] h-[400px] md:h-[500px] bg-blue-500/10 blur-3xl rounded-full animate-pulse" />
      <Image
        src={hiLogo}
        alt="Hasan Ali"
        width={500}
        height={500}
        className="w-[350px] h-[350px] object-cover opacity-15"
      />
    </motion.div>
  );
};

export default HeroHi;

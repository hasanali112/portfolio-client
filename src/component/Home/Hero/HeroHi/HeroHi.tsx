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
      className="absolute top-[20%] left-[40%]  rounded-full "
    >
      <Image
        src={hiLogo}
        alt="Hasan Ali"
        width={500}
        height={500}
        className="w-[380px] h-[380px] object-cover opacity-10 "
      />
    </motion.div>
  );
};

export default HeroHi;

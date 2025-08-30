"use client";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import React from "react";

interface IProps {
  title: string;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "outline";
  icon?: React.ReactNode;
}

const ReButton = ({
  title,
  onClick,
  className,
  variant = "default",
  icon,
}: IProps) => {
  const variants = {
    default:
      "relative bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] shadow-md text-white w-auto h-[35px] rounded overflow-hidden px-4",
    outline:
      "relative border border-[#1f2937] bg-[#1f2937] text-white w-auto h-[35px] rounded overflow-hidden px-4",
  };

  return (
    <motion.button
      onClick={onClick}
      className={cn(variants[variant], className, "flex items-center gap-2")}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10 font-medium">{title}</span>

      {/* Shine overlay for default variant */}
      {variant === "default" && (
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.2) 50%, transparent 10%)",
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: ["200% center", "-200% center"],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />
      )}
    </motion.button>
  );
};

export default ReButton;

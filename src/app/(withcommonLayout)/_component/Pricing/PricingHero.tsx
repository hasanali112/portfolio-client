"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Container from "@/component/ui/Container";

const PricingHero = () => {
  return (
    <section className="relative pt-12 pb-6 px-6 overflow-hidden">
      {/* subtle bg glow — consistent with hero section */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#027bc2]/8 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        <div className="text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-[#2b3441] bg-[#1f2937] px-4 py-1.5 rounded-full mb-8"
          >
            <Star className="w-4 h-4 text-[#72c4f2]" />
            <span className="text-sm text-gray-300">
              Transparent & Flexible Pricing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5"
          >
            Invest in Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#72c4f2] to-[#e7dbfd]">
              Digital Future
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-10"
          >
            From pixel-perfect landing pages to enterprise‑grade applications —
            pick the plan that suits your vision, or let&apos;s build something
            custom together.
          </motion.p>
        </div>
      </Container>
    </section>
  );
};

export default PricingHero;

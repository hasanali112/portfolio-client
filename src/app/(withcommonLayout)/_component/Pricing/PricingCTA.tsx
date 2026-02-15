"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/component/ui/Container";
import ReButton from "@/component/Button/ReButton";

const PricingCTA = () => {
  return (
    <section className="relative px-6 py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-[900px] mx-auto text-center"
        >
          {/* glass card */}
          <div className="relative overflow-hidden rounded-2xl border border-[#2b3441] bg-gradient-to-r from-white/5 via-white/5 to-transparent backdrop-blur-lg p-10 md:p-16">
            {/* shine sweep — same as ReButton */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.06) 50%, transparent 75%)",
                backgroundSize: "200% 100%",
              }}
              animate={{
                backgroundPosition: ["200% center", "-200% center"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />

            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
              Ready to Build Something{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#72c4f2] to-[#e7dbfd]">
                Amazing?
              </span>
            </h2>
            <p className="text-gray-400 text-base mb-8 max-w-lg mx-auto relative z-10">
              Let&apos;s turn your idea into a reality. Get a free consultation
              and detailed project estimate — no strings attached.
            </p>
            <div className="relative z-10">
              <Link href="/hire-me">
                <ReButton
                  title="Start Your Project"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="h-[45px] rounded-full px-8"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default PricingCTA;

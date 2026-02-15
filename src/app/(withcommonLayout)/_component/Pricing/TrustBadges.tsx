"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Headphones, Star } from "lucide-react";
import Container from "@/component/ui/Container";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const badges = [
  {
    icon: <Shield className="w-6 h-6 text-[#72c4f2]" />,
    title: "100% Secure",
    desc: "NDA & data protection",
  },
  {
    icon: <Clock className="w-6 h-6 text-[#72c4f2]" />,
    title: "On-Time Delivery",
    desc: "Deadline guaranteed",
  },
  {
    icon: <Headphones className="w-6 h-6 text-[#72c4f2]" />,
    title: "24/7 Support",
    desc: "Always available",
  },
  {
    icon: <Star className="w-6 h-6 text-[#72c4f2]" />,
    title: "5★ Rated",
    desc: "Client satisfaction",
  },
];

const TrustBadges = () => {
  return (
    <section className="relative px-6 py-10">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              custom={i}
              variants={fadeUp}
              className="flex items-center gap-4 border border-[#2b3441] bg-[#1f2937]/50 rounded-xl p-4 hover:border-[#027bc2]/30 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-full bg-[#1f2937] border border-[#2b3441] flex items-center justify-center shrink-0">
                {badge.icon}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  {badge.title}
                </p>
                <p className="text-gray-500 text-xs">{badge.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default TrustBadges;

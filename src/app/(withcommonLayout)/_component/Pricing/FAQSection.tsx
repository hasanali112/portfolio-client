"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Container from "@/component/ui/Container";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" },
  }),
};

interface FAQ {
  q: string;
  a: string;
}

const faqs: FAQ[] = [
  {
    q: "What technologies do you use?",
    a: "I work with modern stacks including React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, and cloud platforms like AWS and Vercel. The exact stack is chosen based on your project requirements.",
  },
  {
    q: "How does the payment process work?",
    a: "Projects start with a 40% upfront deposit. The remaining 60% is split across milestones. I accept bank transfer, PayPal, and cryptocurrency.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely! You can start with the Starter plan and upgrade to Professional or Enterprise at any point. The price difference is adjusted accordingly.",
  },
  {
    q: "Do you offer maintenance after launch?",
    a: "Yes — every plan includes post‑launch support. Beyond the included period, I offer monthly maintenance packages starting at $99/month.",
  },
  {
    q: "What if my project doesn't fit any plan?",
    a: "No problem! These plans are starting points. Reach out via the Hire Me page and we'll create a custom proposal tailored to your exact needs.",
  },
];

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="border border-[#2b3441] rounded-xl overflow-hidden bg-[#1f2937]/40 backdrop-blur-sm hover:border-[#027bc2]/40 transition-colors duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="text-white font-medium text-base pr-4">{faq.q}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#057cc5] shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-gray-400 leading-relaxed text-sm">
          {faq.a}
        </p>
      </motion.div>
    </motion.div>
  );
}

const FAQSection = () => {
  return (
    <section className="relative px-6 py-16">
      <Container>
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#72c4f2] to-[#e7dbfd]">
                Questions
              </span>
            </h2>
            <p className="text-gray-400 text-sm">
              Have more questions?{" "}
              <Link
                href="/hire-me"
                className="text-[#72c4f2] hover:text-[#027bc2] underline underline-offset-4 transition-colors"
              >
                Let&apos;s talk
              </Link>
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;

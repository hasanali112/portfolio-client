"use client";

import { motion } from "framer-motion";
import { Check, Zap, Crown, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/component/ui/Container";
import ReButton from "@/component/Button/ReButton";

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

interface Plan {
  name: string;
  icon: React.ReactNode;
  price: string;
  period: string;
  tagline: string;
  popular: boolean;
  features: string[];
  cta: string;
}

const plans: Plan[] = [
  {
    name: "Starter",
    icon: <Zap className="w-5 h-5" />,
    price: "$100",
    period: "per project",
    tagline: "Perfect for small businesses & personal brands",
    popular: false,
    features: [
      "6/7 page responsive website",
      "Mobile‑first design",
      "Basic SEO optimisation",
      "Contact form integration",
      "3 revision rounds",
      "1‑week delivery",
      "30‑day post‑launch support",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    icon: <Crown className="w-5 h-5" />,
    price: "$300",
    period: "per project",
    tagline: "Best for growing businesses & startups",
    popular: true,
    features: [
      "Multi‑page dynamic website",
      "Custom UI/UX design",
      "Advanced SEO & analytics",
      "CMS integration",
      "Payment gateway setup",
      "5 revision rounds",
      "2‑week delivery",
      "90‑day post‑launch support",
      "Performance optimisation",
    ],
    cta: "Most Popular",
  },
  {
    name: "Enterprise",
    icon: <Rocket className="w-5 h-5" />,
    price: "$1,000",
    period: "per project",
    tagline: "Full‑scale applications & complex systems",
    popular: false,
    features: [
      "Full‑stack web application",
      "Real‑time features (chat / notifications)",
      "AI / ML integration",
      "Microservices architecture",
      "CI / CD pipeline setup",
      "Unlimited revisions",
      "Custom timeline",
      "12‑month dedicated support",
      "Source code ownership",
      "Scalability consulting",
    ],
    cta: "Contact Me",
  },
];

const PricingCards = () => {
  return (
    <section className="relative px-6 py-14">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-7"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`relative group rounded-2xl border p-7 flex flex-col transition-all duration-500 ${
                plan.popular
                  ? "bg-gradient-to-b from-[#027bc2]/10 via-[#0f0715] to-[#0f0715] border-[#027bc2]/50 shadow-lg shadow-[#027bc2]/10"
                  : "bg-[#0f0715] border-[#2b3441] hover:border-[#027bc2]/30"
              }`}
            >
              {/* popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-md tracking-wider uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              {/* icon + name */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] flex items-center justify-center shadow-md">
                  {plan.icon}
                </div>
                <h3 className="text-lg font-bold">{plan.name}</h3>
              </div>

              {/* price */}
              <div className="mb-2">
                <span className="text-4xl font-extrabold tracking-tight">
                  {plan.price}
                </span>
                <span className="text-gray-500 ml-2 text-sm">
                  /{plan.period}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-7">{plan.tagline}</p>

              {/* features */}
              <ul className="space-y-3 mb-9 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#027bc2]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#72c4f2]" />
                    </div>
                    <span className="text-gray-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              {/* cta */}
              <Link href="/hire-me" className="block">
                {plan.popular ? (
                  <ReButton
                    title={plan.cta}
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="w-full h-[42px] rounded-full justify-center"
                  />
                ) : (
                  <ReButton
                    title={plan.cta}
                    variant="outline"
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="w-full h-[42px] rounded-full justify-center"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default PricingCards;

import { Metadata } from "next";
import PricingHero from "../_component/Pricing/PricingHero";
import PricingCards from "../_component/Pricing/PricingCards";
import TrustBadges from "../_component/Pricing/TrustBadges";
import ComparisonTable from "../_component/Pricing/ComparisonTable";
import FAQSection from "../_component/Pricing/FAQSection";
import PricingCTA from "../_component/Pricing/PricingCTA";

export const metadata: Metadata = {
  title: "Pricing Plans | Affordable Web Development for Service Businesses",
  description:
    "Transparent, affordable web development pricing. Get a custom, SEO-optimized, high-converting website for your service business. No hidden fees. Fixed-price packages for plumbers, roofers, dentists, and more.",
  keywords: [
    // Cost / affordability
    "web development pricing",
    "how much does a website cost",
    "affordable web developer",
    "website cost for small business",
    "web development packages",
    "affordable website packages",
    "website pricing plans",

    // Niche + value
    "freelancer web developer",
    "hotlancer",
    "website for service business",
    "custom web development pricing",
    "SEO website packages",
    "fixed price web development",
    "professional website design price",
    "affordable Next.js developer",
  ],
  openGraph: {
    title: "Pricing Plans | Hasan Ali - Affordable Web Development",
    description:
      "Transparent pricing for custom websites. Built for plumbers, roofers, dentists, and other service businesses. No hidden fees.",
    url: "https://mdhasanalikhan.vercel.app/pricing",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 628,
        alt: "Hasan Ali - Web Development Pricing Plans",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Plans | Hasan Ali - Affordable Web Development",
    description:
      "Transparent, fixed-price web development packages for service businesses. No hidden fees.",
    images: ["/og-cover.jpg"],
    creator: "@hasan_ali_dev",
  },
  alternates: {
    canonical: "https://mdhasanalikhan.vercel.app/pricing",
  },
};

const faqs = [
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="min-h-screen bg-[#0f0715] text-white">
      <PricingHero />
      <PricingCards />
      <TrustBadges />
      <ComparisonTable />
      <FAQSection />
      <PricingCTA />
      </div>
    </>
  );
}

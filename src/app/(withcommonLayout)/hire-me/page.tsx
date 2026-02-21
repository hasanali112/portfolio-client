import { Metadata } from "next";
import HireMeClientWrapper from "./components/HireMeClientWrapper";

export const metadata: Metadata = {
  title: "Hire Me | Freelance Web Developer for Service Businesses",
  description:
    "Ready to grow your service business online? Hire Hasan Ali — a freelance web developer who builds fast, lead-generating, SEO-optimized websites for plumbers, roofers, dentists, restaurants, and contractors.",
  keywords: [
    // Primary hire intent
    "hire web developer",
    "hire freelance web developer",
    "freelancer web developer",
    "hotlancer",
    "hire Next.js developer",
    "hire React developer",
    "hire MERN stack developer",

    // Niche service business
    "web developer for plumbers",
    "web developer for roofers",
    "web developer for dentists",
    "web developer for restaurants",
    "web developer for contractors",
    "custom website for service business",
    "lead generation website for local business",

    // Value + offering
    "affordable freelance web developer",
    "custom web development",
    "freelance Next.js developer",
    "web developer for small business",
    "professional website developer",
    "hire full-stack developer",
    "schedule meeting with web developer",
    "book consultation freelance developer",
    "free web development consultation",
    "hire web developer consultation",
    "book web developer",
    "get website quote",
    "web design consultation",
    "website project consultation",
  ],
  openGraph: {
    title: "Hire Me | Hasan Ali - Freelance Web Developer",
    description:
      "Looking for a skilled web developer? Hire Hasan Ali to build a custom, high-converting website for your service business.",
    url: "https://mdhasanalikhan.vercel.app/hire-me",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 628,
        alt: "Hire Hasan Ali - Freelance Web Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Me | Hasan Ali - Freelance Web Developer",
    description:
      "Hire a freelance web developer to build a lead-generating website for your service business.",
    images: ["/og-cover.jpg"],
    creator: "@hasan_ali_dev",
  },
  alternates: {
    canonical: "https://mdhasanalikhan.vercel.app/hire-me",
  },
};

const hireMeFaqs = [
  {
    q: "What is your typical project timeline?",
    a: "Most service business websites take between 2 to 4 weeks from strategy to launch. More complex custom applications or extensive pSEO projects may take 6+ weeks."
  },
  {
    q: "Do you require a deposit?",
    a: "Yes, I require a 40% upfront deposit to secure your project on my calendar. The remaining balance is typically split across major milestones."
  },
  {
    q: "Will my website be mobile-friendly and SEO-optimized?",
    a: "Absolutely. Mobile-first design and technical SEO (including AI search optimization) are core parts of my process, not add-ons."
  },
  {
    q: "How do we communicate during the project?",
    a: "I provide daily updates via Slack or WhatsApp (whichever you prefer) and we'll have weekly strategy calls to review milestones and gather feedback."
  }
];

const hireMeSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: hireMeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function ProjectConsultationForm() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hireMeSchema).replace(/</g, "\\u003c"),
        }}
      />
      <HireMeClientWrapper />
    </>
  );
}

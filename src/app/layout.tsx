import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./lib/providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import VisitorTracker from "@/component/VisitorTracker";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mdhasanalikhan.vercel.app"),
  title: {
    default: "Hasan Ali | Freelance Web Developer for Service Businesses",
    template: "%s | Hasan Ali",
  },
  description:
    "Expert freelance web developer helping service businesses generate more leads with 95% faster, SEO-optimized websites. 100% custom designs built for high ROI and local ranking using React & Next.js.",
  // ... (rest of metadata stays the same)
  keywords: [
    "Hasan Ali",
    "Hasan Ali portfolio",
    "freelance web developer",
    "freelancer web developer",
    "hotlancer",
    "hire web developer",
    "hire freelance web developer",
    "MERN stack developer",
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Node.js developer",
    "MongoDB developer",
    "web developer for service businesses",
    "website for plumbers",
    "website for roofers",
    "website for dentists",
    "website for restaurants",
    "web developer for contractors",
    "website for HVAC companies",
    "website for landscaping businesses",
    "website for cleaning companies",
    "website for pet groomers",
    "web developer for auto repair shops",
    "website for home care services",
    "website for event planners",
    "website for pest control",
    "website for electricians",
    "website for handymen",
    "local service business website",
    "local business website design",
    "high-converting service websites",
    "lead generating website",
    "SEO optimized website",
    "high-converting website",
    "custom website development",
    "affordable web developer",
    "web developer for small business",
    "service industry web development",
    "contractor website developer",
    "affordable website for small business",
    "responsive website design",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Hasan Ali | Freelance Web Developer for Service Businesses",
    description:
      "Helping service businesses like plumbers, roofers, dentists, and restaurants get more leads with high-converting, SEO-optimized websites.",
    url: "https://mdhasanalikhan.vercel.app",
    siteName: "Hasan Ali Portfolio",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 628,
        alt: "Hasan Ali - Freelance Web Developer for Service Businesses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasan Ali | Freelance Web Developer for Service Businesses",
    description:
      "Expert web developer specializing in fast, responsive, and lead-generating websites for plumbers, roofers, dentists, and other service businesses.",
    images: ["/og-cover.jpg"],
    site: "@hasan_ali_dev",
    creator: "@hasan_ali_dev",
  },
  alternates: {
    canonical: "https://mdhasanalikhan.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mdhasanalikhan.vercel.app/#person",
      name: "Hasan Ali",
      url: "https://mdhasanalikhan.vercel.app",
      image: "https://mdhasanalikhan.vercel.app/og-cover.jpg",
      jobTitle: "Freelance Web Developer",
      description:
        "Expert freelance web developer specializing in high-converting websites for service businesses using React, Next.js, Node.js and MongoDB.",
      gender: "Male",
      nationality: {
        "@type": "Country",
        name: "Bangladesh",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Rajshahi University",
      },
      dateModified: "2024-03-24",
      sameAs: [
        "https://github.com/hasanali112",
        "https://linkedin.com/in/hasanali112",
        "https://twitter.com/hasan_ali_dev",
      ],
      knowsAbout: [
        "Web Development",
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "TypeScript",
        "SEO",
        "Full-Stack Development",
        "Local SEO for Service Businesses",
        "Answer Engine Optimization (AEO)",
        "Conversion Rate Optimization (CRO)",
      ],
      brand: {
        "@type": "Brand",
        name: "Hasan Ali",
        slogan: "Transforming Business with Code",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://mdhasanalikhan.vercel.app/#service",
      name: "Hasan Ali - Freelance Web Development",
      url: "https://mdhasanalikhan.vercel.app",
      provider: { "@id": "https://mdhasanalikhan.vercel.app/#person" },
      description:
        "Custom, high-converting website development for service businesses including plumbers, roofers, dentists, restaurants, and contractors.",
      areaServed: "Worldwide",
      serviceType: "Web Development",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rajshahi",
        addressCountry: "BD",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["English", "Bengali"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Website Development",
              description:
                "Full custom website built with Next.js for service businesses",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO-Optimized Web Design",
              description:
                "SEO-friendly websites that rank on Google and generate leads",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full-Stack Web Application",
              description: "MERN stack web applications for growing businesses",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={outfit.className}>
        <Providers>
          {process.env.NODE_ENV === "production" ? <VisitorTracker /> : null}
          {children}
          {process.env.NODE_ENV === "production" ? <SpeedInsights /> : null}
        </Providers>
      </body>
    </html>
  );
}

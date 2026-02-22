import { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries, getIndustryBySlug } from "@/data/industries";
import IndustryPageClient from "./IndustryPageClient";

interface Props {
  params: Promise<{ industry: string }>;
}

export function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params;
  const data = getIndustryBySlug(industry);
  if (!data) return { title: "Not Found" };

  const title = `Web Developer for ${data.name} | Hasan Ali`;
  const description = `${data.heroSubtitle} Get a fast, SEO-optimized website that ranks locally and drives leads for your ${data.name.toLowerCase()} business.`;

  return {
    title,
    description,
    keywords: [
      ...data.keywords,
      "freelancer web developer",
      "hotlancer",
      "hire web developer",
      "Next.js developer",
    ],
    openGraph: {
      title,
      description,
      url: `https://mdhasanalikhan.vercel.app/services/${data.slug}`,
      images: [{ url: "/og-cover.jpg", width: 1200, height: 628, alt: title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-cover.jpg"],
      creator: "@hasan_ali_dev",
    },
    alternates: {
      canonical: `https://mdhasanalikhan.vercel.app/services/${data.slug}`,
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { industry } = await params;
  const data = getIndustryBySlug(industry);
  if (!data) notFound();

  // JSON-LD: Service + FAQPage schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Web Development for ${data.name}`,
        description: data.heroSubtitle,
        provider: {
          "@type": "Person",
          name: "Hasan Ali",
          url: "https://mdhasanalikhan.vercel.app",
        },
        serviceType: "Web Development",
        areaServed: "Worldwide",
        url: `https://mdhasanalikhan.vercel.app/services/${data.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: data.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
        dateModified: "2024-03-24",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <IndustryPageClient data={data} />
    </>
  );
}

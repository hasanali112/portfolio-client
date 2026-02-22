import { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations, getLocationBySlug } from "@/data/locations";
import { industries } from "@/data/industries";
import LocationPageClient from "./LocationPageClient";


interface Props {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const data = getLocationBySlug(city);
  if (!data) return { title: "Not Found" };

  const title = `Freelance Web Developer in ${data.name} | Hasan Ali`;
  const description = `Looking to hire a freelance web developer in ${data.name}? Hasan Ali builds fast, SEO-optimized, high-converting websites for service businesses in ${data.country}. ${data.marketNote}`;

  return {
    title,
    description,
    keywords: [
      ...data.keywords,
      "freelancer web developer",
      "hotlancer",
      "hire web developer",
      "Next.js developer",
      "MERN stack developer",
    ],
    openGraph: {
      title,
      description,
      url: `https://mdhasanalikhan.vercel.app/hire/${data.slug}`,
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
      canonical: `https://mdhasanalikhan.vercel.app/hire/${data.slug}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const data = getLocationBySlug(city);
  if (!data) notFound();

  // Resolve top industry objects for this location
  const topIndustryData = data.topIndustries
    .map((slug) => industries.find((i) => i.slug === slug))
    .filter(Boolean);

  // JSON-LD: LocalBusiness schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Hasan Ali - Freelance Web Developer",
    url: "https://mdhasanalikhan.vercel.app",
    image: "https://mdhasanalikhan.vercel.app/og-cover.jpg",
    description: `Freelance web developer serving clients in ${data.name}, ${data.country}. Specializing in high-converting websites for service businesses.`,
    areaServed: {
      "@type": "City",
      name: data.name,
      containedIn: { "@type": "Country", name: data.country },
    },
    priceRange: "$$",
    serviceType: "Web Development",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Is Hasan Ali available for web development projects in ${data.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, Hasan Ali works with clients in ${data.name} and across ${data.country} remotely. He schedules calls during ${data.timezone} business hours for seamless collaboration.`,
        },
      },
      {
        "@type": "Question",
        name: `What services does Hasan Ali offer for businesses in ${data.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Hasan Ali specializes in high-converting, SEO-optimized websites for service businesses in ${data.name}. This includes custom web design using Next.js, MERN stack development, and lead generation optimization.`,
        },
      },
    ],
    dateModified: "2024-03-24",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <LocationPageClient data={data} topIndustries={topIndustryData as any} />
    </>
  );
}

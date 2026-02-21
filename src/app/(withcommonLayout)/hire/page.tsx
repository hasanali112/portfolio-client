import { Metadata } from "next";
import Link from "next/link";
import Container from "@/component/ui/Container";
import { locations } from "@/data/locations";
import { ArrowRight, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Hire a Freelance Web Developer | Hasan Ali",
  description:
    "Hire Hasan Ali — a freelance web developer serving clients worldwide. Specializing in fast, SEO-optimized websites for service businesses in the USA, UK, Bangladesh, Australia, Canada, Dubai, and more.",
  keywords: [
    "hire freelance web developer",
    "hire web developer",
    "freelancer web developer",
    "hotlancer",
    "web developer for hire worldwide",
    "remote web developer",
    "Next.js developer for hire",
  ],
  openGraph: {
    title: "Hire a Freelance Web Developer | Hasan Ali",
    description: "Serving clients in the USA, UK, Bangladesh, Australia, Dubai, and more.",
    url: "https://mdhasanalikhan.vercel.app/hire",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 628, alt: "Hire Hasan Ali - Freelance Web Developer" }],
    type: "website",
  },
  alternates: { canonical: "https://mdhasanalikhan.vercel.app/hire" },
};

export default function HireHubPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] text-white">
      <Container>
        <div className="py-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Serving Clients Worldwide</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hire a Freelance Web Developer{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Anywhere in the World
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              I work with service businesses globally — remote-first, async-friendly, and available in your timezone. Select your location to learn more.
            </p>
          </div>

          {/* Location Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/hire/${loc.slug}`}
                className="group bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{loc.flag}</span>
                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </div>
                <h2 className="text-lg font-bold text-white mb-1">{loc.name}</h2>
                <p className="text-blue-400 text-sm mb-3">{loc.timezone}</p>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {loc.marketNote}
                </p>
              </Link>
            ))}
          </div>

          {/* Not In the List */}
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Not In the List?
            </h2>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              I work with clients from any country. If your location isn&apos;t listed, reach out — I&apos;m happy to discuss your timezone and how we can collaborate effectively.
            </p>
            <Link
              href="/hire-me"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

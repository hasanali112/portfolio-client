"use client";

import Link from "next/link";
import Container from "@/component/ui/Container";
import { Location } from "@/data/locations";
import { Industry } from "@/data/industries";
import {
  ArrowRight,
  Clock,
  MessageCircle,
  CheckCircle,
  Globe,
  Calendar,
} from "lucide-react";

interface Props {
  data: Location;
  topIndustries: Industry[];
}

const remoteProcess = [
  {
    step: "1",
    title: "Discovery Call",
    desc: "30-min video call to understand your business, goals, and timeline.",
  },
  {
    step: "2",
    title: "Proposal & Quote",
    desc: "Clear scope, fixed price, and realistic timeline — no surprises.",
  },
  {
    step: "3",
    title: "Design & Build",
    desc: "You see and approve the design before a single line of production code is written.",
  },
  {
    step: "4",
    title: "Review & Launch",
    desc: "Revisions until you're completely happy, then launch with full handover.",
  },
];

export default function LocationPageClient({ data, topIndustries }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] text-white">
      <Container>
        {/* Breadcrumb */}
        <nav className="pt-8 pb-2 text-sm text-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/hire" className="hover:text-white transition-colors">Hire</Link>
          <span>/</span>
          <span className="text-white">{data.name}</span>
        </nav>

        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-2xl">{data.flag}</span>
              <span className="text-blue-300 text-sm font-medium">{data.name}, {data.country}</span>
              <span className="text-gray-500">·</span>
              <Clock className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm">{data.timezone}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Freelance Web Developer{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                in {data.name}
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-6 max-w-3xl">
              {data.localContext}
            </p>
            <p className="text-gray-400 leading-relaxed mb-10 max-w-3xl">
              {data.marketNote}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/hire-me"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/hire-me#book-a-call"
                className="inline-flex items-center gap-2 border border-slate-600 hover:border-blue-400 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-full transition-all"
              >
                <Calendar className="w-5 h-5" />
                Book a Free Call
              </Link>
            </div>
          </div>
        </section>

        {/* Why Work Remotely — Trust Section */}
        <section className="py-16 border-t border-slate-800">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Should You Hire a Remote Developer in {data.name}?
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Working with a remote freelancer gets you agency-quality work at a fraction of local agency prices — without compromising on communication or results.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Save 40–70% vs local agency rates with equal or better quality",
              `Available during ${data.timezone} business hours for real-time communication`,
              "Fixed-price projects — you know the total cost before work starts",
              "Video calls, async updates, and daily check-ins — you're never out of the loop",
              "All code delivered with documentation and full ownership transfer",
              "Post-launch support included — I don't disappear after deployment",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{point}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Top Industries for this Market */}
        {topIndustries.length > 0 && (
          <section className="py-16 border-t border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-4">
              What are the Popular Industries for Web Development in {data.name}?
            </h2>
            <p className="text-gray-400 mb-10">
              These are the types of service businesses I most commonly work with in the {data.name} market.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {topIndustries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/services/${industry.slug}`}
                  className="group flex items-center gap-4 bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all"
                >
                  <span className="text-3xl">{industry.emoji}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-white">{industry.name}</p>
                    <p className="text-gray-400 text-sm">{industry.tagline}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Remote Process */}
        <section className="py-16 border-t border-slate-800">
          <h2 className="text-3xl font-bold text-white mb-4">
            How Does My Remote Development Process Work?
          </h2>
          <p className="text-gray-400 mb-10">
            A streamlined process built for remote collaboration — clear, fast, and stress-free.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {remoteProcess.map((step) => (
              <div
                key={step.step}
                className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6"
              >
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-blue-400 font-bold">{step.step}</span>
                </div>
                <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cross links to other locations */}
        <section className="py-10 border-t border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg font-semibold text-white">I Also Work With Clients In</h2>
          </div>
          <Link
            href="/hire"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            View all locations <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* Final CTA */}
        <section className="py-8 mb-8">
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20 rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start? Let&apos;s Talk.
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Book a free 30-minute call. I&apos;ll learn about your business, explain my process, and give you a clear quote — no obligation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/hire-me#book-a-call"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Book a Free Call
              </Link>
              <Link
                href="/hire-me"
                className="inline-flex items-center gap-2 border border-slate-600 hover:border-blue-400 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-full transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Send Project Details
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

import Container from "@/component/ui/Container";
import ReButton from "@/component/Button/ReButton";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Target, Rocket, Lightbulb, UserCheck, Calendar, Quote } from "lucide-react";
import { Metadata } from "next";
import Script from "next/script";

interface CaseStudy {
  title: string;
  category: string;
  description: string;
  challenge: string;
  strategy: string;
  result: string;
  metrics: { label: string; value: string }[];
  results: string[];
}

const caseStudiesData: Record<string, CaseStudy> = {
  "roofing-seo-success": {
    title: "Roofing Business SEO Transformation",
    category: "SEO & Digital Marketing",
    description: "How we turned a struggling local roofing contractor into the city's top-ranked service provider.",
    challenge: "The client was relying entirely on expensive word-of-mouth and paid leads. Their website was outdated, not mobile-friendly, and didn't rank for any high-intent keywords in their local area.",
    strategy: "We implemented a comprehensive local SEO strategy, including GMB optimization, service-specific landing pages, and a high-performance Next.js website. We focused on conversion rate optimization (CRO) to ensure traffic turned into phone calls.",
    result: "Within 6 months, the client saw a massive influx of organic leads. They moved from page 5 to #1 for all major keywords, resulting in a sustainable lead generation machine that outshined all local competitors.",
    metrics: [
      { label: "Organic Leads", value: "+215%" },
      { label: "Keyword Rankings", value: "#1" },
      { label: "CPA Reduction", value: "40%" },
    ],
    results: [
      "Secured #1 spot for 'Roofing Contractors [City]'",
      "Increased website conversion rate from 1.2% to 8.5%",
      "Generated over 50+ qualified phone leads per month",
      "Built a custom review automation system to maintain reputation"
    ],
  },
  "ecommerce-transformation": {
    title: "E-commerce Performance Optimization",
    category: "Web Development",
    description: "Rebuilding a legacy storefront for maximum speed and conversion.",
    challenge: "A lifestyle brand was losing 30% of potential customers due to slow page loads and a confusing mobile checkout process. Their legacy PHP platform was impossible to scale.",
    strategy: "We migrated the storefront to a headless architecture using Next.js and Shopify. We implemented server-side rendering (SSR) and image optimization to achieve near-instant load times across all devices.",
    result: "The new site delivered a seamless shopping experience. Bounce rates dropped significantly, and the lightning-fast checkout process led to an immediate increase in average order value (AOV).",
    metrics: [
      { label: "Load Time", value: "-45%" },
      { label: "Conversion Rate", value: "+12%" },
      { label: "Lighthouse Score", value: "100" },
    ],
    results: [
      "Achieved sub-second page transitions",
      "Migrated 10k+ products with zero SEO downtime",
      "Implemented a custom AI-driven product recommendation engine",
      "Reduced server costs by 60% through edge computing"
    ],
  },
  "dental-booking-system": {
    title: "Dental Clinic Booking System",
    category: "Full Stack Development",
    description: "Automating patient intake and reducing administrative overhead.",
    challenge: "A busy dental clinic was losing hours every day to manual appointment scheduling and phone follow-ups. Their existing software didn't allow for real-time online booking.",
    strategy: "We developed a custom web-based booking portal that integrates directly with their practice management software. We added automated SMS/Email reminders and a digital intake form system.",
    result: "The clinic's front desk staff saved over 15 hours a week. Patient satisfaction scores soared as people could now book appointments 24/7 without waiting on hold.",
    metrics: [
      { label: "Staff Time Saved", value: "15h/week" },
      { label: "Online Bookings", value: "+50%" },
      { label: "Missed Apps", value: "-30%" },
    ],
    results: [
      "Zero double-booking errors since launch",
      "Integrated secure HIPAA-compliant patient messaging",
      "Automated insurance verification workflow",
      "Launched a custom patient portal for treatment plans"
    ],
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const study = caseStudiesData[params.slug];
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} | Hasan Ali Case Study`,
    description: study.description,
    openGraph: {
      title: study.title,
      description: study.description,
      type: "article",
      authors: ["Hasan Ali"],
    },
  };
}

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const study = caseStudiesData[params.slug];

  if (!study) {
    return (
      <div className="min-h-screen bg-[#0f0715] text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4 text-gray-500">Case Study Not Found</h1>
        <Link href="/case-study">
          <ReButton title="Browse All Case Studies" icon={<ArrowLeft className="w-4 h-4" />} />
        </Link>
      </div>
    );
  }

  return (
    <>
    <div className="min-h-screen bg-[#0f0715] text-white selection:bg-blue-500/30 pb-20">
      {/* Dynamic Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link href="/case-study" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors mb-12 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-bold uppercase tracking-widest">Back to All Stories</span>
            </Link>
            
            <div className="mb-6">
              <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-bold text-blue-400 uppercase tracking-widest">
                {study.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
              {study.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-medium mb-12">
              {study.description}
            </p>

            {/* AI SEO: Quick Summary / Definition Block */}
            <div className="bg-blue-500/5 border border-blue-500/10 p-8 rounded-[2.5rem] mb-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" /> Quick Summary
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
                {study.title} focused on {study.category.toLowerCase()}. By implementing strategic {study.strategy.split('.')[0].toLowerCase()}, we achieved a {study.metrics[0].value} increase in {study.metrics[0].label.toLowerCase()}, transforming their digital presence into a high-ROI lead generation engine.
              </p>
            </div>

            {/* Metric Overview Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16">
              {study.metrics.map((metric, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                  <div className="text-3xl md:text-4xl font-black text-blue-400 mb-2 tracking-tight">{metric.value}</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="max-w-4xl mx-auto py-20">
          <div className="grid gap-20">
            {/* The Challenge */}
            <section className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/20">
                  <Target className="w-6 h-6 text-red-400" />
                </div>
                <h2 className="text-3xl font-bold uppercase tracking-tight">The Challenge</h2>
              </div>
              <p className="text-lg text-gray-400 leading-relaxed indent-0 italic border-l-2 border-red-500/30 pl-8">
                {study.challenge}
              </p>
            </section>

            {/* The Strategy */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20">
                  <Lightbulb className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold uppercase tracking-tight">The Strategy</h2>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {study.strategy}
                </p>
              </div>
            </section>

            {/* Detailed Results List */}
            <section>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20">
                  <Rocket className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-3xl font-bold uppercase tracking-tight">Outcome & Results</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {study.results.map((result, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                    <p className="font-medium text-gray-200">{result}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-10 bg-blue-600/10 rounded-[3rem] border border-blue-500/20">
                <h3 className="text-2xl font-bold mb-4 text-blue-100">The Final Word</h3>
                <p className="text-lg text-gray-300 leading-relaxed italic">
                  &quot;{study.result}&quot;
                </p>
              </div>
            </section>

            {/* AI SEO: Expert Review / Authority Signal */}
            <section className="border-t border-white/5 pt-20">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <UserCheck className="w-6 h-6 text-blue-400" />
                    <h3 className="text-xl font-bold uppercase tracking-tight">Expert Strategy Review</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    As a specialist in {study.category.toLowerCase()}, I designed this strategy to address technical bottle-necks while maximizing local market penetration. The results were verified via Google Analytics and Client CRM data.
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="font-bold text-white uppercase tracking-wider text-sm">Hasan Ali</span>
                      <span className="text-xs text-blue-400 font-bold uppercase tracking-widest">Full-Stack Developer & SEO Specialist</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-64 bg-blue-500/5 border border-blue-500/10 p-8 rounded-[2.5rem]">
                  <div className="flex items-center gap-3 mb-4 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">Last Updated</span>
                  </div>
                  <time className="text-lg font-bold text-white">May 20, 2024</time>
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-2">Verification</div>
                    <div className="text-xs text-emerald-400 font-bold uppercase">100% Data Verified</div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer CTA */}
          <div className="mt-32 pt-20 border-t border-white/5 text-center">
            <h2 className="text-3xl font-bold mb-8">Want results like these?</h2>
            <div className="flex justify-center gap-4">
              <Link href="/hire-me">
                <ReButton title="Let's Transform Your Business" className="rounded-full h-14 px-10 text-lg shadow-xl shadow-blue-500/20" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
      {/* AI SEO: JSON-LD Structured Data */}
      <Script
        id="case-study-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": study.title,
            "description": study.description,
            "category": study.category,
            "author": {
              "@type": "Person",
              "name": "Hasan Ali",
              "url": "https://mdhasanalikhan.vercel.app"
            },
            "datePublished": "2024-05-01",
            "dateModified": "2024-05-20",
            "publisher": {
              "@type": "Organization",
              "name": "Hasan Ali Portfolio",
              "logo": {
                "@type": "ImageObject",
                "url": "https://mdhasanalikhan.vercel.app/og-cover.jpg"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://mdhasanalikhan.vercel.app/case-study/${params.slug}`
            },
            "articleBody": `${study.challenge} ${study.strategy} ${study.result}`
          })
        }}
      />
    </>
  );
}

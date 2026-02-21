"use client";

import Link from "next/link";
import Container from "@/component/ui/Container";
import { Industry } from "@/data/industries";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  ChevronDown,
  Zap,
  Sparkles,
  Target,
  Rocket,
  ShieldCheck,
  BriefcaseBusiness,
} from "lucide-react";
import { useState } from "react";
import ReButton from "@/component/Button/ReButton";

interface Props {
  data: Industry;
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#8ac9f4]/20 rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 transition-all duration-300 hover:border-[#8ac9f4]/40">
      <button
        className="w-full flex items-center justify-between p-6 text-left transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-white/90 pr-4">{question}</span>
        <div className={`p-2 rounded-full transition-all duration-300 ${open ? 'bg-blue-500/20 rotate-180' : 'bg-white/5'}`}>
          <ChevronDown className={`w-5 h-5 ${open ? 'text-blue-400' : 'text-gray-400'}`} />
        </div>
      </button>
      {open && (
        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function IndustryPageClient({ data }: Props) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="min-h-screen bg-[#0f0715] text-white selection:bg-blue-500/30">
      <Container>
        {/* Breadcrumb */}
        <nav className="pt-8 pb-2 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <span className="text-gray-700">/</span>
          <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link>
          <span className="text-gray-700">/</span>
          <span className="text-blue-400/80">{data.name}</span>
        </nav>

        {/* Hero */}
        <section className="py-20 md:py-32 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
          
          <div className="max-w-5xl">
            <div className="mb-10">
              <ReButton
                title="Service Excellence"
                variant="outline"
                icon={<Sparkles className="w-5 h-5 text-blue-400" />}
                className="h-[45px] rounded-full px-6"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-[1.2] tracking-tight">
              Web Solutions for
              <span className="relative inline-block py-2 ml-4">
                <span className="relative z-10 tracking-wider text-blue-100 uppercase">{data.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/15 to-transparent rounded-lg transform -skew-x-12"></div>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-12 max-w-2xl">
              {data.heroSubtitle}
            </p>

            {/* Stat Row */}
            <div className="flex flex-wrap items-center gap-8 mb-16">
              <div className="bg-gradient-to-br from-white/10 to-transparent border border-[#8ac9f4]/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                    <Target className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white leading-none mb-1">{data.stat.value}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">{data.stat.label}</div>
                  </div>
                </div>
              </div>

              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0f0715] bg-slate-800 flex items-center justify-center text-xs font-bold text-blue-300">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-[#0f0715] bg-blue-600 flex items-center justify-center text-xs font-bold text-white">
                  +25
                </div>
              </div>
              <p className="text-sm text-gray-500 font-medium">Trusted by local partners</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-6">
              <Link href="/hire-me">
                <ReButton
                  title={data.cta}
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="w-[320px] h-[55px] rounded-full text-lg"
                />
              </Link>
              <Link href="/hire-me#book-a-call">
                <ReButton
                  variant="outline"
                  title="Book a Free Call"
                  icon={<Calendar className="w-5 h-5" />}
                  className="w-[320px] h-[55px] rounded-full text-lg border-white/10"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center flex flex-col items-center justify-center mb-16">
            <ReButton
              title="Market Challenges"
              variant="outline"
              icon={<ShieldCheck className="w-5 h-5" />}
              className="h-[45px] rounded-full mb-8"
            />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Outperforming the
              <span className="relative inline-block py-2 ml-4">
                <span className="relative z-10 tracking-wider">Competition</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/20 to-transparent rounded-lg transform -skew-x-12"></div>
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Every industry has its unique hurdles. I specialize in identifying and fixing the specific bottlenecks that keep {data.name.toLowerCase()} businesses from scaling online.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 px-4 md:px-0">
            {data.painPoints.map((point, i) => (
              <div
                key={i}
                className="group relative bg-[#1a2333]/40 border border-[#8ac9f4]/20 rounded-2xl p-8 hover:border-[#8ac9f4]/50 hover:bg-[#1a2333]/60 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-500/20 transition-all">
                  <Rocket className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-blue-300 transition-colors uppercase tracking-tight">{point.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed relative z-10">{point.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-24 border-t border-white/5 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight">
                Full-Service
                <span className="relative inline-block py-2 ml-4">
                  <span className="relative z-10 tracking-wider">Execution</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/20 to-transparent rounded-lg transform -skew-x-12"></div>
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                When you partner with me, you get a comprehensive package designed to win. No fluff, just results for your {data.name.toLowerCase()} firm.
              </p>
              
              <div className="space-y-4">
                {data.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-2xl p-5 hover:border-[#8ac9f4]/30 transition-all">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-[#1a2333]/60 border border-white/10 rounded-2xl p-10 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-white mb-8 tracking-tight uppercase">
                  Technical Advantage
                </h3>
                <div className="space-y-5">
                  {data.techReasons.map((reason, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shadow-[0_0_8px_#3b82f6]"></div>
                      <span className="text-gray-300 leading-relaxed text-[13px] font-medium">{reason}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-8 border-t border-white/10 text-center">
                  <Link href="/hire-me">
                    <ReButton
                      title="Request a Tech Consultation"
                      className="w-full h-[50px] rounded-full text-sm"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center flex flex-col items-center justify-center mb-20">
            <ReButton
              title="FAQ Resource"
              variant="outline"
              icon={<Zap className="w-5 h-5 text-yellow-400" />}
              className="h-[45px] rounded-full mb-8"
            />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Common
              <span className="relative inline-block py-2 ml-4">
                <span className="relative z-10 tracking-wider">Questions</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/20 to-transparent rounded-lg transform -skew-x-12"></div>
              </span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {data.faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* Inter-Industry Links */}
        <section className="py-24 border-t border-white/5 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Versatility Across Markets
          </h2>
          <p className="text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed">
            I bring specialized expertise to diverse service industries. Not in {data.name}? No problem.
          </p>
          <Link href="/services">
            <ReButton
              variant="outline"
              title="Explore All Industries"
              icon={<ArrowRight className="w-4 h-4" />}
              className="rounded-full px-10 h-[50px] border-white/10 hover:border-blue-500/40"
            />
          </Link>
        </section>

        <section className="pb-32">
          <div className="relative overflow-hidden bg-[#1a2333]/30 border border-[#8ac9f4]/20 rounded-3xl p-12 md:p-24 text-center group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                Scale Your
                <span className="relative inline-block py-2 ml-4">
                  <span className="relative z-10 tracking-wider uppercase">{data.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/15 to-transparent rounded-lg transform -skew-x-12"></div>
                </span>
                Presence
              </h2>
              <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                Ditch generic templates for a high-performance custom solution.
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <Link href="/hire-me">
                  <ReButton
                    title={`Build my ${data.name} Site`}
                    icon={<BriefcaseBusiness className="w-6 h-6" />}
                    className="w-[350px] h-[65px] rounded-full text-lg shadow-2xl shadow-blue-500/30"
                  />
                </Link>
                <Link href="/services">
                  <ReButton
                    variant="outline"
                    title="See Other Industries"
                    icon={<ArrowRight className="w-5 h-5" />}
                    className="w-[320px] h-[65px] rounded-full text-lg border-white/20"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Container>
      </div>
    </>
  );
}

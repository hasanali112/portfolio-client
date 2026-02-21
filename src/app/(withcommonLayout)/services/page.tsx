import { Metadata } from "next";
import Link from "next/link";
import Container from "@/component/ui/Container";
import { industries } from "@/data/industries";
import { ArrowRight, Globe, Sparkles, Rocket, Briefcase, Target, BriefcaseBusiness } from "lucide-react";
import ReButton from "@/component/Button/ReButton";

export const metadata: Metadata = {
  title: "Web Development for Service Businesses | Hasan Ali",
  description:
    "I build custom, high-converting websites for every type of service business — plumbers, roofers, dentists, restaurants, lawyers, contractors, and more. Pick your industry to see exactly what I deliver.",
  keywords: [
    "web developer for service businesses",
    "website for plumbers",
    "website for roofers",
    "website for dentists",
    "website for contractors",
    "freelancer web developer",
    "hotlancer",
    "hire web developer",
  ],
  openGraph: {
    title: "Web Development for Service Businesses | Hasan Ali",
    description:
      "Custom websites for plumbers, roofers, dentists, restaurants, contractors, and more.",
    url: "https://mdhasanalikhan.vercel.app/services",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 628, alt: "Hasan Ali - Web Developer for Service Businesses" }],
    type: "website",
  },
  alternates: { canonical: "https://mdhasanalikhan.vercel.app/services" },
};

export default function ServicesHubPage() {
  return (
    <div className="min-h-screen bg-[#0f0715] text-white selection:bg-blue-500/30">
      <Container>
        <div className="py-20 md:py-32">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
            
            <div className="mb-8 flex justify-center">
              <ReButton
                title="Industries I Serve"
                variant="outline"
                icon={<Globe className="w-5 h-5 text-blue-400" />}
                className="h-[45px] rounded-full px-6"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-[1.2]">
              Web Development for{" "}
              <span className="relative inline-block py-2 ml-4">
                <span className="relative z-10 tracking-wider text-blue-100 uppercase">Service Businesses</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/15 to-transparent rounded-lg transform -skew-x-12"></div>
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto font-medium">
              High-performance, locally-optimized digital solutions tailored to your unique service model.
            </p>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/services/${industry.slug}`}
                className="group relative bg-[#1a2333]/40 border border-[#8ac9f4]/20 rounded-2xl p-8 hover:border-[#8ac9f4]/50 hover:bg-[#1a2333]/60 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-all">
                    <Briefcase className="w-6 h-6 text-blue-400" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-2 transition-all duration-300" />
                </div>

                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors uppercase tracking-tight">{industry.name}</h2>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                  {industry.tagline}
                </p>
                
                <div className="inline-flex items-center gap-2 text-blue-400 font-bold text-[10px] tracking-[0.2em] uppercase group-hover:text-blue-300 transition-colors">
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>

          {/* Don't See Your Industry */}
          <div className="relative overflow-hidden bg-[#1a2333]/30 border border-[#8ac9f4]/20 rounded-3xl p-12 md:p-20 text-center group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                Don&apos;t See Your{" "}
                <span className="relative inline-block py-2 ml-4">
                  <span className="relative z-10 tracking-wider">Industry?</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/15 to-transparent rounded-lg transform -skew-x-12"></div>
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                If your specific industry isn&apos;t listed, I can still craft a custom strategy that works for you.
              </p>
              
              <div className="flex justify-center">
                <Link href="/hire-me">
                  <ReButton
                    title="Let's Talk About Your Business"
                    icon={<BriefcaseBusiness className="w-5 h-5" />}
                    className="w-[350px] h-[60px] rounded-full text-lg shadow-2xl shadow-blue-500/30"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

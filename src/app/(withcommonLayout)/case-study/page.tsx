import Container from "@/component/ui/Container";
import ReButton from "@/component/Button/ReButton";
import { Sparkles, BarChart3, Globe } from "lucide-react";
import CaseStudyCard from "./_component/CaseStudyCard";

export const metadata = {
  title: "Case Studies | Hasan Ali - Transforming Business with Code",
  description: "Detailed analysis and results of web development and SEO projects for service businesses.",
};

const caseStudies = [
  {
    title: "Roofing Business SEO Transformation",
    category: "SEO & Digital Marketing",
    description: "Complete digital overhaul for a local roofing contractor, focusing on local SEO and high-conversion landing pages.",
    results: [
      "215% increase in monthly phone leads",
      "Ranked #1 for 'Roofing Contractors [City]'",
      "40% reduction in customer acquisition cost"
    ],
    slug: "roofing-seo-success",
  },
  {
    title: "E-commerce Performance Optimization",
    category: "Web Development",
    description: "Rebuilding a legacy storefront with Next.js and Headless CMS to improve core web vitals and user experience.",
    results: [
      "45% faster page load speed",
      "12% increase in checkout conversion",
      "Perfect 100/100 Lighthouse performance score"
    ],
    slug: "ecommerce-transformation",
  },
  {
    title: "Dental Clinic Booking System",
    category: "Full Stack Development",
    description: "Custom automated booking and patient management system integrated with existing healthcare CRM.",
    results: [
      "50% increase in online appointments",
      "Automated 80% of patient follow-ups",
      "Zero double-booking errors in first 12 months"
    ],
    slug: "dental-booking-system",
  },
];

const CaseStudyPage = () => {
  return (
    <div className="min-h-screen bg-[#0f0715] text-white selection:bg-blue-500/30 pb-20">
      <Container>
        <div className="pt-32 pb-20">
          {/* Header Section - Google Style */}
          <div className="text-center max-w-4xl mx-auto mb-20 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
            
            <div className="mb-8 flex justify-center">
              <ReButton
                title="Case Studies"
                variant="outline"
                icon={<BarChart3 className="w-5 h-5 text-blue-400" />}
                className="h-[45px] rounded-full px-6"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
              Results-Driven{" "}
              <span className="relative inline-block py-2 ml-2">
                <span className="relative z-10 tracking-wider text-blue-100 uppercase italic">Solutions</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-lg transform -skew-x-12"></div>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium">
              Explore how I help service businesses scale their digital presence through strategic development and data-backed optimization.
            </p>
          </div>

          {/* Grid Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-24 p-12 relative overflow-hidden bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/5 border border-white/10 rounded-[3rem] text-center">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Ready to see similar results?</h2>
              <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                Every business is unique. Let&apos;s discuss how I can tailor a digital strategy to help you achieve your specific growth targets.
              </p>
              <div className="flex justify-center gap-4">
                <ReButton 
                  title="Schedule a Strategy Call" 
                  className="rounded-full h-14 px-10 text-lg shadow-xl shadow-blue-500/20"
                />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Sparkles className="w-32 h-32 text-blue-400" />
            </div>
            <div className="absolute bottom-0 left-0 p-10 opacity-10 flex gap-4">
              <Globe className="w-24 h-24 text-blue-400" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CaseStudyPage;

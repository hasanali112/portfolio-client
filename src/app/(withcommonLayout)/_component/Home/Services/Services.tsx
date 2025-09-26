import Container from "@/component/ui/Container";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] py-20 px-4">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <button className="inline-flex items-center gap-2 px-6 py-3 mb-8 text-gray-400 border border-gray-400/30 rounded-full hover:bg-gray-400/10 transition-colors">
            <span className="text-xs">&lt;/&gt;</span>
            <span>My Service Space</span>
          </button>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Services That Drive
            <span className="relative inline-block py-2 ml-2">
              <span className="relative z-10 tracking-wider">Results</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/20 to-transparent rounded-lg transform -skew-x-12"></div>
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, I deliver comprehensive solutions that
            help businesses thrive in the digital world. Explore my range of
            services designed to transform your ideas into powerful digital
            experiences.
          </p>

          <button className="mt-8 px-6 py-3 rounded-full border border-gray-500/30 text-gray-400 text-sm flex items-center gap-2 mx-auto hover:border-gray-400/50 hover:bg-gray-500/5 transition-all">
            <Sparkles className="w-4 h-4" />
            <span>Discover My Professional Services & Solutions</span>
          </button>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-lg p-8 relative overflow-hidden hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 cursor-pointer group">
            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Crafting Responsive & Engaging Websites
              </h3>
              <p className="text-gray-300 mb-6">
                Transform your digital presence with custom websites that
                convert visitors into customers.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-gray-200">
                  <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>Custom Web Design & Development</span>
                </li>
                <li className="flex items-start gap-3 text-gray-200">
                  <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>E-commerce Solutions (Shopify, WooCommerce)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-200">
                  <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>CMS Integration (WordPress, Headless CMS)</span>
                </li>
              </ul>
              <button className="border border-gray-400 text-gray-400 px-6 py-2.5 rounded-full hover:bg-gray-400 hover:text-gray-950 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-lg p-8 relative overflow-hidden hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 cursor-pointer group">
            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Building Intuitive & Powerful Mobile Applications
              </h3>
              <p className="text-gray-300 mb-6">
                Reach your audience anywhere with high-performance mobile apps
                for iOS and Android.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-gray-200">
                  <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>React Native Cross-Platform Development</span>
                </li>
                <li className="flex items-start gap-3 text-gray-200">
                  <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>JavaScript/TypeScript Implementation</span>
                </li>
                <li className="flex items-start gap-3 text-gray-200">
                  <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>UI/UX Design for Mobile</span>
                </li>
              </ul>
              <button className="border border-gray-400 text-gray-400 px-6 py-2.5 rounded-full hover:bg-gray-400 hover:text-gray-950 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 border border-gray-400 text-gray-400 px-8 py-3 rounded-full hover:bg-gray-400 hover:text-gray-950 transition-colors">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Services;

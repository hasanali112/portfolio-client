import ReButton from "@/component/Button/ReButton";
import Container from "@/component/ui/Container";
import {
  CheckCircle,
  ArrowRight,
  Sparkles,
  HandCoins,
  BriefcaseBusiness,
} from "lucide-react";
import { getAllServices } from "@/services/servicesService";
import { IService } from "@/types/service";
import Link from "next/link";

const Services = async () => {
  let services: IService[] = [];

  try {
    const response = await getAllServices();
    services = response?.data?.slice(0, 4) || []; // Get first 4 services
  } catch (error) {
    console.error("Failed to fetch services:", error);
  }

  return (
    <section className="bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] py-20 px-4">
      <Container>
        {/* Header */}
        <div className="text-center flex flex-col items-center justify-center md-10 md:mb-16">
          <ReButton
            title="My Service Space"
            variant="outline"
            icon={<HandCoins className="w-5 h-5" />}
            className="h-[45px] rounded-full mb-8"
          />

          <h1 className="text-xl md:text-5xl font-bold text-white mb-6">
            Services That Drive
            <span className="relative inline-block py-2 ml-2">
              <span className="relative z-10 tracking-wider">Results</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/20 to-transparent rounded-lg transform -skew-x-12"></div>
            </span>
          </h1>

          <p className="text-gray-400 text-lg hidden md:block max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, I deliver comprehensive solutions that
            help businesses thrive in the digital world. Explore my range of
            services designed to transform your ideas into powerful digital
            experiences.
          </p>

          <button className="mt-8 px-6 py-3 hidden  rounded-full border border-gray-500/30 text-gray-400 text-sm md:flex items-center gap-2 mx-auto hover:border-gray-400/50 hover:bg-gray-500/5 transition-all">
            <Sparkles className="w-4 h-4" />
            <span>Discover My Professional Services & Solutions</span>
          </button>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-md border border-[#8ac9f4]/40 rounded-lg p-8 relative overflow-hidden hover:bg-gradient-to-br hover:from-white/10 hover:to-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 cursor-pointer group"
            >
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
              <div className=" flex flex-col">
                {/* Price Header */}
                <div>
                  <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-full py-3 px-4 mb-4">
                    <h1 className="text-left text-white text-md md:text-2xl font-bold">
                      {service.serviceName}
                    </h1>
                  </div>
                </div>

                {/* Features List */}
                <div className="p-1 flex-grow">
                  <ul className="space-y-3">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li
                        key={index}
                        className="flex text-gray-200 items-start gap-3"
                      >
                        <CheckCircle className="w-10 h-10 text-blue-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="flex flex-wrap gap-1 mt-4 justify-center items-center">
          <Link href="/hire-me">
            <ReButton
              title="View All Services"
              icon={<BriefcaseBusiness className="w-5 h-5" />}
              className="h-[45px] rounded-full"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Services;

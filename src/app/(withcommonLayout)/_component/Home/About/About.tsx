import React from "react";
import {
  CheckCircle,
  Code,
  Zap,
  Users,
  Download,
  Sparkles,
} from "lucide-react";
import Container from "@/component/ui/Container";
import { getAbout, getMyBio } from "@/services/aboutService";
import { IAbout } from "@/types/about";

const About = async () => {
  let aboutData;
  try {
    aboutData = await getMyBio();
  } catch (error: any) {
    console.log(error.message);
  }

  const about: IAbout = aboutData;

  return (
    <section className="bg-[#111122] py-16 px-4">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <button className="inline-flex items-center gap-2 px-6 py-3 mb-8 text-gray-400 border border-gray-400/30 rounded-full hover:bg-gray-400/10 transition-colors">
            <span className="text-xs">&lt;/&gt;</span>
            <span>About Me</span>
          </button>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Entrepreneurs
            <span className="relative inline-block py-2 ml-2">
              <span className="relative z-10 tracking-wider">Trust Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/20 to-transparent rounded-lg transform -skew-x-12"></div>
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            {about?.bio}
          </p>

          <button className="mt-8 px-6 py-3 rounded-full border border-gray-500/30 text-gray-400 text-sm flex items-center gap-2 mx-auto hover:border-gray-400/50 hover:bg-gray-500/5 transition-all">
            <Sparkles className="w-4 h-4" />
            <span>Discover My Journey & Expertise</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            {/* Description */}
            <div className="mb-12">
              <p className="text-gray-300 text-lg mb-6">
                I&apos;m{" "}
                <span className="text-white font-semibold">
                  {about?.fullName}
                </span>
                , a {about?.title} specializing in creating powerful digital
                solutions.
              </p>

              <p className="text-gray-300 mb-8">
                Here&apos;s how I work to ensure your success:
              </p>
            </div>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>
                  I Build Websites That Help Your Business Grow Online
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>
                  Responsive Design That Works Perfectly On All Devices
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>
                  SEO-Optimized Solutions To Increase Your Online Visibility
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Full-Stack Development From Concept To Deployment</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>
                  Ongoing Support To Keep Your Website Running Smoothly
                </span>
              </li>
            </ul>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-center">
                <div className="text-gray-400 text-lg font-bold">
                  {about?.yearsOfExperience || "2"}+ Years Experience
                </div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-center">
                <div className="text-gray-400 text-lg font-bold">
                  5+ Projects Delivered
                </div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-center">
                <div className="text-gray-400 text-lg font-bold">
                  100% Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Feature Cards */}
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-4 mb-12">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 cursor-pointer group relative overflow-hidden">
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                <div className="relative z-10">
                  <Code className="w-8 h-8 text-gray-400 mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Modern Tech Stack
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Cutting-edge technologies for future-proof solutions
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 cursor-pointer group relative overflow-hidden">
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                <div className="relative z-10">
                  <Zap className="w-8 h-8 text-gray-400 mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Fast Delivery
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Quick turnaround without compromising on quality
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 cursor-pointer group relative overflow-hidden">
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                <div className="relative z-10">
                  <Users className="w-8 h-8 text-gray-400 mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Client-Focused
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Your vision, brought to life with precision and care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <button className="border border-gray-400 text-gray-400 px-8 py-4 rounded-full font-semibold hover:bg-gray-400 hover:text-gray-950 transition-colors flex items-center gap-2">
            <Users className="w-5 h-5" />
            Schedule a Free Consultation
          </button>
          <button className="border border-gray-400 text-gray-400 px-8 py-4 rounded-full font-semibold hover:bg-gray-400 hover:text-gray-950 transition-colors flex items-center gap-2">
            <Download className="w-5 h-5" />
            View Resume
          </button>
        </div>
      </Container>
    </section>
  );
};

export default About;

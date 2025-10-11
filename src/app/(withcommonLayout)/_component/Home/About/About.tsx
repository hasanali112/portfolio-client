import React from "react";
import {
  CheckCircle,
  Code,
  Zap,
  Users,
  Download,
  Sparkles,
  BadgeInfo,
  UserCog,
} from "lucide-react";
import Container from "@/component/ui/Container";
import { getAbout, getMyBio } from "@/services/aboutService";
import { IAbout } from "@/types/about";
import ReButton from "@/component/Button/ReButton";
import Link from "next/link";

const About = async () => {
  let aboutData;
  try {
    aboutData = await getMyBio();
  } catch (error: any) {
    console.log(error.message);
  }

  const about: IAbout = aboutData;

  return (
    <section id="about" className="bg-[#111122] py-10 md:py-16 px-4">
      <Container>
        <div className="text-center flex flex-col items-center justify-center mb-16">
          <ReButton
            title="About Me"
            variant="outline"
            icon={<UserCog className="w-5 h-5" />}
            className="h-[45px] rounded-full mb-8"
          />
          {/* <button className="inline-flex items-center gap-2 px-4 md:px-6 py-3 mb-8 text-gray-400 border border-gray-400/30 rounded-full hover:bg-gray-400/10 transition-colors">
            <span className="text-xs">&lt;/&gt;</span>
            <span className="text-xs md:text-sm">About Me</span>
          </button> */}

          <h1 className="text-xl md:text-5xl font-bold text-white mb-6">
            Why Entrepreneurs
            <span className="relative inline-block py-2 ml-2">
              <span className="relative z-10 tracking-wider">Trust Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/20 to-transparent rounded-lg transform -skew-x-12"></div>
            </span>
          </h1>

          <p className="text-gray-400 text-lg hidden md:block max-w-3xl mx-auto leading-relaxed">
            {about?.bio}
          </p>
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
            <div className="flex flex-wrap gap-1 items-center justify-center mb-6 md:mb-12">
              <div className="bg-slate-800/50 border border-slate-700 rounded-full px-4 py-3 text-center">
                <div className="text-gray-200 text-sm lg:text-lg font-bold">
                  {about?.yearsOfExperience || "2"}+ Years Experience
                </div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-full px-4 py-3 text-center">
                <div className="text-gray-200 text-sm lg:text-lg font-bold">
                  10+ Delivered
                </div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-full px-4 py-3 text-center">
                <div className="text-gray-200 text-sm lg:text-lg font-bold">
                  100% Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Feature Cards */}
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-4 mb-12">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-2 md:p-6 hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 cursor-pointer group relative overflow-hidden">
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                <div className="relative z-10 flex flex-col items-center md:items-start justify-center">
                  <Code className="w-8 h-8 text-gray-400 mb-4 text-center md:text-start" />
                  <h3 className="text-white text-center md:text-start font-semibold text-lg mb-2">
                    Modern Tech Stack
                  </h3>
                  <p className="text-gray-400 text-center md:text-start text-sm">
                    Cutting-edge technologies for future-proof solutions
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-2 md:p-6 hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 cursor-pointer group relative overflow-hidden">
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                <div className="relative z-10 flex flex-col items-center md:items-start justify-center">
                  <Zap className="w-8 h-8 text-gray-400 mb-4 text-center md:text-start" />
                  <h3 className="text-white text-center md:text-start font-semibold text-lg mb-2">
                    Fast Delivery
                  </h3>
                  <p className="text-gray-400 text-center md:text-start text-sm">
                    Quick turnaround without compromising on quality
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-2 md:p-6 hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 cursor-pointer group relative overflow-hidden">
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                <div className="relative z-10 flex flex-col items-center md:items-start justify-center">
                  <Users className="w-8 h-8 text-gray-400 mb-4 text-center md:text-start" />
                  <h3 className="text-white text-center md:text-start font-semibold text-lg mb-2">
                    Client-Focused
                  </h3>
                  <p className="text-gray-400 text-center md:text-start text-sm">
                    Your vision, brought to life with precision and care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-1 mb-12 justify-center items-center">
          <Link href="/">
            <ReButton
              title="Consultation"
              icon={<Users className="w-5 h-5" />}
              className="h-[45px] rounded-full"
            />
          </Link>

          <Link
            href="https://drive.google.com/file/d/1XoPax6Ms03vpzZTTIH1m8y8-e5Z8gNxi/view?usp=sharing"
            target="_blank"
          >
            <ReButton
              variant="outline"
              title="Resume"
              icon={<Download className="size-4" />}
              className="h-[45px] rounded-full"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default About;

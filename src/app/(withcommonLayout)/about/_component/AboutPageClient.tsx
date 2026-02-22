"use client";

import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  Download,
  PhoneForwarded,
  Code2,
  Zap,
  Users,
  CheckCircle,
  Star,
  Briefcase,
  GraduationCap,
  Calendar,
  Award,
  Github,
  Linkedin,
  User,
  Layers,
} from "lucide-react";
import Container from "@/component/ui/Container";
import ReButton from "@/component/Button/ReButton";
import Link from "next/link";
import Image from "next/image";
import { IAbout } from "@/types/about";
import { ISkill } from "@/types/skill";
import { IExperience } from "@/types/experience";
import { motion } from "framer-motion";
import SkillClient from "../../_component/Home/Skill/SkillClient";

interface Props {
  about: IAbout | null;
  skills: ISkill[];
  experiences: IExperience[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const AboutPageClient = ({ about, skills, experiences }: Props) => {
  const stats = [
    {
      value: `${about?.yearsOfExperience ?? "2"}+`,
      label: "Years Experience",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      value: "10+",
      label: "Projects Delivered",
      icon: <Layers className="w-5 h-5" />,
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      icon: <Star className="w-5 h-5" />,
    },
    {
      value: "5+",
      label: "Technologies Mastered",
      icon: <Code2 className="w-5 h-5" />,
    },
  ];

  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Modern Tech Stack",
      description:
        "Cutting-edge technologies for future-proof solutions",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-Focused",
      description: "Your vision, brought to life with precision and care",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality First",
      description:
        "Clean, scalable code that stands the test of time",
    },
  ];

  const values = [
    "Building websites that help businesses grow online",
    "Responsive design that works perfectly on all devices",
    "SEO-optimized solutions to increase online visibility",
    "Full-stack development from concept to deployment",
    "Ongoing support to keep your website running smoothly",
    "Clean, maintainable, and well-documented code",
  ];

  return (
    <div className="min-h-screen bg-[#0f0715] text-white selection:bg-blue-500/30">
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-purple-600/8 blur-[140px] rounded-full pointer-events-none" />

        <Container>
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              {/* Badge button */}
              <div className="flex justify-center mb-8">
                <ReButton
                  title="About Me"
                  variant="outline"
                  icon={<User className="w-4 h-4" />}
                  className="h-[45px] rounded-full px-6"
                />
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.15]">
                Hi, I&apos;m{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#72c4f2] to-[#e7dbfd]">
                    {about?.fullName ?? "Hasan Ali"}
                  </span>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#057cc5] font-semibold mb-6 tracking-wide">
                {about?.title ?? "MERN Stack Developer"}
              </p>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                {about?.bio ??
                  "I'm a passionate full-stack developer specializing in creating powerful digital solutions that help businesses grow online. With expertise in the MERN stack, I transform ideas into elegant, high-performance web applications."}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <Link href="/hire-me#book-a-call">
                  <ReButton
                    title="Work With Me"
                    icon={<PhoneForwarded className="w-4 h-4" />}
                    className="h-[48px] rounded-full px-8"
                  />
                </Link>
                <Link
                  href="https://drive.google.com/file/d/1XoPax6Ms03vpzZTTIH1m8y8-e5Z8gNxi/view?usp=sharing"
                  target="_blank"
                >
                  <ReButton
                    variant="outline"
                    title="Download CV"
                    icon={<Download className="w-4 h-4" />}
                    className="h-[48px] rounded-full px-8"
                  />
                </Link>
              </div>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  className="bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-md border border-[#8ac9f4]/30 rounded-2xl p-5 text-center group hover:border-[#057cc5]/60 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="flex justify-center mb-2 text-[#057cc5] group-hover:text-[#72c4f2] transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Personal Info + What I Do */}
      <section className="bg-[#111122] py-20 px-4">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Personal Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-[#057cc5] to-[#04376b] rounded-full" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Personal Info
                </h2>
              </div>

              <div className="space-y-4 mb-10">
                {[
                  {
                    icon: <Mail className="w-5 h-5 text-[#057cc5]" />,
                    label: "Email",
                    value: about?.email ?? "hasanali112@example.com",
                    href: `mailto:${about?.email}`,
                  },
                  {
                    icon: <Phone className="w-5 h-5 text-[#057cc5]" />,
                    label: "Phone",
                    value: about?.phone ?? "+880 1XXX-XXXXXX",
                    href: `tel:${about?.phone}`,
                  },
                  {
                    icon: <MapPin className="w-5 h-5 text-[#057cc5]" />,
                    label: "Location",
                    value: about?.location ?? "Bangladesh",
                  },
                  {
                    icon: <Globe className="w-5 h-5 text-[#057cc5]" />,
                    label: "Website",
                    value: about?.website ?? "mdhasanali.vercel.app",
                    href: about?.website ?? "https://mdhasanali.vercel.app",
                  },
                  {
                    icon: <Calendar className="w-5 h-5 text-[#057cc5]" />,
                    label: "Status",
                    value: about?.currentStatus ?? "Available for hire",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/4 border border-white/8 hover:border-[#8ac9f4]/40 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 uppercase tracking-widest mb-0.5">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-200 hover:text-[#72c4f2] transition-colors text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-gray-200 text-sm">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <Link
                  href="https://github.com/hasanali112"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <div className="border border-[#2b3441] bg-[#1f2937] text-white rounded-full w-[45px] h-[45px] inline-flex justify-center items-center hover:bg-[#027bc2] hover:border-[#027bc2] transition-all duration-300">
                    <Github className="w-5 h-5" />
                  </div>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/md-hasan-ali-khan/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <div className="border border-[#2b3441] bg-[#1f2937] text-white rounded-full w-[45px] h-[45px] inline-flex justify-center items-center hover:bg-[#027bc2] hover:border-[#027bc2] transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </div>
                </Link>
              </div>
            </motion.div>

            {/* My Values */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-[#057cc5] to-[#04376b] rounded-full" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  What I Stand For
                </h2>
              </div>

              <ul className="space-y-3">
                {values.map((value, i) => (
                  <motion.li
                    key={i}
                    custom={i * 0.5}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/4 transition-colors duration-200 group"
                  >
                    <CheckCircle className="w-5 h-5 text-[#057cc5] group-hover:text-[#72c4f2] flex-shrink-0 mt-0.5 transition-colors" />
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {value}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section className="bg-[#0f0715] py-20 px-4 relative overflow-hidden">
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/8 blur-[120px] rounded-full pointer-events-none" />

        <Container>
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex justify-center mb-6">
              <ReButton
                title="Technical Skills"
                variant="outline"
                icon={<Code2 className="w-4 h-4" />}
                className="h-[45px] rounded-full px-6"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Skills &{" "}
              <span className="relative inline-block">
                <span className="relative z-10 tracking-wider">Expertise</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/20 to-transparent rounded-lg transform -skew-x-12" />
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use daily to deliver exceptional results.
            </p>
          </motion.div>

          <div className="mt-10">
            <SkillClient skills={skills} />
          </div>
        </Container>
      </section>

      {/* Why Work With Me */}
      <section className="bg-[#111122] py-20 px-4">
        <Container>
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex justify-center mb-6">
              <ReButton
                title="Why Choose Me"
                variant="outline"
                icon={<Award className="w-4 h-4" />}
                className="h-[45px] rounded-full px-6"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Why Entrepreneurs{" "}
              <span className="relative inline-block">
                <span className="relative z-10 tracking-wider">Trust Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/20 to-transparent rounded-lg transform -skew-x-12" />
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I combine technical expertise with a deep understanding of
              business goals to deliver impactful solutions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-[#8ac9f4]/40 rounded-xl p-6 hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center mb-4 text-[#057cc5] group-hover:text-[#72c4f2] transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Journey / Education */}
      <section className="bg-[#0f0715] py-20 px-4 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-600/6 blur-[140px] rounded-full pointer-events-none" />
        <Container>
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex justify-center mb-6">
              <ReButton
                title="My Journey"
                variant="outline"
                icon={<GraduationCap className="w-4 h-4" />}
                className="h-[45px] rounded-full px-6"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Education &{" "}
              <span className="relative inline-block">
                <span className="relative z-10 tracking-wider">Background</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/20 to-transparent rounded-lg transform -skew-x-12" />
              </span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                year: "2020–2024",
                title: "BSc in Rajshahi University",
                org: "Rajshahi University",
                desc:"",
                icon: <GraduationCap className="w-5 h-5" />,
              },
              ...experiences.filter(Boolean).map(exp => ({
                year: `${new Date(exp.startDate).getFullYear()} - ${exp.isCurrentJob ? 'Present' : new Date(exp.endDate || '').getFullYear()}`,
                title: exp.jobTitle,
                org: exp.companyName,
                desc: exp.description || "Contributed to impactful projects and collaborated with cross-functional teams.",
                icon: <Briefcase className="w-5 h-5" />,
              }))
            ].map((item, i, arr) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex gap-6 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#057cc5] to-[#04376b] flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-500/20">
                    {item.icon}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-px flex-1 mt-2 bg-gradient-to-b from-[#057cc5]/50 to-transparent" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-xs text-[#057cc5] font-semibold tracking-widest uppercase mb-1 block">
                    {item.year}
                  </span>
                  <h3 className="text-white font-bold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">{item.org}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#111122] py-20 px-4">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative overflow-hidden bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/5 border border-white/10 rounded-[3rem] p-12 text-center"
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Build Something{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#72c4f2] to-[#e7dbfd]">
                  Amazing?
                </span>
              </h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Whether you need a stunning website, a full-featured web app, or
                a strategic digital partner — I&apos;m here to make it happen.
                Let&apos;s connect and bring your vision to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/hire-me#book-a-call">
                  <ReButton
                    title="Book a Free Call"
                    icon={<PhoneForwarded className="w-4 h-4" />}
                    className="h-14 rounded-full px-10 text-base shadow-xl shadow-blue-500/20"
                  />
                </Link>
                <Link href="/projects">
                  <ReButton
                    variant="outline"
                    title="View My Work"
                    icon={<Layers className="w-4 h-4" />}
                    className="h-14 rounded-full px-10 text-base"
                  />
                </Link>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <Code2 className="w-48 h-48 text-blue-400" />
            </div>
            <div className="absolute bottom-0 left-0 p-10 opacity-5">
              <Star className="w-32 h-32 text-blue-400" />
            </div>
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default AboutPageClient;

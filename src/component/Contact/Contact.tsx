import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";
import ContactForm from "./ContactForm";
import Container from "../ui/Container";

async function getContactInfo() {
  try {
    const res = await fetch(
      `http://localhost:5000/api/v1/contact/info/details`,
      {
        cache: "force-cache",
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.data;
  } catch (error) {
    return null;
  }
}

const Contact = async () => {
  const contactInfo = await getContactInfo();

  return (
    <div id="contact" className="min-h-screen bg-[#111122] py-20 ">
      <Container>
        <div className="text-center mb-16">
          <button className="inline-flex items-center gap-2 px-6 py-3 mb-8 text-gray-300 border border-gray-400/50 rounded-full hover:bg-emerald-400/10 transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Let&apos;s Connect
          </button>

          <h1 className="text-4xl md:text-5xl  font-bold text-white mb-6">
            Have a Project in Mind?
            <span className="relative inline-block py-2 ">
              <span className="relative z-10 tracking-wider ml-1">
                Let&apos;s Talk!
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/20 to-transparent rounded-lg transform -skew-x-12"></div>
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />

          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 shadow-2xl border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-cyan-500/10 p-3 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Phone className="text-cyan-400 w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium break-all">
                      {contactInfo?.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-cyan-500/10 p-3 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Mail className="text-cyan-400 w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium break-all">
                      {contactInfo?.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-cyan-500/10 p-3 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <MapPin className="text-cyan-400 w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">
                      {contactInfo &&
                        `${contactInfo.address}, ${contactInfo.city}, ${contactInfo.country}`}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-cyan-500/10 p-3 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Clock className="text-cyan-400 w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-400 text-sm">Availability</p>
                    <p className="text-white font-medium">24/7 Service</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 shadow-2xl border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">
                Connect with Me
              </h2>

              <div className="flex gap-4">
                {contactInfo?.socialLinks?.github && (
                  <a
                    href={contactInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700/50 hover:bg-cyan-500 p-4 rounded-lg transition-all duration-300 group"
                    aria-label="GitHub"
                  >
                    <Github className="text-gray-300 group-hover:text-white w-6 h-6" />
                  </a>
                )}
                {contactInfo?.socialLinks?.linkedin && (
                  <a
                    href={contactInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700/50 hover:bg-cyan-500 p-4 rounded-lg transition-all duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="text-gray-300 group-hover:text-white w-6 h-6" />
                  </a>
                )}
                {contactInfo?.socialLinks?.facebook && (
                  <a
                    href={contactInfo.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700/50 hover:bg-cyan-500 p-4 rounded-lg transition-all duration-300 group"
                    aria-label="Facebook"
                  >
                    <Facebook className="text-gray-300 group-hover:text-white w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;

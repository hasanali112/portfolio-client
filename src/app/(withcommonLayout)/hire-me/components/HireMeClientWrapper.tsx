"use client";
import { useState } from "react";
import { useCreateClientMessage } from "@/hooks/useClientMessages";
import ProjectDetailsForm from "../../_component/HireMe/ProjectDetailsForm";
import FreelancingProfilesSection from "../../_component/HireMe/FreelancingProfilesSection";
import Container from "@/component/ui/Container";
import { X, Calendar, CalendarDays } from "lucide-react";

export default function HireMeClientWrapper() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    timeline: "",
    description: "",
  });

  const [showModal, setShowModal] = useState(false);

  const { mutate: createMessage, isPending } = useCreateClientMessage();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.description
    ) {
      return;
    }

    const messageData = {
      ...formData,
    };

    createMessage(messageData, {
      onSuccess: () => {
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          company: "",
          phone: "",
          timeline: "",
          description: "",
        });
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] text-white">
      {/* Freelancing Profiles Section */}
      <FreelancingProfilesSection />

      {/* Success Roadmap - Competitive Edge */}
      <div className="px-6 md:px-12 py-20 bg-white/[0.02] border-y border-white/5">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Your Roadmap to <span className="text-blue-400 italic font-medium">Success</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
              A transparent, battle-tested process designed to take your service business from concept to market leader.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We dive deep into your business goals, target audience, and current bottlenecks.",
                color: "blue"
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Crafting a custom tech stack and SEO roadmap tailored for local lead generation.",
                color: "purple"
              },
              {
                step: "03",
                title: "Development",
                desc: "Building your high-performance, mobile-first site using Next.js & modern UI/UX.",
                color: "blue"
              },
              {
                step: "04",
                title: "Launch & Optimization",
                desc: "Final QA, performance tuning, and hands-on training for your new digital asset.",
                color: "green"
              }
            ].map((item, i) => (
              <div key={i} className="relative group p-8 bg-[#1a2333]/40 border border-[#8ac9f4]/10 rounded-3xl hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2">
                <div className="text-5xl font-black text-white/5 absolute top-4 right-6 group-hover:text-blue-500/10 transition-colors">
                  {item.step}
                </div>
                <div className={`w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-500/20`}>
                  <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Contact Section */}
      <div className="px-6 md:px-12 py-20 pb-10">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Custom Project{" "}
              <span className="bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] bg-clip-text text-transparent uppercase tracking-tight">
                Consultation
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
              Need something unique? Let&apos;s discuss your requirements and build something amazing together.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-[#057cc5] to-[#04376b] rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
             
             <div className="relative">
                <ProjectDetailsForm
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                  isLoading={isPending}
                />
             </div>
          </div>
        </Container>
      </div>

      {/* Booking Section */}
      <div id="book-a-call" className="px-6 md:px-12 py-24 border-t border-white/5 bg-white/[0.02]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1a2333]/40 border border-[#8ac9f4]/20 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden group">
               {/* Decorative background blur */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full -mr-32 -mt-32"></div>
               
               <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                      <CalendarDays className="w-4 h-4 text-blue-400" />
                      <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">Free Consultation</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                      Prefer to <span className="text-blue-400 italic font-medium">Talk</span> First?
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-0 font-medium max-w-xl">
                      Pick a time that works for you and let&apos;s jump on a 30-minute strategy call to discuss your business goals and technical needs.
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    <button
                      onClick={() => setShowModal(true)}
                      className="bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-[#057cc5]/20 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-3 border border-white/10"
                    >
                      <Calendar className="w-5 h-5 text-blue-200" />
                      <span className="text-lg">Open Calendar</span>
                    </button>
                  </div>
               </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Credentials and Authority Section */}
      <div className="px-6 md:px-12 py-20 border-t border-white/5">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2 font-mono">50+</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Projects Delivered</div>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2 font-mono">95%</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Average Page Speed</div>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2 font-mono">100%</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Custom Designed</div>
            </div>
          </div>
        </Container>
      </div>

      {/* Integration Ecosystem - Competitive Edge */}
      <div className="px-6 md:px-12 py-24 bg-[#0a1628]/50 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-blue-300 text-[10px] font-black uppercase tracking-[0.2em]">Business Connectivity</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Built to Work with <br />
                <span className="text-blue-400">Your Tools</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 font-medium max-w-xl">
                I don&apos;t just build websites; I build business engines. Your new site will seamlessly integrate with the software you already use to run your operations.
              </p>
              
              <div className="flex flex-wrap gap-4">
                {["Stripe", "Calendly", "Jobber", "Housecall Pro", "Mailchimp", "Google Maps API", "WhatsApp Business", "Custom CRMs"].map((tool, i) => (
                   <div key={i} className="px-5 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold text-gray-300 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all cursor-default">
                     {tool}
                   </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 relative">
              {[
                { title: "100% Ownership", desc: "No proprietary lock-ins. You own 100% of your code.", icon: "💎" },
                { title: "Zero Monthly Fees", desc: "No recurring 'platform' costs. Just pure performance.", icon: "🔥" },
                { title: "AI-Search Ready", desc: "Optimized for next-gen search like Perplexity & GPT.", icon: "⚡" },
                { title: "Future-Proof", desc: "Built with Next.js for ultimate scalability.", icon: "🚀" }
              ].map((badge, i) => (
                <div key={i} className="p-8 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[2rem] backdrop-blur-sm group hover:border-blue-500/30 transition-all">
                  <div className="text-3xl mb-4">{badge.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-tight group-hover:text-blue-300 transition-colors">{badge.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">{badge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Hire Me Specific FAQs */}
      <div className="px-6 md:px-12 py-20 border-t border-white/5">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Common <span className="text-blue-400 italic font-medium">Questions</span></h2>
              <p className="text-gray-400 text-lg font-medium">Everything you need to know about working with me.</p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  q: "What is your typical project timeline?",
                  a: "Most service business websites take between 2 to 4 weeks from strategy to launch. More complex custom applications or extensive pSEO projects may take 6+ weeks."
                },
                {
                  q: "Do you require a deposit?",
                  a: "Yes, I require a 40% upfront deposit to secure your project on my calendar. The remaining balance is typically split across major milestones."
                },
                {
                  q: "Will my website be mobile-friendly and SEO-optimized?",
                  a: "Absolutely. Mobile-first design and technical SEO (including AI search optimization) are core parts of my process, not add-ons."
                },
                {
                  q: "How do we communicate during the project?",
                  a: "I provide daily updates via Slack or WhatsApp (whichever you prefer) and we'll have weekly strategy calls to review milestones and gather feedback."
                }
              ].map((faq, i) => (
                <div key={i} className="p-8 bg-[#1a2333]/40 border border-[#8ac9f4]/10 rounded-3xl hover:border-[#8ac9f4]/30 transition-all group">
                  <h3 className="text-lg font-bold text-white mb-4 group-hover:text-blue-300 transition-colors uppercase tracking-tight">{faq.q}</h3>
                  <p className="text-gray-400 leading-relaxed font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-[#0f0715] border border-white/10 rounded-2xl w-full max-w-5xl h-[85vh] relative overflow-hidden shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div>
                <h2 className="text-xl font-bold text-white uppercase tracking-tight">Schedule Your Free Consultation</h2>
                <p className="text-xs text-gray-500 mt-0.5">30-Min Strategy Call via Google Meet</p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Calendly Iframe Container */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src="https://calendly.com/mdhasan-alikhan68/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule a meeting"
                className="w-full h-full"
              ></iframe>
            </div>
            
            {/* Modal Footer */}
            <div className="px-6 py-3 text-center text-[10px] text-gray-600 border-t border-white/5 uppercase tracking-widest font-bold">
              Timezone: Asia/Dhaka • Link will be sent to your email
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

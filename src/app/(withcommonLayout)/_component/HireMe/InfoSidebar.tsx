function Feature({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <svg
        className="w-5 h-5 text-emerald-400 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
      <span className="text-gray-300">{text}</span>
    </li>
  );
}

function ProcessStep({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full bg-slate-800/50 border border-slate-600/50 flex items-center justify-center flex-shrink-0 font-semibold text-[#057cc5]">
        {number}
      </div>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
}

export default function InfoSidebar() {
  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sticky top-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-yellow-400 text-xl">⭐</span>
        <h3 className="text-xl font-bold">Why Choose Us?</h3>
      </div>

      <ul className="space-y-4">
        <Feature text="100% Custom Solutions" />
        <Feature text="Transparent Pricing" />
        <Feature text="24/7 Support" />
        <Feature text="Money-Back Guarantee" />
        <Feature text="Fast Delivery" />
        <Feature text="Post-Launch Support" />
      </ul>

      {/* Our Process */}
      <div className="mt-8 pt-8 border-t border-slate-700/50">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xl">👥</span>
          <h3 className="text-xl font-bold">Our Process</h3>
        </div>

        <div className="space-y-4">
          <ProcessStep
            number="1"
            title="Consultation"
            subtitle="Free project discussion"
          />
          <ProcessStep
            number="2"
            title="Proposal"
            subtitle="Detailed quote & timeline"
          />
          <ProcessStep
            number="3"
            title="Development"
            subtitle="Regular updates & reviews"
          />
          <ProcessStep
            number="4"
            title="Launch"
            subtitle="Testing & deployment"
          />
          <ProcessStep
            number="5"
            title="Support"
            subtitle="Ongoing maintenance"
          />
        </div>
      </div>

      {/* Quick Contact */}
      <div className="mt-8 pt-8 border-t border-slate-700/50">
        <h3 className="text-xl font-bold mb-6">Quick Contact</h3>

        <div className="space-y-4 mb-6">
          <div>
            <p className="text-gray-300 font-semibold mb-1">
              Response Time
            </p>
            <p className="text-gray-400 text-sm">
              Within 2 hours
            </p>
          </div>

          <div>
            <p className="text-gray-300 font-semibold mb-1">
              Free Consultation
            </p>
            <p className="text-gray-400 text-sm">
              30-minute strategy call
            </p>
          </div>
        </div>

        <button className="w-full bg-slate-800/50 border border-slate-700/50 text-white font-medium py-3 px-6 rounded-xl hover:bg-slate-800/70 transition-all duration-300 flex items-center justify-center gap-2">
          <span>📅</span>
          <span>Schedule a Call</span>
        </button>
      </div>
    </div>
  );
}

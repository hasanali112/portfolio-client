import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Hasan Ali's portfolio website.",
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-24 md:px-12">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
        <p className="text-gray-300">
          Content on this website is for informational purposes. Project
          timelines, pricing, and deliverables are finalized only through a
          formal agreement.
        </p>
        <p className="text-gray-300">
          By using this site, you agree not to misuse its content or services.
        </p>
        <p className="text-gray-300">Last updated: February 22, 2026</p>
      </div>
    </main>
  );
}

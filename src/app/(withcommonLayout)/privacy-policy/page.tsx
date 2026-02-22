import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Hasan Ali's portfolio website.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-24 md:px-12">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
        <p className="text-gray-300">
          This site may collect limited usage data to improve performance and
          user experience. No sensitive personal information is sold.
        </p>
        <p className="text-gray-300">
          If you submit a contact form, your provided details are used only to
          respond to your inquiry.
        </p>
        <p className="text-gray-300">Last updated: February 22, 2026</p>
      </div>
    </main>
  );
}

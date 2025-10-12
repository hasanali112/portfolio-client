"use client";
import { useState } from "react";

export default function SchedulePage() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Schedule a{" "}
            <span className="bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] bg-clip-text text-transparent">
              Meeting
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Let&apos;s discuss your project and how I can help you achieve your
            goals
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-md mx-auto">
          <div className="mb-6">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-400 text-2xl">📅</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Book Your Consultation
            </h3>
            <p className="text-gray-400 text-sm">
              Choose your preferred date and time for our meeting
            </p>
          </div>

          <button
            onClick={openModal}
            className="w-full bg-gradient-to-r from-[#057cc5] to-[#04376b] hover:from-[#046ba8] hover:to-[#033659] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Open Calendar
          </button>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3">
              <span className="text-green-400 text-xl">1️⃣</span>
            </div>
            <h4 className="font-semibold mb-2">Select Date</h4>
            <p className="text-gray-400 text-sm">
              Choose your preferred meeting date
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-3">
              <span className="text-yellow-400 text-xl">2️⃣</span>
            </div>
            <h4 className="font-semibold mb-2">Pick Time</h4>
            <p className="text-gray-400 text-sm">
              Select an available time slot
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-3">
              <span className="text-purple-400 text-xl">3️⃣</span>
            </div>
            <h4 className="font-semibold mb-2">Confirm</h4>
            <p className="text-gray-400 text-sm">
              Add your details and book the meeting
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] relative overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] text-white px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">
                  Schedule Your Free Consultation
                </h2>
                <p className="text-sm text-gray-300 mt-1">
                  Select your preferred time slot
                </p>
              </div>
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-200 text-3xl font-light leading-none transition-colors"
              >
                ×
              </button>
            </div>

            {/* Info Bar */}
            <div className="bg-[#fdfdfc]/5 px-6 py-3 flex items-center justify-center gap-6 text-sm text-gray-700 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>30 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Free</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Google Meet</span>
              </div>
            </div>

            {/* Calendly Iframe */}
            <div className="h-[calc(90vh-200px)] overflow-y-auto">
              <iframe
                src="https://calendly.com/mdhasan-alikhan68/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule a meeting"
              ></iframe>
            </div>

            {/* Modal Footer */}
            <div className="bg-[#f5f4ed]/5 px-6 py-3 text-center text-sm text-gray-600 border-t border-gray-200">
              You&apos;ll receive a Google Meet link via email • Timezone:
              Asia/Dhaka
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";
import { useState } from "react";
import { useCreateClientMessage } from "@/hooks/useClientMessages";
import ServicesSection from "../_component/HireMe/ServicesSection";
import BudgetSection from "../_component/HireMe/BudgetSection";
import ProjectDetailsForm from "../_component/HireMe/ProjectDetailsForm";
import InfoSidebar from "../_component/HireMe/InfoSidebar";

export default function ProjectConsultationForm() {
  const [selectedServices, setSelectedServices] = useState({
    multiVendorEcommerce: false,
    singleVendorEcommerce: false,
    landingPage: false,
    aiIntegratedWebsite: false,
    realEstateWebsite: false,
    portfolioWebsite: false,
    businessWebsite: false,
    blogCmsWebsite: false,
    iosApp: false,
    androidApp: false,
    crossPlatformApp: false,
    progressiveWebApp: false,
  });

  const [selectedBudget, setSelectedBudget] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    timeline: "",
    description: "",
  });

  const { mutate: createMessage, isPending } = useCreateClientMessage();

  const toggleService = (service: keyof typeof selectedServices) => {
    setSelectedServices((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  };

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
      !formData.description ||
      !selectedBudget
    ) {
      return;
    }

    const messageData = {
      ...formData,
      selectedServices,
      selectedBudget,
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
        setSelectedServices({
          multiVendorEcommerce: false,
          singleVendorEcommerce: false,
          landingPage: false,
          aiIntegratedWebsite: false,
          realEstateWebsite: false,
          portfolioWebsite: false,
          businessWebsite: false,
          blogCmsWebsite: false,
          iosApp: false,
          androidApp: false,
          crossPlatformApp: false,
          progressiveWebApp: false,
        });
        setSelectedBudget("");
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <button className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-400/30 rounded-full text-sm mb-8 hover:bg-gray-400/10 transition-colors">
            <span className="text-gray-400">&lt;/&gt;</span>
            <span>Let&apos;s Work Together</span>
          </button>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] bg-clip-text text-transparent">
              Amazing
            </span>
          </h1>

          <p className="text-gray-400 text-lg">
            Tell us about your project and we&apos;ll provide a customized
            solution with transparent pricing
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2 space-y-8">
            <ServicesSection
              selectedServices={selectedServices}
              toggleService={toggleService}
            />

            <BudgetSection
              selectedBudget={selectedBudget}
              setSelectedBudget={setSelectedBudget}
            />

            <ProjectDetailsForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              isLoading={isPending}
            />
          </div>

          {/* Right Column - Info Sidebar */}
          <div className="space-y-6">
            <InfoSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

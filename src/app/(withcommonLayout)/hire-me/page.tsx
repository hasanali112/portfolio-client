"use client";
import { useState } from "react";
import { useCreateClientMessage } from "@/hooks/useClientMessages";
import ProjectDetailsForm from "../_component/HireMe/ProjectDetailsForm";
import FreelancingProfilesSection from "../_component/HireMe/FreelancingProfilesSection";
import Container from "@/component/ui/Container";

export default function ProjectConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    timeline: "",
    description: "",
  });

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

      {/* Contact Section */}
      <div className="px-6 md:px-12 py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Custom Project{" "}
              <span className="bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] bg-clip-text text-transparent">
                Consultation
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Need something unique? Let&apos;s discuss your custom requirements and build something amazing together.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative group">
             {/* Decorative element like on home page */}
             <div className="absolute -inset-1 bg-gradient-to-r from-[#057cc5] to-[#04376b] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
             
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
    </div>
  );
}

"use client";

import { useGetExperiences } from "@/hooks/useExperience";
import { IExperience } from "@/types/experience";
import ReButton from "@/component/Button/ReButton";
import {
  FolderOpenDot,
  Sparkles,
  ExternalLink,
  MapPin,
  Calendar,
} from "lucide-react";
import Container from "@/component/ui/Container";
import Image from "next/image";
import Link from "next/link";

const Experience = () => {
  const { data: experiencesData, isLoading, error } = useGetExperiences();
  const experiences: IExperience[] = experiencesData?.data || [];

  return (
    <div
      id="experience"
      className="bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] py-20 px-4"
    >
      <Container>
        <div className="text-center flex flex-col items-center justify-center md-10 md:mb-16">
          <ReButton
            title="Professional Journey"
            variant="outline"
            icon={<FolderOpenDot className="w-5 h-5" />}
            className="h-[45px] rounded-full mb-8"
          />

          <h1 className="text-xl md:text-5xl font-bold text-white mb-6">
            Experience That Shapes
            <span className="relative inline-block py-2 ml-2">
              <span className="relative z-10 tracking-wider">Excellence</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/20 to-transparent rounded-lg transform -skew-x-12"></div>
            </span>
          </h1>

          <p className="text-gray-400 text-lg hidden md:block max-w-3xl mx-auto leading-relaxed">
            Explore my professional journey through diverse roles and
            challenging projects. Each experience has contributed to my growth
            as a developer, building expertise in modern technologies and
            delivering impactful solutions.
          </p>

          <button className="mt-8 px-6 py-3 hidden rounded-full border border-gray-500/30 text-gray-400 text-sm md:flex items-center gap-2 mx-auto hover:border-gray-400/50 hover:bg-gray-500/5 transition-all">
            <Sparkles className="w-4 h-4" />
            <span>Discover My Professional Growth & Achievements</span>
          </button>
        </div>

        {isLoading ? (
          <div className="text-center text-gray-400 py-12">
            <div className="animate-pulse">
              Loading professional experiences...
            </div>
          </div>
        ) : error ? (
          <div className="text-center text-red-400 py-12">
            Failed to load experiences. Please try again later.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {experiences.map((experience) => (
                <div
                  key={experience._id}
                  className="bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-md border border-[#8ac9f4]/40 rounded-xl p-6 md:p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/10 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 cursor-pointer group hover:border-[#8ac9f4]/30 relative"
                >
                  {/* Header with Company Logo and Basic Info */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      {experience.companyLogo && (
                        <div className="flex-shrink-0">
                          <Image
                            src={experience.companyLogo}
                            alt={`${experience.companyName} logo`}
                            width={60}
                            height={60}
                            className="w-16 h-16 object-contain rounded-lg bg-white/10 p-2"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#8ac9f4] mb-2">
                          {experience.jobTitle}
                        </h3>
                        <div className="flex items-center gap-4 mb-1">
                          <p className="text-white inline-flex items-center gap-1 font-medium text-lg">
                            {experience.companyName}
                            {experience.companyWebsite && (
                              <Link
                                href={experience.companyWebsite}
                                target="_blank"
                              >
                                <ExternalLink className="w-4 h-4 text-gray-400 hover:text-[#8ac9f4]" />
                              </Link>
                            )}
                          </p>

                          <div className="text-right">
                            <div className="flex w-full items-center gap-1 text-gray-400 text-sm justify-end">
                              <Calendar className="w-4 h-4" />
                              <span>
                                {new Date(
                                  experience.startDate
                                ).toLocaleDateString()}{" "}
                                -{" "}
                                {experience.isCurrentJob
                                  ? "Present"
                                  : experience.endDate
                                  ? new Date(
                                      experience.endDate
                                    ).toLocaleDateString()
                                  : "Present"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full  gap-2 text-sm text-gray-300">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {experience.location}
                          </div>
                          <div className="w-[100px] flex items-center justify-center py-1 bg-[#8ac9f4]/10 text-[#8ac9f4] rounded-full text-xs">
                            {experience.employmentType}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="text-gray-100 leading-relaxed mb-6">
                    <p>{experience.description}</p>
                  </div>

                  {/* Responsibilities */}
                  {experience.responsibilities &&
                    experience.responsibilities.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">
                          Key Responsibilities:
                        </h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {experience.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-sm">
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}

                  {/* Achievements */}
                  {experience.achievements &&
                    experience.achievements.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {experience.achievements.map((achievement, index) => (
                            <li key={index} className="text-sm">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {/* Technologies */}
                  {experience.technologies &&
                    experience.technologies.length > 0 && (
                      <div>
                        <h4 className="text-white font-semibold mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-[#8ac9f4]/10 text-[#8ac9f4] text-sm rounded-full border border-[#8ac9f4]/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              ))}
            </div>

            {experiences.length === 0 && (
              <div className="text-center text-gray-400 py-12">
                No professional experiences available at the moment.
              </div>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default Experience;

import Container from "@/component/ui/Container";
import ReButton from "@/component/Button/ReButton";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Target, Rocket, Lightbulb, UserCheck, Calendar, Quote } from "lucide-react";
import { Metadata } from "next";
import Script from "next/script";
import { getCaseStudyById, getAllPublishedCaseStudies } from "@/services/publicCaseStudyService";

// Revalidate every 5 minutes

// Generate static params for all published case studies
export async function generateStaticParams() {
  const caseStudies = await getAllPublishedCaseStudies();
  return caseStudies.map((study) => ({
    slug: study._id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyById(slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} | Hasan Ali Case Study`,
    description: study.description,
    openGraph: {
      title: study.title,
      description: study.description,
      type: "article",
      authors: ["Hasan Ali"],
    },
  };
}

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = await getCaseStudyById(slug);

  if (!study) {
    return (
      <div className="min-h-screen bg-[#0f0715] text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4 text-gray-500">Case Study Not Found</h1>
        <Link href="/case-study">
          <ReButton title="Browse All Case Studies" icon={<ArrowLeft className="w-4 h-4" />} />
        </Link>
      </div>
    );
  }

  // Parse outcome into results array
  const results = study.outcome
    ? study.outcome.split(". ").filter((s) => s.trim().length > 10)
    : [];

  // Create metrics from technologies or use defaults
  const metrics = study.technologies?.slice(0, 3).map((tech, idx) => ({
    label: idx === 0 ? "Primary Tech" : idx === 1 ? "Stack" : "Tools",
    value: tech,
  })) || [
    { label: "Category", value: study.category },
    { label: "Tech Stack", value: "Modern" },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#0f0715] text-white selection:bg-blue-500/30 pb-20">
        {/* Dynamic Hero Section */}
        <div className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

          <Container>
            <div>
              <Link href="/case-study" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors mb-12 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-bold uppercase tracking-widest">Back to All Stories</span>
              </Link>

              <div className="mb-6">
                <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-bold text-blue-400 uppercase tracking-widest">
                  {study.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                {study.title}
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-medium mb-12">
                {study.description}
              </p>

              {/* Thumbnail */}
              {study.thumbnail && (
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 mb-16">
                  <Image
                    src={study.thumbnail}
                    alt={study.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 896px) 100vw, 896px"
                  />
                </div>
              )}

              {/* AI SEO: Quick Summary / Definition Block */}
              <div className="bg-blue-500/5 border border-blue-500/10 p-8 rounded-[2.5rem] mb-16 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> Quick Summary
                </h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
                  {study.title} focuses on {study.category.toLowerCase()}. The solution involved{" "}
                  {study.solution?.split(".")[0]?.toLowerCase() || "strategic implementation"}, resulting in{" "}
                  {study.outcome?.split(".")[0]?.toLowerCase() || "significant improvements"}.
                </p>
              </div>

              {/* Metric Overview Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16">
                {metrics.map((metric: {label: string, value: string}, index: number) => (
                  <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                    <div className="text-xl md:text-2xl font-black text-blue-400 mb-2 tracking-tight truncate">
                      {metric.value}
                    </div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>

        <Container>
          <div className="py-20">
            <div className="grid gap-20">
              {/* The Challenge */}
              <section className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/20">
                    <Target className="w-6 h-6 text-red-400" />
                  </div>
                  <h2 className="text-3xl font-bold uppercase tracking-tight">The Challenge</h2>
                </div>
                <p className="text-lg text-gray-400 leading-relaxed indent-0 italic border-l-2 border-red-500/30 pl-8">
                  {study.challenge}
                </p>
              </section>

              {/* The Strategy/Solution */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20">
                    <Lightbulb className="w-6 h-6 text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold uppercase tracking-tight">The Solution</h2>
                </div>
                <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
                  <p className="text-lg text-gray-300 leading-relaxed">{study.solution}</p>
                </div>
              </section>

              {/* Technologies Used */}
              {study.technologies && study.technologies.length > 0 && (
                <section>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center border border-purple-500/20">
                      <Rocket className="w-6 h-6 text-purple-400" />
                    </div>
                    <h2 className="text-3xl font-bold uppercase tracking-tight">Technologies Used</h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {study.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm font-medium text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Detailed Results List */}
              <section>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20">
                    <Rocket className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h2 className="text-3xl font-bold uppercase tracking-tight">Outcome & Results</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {results.length > 0 ? (
                    results.map((result: string, index: number) => (
                      <div
                        key={index}
                        className="flex gap-4 p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl"
                      >
                        <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                        <p className="font-medium text-gray-200">{result}</p>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-2 flex gap-4 p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                      <p className="font-medium text-gray-200">{study.outcome}</p>
                    </div>
                  )}
                </div>

                <div className="mt-12 p-10 bg-blue-600/10 rounded-[3rem] border border-blue-500/20">
                  <h3 className="text-2xl font-bold mb-4 text-blue-100">The Final Word</h3>
                  <p className="text-lg text-gray-300 leading-relaxed italic">&quot;{study.outcome}&quot;</p>
                </div>
              </section>

              {/* Links */}
              {(study.link || study.githubLink) && (
                <section className="flex flex-wrap gap-4">
                  {study.link && (
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors"
                    >
                      View Live Project
                      <Rocket className="w-4 h-4" />
                    </a>
                  )}
                  {study.githubLink && (
                    <a
                      href={study.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-colors"
                    >
                      View Source Code
                    </a>
                  )}
                </section>
              )}

              {/* AI SEO: Expert Review / Authority Signal */}
              <section className="border-t border-white/5 pt-20">
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <UserCheck className="w-6 h-6 text-blue-400" />
                      <h3 className="text-xl font-bold uppercase tracking-tight">Expert Strategy Review</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      As a specialist in {study.category.toLowerCase()}, I designed this solution to address
                      technical challenges while maximizing business impact. The results demonstrate the power
                      of modern web technologies in delivering real-world value.
                    </p>
                    <div className="flex items-center gap-6">
                      <div className="flex flex-col">
                        <span className="font-bold text-white uppercase tracking-wider text-sm">Hasan Ali</span>
                        <span className="text-xs text-blue-400 font-bold uppercase tracking-widest">
                          Full-Stack Developer & SEO Specialist
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-64 bg-blue-500/5 border border-blue-500/10 p-8 rounded-[2.5rem]">
                    <div className="flex items-center gap-3 mb-4 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-widest">Published</span>
                    </div>
                    <time className="text-lg font-bold text-white">
                      {study.publishedAt
                        ? new Date(study.publishedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : "Coming Soon"}
                    </time>
                    <div className="mt-6 pt-6 border-t border-white/5">
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-2">
                        Status
                      </div>
                      <div className="text-xs text-emerald-400 font-bold uppercase">
                        {study.isPublished ? "Published" : "Draft"}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Footer CTA */}
            <div className="mt-32 pt-20 border-t border-white/5 text-center">
              <h2 className="text-3xl font-bold mb-8">Want results like these?</h2>
              <div className="flex justify-center gap-4">
                <Link href="/hire-me">
                  <ReButton
                    title="Let&apos;s Transform Your Business"
                    className="rounded-full h-14 px-10 text-lg shadow-xl shadow-blue-500/20"
                  />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* AI SEO: JSON-LD Structured Data */}
      <Script
        id="case-study-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: study.title,
            description: study.description,
            category: study.category,
            author: {
              "@type": "Person",
              name: "Hasan Ali",
              url: "https://mdhasanalikhan.vercel.app",
            },
            datePublished: study.publishedAt || study.createdAt,
            dateModified: study.updatedAt,
            publisher: {
              "@type": "Organization",
              name: "Hasan Ali Portfolio",
              logo: {
                "@type": "ImageObject",
                url: "https://mdhasanalikhan.vercel.app/og-cover.jpg",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://mdhasanalikhan.vercel.app/case-study/${slug}`,
            },
            articleBody: `${study.challenge} ${study.solution} ${study.outcome}`,
          }),
        }}
      />
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ReButton from "@/component/Button/ReButton";

interface CaseStudyCardProps {
  title: string;
  category: string;
  description: string;
  results: string[];
  imageUrl?: string;
  slug: string;
}

const CaseStudyCard = ({
  title,
  category,
  description,
  results,
  imageUrl,
  slug,
}: CaseStudyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 h-full flex flex-col"
    >
      {/* Category Tag */}
      <div className="absolute top-6 left-6 z-10">
        <span className="px-4 py-1.5 bg-blue-500/10 backdrop-blur-md border border-blue-500/20 rounded-full text-xs font-bold text-blue-400 uppercase tracking-widest">
          {category}
        </span>
      </div>

      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden bg-[#1a2333] flex-shrink-0">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600/10 to-transparent">
            <TrendingUp className="w-16 h-16 text-blue-500/20" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0715] to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-2">
          {description}
        </p>

        {/* Results Section - Google Inspired */}
        <div className="mb-8 p-4 bg-white/5 rounded-2xl border border-white/5 flex-grow">
          <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
            <TrendingUp className="w-3 h-3 text-blue-400" />
            Key Results
          </h4>
          <ul className="space-y-3">
            {results.map((result, index) => (
              <li key={index} className="flex items-center gap-3 text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                {result}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between mt-auto">
          <Link href={`/case-study/${slug}`}>
            <ReButton
              title="Read Case Study"
              icon={<ArrowRight className="w-4 h-4" />}
              className="rounded-full h-11 px-6 text-sm"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;

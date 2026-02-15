"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Container from "@/component/ui/Container";

interface ComparisonRow {
  feature: string;
  starter: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
}

const comparisonData: ComparisonRow[] = [
  { feature: "Responsive Design", starter: true, pro: true, enterprise: true },
  { feature: "Custom UI/UX", starter: false, pro: true, enterprise: true },
  {
    feature: "SEO Optimisation",
    starter: "Basic",
    pro: "Advanced",
    enterprise: "Advanced",
  },
  { feature: "CMS Integration", starter: false, pro: true, enterprise: true },
  {
    feature: "E‑commerce / Payments",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "API Development",
    starter: false,
    pro: false,
    enterprise: true,
  },
  {
    feature: "Real‑time Features",
    starter: false,
    pro: false,
    enterprise: true,
  },
  {
    feature: "AI / ML Integration",
    starter: false,
    pro: false,
    enterprise: true,
  },
  {
    feature: "Performance Audit",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Dedicated Support",
    starter: "30 days",
    pro: "90 days",
    enterprise: "12 months",
  },
  {
    feature: "Revision Rounds",
    starter: "3",
    pro: "5",
    enterprise: "Unlimited",
  },
  {
    feature: "Source Code Ownership",
    starter: true,
    pro: true,
    enterprise: true,
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string")
    return <span className="text-sm text-gray-300 font-medium">{value}</span>;
  return value ? (
    <Check className="w-5 h-5 text-[#057cc5] mx-auto" />
  ) : (
    <X className="w-5 h-5 text-gray-600 mx-auto" />
  );
}

const ComparisonTable = () => {
  return (
    <section className="relative px-6 py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Compare{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#72c4f2] to-[#e7dbfd]">
              Plans
            </span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm">
            See exactly what&apos;s included in each plan to make the right
            choice for your project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="overflow-x-auto rounded-xl border border-[#2b3441] bg-[#1f2937]/20"
        >
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b border-[#2b3441]">
                <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm w-[35%]">
                  Feature
                </th>
                <th className="px-6 py-4 text-center">
                  <span className="text-[#72c4f2] font-semibold text-sm">
                    Starter
                  </span>
                </th>
                <th className="px-6 py-4 text-center bg-[#027bc2]/[0.06]">
                  <span className="text-[#72c4f2] font-semibold text-sm">
                    Professional
                  </span>
                </th>
                <th className="px-6 py-4 text-center">
                  <span className="text-[#72c4f2] font-semibold text-sm">
                    Enterprise
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-[#2b3441]/50 ${
                    i % 2 === 0 ? "bg-white/[0.01]" : ""
                  } hover:bg-[#027bc2]/[0.04] transition-colors`}
                >
                  <td className="px-6 py-3.5 text-gray-300 text-sm">
                    {row.feature}
                  </td>
                  <td className="px-6 py-3.5 text-center">
                    <CellValue value={row.starter} />
                  </td>
                  <td className="px-6 py-3.5 text-center bg-[#027bc2]/[0.04]">
                    <CellValue value={row.pro} />
                  </td>
                  <td className="px-6 py-3.5 text-center">
                    <CellValue value={row.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </Container>
    </section>
  );
};

export default ComparisonTable;

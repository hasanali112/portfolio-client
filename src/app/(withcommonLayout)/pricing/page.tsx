import PricingHero from "../_component/Pricing/PricingHero";
import PricingCards from "../_component/Pricing/PricingCards";
import TrustBadges from "../_component/Pricing/TrustBadges";
import ComparisonTable from "../_component/Pricing/ComparisonTable";
import FAQSection from "../_component/Pricing/FAQSection";
import PricingCTA from "../_component/Pricing/PricingCTA";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0f0715] text-white">
      <PricingHero />
      <PricingCards />
      <TrustBadges />
      <ComparisonTable />
      <FAQSection />
      <PricingCTA />
    </div>
  );
}

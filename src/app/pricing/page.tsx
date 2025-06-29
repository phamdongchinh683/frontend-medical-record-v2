import {
  PricingContact,
  PricingCta,
  PricingFaq,
  PricingHero,
} from "@/components/pricing";
import pricingData from "@/mocks/pricing.json";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <PricingHero data={pricingData.hero} />
      <PricingFaq faqs={pricingData.faqs} />
      <PricingCta data={pricingData.cta} />
      <PricingContact data={pricingData.contact} />
    </div>
  );
}

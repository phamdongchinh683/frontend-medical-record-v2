import {
  PricingContact,
  PricingCta,
  PricingFaq,
  PricingHero,
} from "@/components/pricing";
import pricingData from "@/mocks/pricing.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Choose the perfect plan for your needs. We offer flexible pricing options to suit your healthcare needs.",
  keywords: "pricing, healthcare, medical records, blockchain",
};

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

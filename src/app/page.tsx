import {
  CtaSection,
  FeatureList,
  HeroSection,
  StepList,
} from "@/components/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Records DApp - Secure Healthcare Management",
  description:
    "Securely store, manage, and share your medical history with healthcare providers. Access your complete health information anytime, anywhere.",
  keywords: "medical records, healthcare, secure, blockchain, patient data",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureList />
      <StepList />
      <CtaSection />
    </>
  );
}

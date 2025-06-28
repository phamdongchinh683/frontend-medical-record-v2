import {
  CertificationsSection,
  ContactSection,
  HeroSection,
  StatsSection,
  StorySection,
  TeamSection,
  TimelineSection,
  ValuesSection,
} from "@/components/about";
import { certifications } from "@/mocks/certifications.json";
import { milestones } from "@/mocks/milestones.json";
import { stats } from "@/mocks/stats.json";
import { teams } from "@/mocks/teams.json";
import { values } from "@/mocks/values.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our mission to revolutionize healthcare record management and meet our dedicated team.",
  keywords: "about, healthcare, medical records, team, mission",
  openGraph: {
    title: "About Us - MedRecords",
    description:
      "Learn about our mission to revolutionize healthcare record management and meet our dedicated team.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StatsSection stats={stats} />
      <StorySection />
      <TimelineSection milestones={milestones} />
      <ValuesSection values={values} />
      <TeamSection teams={teams} />
      <CertificationsSection certifications={certifications} />
      <ContactSection />
    </div>
  );
}

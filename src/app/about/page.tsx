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

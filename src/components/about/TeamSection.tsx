import { ITeamMemberProps } from "@/interfaces/ITeamMemberProps";
import TeamHeader from "./TeamHeader";
import TeamMemberCard from "./TeamMemberCard";

export default function TeamSection({ teams }: ITeamMemberProps) {
  return (
    <section id="team" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TeamHeader />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teams.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

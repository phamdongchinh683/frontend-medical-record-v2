import { ITeamMemberCardProps } from "@/interfaces/TeamMemberCardProps";
import { Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function TeamMemberCard({ member }: ITeamMemberCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-pink-100 overflow-hidden hover:shadow-lg hover:border-pink-200 transition-all duration-300 group">
      <div className="aspect-square overflow-hidden bg-pink-50">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
          {member.name}
        </h3>
        <p className="text-pink-600 font-semibold mb-4 text-sm uppercase tracking-wide">
          {member.role}
        </p>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          {member.bio}
        </p>
        <div className="flex space-x-4">
          <Link
            href={member.social.linkedin}
            className="text-slate-400 hover:text-pink-600 transition-colors duration-200 p-2 rounded-lg hover:bg-pink-50"
            aria-label={`${member.name}'s LinkedIn profile`}
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href={member.social.twitter}
            className="text-slate-400 hover:text-pink-500 transition-colors duration-200 p-2 rounded-lg hover:bg-pink-50"
            aria-label={`${member.name}'s Twitter profile`}
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            href={`mailto:${member.social.email}`}
            className="text-slate-400 hover:text-pink-600 transition-colors duration-200 p-2 rounded-lg hover:bg-pink-50"
            aria-label={`Email ${member.name}`}
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

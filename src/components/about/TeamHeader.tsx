import { ITeamHeaderProps } from "@/interfaces/ITeamHeaderProps";

export default function TeamHeader({
  title = "Meet Our Team",
  subtitle = "The passionate professionals behind MedRecords' success",
}: ITeamHeaderProps) {
  return (
    <div className="text-center mb-20">
      <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
        {title}
      </h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}

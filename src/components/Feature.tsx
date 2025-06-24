import { renderIcon } from "@/utils/iconMap";

export default function Feature({
  index,
  feature,
}: {
  index: number;
  feature: {
    icon: string;
    title: string;
    description: string;
  };
}) {
  return (
    <div
      key={index}
      className="p-8 bg-white rounded-xl border border-pink-100 hover:shadow-lg hover:border-pink-200 transition-all duration-300"
    >
      <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-3 rounded-lg w-fit mb-6">
        {renderIcon(feature.icon, {
          className: "h-6 w-6 text-pink-600",
        })}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {feature.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </div>
  );
}

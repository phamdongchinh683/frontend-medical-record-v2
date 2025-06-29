"use client";
import { IPricingHero } from "@/interfaces/IPricingHero";
import { renderIcon } from "@/utils/iconMap";

export default function PricingHero({ data }: { data: IPricingHero }) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Star":
        return renderIcon("Star", { className: "h-4 w-4 mr-2" });
      default:
        return null;
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50 py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100/20 to-rose-100/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-6">
            {getIcon(data.badge.icon)}
            {data.badge.text}
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            {data.title}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
              {" "}
              {data.subtitle}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
}

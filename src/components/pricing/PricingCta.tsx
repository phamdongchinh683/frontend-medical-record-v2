"use client";
import { IPricingCta } from "@/interfaces/IPricingCta";
import { renderIcon } from "@/utils/iconMap";

export default function PricingCta({ data }: { data: IPricingCta }) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ArrowRight":
        return renderIcon("ArrowRight", { className: "ml-2 h-5 w-5" });
      case "Phone":
        return renderIcon("Phone", { className: "mr-2 h-5 w-5" });
      default:
        return null;
    }
  };

  return (
    <section className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          {data.title}
        </h2>
        <p className="text-xl text-pink-100 mb-8 leading-relaxed">
          {data.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-pink-50 transition-colors shadow-lg flex items-center justify-center">
            {data.primaryButton.text}
            {getIcon(data.primaryButton.icon)}
          </button>
          <button className="border border-pink-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-600 transition-colors flex items-center justify-center">
            {getIcon(data.secondaryButton.icon)}
            {data.secondaryButton.text}
          </button>
        </div>
        <p className="text-pink-200 text-sm mt-6">{data.disclaimer}</p>
      </div>
    </section>
  );
}

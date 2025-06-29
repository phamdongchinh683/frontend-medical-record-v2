import { IPricingCta } from "@/interfaces/IPricingCta";
import Link from "next/link";

export default function PricingCta({ data }: { data: IPricingCta }) {
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
            <Link href={data.href}>{data.primaryButton.text}</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

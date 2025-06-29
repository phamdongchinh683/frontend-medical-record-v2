"use client";
import { IPricingContact } from "@/interfaces/IPricingContact";
import { renderIcon } from "@/utils/iconMap";

export default function PricingContact({ data }: { data: IPricingContact }) {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600">{data.description}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {data.methods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center border border-pink-100 hover:shadow-lg transition-shadow"
            >
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-3 rounded-lg w-fit mx-auto mb-4">
                {renderIcon(method.icon)}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {method.title}
              </h3>
              <p className="text-gray-600 mb-4">{method.description}</p>
              <a
                href={method.href}
                className="text-pink-600 font-medium hover:text-pink-700"
              >
                {method.action}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

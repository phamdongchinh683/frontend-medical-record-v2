"use client";
import { IFaq } from "@/interfaces/IFaq";
import { renderIcon } from "@/utils/iconMap";

export default function PricingFaq({ faqs }: { faqs: IFaq[] }) {
  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our pricing and features.
          </p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-pink-100 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-2 rounded-lg flex-shrink-0">
                  {renderIcon("HelpCircle", {
                    className: "h-5 w-5 text-pink-600",
                  })}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ISupportResourcesProps } from "@/interfaces/ISupportResourcesProps";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SupportResources({
  supportResources,
}: ISupportResourcesProps) {
  return (
    <section
      id="resources"
      className="bg-gradient-to-br from-pink-50 to-rose-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Self-Service Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers quickly with our comprehensive support resources and
            documentation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportResources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-pink-100 p-6 hover:shadow-lg hover:border-pink-200 transition-all duration-300 group"
            >
              <div
                className={`bg-gradient-to-br from-${resource.color}-100 to-${resource.color}-200 p-4 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform`}
              >
                <resource.icon
                  className={`h-8 w-8 text-${resource.color}-600`}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {resource.title}
              </h3>
              <p className="text-gray-600 mb-6">{resource.description}</p>
              <Link
                href={resource.link}
                className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
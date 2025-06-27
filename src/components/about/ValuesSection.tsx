import { IValueSectionProps } from "@/interfaces/IValueSectionProps";
import { getIcon } from "@/utils/iconMap";

export default function ValuesSection({ values }: IValueSectionProps) {
  return (
    <section id="values" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do at MedRecords
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const IconComponent = getIcon(value.icon);
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-pink-100 hover:shadow-lg hover:border-pink-200 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-4 rounded-lg w-fit mb-6">
                  {IconComponent && (
                    <IconComponent className="h-8 w-8 text-pink-600" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

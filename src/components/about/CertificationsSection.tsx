import { ICertificationsSectionProps } from "@/interfaces/ICertificationsSectionProps";
import { getIcon } from "@/utils/iconMap";

export default function CertificationsSection({
  certifications,
}: ICertificationsSectionProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Certifications & Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We maintain the highest standards of security and compliance in
            healthcare technology
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = getIcon(cert.icon);
            return (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-6 rounded-lg mb-4 mx-auto w-fit">
                  {IconComponent && (
                    <IconComponent className="h-12 w-12 text-pink-600" />
                  )}
                </div>
                <h3 className="font-semibold text-gray-900">{cert.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

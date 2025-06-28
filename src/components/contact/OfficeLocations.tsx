import { IOfficeLocationsProps } from "@/interfaces/IOfficeLocationsProps";
import { Building, Clock, Mail, MapPin, Phone } from "lucide-react";

export default function OfficeLocations({ offices }: IOfficeLocationsProps) {
  return (
    <section id="offices" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Offices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit us at one of our locations or reach out to your nearest office
            for local support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-pink-100 p-6 hover:shadow-lg hover:border-pink-200 transition-all duration-300"
            >
              {office.isHeadquarters && (
                <div className="inline-flex items-center px-3 py-1 bg-pink-100 text-pink-800 text-xs font-medium rounded-full mb-4">
                  <Building className="h-3 w-3 mr-1" />
                  Headquarters
                </div>
              )}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {office.city}
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-pink-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900">{office.address}</p>
                    <p className="text-gray-600">{office.zipCode}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-pink-600 flex-shrink-0" />
                  <p className="text-gray-900">{office.phone}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-pink-600 flex-shrink-0" />
                  <p className="text-gray-900">{office.email}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-pink-600 flex-shrink-0" />
                  <p className="text-gray-600">{office.hours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

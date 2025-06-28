import { IContactMethodsProps } from "@/interfaces/IContactMethodsProps";

export default function ContactMethods({
  contactMethods,
}: IContactMethodsProps) {
  return (
    <section id="support" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How Can We Help You?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the contact method that works best for you. Our team is
            available through multiple channels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-pink-100 p-8 hover:shadow-lg hover:border-pink-200 transition-all duration-300"
            >
              <div
                className={`bg-gradient-to-br from-${method.color}-100 to-${method.color}-200 p-4 rounded-lg w-fit mb-6`}
              >
                <method.icon className={`h-8 w-8 text-${method.color}-600`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {method.title}
              </h3>
              <p className="text-gray-600 mb-6">{method.description}</p>
              <div className="space-y-4">
                {method.details.map((detail, detailIndex) => (
                  <div
                    key={detailIndex}
                    className="border-l-2 border-pink-200 pl-4"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-900">
                          {detail.label}
                        </p>
                        <p className="text-pink-600 font-medium">
                          {detail.value}
                        </p>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {detail.available}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

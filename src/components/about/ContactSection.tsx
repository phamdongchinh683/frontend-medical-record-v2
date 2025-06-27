import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-pink-100 mb-8 leading-relaxed">
              Have questions about MedRecords? We&apos;d love to hear from you.
              Reach out to our team for support, partnerships, or general
              inquiries.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-pink-100">
                <Mail className="h-6 w-6 mr-4" />
                <span>contact@medrecords.com</span>
              </div>
              <div className="flex items-center text-pink-100">
                <Phone className="h-6 w-6 mr-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-pink-100">
                <MapPin className="h-6 w-6 mr-4" />
                <span>123 Healthcare Ave, Medical District, CA 90210</span>
              </div>
              <div className="flex items-center text-pink-100">
                <Clock className="h-6 w-6 mr-4" />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Send us a message
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500">
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Partnership</option>
                <option>Press & Media</option>
              </select>
              <textarea
                rows={4}
                placeholder="Your message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-300 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";

export default function StorySection() {
  return (
    <section id="story" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                MedRecords was born from a simple yet powerful observation:
                healthcare data was fragmented, insecure, and difficult to
                access when patients needed it most. Our founders, a team of
                healthcare professionals and technology experts, experienced
                firsthand the frustration of lost medical records during
                critical moments.
              </p>
              <p>
                In 2020, we set out to solve this problem by creating a platform
                that puts patients in control of their medical information while
                enabling seamless collaboration between healthcare providers.
                What started as a small team with a big vision has grown into a
                global platform serving millions of patients and thousands of
                healthcare providers.
              </p>
              <p>
                Today, we continue to innovate with cutting-edge security,
                AI-powered insights, and user-friendly interfaces that make
                healthcare more accessible and efficient for everyone.
              </p>
            </div>
            <div className="mt-8">
              <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center">
                Learn More About Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-8">
              <img
                src="https://images.pexels.com/photos/3279197/pexels-photo-3279197.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Healthcare team collaboration"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

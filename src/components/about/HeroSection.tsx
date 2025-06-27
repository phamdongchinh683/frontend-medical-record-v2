import { Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50 py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100/20 to-rose-100/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-6">
            <Heart className="h-4 w-4 mr-2" />
            Transforming Healthcare Since 2020
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
              {" "}
              MedRecords
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re on a mission to revolutionize healthcare by making
            medical records secure, accessible, and intelligently organized for
            patients and healthcare providers worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}

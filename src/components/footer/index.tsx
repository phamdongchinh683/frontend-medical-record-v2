import { Heart } from "lucide-react";
import CompanySection from "./CompanySection";
import FooterBottom from "./FooterBottom";
import ProductSection from "./ProductSection";
import QuickContactSection from "./QuickContactSection";
import SupportSection from "./SupportSection";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-2 rounded-lg shadow-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">MedRecords</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Secure, comprehensive medical record management for patients and
              healthcare providers.
            </p>
          </div>
          <ProductSection />
          <CompanySection />
          <SupportSection />
          <QuickContactSection />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}

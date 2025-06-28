import { Lock, Shield } from "lucide-react";

export default function FooterBottom() {
  return (
    <div className="border-t border-gray-800 mt-10 lg:mt-12 pt-6 lg:pt-8">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
        <p className="text-gray-400 text-sm lg:text-base text-center lg:text-left">
          &copy; 2025 MedRecords. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
          <div className="flex items-center text-gray-400">
            <Lock className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="text-sm">HIPAA Compliant</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Shield className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="text-sm">SOC 2 Certified</span>
          </div>
        </div>
      </div>
    </div>
  );
}

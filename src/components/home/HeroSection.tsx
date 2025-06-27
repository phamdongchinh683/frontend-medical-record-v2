import { Activity, ChevronRight, FileText, Shield } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100/20 to-rose-100/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              HIPAA Compliant & Secure
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Complete Medical Records,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                {" "}
                Simplified
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Securely store, manage, and share your medical history with
              healthcare providers. Access your complete health information
              anytime, anywhere with enterprise-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button> */}
              {/* <button className="border border-pink-300 text-pink-700 px-8 py-4 rounded-lg font-semibold hover:bg-pink-50 transition-colors">
                Watch Demo
              </button> */}
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-pink-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Patient Dashboard
                </h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-rose-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-pink-300 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-pink-50 rounded-lg border border-pink-100">
                  <div className="flex items-center">
                    <Activity className="h-5 w-5 text-pink-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Overview</p>
                      <p className="text-sm text-gray-500">
                        Here&apos;s an overview of your health information.
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
                <div className="flex items-center justify-between p-4 bg-pink-50 rounded-lg border border-pink-100">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-pink-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">My Records</p>
                      <p className="text-sm text-gray-500">
                        Look at your records
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
                <div className="flex items-center justify-between p-4 bg-rose-50 rounded-lg border border-rose-100">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-rose-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">
                        Doctor Permission
                      </p>
                      <p className="text-sm text-gray-500">
                        Look at your doctor&apos;s permission
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
